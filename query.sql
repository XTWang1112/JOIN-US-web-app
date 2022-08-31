-- find the earliest date a user joined
-- select DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date
-- from users;

-- find emaul of the first user
-- SELECT email
-- FROM users
-- ORDER BY created_at
-- LIMIT 1;

-- users according to the month they joined
SELECT MONTHNAME(created_at) AS 'month', COUNT(*) AS count 
FROM users 
GROUP BY MONTHNAME(created_at);

-- count the number of yahoo users
SELECT COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com%';

-- calculate total number of users for each email host
SELECT
  CASE 
    WHEN email LIKE '%@yahoo.com%' THEN 'yahoo'
    WHEN email LIKE '%@gmail.com%' THEN 'gmail'
    WHEN email LIKE '%@hotmail.com%' THEN 'hotmail'
    ELSE 'other'
  END AS provider, COUNT(*) AS total_users
FROM users
GROUP BY provider;