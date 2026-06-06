/**
 * Digital Portfolio CNS - Lê Bảo Anh Thư
 * Class: VNU1001_E252068 | Khóa QH2025S
 * Interactive Navigation Routing & Smooth Page Scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  function activateSection(targetId) {
    // Check if target section exists
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    // Deactivate all sections and nav links
    sections.forEach(s => s.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));

    // Activate target section
    targetSection.classList.add('active');

    // Activate corresponding nav item in the top header
    const targetNav = document.getElementById('nav-' + targetId);
    if (targetNav) {
      targetNav.classList.add('active');
    }

    // Scroll window smoothly to the top (sticky header stays at top)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Bind click handlers to all anchor tags with internal hash links
  const clickableLinks = document.querySelectorAll('.nav-item, .cta-btn, .preview-link-btn, .site-logo');
  clickableLinks.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        activateSection(targetId);
      }
    });
  });

  // Initialize with intro section active on page load
  activateSection('intro');

  // Interactive Micro-animations for Cards
  const cards = document.querySelectorAll('.task-card, .intro-box, .stat-card, .preview-link-card, .learn-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-3px)';
      card.style.boxShadow = '0 12px 32px rgba(90, 78, 122, 0.12)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
      card.style.boxShadow = 'none';
    });
  });

  console.log('✨ Restructured Google Sites Format Portfolio for Lê Bảo Anh Thư initialized successfully!');
});
