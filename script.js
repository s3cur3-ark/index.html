// Add the 'show' class to sections when they are in the viewport

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showSection(section) {
  if (isInViewport(section)) {
    section.classList.add('show');
  }
}

var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');

window.addEventListener('scroll', function() {
  showSection(section1);
  showSection(section2);
  showSection(section3);
});

// Optional: Add more JavaScript effects as per your requirements
