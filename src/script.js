const { createApp, mounted } = Vue;

createApp({
  data() {
    return {
      name: "Suzanne Deloffre",
      navItems: [
        { label: "A propos", link: "#about" },
        { label: "Compétences", link: "#skills" },
        { label: "Projets", link: "#projects" },
      ],
      welcomeTitle: "Bienvenue sur mon Portfolio",
      welcomeText: "L'univers numérique d'une étudiante en première année de BUT informatique !",
      aboutText: "Je suis passionnée par l'informatique et le développement.",
      softSkills: "Travail d'équipe, créativité, adaptabilité, curiosité",
      skills: [
        { title: "Développement Web", items: ["HTML", "CSS", "JavaScript"] },
        { title: "Frameworks", items: ["Vue.js", "Bootstrap"] },
        { title: "Outils", items: ["Git", "VS Code"] }
      ],
      projects: [
        { title: "Projet 1", image: "image1.jpg" },
        { title: "Projet 2", image: "image2.jpg" },
        { title: "Projet 3", image: "image3.jpg" },
        { title: "Projet 4", image: "image4.jpg" },
        { title: "Projet 5", image: "image5.jpg" },
      ],
	  hoveredProject: null,
      hoveredIndex: null,
      containerWidth: 800,
      containerHeight: 600,
      isPageTurning: false
    };
  },
  mounted() {
    this.initGrimoire();
	this.initStars();
  },
  initGrimoire() {
	const canvas = document.getElementById('grimoire');
	const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
	renderer.setSize(canvas.width, canvas.height);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
	camera.position.z = 5;

	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0, 0, 10);
	scene.add(light);

	const coverGeometry = new THREE.BoxGeometry(3.2, 4.5, 0.2);
	const coverMaterial = new THREE.MeshPhongMaterial({ color: 0x6b4226 });
	const cover = new THREE.Mesh(coverGeometry, coverMaterial);
	scene.add(cover);

	const pageGeometry = new THREE.PlaneGeometry(3, 4.3);
	const canvasPage = document.createElement("canvas");
	canvasPage.width = 512;
	canvasPage.height = 720;
	const ctx = canvasPage.getContext("2d");

	const updateCanvas = () => {
	  ctx.fillStyle = "#fff8dc";
	  ctx.fillRect(0, 0, canvasPage.width, canvasPage.height);
	  ctx.fillStyle = "#000";
	  ctx.font = "24px serif";

	  const lines = this.aboutText.split("\n");
	  lines.forEach((line, i) => {
		ctx.fillText(line, 20, 50 + i * 30);
	  });

	  if (pageMaterial.map) pageMaterial.map.needsUpdate = true;
	};

	updateCanvas();

	const texture = new THREE.CanvasTexture(canvasPage);
	const pageMaterial = new THREE.MeshBasicMaterial({
	  map: texture,
	  side: THREE.DoubleSide
	});

	const page = new THREE.Mesh(pageGeometry, pageMaterial);
	page.position.z = 0.11;
	page.geometry.translate(-1.5, 0, 0);
	scene.add(page);

	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2();

	canvas.addEventListener("click", (event) => {
	  const rect = canvas.getBoundingClientRect();
	  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
	  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
	  raycaster.setFromCamera(mouse, camera);
	  const intersects = raycaster.intersectObject(page);
	  if (intersects.length > 0 && !this.isPageTurning) {
		this.isPageTurning = true;
	  }
	});

	const animate = () => {
	  requestAnimationFrame(animate);

	  if (this.isPageTurning) {
		page.rotation.y += 0.05;
		if (page.rotation.y > Math.PI / 2) {
		  page.rotation.y = 0;
		  this.isPageTurning = false;
		}
	  }

	  renderer.render(scene, camera);
	};

	animate();
  },

  initStars() {
	const canvas = document.getElementById('stars');
	const width = canvas.width;
	const height = canvas.height;

	this.starScene = new THREE.Scene();
	this.starCamera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
	this.starCamera.position.z = 15;

	this.starRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
	this.starRenderer.setSize(width, height);

	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0, 1, 1);
	this.starScene.add(light);

	const starGeometry = new THREE.IcosahedronGeometry(1.5, 0);
	const loader = new THREE.TextureLoader();

	this.stars = [];

	this.projects.forEach((proj, i) => {
	  const texture = loader.load(proj.image);
	  const material = new THREE.MeshPhongMaterial({ map: texture });
	  const star = new THREE.Mesh(starGeometry, material);
	  star.position.x = (i - (this.projects.length - 1) / 2) * 5;
	  star.userData = { project: proj, index: i };
	  this.starScene.add(star);
	  this.stars.push(star);
	});

	this.starRaycaster = new THREE.Raycaster();
	this.starMouse = new THREE.Vector2();

	this.starRenderer.domElement.addEventListener("mousemove", this.onStarMouseMove);
	this.starRenderer.domElement.addEventListener("mouseleave", this.onStarMouseLeave);
	this.starRenderer.domElement.addEventListener("click", this.onStarClick);

	const animateStars = () => {
	  requestAnimationFrame(animateStars);

	  this.stars.forEach((star, i) => {
		if (i !== this.hoveredIndex) {
		  star.rotation.x += 0.01;
		  star.rotation.y += 0.01;
		}
	  });

	  this.starRenderer.render(this.starScene, this.starCamera);
	};

	animateStars();
  },

  onStarMouseMove(event) {
	const rect = this.starRenderer.domElement.getBoundingClientRect();
	this.starMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
	this.starMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

	this.starRaycaster.setFromCamera(this.starMouse, this.starCamera);
	const intersects = this.starRaycaster.intersectObjects(this.stars);

	if (intersects.length > 0) {
	  const star = intersects[0].object;
	  if (this.hoveredIndex !== star.userData.index) {
		this.hoveredIndex = star.userData.index;
		this.hoveredProject = star.userData.project;
	  }
	} else {
	  this.hoveredProject = null;
	  this.hoveredIndex = null;
	}
  },

  onStarMouseLeave() {
	this.hoveredProject = null;
	this.hoveredIndex = null;
  },

  onStarClick() {
	if (this.hoveredProject && this.hoveredProject.url) {
	  window.open(this.hoveredProject.url, "_blank");
	}
  }

}).mount("#app");
