USE choreWarsdb;

INSERT INTO choreTracker (first_name, last_name, addressed_as, account_type, email, username, psword)
VALUES ("Flo", "Monahan", "Mom", 1, "flo.monahan@gmail.com", "helplessponie", 1234);

INSERT INTO familyRelations (parent, child)
VALUES (1, 1);

INSERT INTO tasks (posted_by, posted_for, reward, task, task_status)
VALUES (1, 1, 1, "Feed Pets", "complete");

INSERT INTO pets (id, pets_type)
VALUES (1, "dog");

INSERT INTO owned_pets (pet_owner, pet_type)
VALUES (1, 3);

INSERT INTO petTracker(pet_id, days_alive, food_balance, loyalty)
VALUES(1, 3, 4, 1);

