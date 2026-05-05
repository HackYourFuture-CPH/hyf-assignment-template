
-- ============================================================
-- Week 2 Assignment — Databases
-- Student: shilpa 
-- ============================================================

-- Part A, Question 1: SELECT COUNT(*) FROM task;
SELECT COUNT(*) FROM task;

-- Question 2:Count how many tasks each user has been assigned 
---(include users with zero tasks)

SELECT u.id,u.name,
       COUNT(ut.task_id)AS task_count FROM user u
LEFT JOIN user_task ut ON u.id = ut.user_id
GROUP BY u.id, u.name;

-- Question 3:Find the number of tasks per status 
--(e.g., how many are "To Do", "In Progress", "Done")

SELECT s.name AS status_table, COUNT(t.id) AS task_count FROM status s 
LEFT JOIN  task t ON t.status_id = s.id 
GROUP BY s.id, s.name;

-- Question 4:Find the user who has the most tasks assigned
 SELECT  u.id ,u.name, COUNT(ut.task_id) AS task_count FROM user u
LEFT JOIN user_task ut ON u.id =ut.user_id
GROUP BY u.name,u.id 
ORDER BY task_count DESC LIMIT 1;

-- Question 5:Calculate the average number of tasks per user 
---(only count users who have at least one task)
SELECT AVG(task_count) AS avg_tasks_per_user
FROM (SELECT u.id,COUNT(ut.task_id) AS task_count FROM user u
  INNER JOIN user_task ut ON u.id = ut.user_id
    GROUP BY u.id);

-- Question 6:Find the earliest and latest due date across all tasks
SELECT MIN(due_date) AS earliest_due_date,
       MAX(due_date) AS latest_due_date
FROM task;

-- Question 7:List each category along with the number of tasks it contains, 
--ordered from most to least tasks

SELECT c.name AS category, COUNT(tc.task_id) AS task_count FROM category c 
LEFT JOIN task_category tc  ON c.id = tc.category_id 
GROUP BY c.id,c.name 
ORDER BY task_count DESC;

-- Question 8:Find all users who have more than 2 tasks assigned to them
SELECT u.id, u.name,COUNT(ut.task_id)  FROM user u
LEFT JOIN user_task ut  ON u.id = ut.user_id
GROUP BY u.id, u.name
HAVING COUNT (ut.task_id)>2;


-- Part B.SQL Injection
---1. Spot the Vulnerability
-- Question1:Explain in a comment in your .sql file: what would happen if userName was set to ' OR '1'='1?
--- What data would be returned, and why is this dangerous?


--If userName is set to ' OR '1'='1,
-- the query becomes:
-- SELECT * FROM task WHERE user_id = (SELECT id FROM user WHERE name = '' OR '1'='1');
-- The part '1'='1' is always true, so the database stops filtering properly.
-- Instead of finding tasks for one specific user, it can return data for ALL users/tasks.
--And why is this dangerous?
-- This is dangerous because someone can trick the system just by typing a special input,
-- without needing a login. They can see or even damage data they are not supposed to access.
--It’s dangerous because they can peek at private info they aren't supposed to see. 
--This is a "Broken Access Control" vulnerability.

---- Question2:Write the malicious string that an attacker 
--could use to delete all tasks from the database. 

-- MALICIOUS STRING: 
--' ); DROP TABLE task; --

-- HOW IT WORKS:
--1. The ' ); bits "close" the original search command early so the 
 --  computer thinks that part is finished.
--2. The semicolon (;) acts like a "new line" allowing the 
  -- attacker to start a completely new command.
--3. The "DROP TABLE task;" is the new command. This tells the database 
  -- to completely delete the table where all the tasks are stored.
--4. The dashes (--) tell the computer to ignore anything that comes 
  -- after them. This prevents the code from crashing and ensures the 
  -- "Delete" command actually runs.

--2. Fix the Vulnerability
-- -- FIXED VERSION 
--(using parameterized query / prepared statement):

-- function getTasksByUser(userName) {
--   const query = `
--     SELECT *
--     FROM task
--     WHERE user_id = (
--       SELECT id FROM user WHERE name = ?
--     )
--   `;
--
--   db.all(query, [userName], (err, rows) => {
--     console.log(rows);
--   });
-- }
--- why this work
--SQL is sent first
--SELECT id FROM user WHERE name = ?
-- database will understand the structure of the query
--"userName = John" database treat it as a value(data),not code
-- even if user types ' OR '1'='1 -- database does not mix it into SQL logic


-- HOW THIS FIXES THE PROBLEM:
-- 1. The '?' is a placeholder instead of directly inserting user input.
-- 2. The database treats userName as DATA, not SQL code.
-- 3. Even if someone tries to inject SQL, it will not be executed.
-- 4. This prevents SQL injection completely because input is safely escaped by the driver.


-- Part c:Transactions
-- Question 1:Write a transaction that reassigns all tasks from one user to another, then deletes the original user. 
--Use BEGIN TRANSACTION, COMMIT, and ROLLBACK.
-- Example structure:
--BEGIN TRANSACTION;--SQL tools (DBeaver)automatically start a transaction when you run a query.

UPDATE user_task
SET user_id = 2 WHERE user_id = 1;
DELETE FROM user WHERE id = 1;
COMMIT;

SELECT * FROM user_task;
SELECT * FROM user;
-- Question 2:Write a second transaction that demonstrates a deliberate rollback: attempt to reassign tasks and then intentionally trigger a failure (e.g., try to insert a task with a non-existent status_id). 
--The whole transaction should roll back so no changes are saved.


UPDATE user_task
SET user_id = 2
WHERE user_id = 1;
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('FINALLY ADDED TO TASK- SINGING', 'Trigger rollback', DATETIME('now'), DATETIME('now'), NULL, 999999);
ROLLBACK;

SELECT * FROM user_task;
 
-- Part D, Part D: Putting It All Together
--Question 1: Write a transaction that:
--Creates a new category called "Urgent"
--Finds all tasks that are "In Progress" or "To Do"
--Assigns all of those tasks to the new "Urgent" category
--If anything goes wrong (e.g., duplicate category name), 
--rolls back the entire operation


INSERT INTO category (name, color)
VALUES ('Urgent', 'red');
INSERT INTO task_category (task_id, category_id)
SELECT ut.task_id,
       (SELECT id FROM category WHERE name = 'Urgent')
FROM user_task ut
JOIN task t ON t.id = ut.task_id
JOIN status s ON s.id = t.status_id
WHERE s.name IN ('In progress', 'Not started');

COMMIT;
ROLLBACK ;

-- Question 2:Write a query that generates a simple dashboard summary with a single result set containing:
--Total number of tasks
--Number of completed tasks (status = "Done")
--Number of overdue tasks (due_date < today)
--Number of users with at least one task
SELECT
    -- Total number of tasks
    (SELECT COUNT(*) FROM task) AS total_tasks,

    -- Number of completed tasks
    (SELECT COUNT(*)
     FROM task t
     JOIN status s ON s.id = t.status_id
     WHERE s.name = 'Done') AS completed_tasks,

    -- Number of overdue tasks
    (SELECT COUNT(*)
     FROM task
     WHERE due_date < DATE('now')) AS overdue_tasks,

    -- Number of users with at least one task
    (SELECT COUNT(DISTINCT user_id)
     FROM user_task) AS active_users
  ;
