 
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    menuToggle.addEventListener("click", () => nav.classList.toggle("active"));

    
    const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(sec => {
        if(sec.getBoundingClientRect().top < trigger) sec.classList.add("visible");
      });

      
      document.querySelectorAll(".progress-bar").forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < trigger) {
          bar.style.width = bar.getAttribute("data-skill");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
