/**
 * Digital Portfolio CNS - Lê Bảo Anh Thư
 * Class: VNU1001_E252068 | Khóa QH2025S
 * Interactive Tab Navigation & Smooth Transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  function activateSection(targetId) {
    // Deactivate all
    sections.forEach(s => s.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));

    // Activate target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    // Activate corresponding nav item
    const targetNav = document.getElementById('nav-' + targetId);
    if (targetNav) {
      targetNav.classList.add('active');
    }

    // Scroll main content to top
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Navigation click handlers
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        activateSection(targetId);
      }
    });
  });

  // Initialize with intro section active
  activateSection('intro');

  // Add hover effect to task cards
  document.querySelectorAll('.task-card, .intro-box, .step-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.28s cubic-bezier(0.4,0,0.2,1), box-shadow 0.28s cubic-bezier(0.4,0,0.2,1)';
    });
  });

  // Add table row hover highlight
  document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.transition = 'background 0.18s ease';
    });
  });

  console.log('✨ Portfolio Lê Bảo Anh Thư initialized successfully!');
});
