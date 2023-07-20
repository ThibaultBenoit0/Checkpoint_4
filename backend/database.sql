CREATE TABLE event (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `description` varchar(900) NOT NULL,
  `img` varchar(300) NOT NULL,
  `link` varchar(300),
  `price` INT
) ;

INSERT INTO event (title, date, time, place, description, img, link, price) VALUES ('Hellfest 2024', '30 Juin 2024', '16H00', 'Clisson', "Rendez-vous pour l'édition 2024 du festival culte des musiques extrême !", 'https://pbs.twimg.com/media/FzPYuVJXwA0D9bI?format=jpg&name=large', 'https://www.hellfest.fr/', '320');
INSERT INTO event (title, date, time, place, description, img, link, price) VALUES ('Cours de Poterie avec Michel', '12 Septembre 2023', '14H00', 'Nantes', "Plongez dans l'univers captivant de la céramique et tournez votre objet au choix avec Michel, céramiste et tourneur ", 'https://www.ateliermilo.fr/wp-content/uploads/bb-plugin/cache/IMG_5994-2-scaled-square.jpg', 'https://wecandoo.fr/atelier/nantes-emmanuelle-initiation-tour', '60');
INSERT INTO event (title, date, time, place, description, img, link, price) VALUES ('Exposition Anatomie comparée des espèces imaginaires ', '20 Novembre 2023', '17H00', 'Nantes', "Les dragons sont-ils des dinosaures ? Dans quel groupe de mammifères classer le Big-foot ? Comment Totoro fait-il pour voler ? Ces questions saugrenues sont en fait cruciales pour tous ceux qui veulent se mettre dans la peau d’un scientifique, d'un biologiste ou d'un paléontologue, afin de mieux comprendre l’évolution des espèces... et faire des sciences en s’amusant !", 'https://metropole.nantes.fr/banque/public/images/culture/a/54872-3-anatomie-imaginaire-affiche-a3bd.jpg','https://metropole.nantes.fr/infonantes/agenda/54872-exposition-anatomie-comparee-des-especes-imaginaires', '0');
INSERT INTO event (title, date, time, place, description, img, link, price) VALUES ('Fin du monde avec Cthulhu', '12 Décembre 2026', '06H00', 'Partout', "Profitez des derniers instants sur cette belle planète et vivez une expérience unique, la destruction total du genre humain (selfies interdis !)", 'https://w.forfun.com/fetch/98/98ca7798559f24c102884c3882c00954.jpeg','' , '0');
INSERT INTO event (title, date, time, place, description, img, link, price) VALUES ('Apéro avec Gégé', '26 Aout 2024', '18H00', 'Paris', "S'il existe un maître en matière d'apéro c'est bien lui, viendez partager un sauciflard autour d'une bonne bouteille de pif !", 'https://www.francetvinfo.fr/pictures/xIutltJQ44DoGz_k-OgNDw7MPxw/1500x843/2014/07/01/edd_1.jpg','', '20');


