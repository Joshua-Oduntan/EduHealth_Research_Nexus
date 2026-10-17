document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Focus Areas Filter Functionality ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const focusCards = document.querySelectorAll('.focus-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      focusCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // --- 2. Core Values Tooltip Functionality ---
  const valueBoxes = document.querySelectorAll('.value-box');
  const tooltip = document.getElementById('value-tooltip');

  if (tooltip) {
    valueBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        const text = box.getAttribute('data-tooltip');
        tooltip.textContent = text;
        tooltip.classList.add('visible');
      });

      box.addEventListener('mousemove', (e) => {
        const tooltipX = e.pageX - (tooltip.offsetWidth / 2);
        const tooltipY = e.pageY - tooltip.offsetHeight - 15;
        
        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
      });

      box.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
      });
    });
  }
});