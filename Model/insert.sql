insert into worlds values
	('Mongolie'),
	('France'),
	('Italie'),
	('Inde'),
	('Atlantis'),
	('Enfer');

insert into themes (name) values
	('Nombre et calculs'),
	('Organisation et gestion de données, fonctions'),
	('Grandeurs et mesures'),
	('Espace et géométrie'),
	('Algorithmique et programmation');

-- Par chance, SERIAL commence a 1
insert into lessons (name, theme) values
	('Nombres premiers et fractions irréductibles', 1),
	('Calcul littéral', 1),
	('Equations et Inéquations', 1),
	('Fonctions', 2),
	('Fonctions linéaires, fonctions affines', 2),
	('Proportionnalité', 2),
	('Statistiques et probabilités', 2),
	('Géométrie dans l''espace', 3),
	('Les transformations du plan - Homothéties', 4),
	('Théorème de Thalès', 4),
	('Trigonométrie', 4),
	('Algorithmique', 5),
	('Programmation', 5);

insert into games (name, about) values
	('Eratoaster', 1),
	('Réductions de Mékafractions', 1),
	('Division de Mekayaks', 1),
	('QCM Inéquations', 3),	
	('QCM Equations', 3),
	('QCM Identités Remarquables', 2);

insert into levels(world, game, x, y, previous) values
--  7 niveaux pour Mongolie
	('Mongolie', 1, 0, 0, null),
	('Mongolie', 1, 0, 0, 1),
	('Mongolie', 1, 0, 0, 2),
	('Mongolie', 1, 0, 0, 3),
	('Mongolie', 1, 0, 0, 4),
	('Mongolie', 1, 0, 0, 5),
	('Mongolie', 1, 0, 0, 6),
-- 6 niveaux pour France
	('France', 3, 406, 282, null),
	('France', 2, 952, 226, 8),
	('France', 1, 1156, 491, 9),
	('France', 4, 975, 669, 10),
	('France', 5, 698, 606, 11),
	('France', 6, 558, 468, 12),
-- 6 niveaux pour Italie
	('Italie', 1, 0, 0, null),
	('Italie', 1, 0, 0, 14),
	('Italie', 1, 0, 0, 15),
	('Italie', 1, 0, 0, 16),
	('Italie', 1, 0, 0, 17),
	('Italie', 1, 0, 0, 18);

insert into achievements (name, description) values
	('Un début à tout', 'Créer un compte'),
	('Chef de guilde', 'Créer une guilde'),
	('Apprenti sauveur', 'Vous avez sauvé Ada Lovelace'),
	('Baguette vendéenne', 'Vous avez sauvé François Viète'),
	('Veni Vidi Zombi', 'Vous avez sauvé Maria Gaëtana Agnési'),
	('Un curry assez épicé', 'Vous avez sauvé Marie Curie'),
	('Tea time', 'Vous avez sauvé Alan Turing'),
	('Mechtulu Ftagh''n', 'Vous avez sauvé Thalès et Pythagore'),
	('Un petit pas pour l''homme', 'Vous avez banni MekAristote'),
	('Victoire !', 'Vous avez sauvé le monde'),
	('Apprenti mathématicien', 'Finir un mini-jeu'),
	('Forever alone', 'Se demander en ami'),
	('Une offre que vous ne pouvez pas refuser', 'Aider la mafyak'),
	('Manifestation spontanée', 'Aider les proloyaks'),
	('Explorateur intrépide', 'Finir un niveau bonus'),
	('Love is real', 'Mettre un mini-jeu en favori'),
	('Philantrope', 'Rejoindre une guilde');
