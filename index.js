
function showSurprise() {
    alert('🎊 Magical Surprise! 🎊\nThank you so much for visiting this website');
    startConfetti();
}

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF4500', '#FF69B4'];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createConfettiParticle() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function animateConfetti() {
        requestAnimationFrame(animateConfetti);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 200; i++) { // Adjusted the number of particles for slower animation
            createConfettiParticle();
        }
    }

    animateConfetti();
}
function showPopup() {
    var confirmation = confirm("Will you buy Abhinav a smartwatch");
   
    if (confirmation) {
      var confirmation1 = confirm("Thanks")
if (confirmation1) {

}
    } else {

        var confirmation1 = confirm("Please buy him the watch")
       
        if (confirmation1) {
       
            var confirmation1 = confirm("Thanks")
       
        } else {
       
            window.close()
        }

       
    }
}

// Automatically show the pop-up when the page loads
window.onload = showPopup;why;