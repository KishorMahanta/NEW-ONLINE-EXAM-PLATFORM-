const featuredExams = document.querySelector('.featured-exams ul');
let currentSlide = 0;

function slideExams() {
  featuredExams.style.transform = `translateX(-${currentSlide * 200}px)`;
}

setInterval(function() {
  currentSlide++;
  if (currentSlide >= featuredExams.children.length) {
    currentSlide = 0;
  }
  slideExams();
}, 3000);