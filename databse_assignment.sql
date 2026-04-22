-- How many tasks are in the task table? 
SELECT count (*) 
FROM task; 

-- How many tasks in the task table do not have a valid due date? 
SELECT COUNT(*) AS invalid_due_date
FROM task
WHERE due_date IS NULL
   OR due_date = '';

--Find all the tasks that are marked as done. 
SELECT * 
FROM task 
WHERE status_id = (
    SELECT id 
    FROM status
    WHERE name = 'Done');


-- Find all the tasks that are not marked as done. 
SELECT * 
FROM task 
WHERE status_id <> (
    SELECT id 
    FROM status
    WHERE name = 'Done') 
	OR status_id IS NULL;

-- Get all the tasks, sorted with the most recently created first. 
SELECT * 
FROM task 
ORDER BY created DESC; 

-- Get the single most recently created task. 
SELECT * 
FROM task 
ORDER BY created DESC 
LIMIT 1; 

-- Get the title and due date of all tasks where the title or description contains database. 
SELECT title, due_date 
FROM task 
WHERE title  LIKE '%database%' OR description  LIKE '%database%'; 

-- Get the title and status (as text) of all tasks. 
SELECT title, s.name AS name
FROM task t
LEFT JOIN status s ON t.status_id = s.id;

-- Get the name of each status, along with a count of how many tasks have that status. 
SELECT name,
COUNT(status_id) AS Number
FROM status s
LEFT JOIN task t ON t.status_id = s.id 
GROUP BY t.status_id;


-- Get the names of all statuses, sorted by the status with most tasks first. 
SELECT s.name, 
COUNT(t.status_id) AS Number 
FROM status s
LEFT JOIN task t ON t.status_id = s.id 
GROUP BY t.status_id
ORDER BY Number DESC;