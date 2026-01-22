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
				
			},

			{
				"title": "VérifEtiquette",
				"date": "September to December 2025",
				"description": "Barcode verification system securing the biological sample decanting process in a biobank storing blood donation samples.",
				"technologies": ["PowerShell", "Windows Forms", ".NET"],
				"competence": ["S2.01 - Application development", "S2.04 - Data and information management", "S2.05 - Project management", "S2.06 - Teamwork"],
				"longDescription": "VérifEtiquette is a PowerShell application developed to secure a critical business process in a biobank that stores blood donation samples ('paillettes') in liquid nitrogen tanks. When laboratories request specific samples, technicians must transfer paillettes into new tubes bearing identical barcodes. However, no formal written protocol existed, and manual verification was error-prone.\n\nThis project involved developing a barcode verification program that automates checks and provides complete traceability. The system guides technicians through a step-by-step process: first validating their authorization code (visa), scanning the request form barcode, printing a label, then verifying that all paillette barcodes match the form and label codes.\n\nWorking remotely with the biobank team in another city required rigorous project management practices. I drafted a specifications document that underwent multiple revisions following several stakeholder meetings. The workflow diagram was crucial as it documented for the first time a process that previously existed only in practitioners' minds.\n\nThree deployment iterations occurred between September and December 2025. The first deployment provided basic functionality with printing capability. After initial user testing, the biobank requested additional features, leading to a second deployment that added technician visa validation from a configurable list. The third deployment resolved a critical UTF-8 encoding issue discovered when trace files needed to be stored on a network drive with accented characters in the path.\n\nEvery operation—successful or not—is logged with timestamps in trace files for quality control and audit purposes, essential for ISO compliance in a regulated biobank environment. The program provides real-time visual feedback through color-coded messages (red for errors, green for success) and automatically terminates when all verifications pass successfully.\n\nThis project pushed me beyond academic exercises into real operational constraints: working with specialized domain vocabulary, coordinating across teams in different locations, maintaining code in production with active users, and balancing technical ideals against practical deadlines.",
				"images": [
					{
						"src": "./assets/images/verifetiquette_workflow.jpg",
						"alt": "Figure 1: Workflow diagram of the paillette verification process",
						"caption": "Figure 1: Workflow diagram of the paillette verification process",
						"description": "This figure (1) represents the complete business process formalized through a workflow diagram, using standardized symbols to illustrate the verification sequence. Diamond shapes represent decision points where the program performs validation checks, while rectangular boxes indicate actions (both automated by the program and manual steps performed by technicians). Red boxes highlight error handling paths, and green boxes show success states.\n\nThis workflow documentation served multiple critical purposes. First, it transformed tacit knowledge into explicit, written protocol—the biobank had never formally documented this decanting process before. Technicians knew the steps intuitively, but without standardized procedures, variations and errors could occur. By creating this diagram, we established a reference protocol that could be used for training new staff and ensuring consistency.\n\nSecond, the workflow clarified exactly where automated verification would add value. Each diamond-shaped decision point represents a location where the program intervenes to prevent human error: verifying the technician's authorization, checking barcode format compliance, confirming code correspondence between form and paillettes, and validating the final label application.\n\nThird, this artifact facilitated communication with non-technical stakeholders. The biobank staff could visually understand the program's role in their daily operations without needing to read code. This shared understanding was essential for gathering accurate requirements and receiving meaningful feedback during iterative deployments.\n\nThe error handling strategy visible in the red boxes demonstrates defensive programming thinking applied at the process level. Rather than allowing the workflow to continue when discrepancies are detected, the system forces resolution—displaying explicit error messages and preventing progression until the issue is corrected. This prevents contaminated or mislabeled samples from entering storage, which could have serious consequences for patient safety in medical contexts.\n\nCreating this workflow required deep collaboration with domain experts to understand specialized terminology ('paillettes,' 'décantation,' 'cuve d'azote') and the physical constraints of working with cryogenic samples. It represents the intersection of project management (documenting processes), requirements analysis (understanding user needs), and system design (planning automated interventions)."
					},
					{
						"src": "./assets/images/verifetiquette_ini.jpg",
						"alt": "Figure 2: Configuration file structure using INI format",
						"caption": "Figure 2: Configuration file structure using INI format",
						"description": "This figure (2) shows the configuration file that separates environment-specific parameters from application logic. Three critical variables are defined: the printer name (Imprimante), the trace file directory path (CheminTrace), and the list of authorized technician visas (listeVisaTechnicien).\n\nInitially, these values were hardcoded directly in the PowerShell script. However, recognizing the need for maintainability—especially when printer settings, trace file locations, or authorized personnel might change—I implemented this configuration file approach following the separation of concerns principle.\n\nThis design decision allows non-technical biobank staff to modify parameters without editing code, reducing dependency on IT support for routine updates. For example, when a new technician joins the team, adding their initials to the visa list requires only a simple text file edit rather than script modification and redeployment.\n\nHowever, this implementation revealed a critical lesson during the third deployment. When the biobank requested that trace files be stored on a network drive with a path containing accented characters (e.g., 'Vérification'), the configuration file failed to parse correctly due to UTF-8 encoding issues. The main PowerShell script handled UTF-8 correctly, but I hadn't explicitly specified encoding when reading the INI file.\n\nThis was particularly challenging to diagnose because the error manifested as silent failure—trace files simply didn't appear in the expected location. We initially suspected network permission issues or path access problems. Only after systematic debugging did we discover the encoding mismatch.\n\nThe resolution required adding explicit UTF-8 encoding specification when reading the configuration file:\n```powershell\nGet-Content -Path $configFile -Encoding UTF8\n```\n\nThis experience taught me that character encoding must be explicitly considered in all file I/O operations, especially in internationalized environments where accented characters, special symbols, and diverse character sets are common. It's a detail often overlooked in academic projects where test data is typically ASCII-safe, but it becomes critical in real-world deployments.\n\nFurthermore, this incident highlighted the importance of environmental diversity in testing. My development environment happened to use paths without special characters, so the encoding issue never surfaced during testing. A more rigorous testing strategy would have included test cases with internationalized paths, special characters, and edge cases beyond typical usage patterns."
					},
					{
						"src": "./assets/images/verifetiquette_visa_validation.jpg",
						"alt": "Figure 3: Technician visa input validation screen",
						"caption": "Figure 3: Technician visa input validation screen",
						"description": "This figure (3) shows the first validation screen where technicians must enter their authorization code (visa). The interface demonstrates user-centered design principles with immediate visual feedback and clear error messaging in French, the users' native language.\n\nThe red error message 'Format incorrect (attendu: 2-3 lettres)' appears when the input doesn't match the expected format—exactly 2 or 3 letters. This represents multiple layers of validation implemented defensively:\n\n1. **Format validation**: Checking that input contains only letters and meets length requirements\n2. **Null/empty validation**: Ensuring the field isn't left blank\n3. **Authorization validation**: Verifying the entered visa exists in the authorized technician list from the configuration file\n\nThis defensive programming approach anticipates all possible user error scenarios—what we call black-box testing thinking. Rather than assuming users will provide correct input, the program explicitly validates every assumption and provides specific, actionable error messages rather than generic failures.\n\nThe Windows Forms interface uses event-driven architecture, with the validation triggered by button click events. This keeps the application responsive and doesn't consume CPU resources while waiting for input. The color-coded feedback system (red for errors, green for success) provides intuitive visual cues that require no technical knowledge to interpret.\n\nFrom a security perspective, the visa validation serves as an audit trail mechanism. Every program execution is tied to a specific authorized technician, creating accountability and enabling investigation if discrepancies are later discovered. The trace file logs both successful visa validations and failed authorization attempts, providing a complete record of access attempts."
					},
					{
						"src": "./assets/images/verifetiquette_barcode_scan.jpg",
						"alt": "Figure 4: Request form barcode scanning interface",
						"caption": "Figure 4: Request form barcode scanning interface",
						"description": "This figure (4) displays the barcode scanning interface where technicians scan the request form's 11-digit code. The interface shows the technician's validated visa ('Technicien: AB') at the top, providing context and confirmation of the current session.\n\nThe red error message 'Format incorrect (attendu: 11 chiffres)' demonstrates format validation for the barcode input. The program expects exactly 11 numeric digits, and any deviation triggers immediate feedback. This example shows a common user error—entering text instead of numbers or incorrect length.\n\nThis interface leverages hardware barcode scanners that automatically 'type' scanned codes into text fields, eliminating manual entry and significantly reducing transcription errors. The entire scanning operation takes only seconds, but the program validates the input before proceeding.\n\nThe 'Valider et Imprimer' (Validate and Print) button triggers multiple sequential operations:\n1. Final barcode format validation\n2. Creation of a trace file entry with timestamp\n3. Label printing via ZPL commands sent to the Zebra printer\n4. File renaming to include the barcode for traceability\n\nThe 'Retour' (Back) and 'Arrêter' (Stop) buttons provide user control, allowing technicians to return to the previous step or cancel the operation entirely. All button clicks are logged in the trace file, including cancellations, creating a complete audit trail even for incomplete operations."
					},
					{
						"src": "./assets/images/verifetiquette_success.jpg",
						"alt": "Figure 5: Successful validation confirmation dialog",
						"caption": "Figure 5: Successful validation confirmation dialog",
						"description": "This figure (5) shows the success confirmation displayed when a paillette barcode is validated correctly. The message 'Code-barre 12345678911 validé et étiquette imprimée' confirms both barcode verification and successful label printing.\n\nThis success screen serves multiple purposes beyond simple confirmation. It provides psychological reassurance to technicians that the critical verification step completed successfully. In high-stakes environments like biobanks where sample mislabeling could have serious consequences, this explicit confirmation reduces anxiety and builds trust in the automated system.\n\nThe 'OK' button allows technicians to proceed to the next paillette verification or complete the process. The program tracks how many paillettes need verification (based on the quantity specified in the request form) and automatically terminates when all checks pass successfully.\n\nFrom a user experience perspective, the simple, clear messaging in French ensures accessibility for all biobank staff regardless of technical background. The color coding (green background visible in the original interface) provides immediate visual confirmation even before reading the text."
					},
					{
						"src": "./assets/images/verifetiquette_final_success.jpg",
						"alt": "Figure 6: Final process completion confirmation",
						"caption": "Figure 6: Final process completion confirmation",
						"description": "This figure (6) displays the final success screen when the entire verification process completes successfully. The 'Processus terminé avec succès!' message confirms that all steps—visa validation, form barcode verification, label printing, paillette barcode checks—have passed.\n\nCrucially, this screen displays the trace file path: 'Fichier trace: C:\\Logs\\trace_biotheque_20260119_095437.txt'. This serves as knowledge transfer, teaching users where to find operation logs for their own troubleshooting or audit purposes. Rather than creating dependency on IT support for log access, users can independently locate and review trace files if questions arise later.\n\nThe timestamp-based file naming convention (YYYYMMDD_HHMMSS) ensures unique trace files for each operation and provides chronological organization. This systematic naming allows easy searching and prevents file overwrites.\n\nThe 'Valider et Terminer' (Validate and Finish) button triggers final operations:\n1. Recording the successful completion timestamp in the trace file\n2. Attaching the printed label to the request form (manual step by technician)\n3. Closing the application gracefully\n4. Saving all trace data to disk\n\nThe green success indicator provides final visual confirmation that the sample verification completed correctly and the paillettes can safely proceed to storage."
					},
					{
						"src": "./assets/images/verifetiquette_code.jpg",
						"alt": "Figure 7: Event-driven barcode validation implementation",
						"caption": "Figure 7: Event-driven barcode validation implementation",
						"description": "This figure (7) shows the PowerShell code implementing event-driven validation using the TextChanged event. This approach enables automatic processing as soon as the barcode scanner inputs data, eliminating the need for technicians to manually click validation buttons.\n\nThe code demonstrates several important programming practices:\n\n**Event-driven architecture**: The `Add_TextChanged` event handler responds immediately when text appears in the input field. Since barcode scanners automatically 'type' scanned codes, this creates a seamless workflow—scan the barcode, validation happens automatically.\n\n**Input validation layers**: Multiple checks ensure data integrity:\n```powershell\nif ([string]::IsNullOrWhiteSpace($txtCodeBarre.Text)) { return }\nif ($txtCodeBarre.Text.Length -ne 11) { /* error handling */ }\nif (-not ($txtCodeBarre.Text -match '^[0-9]+$')) { /* error handling */ }\n```\n\nThese checks validate that input exists, has correct length (11 digits), and contains only numeric characters. Each validation failure triggers specific error messages displayed in red on the interface.\n\n**Visual feedback system**: The code modifies UI element colors and text to provide immediate feedback:\n```powershell\n$lblStatut.ForeColor = [System.Drawing.Color]::Red  # Errors in red\n$lblStatut.ForeColor = [System.Drawing.Color]::Green  # Success in green\n```\n\nThis color-coded system requires no technical knowledge to interpret—red means error, green means success. The messages are in French, ensuring accessibility for all biobank staff.\n\n**Comparison logic**: The code compares the scanned paillette barcode against the previously validated form barcode to ensure correspondence. This is the core security feature preventing mismatched samples from entering storage.\n\nHowever, this implementation could be improved. The validation logic is somewhat repetitive across different input fields (visa, form barcode, paillette barcodes). Refactoring this into a reusable validation function would reduce code duplication and improve maintainability. Additionally, the lack of formal unit tests means these validation paths were tested manually rather than through automated test suites."
					},
					{
						"src": "./assets/images/verifetiquette_trace.jpg",
						"alt": "Figure 8: Trace file logging all operations and events",
						"caption": "Figure 8: Trace file logging all operations and events",
						"description": "This figure (8) shows an excerpt from a trace file that logs every operation, event, and error during program execution. Each line includes a timestamp in the format [DD/MM/YYYY HH:MM:SS] followed by a description of the event.\n\nThe log demonstrates comprehensive traceability:\n\n**Program lifecycle tracking**:\n- `[10/12/2025 10:34:10] Démarrage du programme` - Program start\n- `[10/12/2025 10:39:00] Programme terminé` - Program completion\n\n**Security validation attempts**:\n- `[10/12/2025 10:34:13] Visa non autorisé: ZZ` - Unauthorized visa attempt\n- `[10/12/2025 10:34:18] Visa incorrect: SDUIFGH` - Invalid format\n- `[10/12/2025 10:34:25] Visa incorrect: 1564856` - Numbers instead of letters\n- `[10/12/2025 10:34:29] Visa incorrect: **` - Special characters\n\nThese failed attempts demonstrate that the validation system is working correctly, rejecting various types of invalid input. For a regulated biobank environment, this audit trail proves that security controls are functioning.\n\n**Successful operations**:\n- `[10/12/2025 10:34:36] Validation visa technicien: OK - IR` - Authorized visa accepted\n- `[10/12/2025 10:38:53] Code-barre formulaire: 12345678911` - Form barcode recorded\n- `[10/12/2025 10:38:55] Impression ZPL envoyée avec succès à ZDesigner ZD411-203dpi ZPL` - Successful label printing\n\n**User interactions**:\n- `[10/12/2025 10:39:00] Programme annulé par l'utilisateur à l'étape Vérification` - User-initiated cancellation\n\nThis logging strategy provides complete visibility into program execution. For ISO compliance and quality management in medical contexts, this traceability is essential. If questions arise about a particular sample's handling, administrators can review the trace file to see exactly what occurred, when, and by which technician.\n\nThe trace file implementation (shown in Figure 9) includes robust error handling to ensure logging never fails silently. If the trace directory doesn't exist, it's created automatically. If write permissions are insufficient, clear error messages alert the user.\n\nHowever, there are opportunities for improvement. Currently, trace files are plain text without rotation or archiving strategy. Over time, these could accumulate significantly. A better approach would implement:\n- **Log rotation**: Archiving files older than a specified period\n- **Maximum file size limits**: Automatic rollover when files exceed thresholds\n- **Log levels**: INFO, WARNING, ERROR categories for filtering\n- **Structured format**: JSON or CSV instead of plain text for easier analysis with tools\n\nAdditionally, all logs are stored locally or on network drives, but there's no centralized log aggregation. In a multi-workstation deployment, administrators would need to check each machine's logs individually rather than having a unified view."
					},
					{
						"src": "./assets/images/verifetiquette_validation_code.jpg",
						"alt": "Figure 9: Input validation logic with defensive programming",
						"caption": "Figure 9: Input validation logic with defensive programming",
						"description": "This figure (9) shows the validation button click handler implementing multiple defensive programming layers. The code checks for various error conditions before allowing the process to proceed.\n\n**Null and whitespace validation**:\n```powershell\nif ([string]::IsNullOrWhiteSpace($txtVisa.Text)) {\n    $lblStatut.ForeColor = [System.Drawing.Color]::Red\n    $lblStatut.Text = \"Le visa ne peut pas être vide\"\n    return\n}\n```\nThis prevents empty or whitespace-only input, a common user error.\n\n**Format validation**:\n```powershell\nif (-not (Valider-FormatVisa $txtVisa.Text)) {\n    $lblStatut.Text = \"Format incorrect (attendu: 2-3 lettres)\"\n    $lblStatut.ForeColor = [System.Drawing.Color]::Red\n    Ecrire-Trace \"Visa incorrect: $($txtVisa.Text)\"\n    return\n}\n```\nThis calls a separate validation function checking that input matches the expected format (2-3 letters only). Failed validations are logged to the trace file for security auditing.\n\n**Authorization validation**:\n```powershell\nif (-not (Valider-visaTechnicien $txtVisa.Text)) {\n    $lblStatut.Text = \"Visa non autorisé (pas dans la liste)\"\n    $lblStatut.ForeColor = [System.Drawing.Color]::Red\n    Ecrire-Trace \"Visa non autorisé: $($txtVisa.Text)\"\n    return\n}\n```\nThis verifies the entered visa exists in the authorized technician list from the configuration file. Unauthorized access attempts are logged.\n\n**Success path**:\n```powershell\nAfficher-MessageOK \"Visa du technicien: OK - $script:visaTechnicien\"\n$form.DialogResult = [System.Windows.Forms.DialogResult]::OK\n$form.Close()\n```\nOnly after passing all validation layers does the program display success confirmation, log the successful validation, and close the dialog to proceed.\n\nThis defensive approach implements what's called the \"fail-fast\" principle—detecting and reporting errors as early as possible rather than allowing invalid data to propagate through the system. Each validation returns immediately upon detecting an error, avoiding unnecessary processing.\n\nThe code also demonstrates separation of concerns by calling dedicated validation functions (`Valider-FormatVisa`, `Valider-visaTechnicien`) rather than implementing all logic inline. This improves readability and reusability.\n\nHowever, the validation logic is somewhat repetitive across different input fields. The visa validation, form barcode validation, and paillette barcode validation all follow similar patterns. Refactoring into a generic validation function with configurable rules would reduce code duplication:\n```powershell\nfunction Valider-Input($text, $pattern, $errorMessage) { /* generic validation */ }\n```\n\nAdditionally, while the validation catches many error types, there's no automated test suite verifying these paths. The validation was tested manually during development, but without unit tests, future modifications risk breaking existing validation logic without detection."
					},
					{
						"src": "./assets/images/verifetiquette_initialisation.jpg",
						"alt": "Figure 10: Trace file initialization with comprehensive error handling",
						"caption": "Figure 10: Trace file initialization with comprehensive error handling",
						"description": "This figure (10) shows the `Initialiser-CheminTrace` function responsible for setting up the trace logging system. This initialization occurs at program startup and includes extensive error handling to ensure logging capability before any operations begin.\n\n**Configuration file validation**:\n```powershell\nif ($script:contenuConfig -match 'CheminFichierTrace\\s*=\\s*\"([^\"]+)\"') {\n    $script:cheminDossierTrace = $matches[1].Trim()\n} else {\n    throw \"CheminFichierTrace introuvable dans le fichier configuration\"\n}\n```\nThis uses regex pattern matching to extract the trace directory path from the configuration file. If the configuration is missing or malformed, an exception is thrown immediately—implementing the fail-fast principle.\n\n**Path validation and directory creation**:\n```powershell\n$lecteur = Split-Path $script:cheminDossierTrace -Qualifier\nif (-not (Test-Path $lecteur)) {\n    throw \"Le lecteur $lecteur n'existe pas ou n'est pas accessible. Vérifiez que le disque est connecté.\"\n}\n\nif (-not (Test-Path $script:cheminDossierTrace)) {\n    try {\n        New-Item -Path $script:cheminDossierTrace -ItemType Directory -Force -ErrorAction Stop | Out-Null\n        Write-Host \"Dossier créé: $script:cheminDossierTrace\" -ForegroundColor Green\n    } catch {\n        throw \"Impossible de créer le dossier $script:cheminDossierTrace : $($_.Exception.Message)\"\n    }\n}\n```\n\nThis code demonstrates several defensive programming practices:\n1. **Drive accessibility check**: Verifies the storage location exists before attempting directory creation\n2. **Automatic directory creation**: Creates missing directories rather than failing\n3. **Exception handling**: Catches and re-throws errors with context-specific messages\n4. **Force parameter**: Ensures directory creation succeeds even if parent directories don't exist\n\n**Write permission testing**:\n```powershell\n$fichierTest = Join-Path -Path $script:cheminDossierTrace -ChildPath \"test_permissions_$(Get-Date -Format 'HHmmss').tmp\"\ntry {\n    \"test\" | Out-File -FilePath $fichierTest -ErrorAction Stop\n    Remove-Item $fichierTest -Force -ErrorAction SilentlyContinue\n} catch {\n    throw \"Pas de permissions d'écriture dans $script:cheminDossierTrace : $($_.Exception.Message)\"\n}\n```\n\nBefore proceeding, the function creates a temporary test file to verify write permissions. This proactive check prevents the program from running only to fail later when attempting to write logs. The temporary file is immediately deleted after successful creation.\n\n**Trace file naming and initialization**:\n```powershell\n$script:dateFichierTrace = Get-Date -Format 'ddMMyyyy_HHmmss'\n$script:cheminFichierTraceTemporaire = Join-Path -Path $script:cheminDossierTrace -ChildPath \"Biotheque_temp_$($script:dateFichierTrace).txt\"\nEcrire-Trace \"Chemin trace initialisé: $script:cheminFichierTraceTemporaire\" -ForegroundColor Green\nreturn $true\n```\n\nThe timestamp-based naming convention ensures unique trace files for each program execution, preventing overwrites and providing chronological organization.\n\n**Critical reflection on this implementation**:\n\nWhat worked well:\n- Comprehensive validation before proceeding\n- Automatic directory creation reduces manual setup\n- Clear error messages guide troubleshooting\n- Permission testing prevents silent failures\n\nWhat could be improved:\n- The function handles many responsibilities (validation, creation, testing). Following the Single Responsibility Principle, this could be split into smaller, focused functions.\n- Error messages are in French while code comments are minimal. For international collaboration or open-source sharing, English error messages would be more appropriate, or implementing localization support.\n- The regex pattern for configuration parsing is fragile. A dedicated INI parsing library would be more robust.\n- There's no logging rotation or archiving strategy implemented, which could lead to disk space issues over time.\n\nThis UTF-8 encoding issue mentioned earlier occurred in this initialization function. The `Get-Content` command reading the configuration file didn't specify encoding explicitly, causing paths with accented characters to be corrupted. The fix required:\n```powershell\n$script:contenuConfig = Get-Content -Path $fichierConfig -Encoding UTF8 -Raw\n```\n\nThis experience highlighted that character encoding must be explicitly considered in all file I/O operations, not just when writing multilingual content."
					}
				]
			},
			  
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