-- ============================================================
-- Week 2 Assignment — Databases
-- Student: Hiwot Adane
-- ============================================================

-- Part A, Question 1:Count the total number of tasks in the database 
SELECT COUNT(*) AS total_tasks
FROM task;

-- Part A, Question 2: Count how many tasks each user has been assigned (include users with zero tasks)
SELECT u.id,
       u.name,
       COUNT(t.id) AS task_count
FROM user u
LEFT JOIN task t
       ON u.id = t.user_id
GROUP BY u.id, u.name
ORDER BY u.id;
 -- Part A, Question 3: Find the number of tasks per status (e.g., how many are "To Do", "In Progress", "Done")
SELECT status_id,
       COUNT(*) AS task_count
FROM task
GROUP BY status_id
ORDER BY status_id;
-- Part A, Question 4:Find the user who has the most tasks assigned
SELECT  u.name, 
COUNT (t.id) AS task_count 
FROM user u LEFT JOIN task t ON u.id = t.user_id
GROUP BY u.name 
ORDER BY task_count DESC LIMIT 1;
-- Part A, Question 5:Calculate the average number of tasks per user (only count users who have at least one task)
SELECT AVG(user_task_count) AS avg_tasks_per_user
FROM (
    SELECT u.id,
           COUNT(t.id) AS user_task_count
    FROM user u
    JOIN task t
         ON u.id = t.user_id
    GROUP BY u.id
) sub;
-- Part A, Question 6:Find the earliest and latest due date across all tasks
SELECT  MIN(due_date) AS earliest_due_date, 
MAX(due_date) latest_due_date FROM  task;
-- Part A, Question 7:List each category along with the number of tasks it contains, ordered from most to least tasks
SELECT c.name,COUNT(tc.task_id) AS task_count
FROM category c LEFT JOIN task_category tc ON c.id=tc.category_id 
GROUP BY c.name
ORDER BY task_count desc;
-- Part A, Question 8:Find all users who have more than 2 tasks assigned to them
SELECT  u.name, COUNT(t.id) AS task_count 
FROM user u JOIN task t ON u.id=t.user_id
GROUP BY u.name having count(t.id)>2 
ORDER BY task_count DESC;
-- Part B.1: ...your explanation and attack string as comments...
--The SQL becomes:
SELECT * FROM task
WHERE user_id = (SELECT id FROM user WHERE name = '' OR '1'='1');
--The injected OR '1'='1' condition is always true, so the username check no longer filters correctly.
--The subquery may return the wrong user (or multiple users), so the app may fetch tasks for someone else.
--This can cause: Other people’s tasks to be returned (data leak) and An error if the DB expects one row but gets many.
--Why it’s dangerous: It can bypass access checks and expose data that belongs to other users.
--Any input field (form, URL parameter, etc.) can be used to send malicious text.
--If the database account has too many permissions, attackers may also change or delete data.


-- Part B.2: ...your fix as a code comment...
--Fix the Vulnerability
function getTasksByUser(userName) {
  const query = `SELECT * FROM task WHERE user_id = (SELECT id FROM user WHERE name = ?)`;
  db.all(query, [userName], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      return;
    }
    console.log(rows);
  });
}
--This is safe because
	--The ? is a placeholder.
	--db.all replaces it with the value from [userName] safely.
	--The database engine treats userName as data, not as executable SQL.
	--Even if someone types ' OR '1'='1, it will just be treated as a literal string, not a condition.


-- Part C, Question 1:Reassign all tasks from user 1 to user 2, then delete user 1.
BEGIN TRANSACTION;
  -- UPDATE ...
update task 
set user_id=2
where user_id=1;
  -- DELETE ...
delete from user
where id=1;
COMMIT;

-- Verify nothing went wrong:
SELECT *
FROM user;
-- Part C, Question 2:Demonstrate a deliberate rollback and Make some changes, then trigger a failure so everything rolls back.
BEGIN TRANSACTION;
  -- some updates...
UPDATE task
SET user_id = 3
WHERE user_id = 4;

  -- intentional failure here
INSERT INTO user(id, name, email, address)
VALUES (99, 'Anna Peter', 'anna@example.com', 'fff street');

ROLLBACK;

-- Verify nothing changed:
SELECT * FROM user WHERE id = 99;
SELECT * FROM task WHERE user_id = 3;
--Part D, Question 1:Creates a new category called "Urgent"
INSERT INTO category (name)
VALUES ('Urgent');
--Finds all tasks that are "In Progress" or "To Do"
SELECT t.id, t.title, s.name AS status
FROM task t
JOIN status s ON s.id = t.status_id
WHERE s.name IN ('In Progress', 'To Do');
--Assigns all of those tasks to the new "Urgent" category
UPDATE task
SET category_id = (SELECT id FROM category WHERE name = 'Urgent')
WHERE status_id IN (
    SELECT id FROM status
    WHERE name IN ('In Progress', 'To Do')
);
--If anything goes wrong (e.g., duplicate category name), rolls back the entire operation
BEGIN TRANSACTION;

-- Create the new category "Urgent"
INSERT INTO category (name)
VALUES ('Urgent');

-- Assign all "In Progress" or "To Do" tasks to "Urgent"
UPDATE task
SET category_id = (SELECT id FROM category WHERE name = 'Urgent')
WHERE status_id IN (
    SELECT id FROM status
    WHERE name IN ('In Progress', 'To Do')
);

--Commit if everything succeeded
COMMIT;


-- Part D, Question 2:Dashboard: single SELECT returning all four numbers:  total tasks, completed (Done), overdue, users with tasks
SELECT
 count(*) As total_tasks,
SUM(case when s.name = 'Done' THEN 1 ELSE 0 END) As completed_tasks,
SUM(case when t.due_date< current_date AND s.name <> 'Done' THEN 1 ELSE 0 END) AS overdue_tasks,
 COUNT(distinct t.user_id) As users_with_tasks
FROM task t
JOIN status s ON s.id = t.status_id;



