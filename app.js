// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('May 15, 2025 12:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    
    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      document.getElementById('days').innerText = String(days).padStart(2, '0');
      document.getElementById('hours').innerText = String(hours).padStart(2, '0');
      document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
      document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    } else {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
    }
  }
  
  // Run once on load
  updateCountdown();
  
  // Update every second
  setInterval(updateCountdown, 1000);
  
  // Theme changer
  const themeButtons = document.querySelectorAll('.theme-btn');
  const bgGradient = document.querySelector('.background-gradient');
  const registerBtn = document.querySelector('.register-btn');
  
  themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const primaryColor = this.getAttribute('data-primary');
      const secondaryColor = this.getAttribute('data-secondary');
      
      // Update the CSS variables
      document.documentElement.style.setProperty('--primary-color', primaryColor);
      document.documentElement.style.setProperty('--secondary-color', secondaryColor);
      document.documentElement.style.setProperty('--btn-color', primaryColor);
      
      // Update the background gradient
      bgGradient.style.background = `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`;
      
      // Update the register button
      registerBtn.style.backgroundColor = primaryColor;
    });
  });
  
  // Register button effect
  const registerButton = document.querySelector('.register-btn');
  registerButton.addEventListener('click', function() {
    alert('Registration will be available soon!');
  });
  
  // Additional poster animation
  const poster = document.querySelector('.poster');
  poster.addEventListener('mousemove', function(e) {
    const rect = poster.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xRotation = ((y - rect.height / 2) / rect.height) * 10;
    const yRotation = ((x - rect.width / 2) / rect.width) * -10;
    
    poster.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });
  
  poster.addEventListener('mouseout', function() {
    poster.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setTimeout(function() {
      poster.style.transform = '';
    }, 300);
  });
  
  // Dynamic background color change function (uncomment to enable automatic changes)
  function changeBackground() {
    const themes = [
      { primary: '#ff7e5f', secondary: '#feb47b' },
      { primary: '#7f7fd5', secondary: '#91eae4' },
      { primary: '#654ea3', secondary: '#eaafc8' },
      { primary: '#11998e', secondary: '#38ef7d' }
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
      currentIndex = (currentIndex + 1) % themes.length;
      const { primary, secondary } = themes[currentIndex];
      
      bgGradient.style.background = `linear-gradient(45deg, ${primary}, ${secondary})`;
    }, 30000); // Change every 30 seconds
  }
  
  // Uncomment to enable automatic background changes
  // changeBackground();
  
  // Add event listeners when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    updateCountdown();
  });