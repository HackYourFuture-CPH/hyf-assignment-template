--1 How many tasks are in the task table?
SELECT Count(*) as total FROM task;
--2 How many tasks in the task table do not have a valid due date?
SELECT count(*) as due_date_not_valid from task where due_date is NULL;
--3 Find all the tasks that are marked as done.
SELECT t.*
FROM task t
JOIN status s ON t.status_id = s.id
WHERE s.name = 'Done';
--4 Find all the tasks that are not marked as done.
SELECT t.*
FROM task t
JOIN status s ON t.status_id = s.id
WHERE s.name != 'Done';
--5 Get all the tasks, sorted with the most recently created first.
SELECT * FROM task ORDER BY created DESC;
--6 Get the single most recently created task.
SELECT * FROM task ORDER BY created DESC LIMIT 1;
--7 Get the title and due date of all tasks where the title or description contains database.
SELECT title, due_date, description
FROM task
WHERE task.description LIKE '%database%'
   OR task.title LIKE '%database%';
--8 Get the title and status (as text) of all tasks.
SELECT title,
CASE status_id 
WHEN 0 THEN 'Not started'
WHEN 1 THEN 'In progress'
WHEN 2 THEN 'Done'
END AS status_text
FROM task;

--9 Get the name of each status, along with a count of how many tasks have that status.
SELECT s.name AS status_name, COUNT(t.id) AS total_tasks
FROM status s
LEFT JOIN task t ON t.status_id = s.id
GROUP BY s.name;
--10 Get the names of all statuses, sorted by the status with most tasks first.
SELECT s.name AS status_name, COUNT(t.id) AS total_tasks
FROM status s
LEFT JOIN task t ON t.status_id = s.id
GROUP BY s.name
ORDER BY total_tasks DESC;