--User Table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT
);
-- Status Table
CREATE TABLE status (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

--Task Table
CREATE TABLE task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP NOT NULL,
  due_date TIMESTAMP,
  status_id INTEGER NOT NULL,
  FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Values in to status tables
INSERT INTO status (name) VALUES ('To Do');
INSERT INTO status (name) VALUES ('In Progress');
INSERT INTO status (name) VALUES ('Done');
--User-Task Table
CREATE TABLE user_task (
  user_id INTEGER NOT NULL,
  task_id INTEGER NOT NULL,
  PRIMARY KEY(user_id, task_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE ON UPDATE CASCADE
);

--Part 1: Basic CRUD Operations

-- Q.1 Insert new user with your own name and email
INSERT INTO users (name, email) VALUES ('Hiwot Adane', 'hiwot@hyf.dk');
--Q2. Insert a new task assigned to yourself
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('Learn SQL', 'Practice database queries', '2026-04-13 03:06:46', '2026-04-26 06:14:31', '2026-04-30 20:58:03', 2);
--Q3. Update the title of the task you just created to "Master SQL Basics"
UPDATE task
SET title = 'Master SQL Basics',
    updated = DATETIME('now')
WHERE id = 36;
--Q4. Change the due date of your task to two weeks from today
UPDATE task
SET due_date = DATE('now','+14 day'),
updated =DATETIME('now')
WHERE id = 36;
-- Q5. Change the status of your task to "Done"
UPDATE task SET status_id = '3' WHERE id = '36'
-- Q6. Delete one of the tasks in the database (choose any task)
DELETE FROM task 
WHERE title = 'Learn SQL'; 
-- Part 2: Working with Relationships
-- Q1. List all users who don't have any tasks assigned
SELECT u.id, u.name, u.email
FROM users u
LEFT JOIN user_task ut ON u.id = ut.user_id
WHERE ut.task_id IS NULL;
-- Q2. Find all tasks with a status of "Done"
SELECT t.id, t.title, t.description, t.due_date, s.name AS status
FROM task t
JOIN status s ON t.status_id = s.id
WHERE s.name = 'Done';
--Q3. Find all overdue tasks (due_date is earlier than today)
SELECT t.id, t.title, t.description, t.due_date, s.name AS status
FROM task t
JOIN status s ON t.status_id = s.id
WHERE t.due_date < DATE('now');
-- Part 3: Modifying the Database Schema
-- Q1. Add a new column called priority to the task table with possible values: 'Low', 'Medium', 'High'
ALTER TABLE task
ADD COLUMN priority TEXT NOT NULL DEFAULT 'Medium';

--Q2. Update some existing tasks to have different priority values
UPDATE task
SET priority = 'High'
WHERE id = 36;

UPDATE task
SET priority = 'Low'
WHERE id = 4;

UPDATE task
SET priority = 'Medium'
WHERE id = 8;
-- Q3. Create a new table called category with columns
CREATE TABLE category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    color TEXT NOT NULL
);
-- Q4. Create a linking table called task_category to establish a many-to-many relationship between tasks and categories
CREATE TABLE task_category (
    task_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY (task_id, category_id),
    FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE ON UPDATE CASCADE 
);


-- Q5. Insert at least 3 categories
INSERT INTO category (name, color)
VALUES 
    ('Work', 'red'),
    ('Personal', 'blue'),
    ('Study', 'green'),
    ('play','yellow');
-- Q6. Assign categories to at least 5 different tasks
INSERT INTO task_category (task_id, category_id)
VALUES (36, 1);

INSERT INTO task_category (task_id, category_id)
VALUES (4, 2);

INSERT INTO task_category (task_id, category_id)
VALUES (8, 3);

INSERT INTO task_category (task_id, category_id)
VALUES (12, 1);

INSERT INTO task_category (task_id, category_id)
VALUES (15, 2);
-- Part 4: Advanced Queries
-- Q1. Find all tasks in a specific category (e.g., "Work")
SELECT t.*
FROM task t
JOIN task_category tc ON t.id = tc.task_id
JOIN category c ON c.id = tc.category_id
WHERE c.name = 'Work';   
-- Q2. List tasks ordered by priority (High to Low) and by due date (earliest first)
SELECT id,
       title,
       description,
       priority,
       due_date
FROM task
ORDER BY 
    CASE priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
    END,
    due_date ASC;
-- Q3. Find which category has the most tasks
SELECT c.id,
       c.name AS category,
       COUNT(tc.task_id) AS task_count
FROM category c
JOIN task_category tc ON c.id = tc.category_id
GROUP BY c.id, c.name
ORDER BY task_count DESC
LIMIT 1;
-- Q4. Get all high priority tasks that are either "In Progress" or "To Do"
SELECT t.title, t.description,s.name 
FROM task t JOIN status s ON t.status_id=s.id
WHERE t.priority = 'High'
  AND (t.status_id= 1 OR  t.status_id=2)
ORDER BY due_date ASC;
--Q5. Find users who have tasks in more than one category
SELECT u.id AS user_id,
       u.name AS user_name,
       COUNT(DISTINCT tc.category_id) AS category_count
FROM users u
JOIN user_task ut ON u.id = ut.user_id
JOIN task t ON ut.task_id = t.id
JOIN task_category tc ON t.id = tc.task_id
GROUP BY u.id, u.name
HAVING COUNT(DISTINCT tc.category_id) > 1
ORDER BY category_count DESC;






