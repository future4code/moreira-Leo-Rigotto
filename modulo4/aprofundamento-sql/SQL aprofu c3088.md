# SQL aprofundado

EX1:

a) Exclui a coluna salary.

b) Muda o nome da coluna gender para sex e só permite 6 caracteres.

c) Volta a coluna gender para como ela era.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EX2:

a) UPDATE Actor SET name = "Joaquin Phoenix", birth_date = "1980/02/15" WHERE id = "003”;

b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes”;

UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES”;

c) UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d) A requisição conclui com sucesso, mas como não existe nenhum lugar com aquele valor, nada é alterado.

EX3:

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro”;

b) DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000;

EX4:

a) SELECT MAX(salary) FROM Actor 

b) SELECT MIN(salary) FROM Actor WHERE gender = "female”

c) SELECT COUNT(*) FROM Actor WHERE gender= "female”

d) SELECT SUM(salary) FROM Actor

EX5:

a) Essa query está agrupando os rows baseado no atributo gender e devolvendo a quantidade de rows em cada grupo.

b) SELECT id, name FROM Actor ORDER BY name DESC

c) SELECT * FROM Actor ORDER BY salary DESC

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender

EX6:

a) ALTER TABLE Movies ADD playing_limit_date date

b) ALTER TABLE Movies CHANGE rating rating FLOAT

c)