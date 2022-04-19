``` SQL
CREATE TABLE TodoUsers (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (255),
    nickname VARCHAR (255),
    email VARCHAR (255)
    );

CREATE TABLE TodoTasks (
	task_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (255),
    description VARCHAR (255),
    requested_by INT,
    status ENUM ("to do", "doing", "done"),
    FOREIGN KEY (requested_by) REFERENCES TodoUsers(user_id)
);

DROP TABLE TodoTasks;

CREATE TABLE Subscribed (
	task INT,
    user INT,
    FOREIGN KEY (task) REFERENCES TodoTasks(task_id),
    FOREIGN KEY (user) REFERENCES TodoUsers(user_id));
```