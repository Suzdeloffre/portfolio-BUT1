const { createApp } = Vue;

createApp({
	data() {
		return {
		"name": "Suzanne Deloffre",
		"navItems": [
			{ "label": "A propos", "link": "#about" },
			{ "label": "Compétences", "link": "#skills" },
			{ "label": "Projets", "link": "#projects" }
		],
		"welcomeTitle": "Bienvenue sur mon portfolio, ",
		"welcomeText": "l'univers numérique d'une étudiante en première année de BUT informatique",
		"aboutText": "Dans ce monde numérique en constante évolution, je trouve ma voie entre créativité et logique.\n\nChaque ligne de code est une incantation, chaque projet une quête à accomplir.",
		"softSkills": "✨ Travail d'équipe • Créativité • Adaptabilité • Curiosité ✨",
		"skills": [
			{
				"title": "🌐 Développement",
				"items": ["Java","HTML", "CSS", "JavaScript", "Python", "C"]
			},
			{
				"title": "⚡ Frameworks",
				"items": ["Flask", "Vue.js", "Bootstrap", "Tailwind CSS"]
			},
			{
				"title": "🛠️ Outils",
				"items": ["GitLab & GitHub", "VS Code", "Figma", "JetBrains"]
			}
		],
		"projects": [
			{
				"title": "Site de présentation d'Alten",
				"date": "septembre à fin octobre 2024",
				"description": "Ce site internet simple présente la situation de l'entreprise Alten",
				"technologies": ["HTML", "CSS", "GitHub"],
				"competence": ["S1.06 - découverte de l'environnement économique et écologique", "S1.05 - recueil de besoin"],
				"longDescription": "Le site de présentation d'Alten a été notre tout premier projet en début d'année. Il s'agissait de créer un site web simple, en utilisant HTML et CSS. Ce site devait être responsive, c'est-à-dire capable de s'adapter automatiquement à différents écrans, comme ceux d'un téléphone, d'une tablette ou d'un ordinateur.\n\nL'objectif n'était pas seulement technique. Ce projet mêlait aussi des notions d'économie, pour nous aider à mieux comprendre le fonctionnement réel d'une entreprise. Nous avons donc étudié Alten sous plusieurs angles : son histoire, son activité, sa place sur le marché. En plus du site, nous devions rédiger un rapport économique et concevoir des questionnaires pour imaginer les besoins d'un client fictif, comme on le ferait dans un vrai projet professionnel.\n\nCe projet nous a permis de découvrir les bases de la gestion de projet : comment répartir les tâches dans un groupe, s'organiser efficacement, et respecter des délais. Nous avons aussi appris à utiliser Git, un outil de travail collaboratif très utilisé pour garder une trace des modifications dans un projet. Comme c'était notre première fois avec cet outil, cela a été un vrai défi, mais aussi une étape importante dans notre apprentissage.",
				"url": "https://pchassig.github.io/Presentation-Alten/index.html"
			},
			{
				"title": "Chausson Della Famiglia",
				"date": "octobre 2024",
				"description": "Site d'e-commerce de chaussons non-fonctionnel dans le but de montrer nos compétences en CSS",
				"technologies": ["HTML", "CSS"],
				"competence": ["Développement web", "CSS avancé"],
				"longDescription": "Dans le cadre d'un cours, il nous a été demandé, en groupe, de réaliser un site e-commerce non fonctionnel sur le thème de notre choix, dans le but de démontrer nos compétences en CSS et donc en esthétique. J'ai réalisé la page « À propos ». Ce projet m'a permis d'approfondir mes connaissances en mise en page et en design responsive.",
				"url": "https://ethanchevrand.github.io/ecommerce_chaussons/pages/apropos.html"
			},
			{
				"title": "Maintenance Trida",
				"date": "octobre à début décembre 2024",
				"description": "Application web pour une entreprise fictive de transport de déchets, en Flask python afin de manipuler une base de donnée",
				"technologies": ["HTML", "CSS", "Flask", "MySQL", "Bootstrap"],
				"competence": ["S1.04 - Gérer les données de l'information"],
				"longDescription": "Nous avons réalisé une application web pour gérer des données, en utilisant différents outils : Flask, un outil en Python qui permet de créer des sites web interactifs ; HTML et CSS, qui servent à créer l'apparence du site ; et MySQL, un système pour stocker et organiser les informations.\n\nLe projet partait d'une situation fictive qui nous a été présentée à l'oral : l'entreprise Trida, une société imaginaire qui transporte des déchets spécifiques dans des bennes vers des usines de tri. Cette entreprise utilise plusieurs véhicules, qui font des tournées chaque jour. Ces tournées suivent un ordre précis : les camions passent dans différents centres de tri pour récupérer des produits/déchets, puis vont les déposer dans une usine de recyclage.\n\nNotre objectif était de concevoir une base de données, c'est-à-dire un système bien organisé pour stocker toutes ces informations, puis de créer une petite interface web permettant de gérer cette base. Grâce à notre application, on peut par exemple ajouter un véhicule, modifier un produit ou supprimer une tournée, tout en respectant les liens logiques entre les données.\n\nUn des points importants de ce projet a été la communication dans le groupe. Au début, nous avions chacun une compréhension un peu différente de la situation de l'entreprise. Il a donc fallu bien s'expliquer pour tomber d'accord sur la manière de représenter les données, ce qu'on appelle le modèle conceptuel (une sorte de schéma de l'organisation des informations). Un autre défi a été la prise en main de Flask, qui peut être assez technique au début. Certaines fonctionnalités ou détails de fonctionnement nous ont demandé du temps et de la persévérance pour bien les comprendre et les faire fonctionner.",
				"images": [
					{
						"src": "./assets/images/MCD_trida.jpg",
						"alt": "Figure 1 : Modèle Conceptuel de Données (MCD) du projet Trida",
						"caption": "Figure 1 : Modèle Conceptuel de Données (MCD) du projet Trida.",
						"description": "Cette figure (1) représente la situation initiale du projet, traduite sous forme graphique à travers un Modèle Conceptuel de Données (MCD). Ce type de schéma permet de structurer les informations essentielles d’un système de manière claire, en identifiant les éléments principaux et leurs relations.\n\nDans ce MCD, nous avons distingué cinq objets fondamentaux appelés entités, comme par exemple le CENTRE ou le VÉHICULE. Une entité représente un \"type de chose\" manipulée par le système d'information.\n\nCes entités sont reliées entre elles par trois associations, qui illustrent les liens logiques entre les objets du système. Par exemple, un centre peut accueillir plusieurs véhicules, et un véhicule peut effectuer plusieurs tournées.\n\nSur chaque lien (ou association), on retrouve des cardinalités, qui indiquent combien d’exemplaires d’un objet peuvent être reliés à un autre. Par exemple, une cardinalité (0,n) signifie \"zéro ou plusieurs\", tandis que (1,n) signifie \"au moins un\". Ces notations permettent de représenter précisément les règles du métier telles qu’elles s’appliquent à la gestion réelle (ex : un centre de tri contient au moins un produit).\n\nTout d’abord, nous avons utilisé des compétences en analyse fonctionnelle. À partir d’une situation concrète (la gestion des déchets industriels), nous avons identifié les éléments importants du système : les centres, les véhicules, les produits et les usines. Nous avons compris les besoins exprimés et les avons traduits en un schéma clair et structuré.Passer d’une situation concrète à un Modèle Conceptuel de Données (MCD) permet de structurer la base de données de façon cohérente dès le départ. Cela évite des erreurs lors de l’utilisation pratique de l’application, comme des incohérences ou des doublons. Cette étape facilite aussi la manipulation de la base : il devient plus simple d’ajouter, de modifier ou de supprimer des données tout en gardant une organisation claire et logique.\n\nEnsuite, nous avons appliqué nos connaissances en modélisation de données. Nous avons conçu un Modèle Conceptuel de Données (MCD) en respectant les règles apprises, comme la normalisation et l’identification des clés primaires. Par exemple, chaque véhicule est identifié par un numéro unique. Nous avons également utilisé une convention d’écriture (en snake_case) pour garder une cohérence dans le nom des attributs.\n\nEnfin, nous avons mobilisé des savoir-faire liés à la compréhension du métier. Il a fallu réfléchir à la manière dont les objets du système interagissent entre eux. Une question importante du projet était de savoir si un véhicule pouvait transporter plusieurs produits vers différentes décharges dans une même tournée. Cela nous a amenés à faire des recherches sur les pratiques existantes, et à représenter cette situation avec une association ternaire entre véhicule, produit et décharge.\n\nCertes, ce projet étant le premier de l’année dans son genre, le MCD est tout de même simple par sa complexité et son nombre d’entité et d’association."
					},
					{
						"src": "./assets/images/code_trida_delete_vehicule.jpg",
						"alt": "Figure 2 : Code de suppression d'un véhicule - partie 1",
						"caption": "Figure 2 : Code de suppression d'un véhicule - partie 1",
						"description": "Ces deux figures (2 et 3) montrent l’implémentation de la suppression complète d’un véhicule dans notre application. Supprimer un véhicule n’est pas une action isolée : cela a des conséquences sur d’autres parties de la base de données, notamment sur les tournées qu’il a effectuées et sur les décharges qu’il a faites dans les centres de tri.\n\nPour gérer cette opération, nous avons utilisé le framework Flask, un outil en Python qui permet de créer des sites web interactifs, afin de gérer des routes et de connecter la logique Python avec l’interface HTML. Le cœur du fonctionnement repose sur des routes, c’est-à-dire des liens entre une adresse web (URL) et une fonction Python. Par exemple, lorsqu’on clique sur « Supprimer » dans la page HTML, Flask appelle automatiquement la bonne fonction Python grâce à la route définie avec @app.route.\n\nLes différentes fonctions suivent un principe de programmation modulaire, en créant une fonction spécifique pour gérer la suppression de véhicule, dans une logique CRUD (Create, Read, Update, Delete).\n\nÀ l’intérieur de cette fonction, nous écrivons des requêtes SQL (un langage spécialisé pour interagir avec des bases de données). Nous avons utilisé des jointures (INNER JOIN) pour interroger plusieurs tables à la fois, et ainsi récupérer toutes les données associées à un véhicule (comme ses tournées ou ses décharges). Cela permet de vérifier si ce véhicule est encore utilisé ailleurs dans la base."
					},
					{
						"src": "./assets/images/code_trida_delete_dependance.jpg",
						"alt": "Figure 3 : Code de suppression des dépendances - partie 2",
						"caption": "Figure 3 : Code de suppression des dépendances - partie 2",
						"description": "Avant de supprimer quoi que ce soit, nous faisons ces vérifications pour préserver l’intégrité référentielle des données, c’est-à-dire pour éviter de laisser des morceaux de données orphelins ou incohérents. Par exemple, si un véhicule est encore référencé dans une tournée, il faut d’abord supprimer cette tournée avant de pouvoir supprimer le véhicule lui-même. C’est ce que l’on voit avec les deux premières requêtes SQL qui enregistrent dans une variable les passages et les décharges. Grâce à la condition suivante, on ne supprimera que les véhicules pour lesquels ces deux variables sont vides. Sinon, une page s’affichera pour nous permettre de supprimer les passages et décharges avant.\n\nNéanmoins, ces vérifications restent simples, et les erreurs pourraient être plus fréquentes sur une base de données plus complexe. Ainsi, on pourrait améliorer ce code en ajoutant des exceptions SQL qui renverraient des messages d’erreur. De plus, la répétition des fonctions et des routes pourrait être évitée en les factorisant, comme c’est le cas pour les deux requêtes qui permettent de déterminer si un véhicule a un passage ou une décharge. Cela améliorerait la performance de l’application."}
				],
				"url": "https://github.com/Suzdeloffre/SAE3.4-Groupe7/tree/main"
			},
			{
				"title": "Pauvocoder",
				"date": "décembre à début janvier 2025",
				"description": "Application permettant de modifier la hauteur de la voix sans modifier la vitesse.",
				"technologies": ["Java"],
				"competence": ["S1.01 – Implémentation d'un besoin client", "S1.02 – Comparaison d'approches algorithmique"],
				"longDescription": "Le Pauvocoder est une application que nous avons développée en Java, sans interface graphique, c'est-à-dire qu'elle fonctionne uniquement en ligne de commande. Son but est de modifier la hauteur de la voix (rendre un son plus aigu ou plus grave) sans changer la vitesse de lecture de l'audio. En plus, grâce à un outil appelé StdDraw, nous avons ajouté une visualisation en temps réel des ondes sonores, pour voir à l'écran la forme du son pendant qu'on l'écoute.\n\nDans ce projet, il nous a aussi été demandé de proposer deux façons différentes de coder une même fonction, puis de comparer leurs performances (vitesse, efficacité) pour choisir la meilleure solution. Cela nous a appris à réfléchir en termes d'optimisation.\n\nCe qui a été le plus difficile, ce n'était pas la gestion des données elles-mêmes (comme les tableaux), mais plutôt de comprendre le fonctionnement du son, et de savoir quelles transformations mathématiques pouvaient être appliquées sans déformer le résultat audio. Cela nous a poussés à faire des recherches et à bien observer les effets concrets de chaque modification.",
				"images": [
					{
						"src": "./assets/images/graphic_result_profiler_pauvocoder.jpg",
						"alt": "Figure 4 : Graphique de comparaison des performances des deux implémentations de CrossCorrelatiion",
						"caption": "Figure 4 : Graphique de comparaison des performances des deux implémentations de CrossCorrelatiion",
						"description": "La figure 4 est un graphique en barres qui illustre les temps d’exécution de deux versions différentes d’une même méthode. Sur l’axe horizontal (l’axe des abscisses), on retrouve le temps en millisecondes, et sur l’axe vertical (l’axe des ordonnées), le nombre d’essais effectués par le programme, allant de 100 000 à 10 millions. L’objectif est de comparer la rapidité des deux méthodes, c’est-à-dire de voir laquelle s’exécute le plus vite selon la taille des données traitées.\n\nLa méthode comparée sert à mesurer la similarité entre deux sons, en calculant ce qu’on appelle une corrélation croisée. Concrètement, cela revient à comparer deux morceaux de sons pour voir à quel point ils se ressemblent à différents décalages. Cette opération est utilisée dans notre application Pauvocoder pour recoller proprement les morceaux d’un son découpé, en évitant les bruits désagréables comme des \"bips\" ou des coupures brusques.\n\nLa première version du code utilise un tableau temporaire pour effectuer les calculs. Cela signifie qu’elle crée un espace en mémoire pour stocker des données intermédiaires avant de donner un résultat. La deuxième version, quant à elle, évite de créer un tableau supplémentaire : elle fait les calculs directement en décalant les indices dans les tableaux, ce qui permet d’économiser de la mémoire.\n\nPour comparer les performances des deux méthodes, nous avons mis en place une série de tests, ce qu’on appelle du profiling ou du benchmarking. Ces tests ont été répétés avec plusieurs tailles de données (10 000, 1 million, et 10 millions de répétitions) pour obtenir des résultats fiables. On observe que, pour les petits tableaux (par exemple, 100 valeurs), la seconde version appelée crossCorrelation2 est en moyenne 4,6 fois plus rapide, et peut permettre de réduire jusqu’à 10 % le temps d’exécution global. Sur des tests plus longs, elle reste légèrement meilleure, avec 5,67 % de gain en efficacité.\n\nCependant, lorsque les tableaux deviennent plus grands (1000 valeurs), la différence de performance devient très faible. Aucune des deux méthodes ne prend clairement l’avantage, ce qui signifie que l’optimisation a ses limites lorsque la complexité des données augmente.\n\nEn analysant plus en détail, on comprend pourquoi la seconde version est plus rapide : elle évite des opérations inutiles, comme allouer de la mémoire pour un nouveau tableau, et répéter des calculs redondants. Ce type d’optimisation est appelé optimisation spatiale, car il cherche à économiser de l’espace mémoire. Cela repose sur une bonne compréhension des coûts liés aux opérations mémoire, souvent sous-estimés en début de formation.\n\nSur le plan du traitement du signal (la discipline qui étudie les sons, images ou autres données analogues), ce travail nous a permis de mettre en œuvre concrètement une opération clé, la corrélation croisée, et de l’adapter à notre cas d’usage : améliorer la qualité sonore d’un audio transformé par notre programme.\n\nMalgré tous ces efforts, le gain réel de performance reste modeste, car la méthode elle-même est relativement simple. Et notre test ne s’appuie que sur un seul critère : le temps d’exécution. D’autres aspects comme la lisibilité, la stabilité ou la flexibilité du code n’ont pas été pris en compte.\n\nEnfin, il faut aussi reconnaître que notre graphique manque un peu de rigueur. Hors contexte, comme ici, il devient difficile à interpréter : les axes ne sont pas bien légendés, certaines variables sont peu lisibles, et la légende des couleurs est en français alors que le reste du graphique est en anglais. Ce sont des détails importants à corriger dans un rapport professionnel ou scientifique, car ils influencent directement la compréhension des résultats par un lecteur extérieur."
					}
				],
				"url": "https://github.com/Alexis-Colas/VoCoder"
			},
			{
				"title": "Site E-commerce",
				"date": "février à début avril 2025",
				"description": "Boutique de vente de casque en ligne pour une entreprise fictive. Le back-end est séparé en deux parties : client et administrateur. Avec la gestion des stock, des commandes, des adresses, des commandaires.",
				"technologies": ["HTML", "CSS", "Flask", "MySQL", "Bootstrap"],
				"competence": ["S2.04 - Exploitation d'une base de données", "S2.05 – Gestions d'un projet"],
				"longDescription": "Dans ce projet, nous avons travaillé sur le site web d'une entreprise fictive nommée \"Tête protégée\", spécialisée dans la vente de casques (VTT, ski, motocross, etc.). Le but était de reprendre un site déjà existant, codé en Python avec le framework Flask, et de le modifier et améliorer pour qu'il soit pleinement fonctionnel. Ce site utilise également HTML et CSS pour l'affichage, Bootstrap pour la mise en page, et MySQL pour la base de données.\n\nNous avons dû ajouter plusieurs fonctionnalités et corriger certains éléments, en prenant en compte la structure du code existant, ce qui nous a demandé un temps d'analyse pour bien comprendre comment il fonctionnait avant de le modifier. Il fallait aussi faire attention à certaines règles importantes sur les bases de données, par exemple pour éviter des erreurs dans la gestion du stock.\n\nLe site est divisé en deux grandes parties. La première est le Côté administrateur qui permet de gérer le stock de casques, suivre et modifier les commandes, lire et répondre aux commentaires, ainsi que consulter les adresses de livraison. Le second est celui client qui permet de naviguer dans le catalogue, de mettre des casques dans un panier, de passer commande, de gérer ses adresses, et de laisser des commentaires et notes sur les produits achetés.\n\nEnfin, nous avons intégré une partie représentation graphique des données avec l'outil DataViz, pour permettre à l'administrateur de voir rapidement les statistiques des ventes selon les types de casques.\n\nDans un second temps, nous avons prolongé le projet en abordant la gestion de projet. L'objectif était de simuler une démarche professionnelle autour du site e-commerce. Nous avons donc rédigé un cahier des charges, qui décrit les objectifs, les besoins et les contraintes du projet. Puis nous avons préparé un plan qualité projet, pour définir comment garantir un bon niveau de qualité dans les livrables. Il a été nécessaire de réaliser une étude de coût (en anglais), pour estimer le budget nécessaire au projet. Et enfin, nous avons conçu un planning de Gantt, un outil visuel pour planifier les différentes étapes dans le temps. Tous ces documents permettent de garantir une bonne progression du projet dans le temps en respectant les délais, les coûts (fictifs dans notre cas), et la qualité.",
				"url": "https://github.com/Suzdeloffre/SAE2-3.4.5"
			},
			{
				"title": "Portfolio",
				"date": "juin 2025",
				"description": "Portfolio interactif utilisant Three.js pour créer des expériences immersives.",
				"technologies": ["Vue.js", "HTML", "CSS","Tailwind CSS"],
				"competence": ["Développement web", "Modélisation 3D", "Design interactif"],
				"longDescription": "Ce portfolio personnel représente mes compétences acquises en première année de BUT informatique. Il utilise des technologies modernes comme Vue.js pour la réactivité de l'interface, et Tailwind CSS pour un design moderne et responsive. Le projet met en avant mes projets académiques à travers une interface ludique avec des étoiles flottantes. C'est un projet qui combine créativité et technique pour offrir une expérience utilisateur unique.",
				"url": "https://github.com"
			},
			{
				"title": "Quixo",
				"date": "mai à mi-juin 2025",
				"description": "Jeu de plateau développé en Java avec une interface graphique créée par le framework Boardifier",
				"technologies": ["Java", "JavaFX"],
				"competence": ["S2.01 - Développement d'une application", "S2.02 - Exploration algorithmique d'un problème", "S2.06 - Organisation d'un travail d'équipe"],
				"longDescription": "Le Quixo est un jeu de plateau que nous avons programmé en Java, avec une interface graphique prévue grâce à JavaFX et un outil appelé Boardifier. Ce jeu se joue sur un plateau de 5 cases sur 5, où sont placés des dés un peu spéciaux : chaque dé a une face avec une croix, une face avec un rond, et les autres faces sont neutres. Le but du jeu est d'aligner une ligne, une colonne ou une diagonale uniquement avec son propre symbole (croix ou rond).\n\nQuand on lance l'application, on arrive sur un menu qui propose plusieurs options : jouer contre un autre joueur, jouer contre l'ordinateur (appelé bot), ou laisser deux ordinateurs s'affronter. Pour cela, nous avons programmé deux stratégies de jeu différentes des bots.\n\nCette application suit le modèle MVC (Modèle, Vue, Contrôleur). Celui-ci sert à organiser le code d'une application en séparant clairement les données (Modèle), l'affichage (Vue) et la gestion des interactions utilisateur (Contrôleur). Cette séparation facilite la maintenance, la compréhension du code et permet de modifier une partie sans impacter les autres.\n\nLors de la création de ce portfolio, ce projet n'était pas encore complètement terminé, car seule la version en interface console (en ligne de texte) avait été terminée.",
				"images": [
					{
						"src": "./assets/images/quixo_test.jpg",
						"alt": "Figure 5 : Classe de test JUnit pour QuixoStageFactory",
						"caption": "Figure 5 : Classe de test JUnit pour QuixoStageFactory",
						"description": "Cette figure (5) montre une classe de test écrite en Java. Elle a pour but de vérifier que la classe QuixoStageFactory fonctionne correctement. Cette classe QuixoStageFactory sert à initialiser tous les éléments du jeu Quixo, comme le plateau de 5x5 cases et les dés à symboles (croix, rond ou neutre). Elle hérite d'une classe fournie par le framework graphique Boardifier, c’est-à-dire qu’elle reprend le comportement général d’une classe existante mais y ajoute ou modifie certaines fonctions spécifiques pour s’adapter au jeu Quixo. La classe de test utilise JUnit, un outil pour faire des tests automatisés. Ces tests permettent de vérifier automatiquement que le programme fonctionne comme prévu. On y retrouve aussi Mockito, un outil qui sert à créer de faux objets (appelés mocks) pour simuler certaines parties du programme sans les exécuter réellement.\n\nLe programme repose sur une architecture orientée objet, avec un système d’héritage de classes issu du framework Boardifier. Cela signifie que nos propres classes (notamment les contrôleurs) sont étroitement liées à des classes du framework, ce qui rend les tests classiques plus délicats à réaliser. En effet, lorsqu’une classe dépend fortement d’autres classes, il devient difficile de la tester de manière isolée sans que les comportements externes n’influencent les résultats.\n\nPour résoudre ce problème, nous avons utilisé Mockito. Grâce à ces objets factices, nous avons pu isoler la classe que nous voulions tester, ici QuixoStageFactory, en simulant les comportements des classes dont elle dépend, comme la classe StageModel.\n\nLa logique derrière nos tests était centrée sur la vérification du comportement du programme, en définissant à l’avance ce que nous attendions comme résultat. Par exemple, nous avons décidé que, lorsqu’on demande au StageModel quel est le joueur actuel, il doit renvoyer « joueur 1 ». Ce comportement a été simulé à l’aide de Mockito.\n\nEnsuite, nous avons testé que la méthode setup de la classe QuixoStageFactory permettait bien d’initialiser correctement les éléments du jeu, en particulier en vérifiant à la fin du test que 25 dés (un pour chaque case du plateau) avaient bien été créés.\n\nCependant, notre logique de test reposait principalement sur l’attente de résultats prédéfinis, sans forcément aller jusqu’à une analyse approfondie du code. En d’autres termes, nous avons surtout vérifié si le programme réagissait correctement dans des situations concrètes, mais sans couvrir de manière systématique toutes les possibilités du code.\n\nPar conséquent, certaines classes manquent d’une vérification complète de tous les cas d’exécution possibles. Nous avons plutôt adopté une approche empirique, en imaginant les différentes erreurs qu’un utilisateur pourrait faire, puis en testant si des messages d’erreur clairs étaient bien renvoyés.\n\nPar exemple, nous avons vérifié le comportement du programme lorsqu’un joueur sélectionne une case en dehors de la grille, ou encore lorsqu’il essaie de jouer un dé appartenant à son adversaire. Ces tests sont utiles pour garantir une bonne expérience utilisateur, mais ils ne remplacent pas une couverture de test complète basée sur la structure du code, puisque certains comportement et certaines méthodes n’ont pas d’influence sur l’interface visible. "
					}
				],
				"url": "https://github.com"
			}
		],
		"starPositions": [
			{ "left": 90, "top": 90 },
			{ "left": 270, "top": 200 },
			{ "left": 450, "top": 120 },
			{ "left": 670, "top": 90 },
			{ "left": 800, "top": 190 },
			{ "left": 150, "top": 300 },
			{ "left": 550, "top": 270 }
		],
		hoveredProject: null,
        tooltipX: 0,
        tooltipY: 0,
        selectedProject: null,
        showProjectModal: false
		}
		
	},

  methods: {
	openProjectModal(project) {
	  this.selectedProject = project;
	  this.showProjectModal = true;
	},

	closeProjectModal() {
	  this.showProjectModal = false;
	  this.selectedProject = null;
	},

	updateTooltipPosition(event) {
	  // Position de base du curseur
	  let baseX = event.clientX + 10;
	  let baseY = event.clientY - 10;
	  
	  // Dimensions de la fenêtre
	  const windowWidth = window.innerWidth;
	  const windowHeight = window.innerHeight;
	  
	  // Dimensions infobulle
	  const tooltipWidth = 350; 
	  const tooltipHeight = 200;
	  
	  const margin = 20;
	  
	  // Ajustement horizontal
	  if (baseX + tooltipWidth + margin > windowWidth) {
		this.tooltipX = event.clientX - tooltipWidth - 10;
		if (this.tooltipX < margin) {
		  this.tooltipX = margin;
		}
	  } else {
		this.tooltipX = baseX;
	  }
	  
	  // Ajustement vertical
	  if (baseY + tooltipHeight + margin > windowHeight) {
		// Place l'infobulle au-dessus du curseur
		this.tooltipY = event.clientY - tooltipHeight - 10;
		
		// Vérifie qu'elle ne sort pas en haut
		if (this.tooltipY < margin) {
		  this.tooltipY = margin;
		}
	  } else {
		this.tooltipY = baseY;
	  }
	  
	  // Cas extrême : si l'infobulle est plus large que la fenêtre
	  if (tooltipWidth > windowWidth - (margin * 2)) {
		this.tooltipX = margin;
	  }
	}
  }
}).mount('#app');

