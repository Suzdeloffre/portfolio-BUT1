const { createApp, onMounted } = Vue;

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
      isPageTurning: false
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      const container = this.$refs.threeContainer;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(600, 400);
      container.appendChild(renderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 0, 10);
      scene.add(light);

      const coverGeometry = new THREE.BoxGeometry(3.2, 4.5, 0.2);
      const coverMaterial = new THREE.MeshPhongMaterial({ color: 0x6b4226 });
      const cover = new THREE.Mesh(coverGeometry, coverMaterial);
      scene.add(cover);

      const pageGeometry = new THREE.PlaneGeometry(3, 4.3);
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 720;
      const ctx = canvas.getContext("2d");

      const updateCanvas = () => {
        ctx.fillStyle = "#fff8dc";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000";
        ctx.font = "24px serif";

        const lines = this.aboutText.split("\n");
        lines.forEach((line, i) => {
          ctx.fillText(line, 20, 50 + i * 30);
        });

        if (pageMaterial.map) pageMaterial.map.needsUpdate = true;
      };

      updateCanvas();

      const texture = new THREE.CanvasTexture(canvas);
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

      renderer.domElement.addEventListener("click", (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
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
    }
  }
}).mount("#app");
