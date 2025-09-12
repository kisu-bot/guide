// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Add animation on scroll for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all major sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    "section, .feature-card, .step, .faq-item, .help-item"
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});

// Copy code to clipboard functionality
document.querySelectorAll("code").forEach((codeBlock) => {
  // Only add click functionality to standalone code blocks, not inline ones
  if (
    codeBlock.parentElement.classList.contains("code-block") ||
    codeBlock.textContent.includes("ksw")
  ) {
    codeBlock.style.cursor = "pointer";
    codeBlock.title = "Click to copy";

    codeBlock.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);

        // Visual feedback
        const original = codeBlock.style.background;
        codeBlock.style.background = "#d4edda";
        codeBlock.style.color = "#155724";

        setTimeout(() => {
          codeBlock.style.background = original;
          codeBlock.style.color = "";
        }, 500);
      } catch (err) {
        console.log("Failed to copy text: ", err);
      }
    });
  }
});

// Add loading animation for external links
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const rate = scrolled * -0.5;

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Mobile menu toggle (simple implementation)
function createMobileMenu() {
  const navbar = document.querySelector(".navbar");
  const navContainer = document.querySelector(".nav-container");
  const navMenu = document.querySelector(".nav-menu");

  // Create mobile menu button
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.innerHTML = "☰";
  mobileMenuBtn.className = "mobile-menu-btn";
  mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #333;
    `;

  // Add mobile styles
  const mobileStyles = document.createElement("style");
  mobileStyles.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
            
            .nav-menu {
                display: flex !important;
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                transition: transform 0.3s ease;
                z-index: 999;
            }
            
            .nav-menu.active {
                transform: translateY(0);
            }
            
            .nav-menu li {
                margin: 10px 0;
            }
        }
    `;

  document.head.appendChild(mobileStyles);
  navContainer.appendChild(mobileMenuBtn);

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenuBtn.innerHTML = navMenu.classList.contains("active") ? "✕" : "☰";
  });

  // Close mobile menu when clicking on links
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenuBtn.innerHTML = "☰";
    });
  });
}

// Initialize mobile menu
document.addEventListener("DOMContentLoaded", createMobileMenu);
