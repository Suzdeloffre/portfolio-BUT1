const { createApp } = Vue;

createApp({
	data() {
		return {
		"name": "Suzanne Deloffre",
		"navItems": [
			{ "label": "About", "link": "#about" },
			{ "label": "Skills", "link": "#skills" },
			{ "label": "Projects", "link": "#projects" }
		],
		"welcomeTitle": "Welcome to my portfolio, ",
		"welcomeText": "the digital universe of a second-year Computer Science student",
		"aboutText": "My path has been anything but linear: it's a quest for identity, a passage to adulthood as tumultuous as it is enriching. My adventure began in the bustling city of Lyon, where I started studying management and economics. Then, a return to my roots became necessary—toward my deepest passions: culture and literature.\n\nThat's where I encountered Balzac, whose dense and almost soporific style was a real challenge. Yet, this immersion in literary complexity brought me patience, rigor, and analytical skills.\n\nBut the quest didn't stop there. It carried me into the intense world of luxury hospitality, another school of life where adaptability and discipline are essential. I obtained my diploma at the Cours Hôtelier de Besançon.\n\nA side quest then led me to an unexpected but decisive place: the Career Information Center of Besançon. Taken in by its director, I spent nearly a year modernizing the computer interface of public computers, while also handling reception and secretarial duties. These responsibilities allowed me to reconnect with an essential part of myself.\n\nEvery adversity, every encounter, every detour allowed me to collect pieces of a puzzle—and they all pointed in the same direction: computer science.\n\nToday, in this ever-evolving digital world, I chart my course at the crossroads of creativity and logic. Each line of code is an incantation, each project a quest to accomplish.",
		"softSkills": "✨ Teamwork • Creativity • Adaptability • Curiosity ✨",
		"skills": [
			{
				"title": "🌐 Development",
				"items": [
					{name:"Java",level : 80},
					{name:"HTML",level : 90},
					{name:"CSS",level : 70},
					{name:"JavaScript",level : 45},
					{name:"Python",level : 30},
					{name:"C",level : 40}
				]
			},
			{
				"title": "⚡ Frameworks",
				"items":  [
					{name:"Flask",level : 70},
					{name:"Vue.js",level : 40},
					{name:"Bootstrap",level : 70},
					{name:"Tailwind CSS",level : 45}
					
				]
			},
			{
				"title": "🛠️ Tools",
				"items":  [
					{name:"GitLab & GitHub",level : 70},
					{name:"VS Code",level : 60},
					{name:"JetBrains",level : 60},
					{name:"Figma",level : 45}
				]
				
			}
		],
		"projects": [
			{
				"title": "Alten Presentation Website",
				"date": "September to late October 2024",
				"description": "A simple website presenting the Alten company's situation",
				"technologies": ["HTML", "CSS", "GitHub"],
				"competence": ["S1.06 - Discovery of economic and ecological environment", "S1.05 - Requirements gathering"],
				"longDescription": "The Alten presentation website was our very first project at the beginning of the year. It involved creating a simple website using HTML and CSS. This website had to be responsive, meaning capable of automatically adapting to different screens, such as those of a phone, tablet, or computer.\n\nThe objective wasn't only technical. This project also mixed economic concepts to help us better understand how a real company operates. We therefore studied Alten from several angles: its history, activity, and market position. In addition to the website, we had to write an economic report and design questionnaires to imagine the needs of a fictional client, as would be done in a real professional project.\n\nThis project allowed us to discover the basics of project management: how to distribute tasks within a group, organize efficiently, and meet deadlines. We also learned to use Git, a collaborative work tool widely used to keep track of modifications in a project. Since it was our first time with this tool, it was a real challenge, but also an important step in our learning.",
				"url":"https://github.com/pchassig/Presentation-Alten",
				"demo": "https://pchassig.github.io/Presentation-Alten/index.html"
			},
			{
				"title": "Chausson Della Famiglia",
				"date": "October 2024",
				"description": "Non-functional e-commerce website for slippers to showcase our CSS skills",
				"technologies": ["HTML", "CSS"],
				"competence": ["Web development", "Advanced CSS"],
				"longDescription": "As part of a course, we were asked, in groups, to create a non-functional e-commerce website on a theme of our choice, with the goal of demonstrating our CSS and aesthetic skills. I created the 'About' page. This project allowed me to deepen my knowledge in layout and responsive design.",
				"url":"https://github.com/EthanCHEVRAND/ecommerce_chaussons",
				"demo": "https://ethanchevrand.github.io/ecommerce_chaussons/pages/apropos.html"
			},
			{
				"title": "Trida Maintenance",
				"date": "October to early December 2024",
				"description": "Web application for a fictional waste transport company, using Flask Python to manipulate a database",
				"technologies": ["HTML", "CSS", "Flask", "MySQL", "Bootstrap"],
				"competence": ["S1.04 - Managing information data"],
				"longDescription": "We created a web application to manage data, using different tools: Flask, a Python tool that allows creating interactive websites; HTML and CSS, which are used to create the website's appearance; and MySQL, a system for storing and organizing information.\n\nThe project started from a fictional situation that was presented to us orally: Trida, an imaginary company that transports specific waste in bins to sorting plants. This company uses several vehicles that make daily rounds. These rounds follow a specific order: trucks pass through different sorting centers to collect products/waste, then deliver them to a recycling plant.\n\nOur objective was to design a database, that is, a well-organized system to store all this information, then create a small web interface to manage this database. Thanks to our application, one can, for example, add a vehicle, modify a product, or delete a route, while respecting the logical links between data.\n\nOne of the important points of this project was communication within the group. At first, we each had a slightly different understanding of the company's situation. We therefore had to explain ourselves well to agree on how to represent the data, what is called the conceptual model (a kind of diagram of how information is organized). Another challenge was getting to grips with Flask, which can be quite technical at first. Some features or operational details took time and perseverance to fully understand and make work.",
				"images": [
					{
						"src": "./assets/images/MCD_trida.jpg",
						"alt": "Figure 1: Conceptual Data Model (CDM) of the Trida project",
						"caption": "Figure 1: Conceptual Data Model (CDM) of the Trida project.",
						"description": "This figure (1) represents the initial project situation, translated into graphical form through a Conceptual Data Model (CDM). This type of diagram allows structuring essential information of a system clearly, by identifying the main elements and their relationships.\n\nIn this CDM, we distinguished five fundamental objects called entities, such as CENTER or VEHICLE. An entity represents a 'type of thing' handled by the information system.\n\nThese entities are linked together by three associations, which illustrate the logical connections between system objects. For example, a center can accommodate several vehicles, and a vehicle can perform several routes.\n\nOn each link (or association), we find cardinalities, which indicate how many instances of one object can be linked to another. For example, a cardinality (0,n) means 'zero or more', while (1,n) means 'at least one'. These notations allow precisely representing business rules as they apply to actual management (e.g., a sorting center contains at least one product).\n\nFirst, we used functional analysis skills. From a concrete situation (industrial waste management), we identified the important elements of the system: centers, vehicles, products, and plants. We understood the expressed needs and translated them into a clear, structured diagram. Moving from a concrete situation to a Conceptual Data Model (CDM) allows structuring the database consistently from the start. This avoids errors during practical application use, such as inconsistencies or duplicates. This step also facilitates database manipulation: it becomes simpler to add, modify, or delete data while maintaining a clear and logical organization.\n\nNext, we applied our data modeling knowledge. We designed a Conceptual Data Model (CDM) following learned rules, such as normalization and primary key identification. For example, each vehicle is identified by a unique number. We also used a writing convention (snake_case) to maintain consistency in attribute names.\n\nFinally, we mobilized know-how related to business understanding. We had to think about how system objects interact with each other. An important project question was whether a vehicle could transport multiple products to different landfills in the same route. This led us to research existing practices and represent this situation with a ternary association between vehicle, product, and landfill.\n\nCertainly, since this was the first project of the year in its kind, the CDM remains simple in its complexity and number of entities and associations."
					},
					{
						"src": "./assets/images/code_trida_delete_vehicule.jpg",
						"alt": "Figure 2: Vehicle deletion code - part 1",
						"caption": "Figure 2: Vehicle deletion code - part 1",
						"description": "These two figures (2 and 3) show the implementation of complete vehicle deletion in our application. Deleting a vehicle is not an isolated action: it has consequences on other parts of the database, particularly on the routes it performed and the dumps it made at sorting centers.\n\nTo manage this operation, we used the Flask framework, a Python tool that allows creating interactive websites, to manage routes and connect Python logic with the HTML interface. The core functionality relies on routes, that is, links between a web address (URL) and a Python function. For example, when clicking 'Delete' on the HTML page, Flask automatically calls the right Python function thanks to the route defined with @app.route.\n\nThe different functions follow a modular programming principle, by creating a specific function to handle vehicle deletion, in a CRUD logic (Create, Read, Update, Delete).\n\nInside this function, we write SQL queries (a specialized language for interacting with databases). We used joins (INNER JOIN) to query multiple tables at once, and thus retrieve all data associated with a vehicle (such as its routes or dumps). This allows checking if this vehicle is still being used elsewhere in the database."
					},
					{
						"src": "./assets/images/code_trida_delete_dependance.jpg",
						"alt": "Figure 3: Dependency deletion code - part 2",
						"caption": "Figure 3: Dependency deletion code - part 2",
						"description": "Before deleting anything, we perform these checks to preserve data referential integrity, that is, to avoid leaving orphaned or inconsistent data fragments. For example, if a vehicle is still referenced in a route, we must first delete that route before being able to delete the vehicle itself. This is what we see with the first two SQL queries that store passages and dumps in a variable. Thanks to the following condition, we will only delete vehicles for which these two variables are empty. Otherwise, a page will appear allowing us to delete passages and dumps first.\n\nNevertheless, these checks remain simple, and errors could be more frequent on a more complex database. Thus, we could improve this code by adding SQL exceptions that would return error messages. Moreover, the repetition of functions and routes could be avoided by factoring them, as is the case for the two queries that determine if a vehicle has a passage or a dump. This would improve application performance."
					}
				],
				"url": "https://github.com/Suzdeloffre/SAE3.4-Groupe7/tree/main"
			},
			{
				"title": "Pauvocoder",
				"date": "December to early January 2025",
				"description": "Application allowing voice pitch modification without changing speed.",
				"technologies": ["Java"],
				"competence": ["S1.01 - Implementing client needs", "S1.02 - Comparing algorithmic approaches"],
				"longDescription": "The Pauvocoder is an application we developed in Java, without a graphical interface, meaning it only works via command line. Its purpose is to modify voice pitch (making sound higher or lower) without changing audio playback speed. Additionally, thanks to a tool called StdDraw, we added real-time visualization of sound waves, to see the sound's shape on screen while listening to it.\n\nIn this project, we were also asked to propose two different ways of coding the same function, then compare their performance (speed, efficiency) to choose the best solution. This taught us to think in terms of optimization.\n\nWhat was most difficult wasn't managing the data itself (like arrays), but rather understanding how sound works, and knowing which mathematical transformations could be applied without distorting the audio result. This pushed us to do research and carefully observe the concrete effects of each modification.",
				"images": [
					{
						"src": "./assets/images/graphic_result_profiler_pauvocoder.jpg",
						"alt": "Figure 4: Performance comparison graph of two CrossCorrelation implementations",
						"caption": "Figure 4: Performance comparison graph of two CrossCorrelation implementations",
						"description": "Figure 4 is a bar chart illustrating execution times of two different versions of the same method. On the horizontal axis (x-axis), we find time in milliseconds, and on the vertical axis (y-axis), the number of trials performed by the program, ranging from 100,000 to 10 million. The objective is to compare the speed of the two methods, that is, to see which executes faster depending on data size processed.\n\nThe compared method serves to measure similarity between two sounds, by calculating what is called cross-correlation. Concretely, this amounts to comparing two sound pieces to see how similar they are at different offsets. This operation is used in our Pauvocoder application to properly reconnect pieces of a cut sound, avoiding unpleasant noises like 'beeps' or abrupt cuts.\n\nThe first code version uses a temporary array to perform calculations. This means it creates a memory space to store intermediate data before giving a result. The second version, meanwhile, avoids creating an additional array: it performs calculations directly by shifting indices in arrays, which saves memory.\n\nTo compare the two methods' performance, we set up a series of tests, what is called profiling or benchmarking. These tests were repeated with multiple data sizes (10,000, 1 million, and 10 million repetitions) to obtain reliable results. We observe that for small arrays (for example, 100 values), the second version called crossCorrelation2 is on average 4.6 times faster, and can reduce overall execution time by up to 10%. On longer tests, it remains slightly better, with 5.67% efficiency gain.\n\nHowever, when arrays become larger (1000 values), the performance difference becomes very small. Neither method clearly takes the lead, which means optimization has its limits when data complexity increases.\n\nAnalyzing in more detail, we understand why the second version is faster: it avoids unnecessary operations, like allocating memory for a new array, and repeating redundant calculations. This type of optimization is called spatial optimization, as it seeks to save memory space. This relies on good understanding of costs related to memory operations, often underestimated early in training.\n\nRegarding signal processing (the discipline studying sounds, images, or similar data), this work allowed us to concretely implement a key operation, cross-correlation, and adapt it to our use case: improving sound quality of audio transformed by our program.\n\nDespite all these efforts, the actual performance gain remains modest, because the method itself is relatively simple. And our test relies on only one criterion: execution time. Other aspects like code readability, stability, or flexibility were not considered.\n\nFinally, we must also acknowledge that our graph lacks some rigor. Out of context, as here, it becomes difficult to interpret: axes are not well labeled, some variables are hard to read, and the color legend is in French while the rest of the graph is in English. These are important details to correct in a professional or scientific report, as they directly influence result understanding by an external reader."
					}
				],
				"url": "https://github.com/Alexis-Colas/VoCoder"
			},
			{
				"title": "E-commerce Website",
				"date": "February to early April 2025",
				"description": "Online helmet sales shop for a fictional company. The back-end is separated into two parts: client and administrator. With stock management, orders, addresses, and customers.",
				"technologies": ["HTML", "CSS", "Flask", "MySQL", "Bootstrap"],
				"competence": ["S2.04 - Database exploitation", "S2.05 - Project management"],
				"longDescription": "In this project, we worked on the website of a fictional company named 'Protected Head', specialized in helmet sales (mountain biking, skiing, motocross, etc.). The goal was to take over an existing website, coded in Python with the Flask framework, and modify and improve it to make it fully functional. This site also uses HTML and CSS for display, Bootstrap for layout, and MySQL for the database.\n\nWe had to add several features and correct certain elements, taking into account the existing code structure, which required analysis time to properly understand how it worked before modifying it. We also had to pay attention to certain important database rules, for example to avoid errors in stock management.\n\nThe site is divided into two main parts. The first is the Administrator side which allows managing helmet stock, tracking and modifying orders, reading and responding to comments, and consulting delivery addresses. The second is the Client side which allows browsing the catalog, putting helmets in a cart, placing orders, managing addresses, and leaving comments and ratings on purchased products.\n\nFinally, we integrated a data graphical representation part with the DataViz tool, to allow the administrator to quickly see sales statistics by helmet type.\n\nSecondly, we extended the project by addressing project management. The objective was to simulate a professional approach around the e-commerce site. We therefore wrote a specifications document, which describes the project's objectives, needs, and constraints. Then we prepared a project quality plan, to define how to guarantee a good quality level in deliverables. It was necessary to conduct a cost study (in English), to estimate the project's necessary budget. And finally, we designed a Gantt chart, a visual tool to plan different stages over time. All these documents ensure good project progression over time while respecting deadlines, costs (fictional in our case), and quality.",
				"url": "https://github.com/Suzdeloffre/SAE2-3.4.5"
			},
			{
				"title": "Portfolio",
				"date": "June 2025",
				"description": "Interactive portfolio using Three.js to create immersive experiences.",
				"technologies": ["Vue.js", "HTML", "CSS","Tailwind CSS"],
				"competence": ["Web development", "Interactive design"],
				"longDescription": "This personal portfolio represents my skills acquired in the first year of Computer Science degree. The project highlights my academic projects through a playful interface with floating stars. It's a project that combines creativity and technique to offer a unique user experience.",
				"url": "https://github.com/Suzdeloffre/portfolio-BUT1"
			},
			{
				"title": "Quixo",
				"date": "May to mid-June 2025",
				"description": "Board game developed in Java with a graphical interface created by the Boardifier framework",
				"technologies": ["Java", "JavaFX"],
				"competence": ["S2.01 - Application development", "S2.02 - Algorithmic exploration of a problem", "S2.06 - Team work organization"],
				"longDescription": "Quixo is a board game we programmed in Java, with a graphical interface planned using JavaFX and a tool called Boardifier. This game is played on a 5x5 square board, where special dice are placed: each die has a face with a cross, a face with a circle, and the other faces are neutral. The game's goal is to align a row, column, or diagonal exclusively with your own symbol (cross or circle).\n\nWhen launching the application, we arrive at a menu offering several options: play against another player, play against the computer (called bot), or let two computers compete. For this, we programmed two different bot game strategies.\n\nThis application follows the MVC model (Model, View, Controller). This serves to organize application code by clearly separating data (Model), display (View), and user interaction management (Controller). This separation facilitates maintenance, code understanding, and allows modifying one part without impacting others.\n\nWhen creating this portfolio, this project was not yet completely finished, as only the console interface version (text line) had been completed.",
				"images": [
					{
						"src": "./assets/images/quixo_test.jpg",
						"alt": "Figure 5: JUnit test class for QuixoStageFactory",
						"caption": "Figure 5: JUnit test class for QuixoStageFactory",
						"description": "This figure (5) shows a test class written in Java. Its purpose is to verify that the QuixoStageFactory class works correctly. This QuixoStageFactory class is used to initialize all elements of the Quixo game, like the 5x5 square board and symbol dice (cross, circle, or neutral). It inherits from a class provided by the Boardifier graphics framework, meaning it takes the general behavior of an existing class but adds or modifies certain specific functions to adapt to the Quixo game. The test class uses JUnit, a tool for automated testing. These tests allow automatically verifying that the program works as expected. We also find Mockito, a tool used to create fake objects (called mocks) to simulate certain program parts without actually executing them.\n\nThe program relies on object-oriented architecture, with a class inheritance system from the Boardifier framework. This means our own classes (notably controllers) are closely linked to framework classes, which makes classic tests more delicate to perform. Indeed, when a class strongly depends on other classes, it becomes difficult to test it in isolation without external behaviors influencing results.\n\nTo solve this problem, we used Mockito. Thanks to these dummy objects, we were able to isolate the class we wanted to test, here QuixoStageFactory, by simulating behaviors of classes it depends on, like the StageModel class.\n\nThe logic behind our tests was centered on verifying program behavior, by defining in advance what we expected as a result. For example, we decided that when asking the StageModel who the current player is, it should return 'player 1'. This behavior was simulated using Mockito.\n\nThen, we tested that the setup method of the QuixoStageFactory class properly initialized game elements, particularly by verifying at the test's end that 25 dice (one for each board square) had indeed been created.\n\nHowever, our test logic mainly relied on expecting predefined results, without necessarily going as far as an in-depth code analysis. In other words, we mainly verified if the program reacted correctly in concrete situations, but without systematically covering all code possibilities.\n\nConsequently, some classes lack complete verification of all possible execution cases. We rather adopted an empirical approach, imagining different errors a user could make, then testing if clear error messages were properly returned.\n\nFor example, we verified program behavior when a player selects a square outside the grid, or when trying to play a die belonging to their opponent. These tests are useful for guaranteeing good user experience, but they don't replace complete test coverage based on code structure, since some behaviors and methods have no influence on the visible interface."
					}
				],
				
			}

			{
				"title": "VérifEtiquette",
				"date": "September to October 2025",
				"description": "Simple barcode label double-verification program using a barcode scanner for a biobank.",
				"technologies": ["PowerShell"],
				"longDescription": "This PowerShell program helps secure and simplify the process of verifying and labeling biological sample vials (called 'paillette') in a biobank, where blood donation samples are stored in liquid nitrogen.\n\nThe program first requests the technician's validation code (visa), then the request form barcode. Once validated, a label is automatically printed and attached to the sample tube. Afterward, the program verifies that the barcodes of all paillettes match the label and the form code.\n\nEvery action and event (errors, restarts, confirmations, etc.) is logged in a trace file for quality control and audit purposes.\n\nThe system ensures that all scanned codes correspond correctly, preventing human errors during the cryogenic sample decanting process. It also provides real-time visual feedback (color-coded messages) and automatic program termination when all checks are successful.\n",
				"images": [
					{
						"src": "./assets/images/verifetiquette_code.jpg",
						"alt": "Figure 6: Verification of paillette's barcodes",
						"caption": "Figure 6: Verification of paillette's barcodes",
						"description": "This figure (6) shows a clean, event-driven implementation using the `TextChanged` event. It efficiently handles automatic scanning, input validation, and error feedback through clear UI messages and color changes.\n\n"
					},
					{
						"src": "./assets/images/verifetiquette_trace.jpg",
						"alt": "Figure 7: Logs of the VerifEtiquette's program",
						"caption": "Figure 7: Logs of the VerifEtiquette's program",
						"description": "This figure (7)  The first figure (trace file) demonstrates that the verification process is fully automated and logged. It shows clear tracking of each step: visa validation, barcode checks, errors, and final success.\n"
					}
				],
			}
			  
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
	openInNewTab(url) {
		window.open(url, '_blank');
	},

	updateTooltipPosition(event) {
	  // Base cursor position
	  let baseX = event.clientX + 10;
	  let baseY = event.clientY - 10;
	  
	  // Window dimensions
	  const windowWidth = window.innerWidth;
	  const windowHeight = window.innerHeight;
	  
	  // Tooltip dimensions
	  const tooltipWidth = 350; 
	  const tooltipHeight = 200;
	  
	  const margin = 20;
	  
	  // Horizontal adjustment
	  if (baseX + tooltipWidth + margin > windowWidth) {
		this.tooltipX = event.clientX - tooltipWidth - 10;
		if (this.tooltipX < margin) {
		  this.tooltipX = margin;
		}
	  } else {
		this.tooltipX = baseX;
	  }
	  
	  // Vertical adjustment
	  if (baseY + tooltipHeight + margin > windowHeight) {
		// Places tooltip above cursor
		this.tooltipY = event.clientY - tooltipHeight - 10;
		
		// Checks it doesn't go out at top
		if (this.tooltipY < margin) {
		  this.tooltipY = margin;
		}
	  } else {
		this.tooltipY = baseY;
	  }
	  
	  // Extreme case: if tooltip is wider than window
	  if (tooltipWidth > windowWidth - (margin * 2)) {
		this.tooltipX = margin;
	  }
	}
  }
}).mount('#app');