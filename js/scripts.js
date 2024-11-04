document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const href = button.getAttribute('href');
  
      // Add your animation code here
  
      // After animation ends, redirect to the new page
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Adjust timing to match your animation
    });
  });
  