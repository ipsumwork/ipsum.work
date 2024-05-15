

  function updateSizeAndLineHeight(newVal, id, valueId) {
  var newFontSize = newVal + "px";
  var newLineHeight = newVal * 1.2 + "px";
  document
    .getElementById(id)
    .getElementsByClassName("sample")[0].style.fontSize = newFontSize;
  document
    .getElementById(id)
    .getElementsByClassName("sample")[0].style.lineHeight = newLineHeight;
  document.getElementById(valueId).textContent = newVal;
}

function updateFont(newVal, id) {
  document
    .getElementById(id)
    .getElementsByClassName("sample")[0].style.fontFamily = newVal;
}

function updateWeight(newVal, id, valueId) {
  document
    .getElementById(id)
    .getElementsByClassName("sample")[0].style.fontWeight = newVal;
  document.getElementById(valueId).textContent = newVal;
 
}

function updateRelativexadvance(value, elementId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'rxad' " + value;
}

function updateOpticalsize(value, elementId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'opsz' " + value;
}
function updateItalic(value, elementId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'ital' " + value;
}
function updateSlant(value, elementId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'slnt' " + value;
}

function updateWidth(newVal, id, valueId) {
  var newWidth = newVal + "%";
  document
    .getElementById(id)
    .getElementsByClassName("sample")[0].style.transform =
    "scaleX(" + newVal / 100 + ")";
  document
    .getElementById(id)
    .getElementsByClassName("sample")[0].style.transformOrigin = "left";
  document.getElementById(valueId).textContent = newVal;
}
function toggleSlantItalic(elementId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  const currentSettings = sampleElement.style.fontVariationSettings || "'slnt' 0, 'ital' 0, 'opsz' 400";
  const isSlanted = currentSettings.includes('slnt 100');
  const isItalic = currentSettings.includes('ital 100');

  let newSettings;
  if (isSlanted && !isItalic) {
    // If currently slanted, but not italic, switch to italic
    newSettings = currentSettings.replace(/'slnt'\s*\d+/, "'ital' 100");
  } else if (!isSlanted && isItalic) {
    // If currently italic, but not slanted, switch to slanted
    newSettings = currentSettings.replace(/'ital'\s*\d+/, "'slnt' 100");
  } else if (isSlanted && isItalic) {
    // If both slanted and italic, switch to neither
    newSettings = currentSettings.replace(/'slnt'\s*\d+/, "'slnt' 0").replace(/'ital'\s*\d+/, "'ital' 0");
  } else {
    // If neither slanted nor italic, switch to slanted
    newSettings = currentSettings.replace(/'slnt'\s*\d+/, "'slnt' 100");
  }

  sampleElement.style.fontVariationSettings = newSettings;
}

function updateOpticalsize(value, elementId, valueId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'opsz' " + value;
  document.getElementById(valueId).textContent = value;
}

function updateItalic(value, elementId, valueId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'ital' " + value;
  document.getElementById(valueId).textContent = value;
}

function updateSlant(value, elementId, valueId) {
  const sampleElement = document.getElementById(elementId).querySelector('.sample');
  sampleElement.style.fontVariationSettings = "'slnt' " + value;
  document.getElementById(valueId).textContent = value;
}



function toggleDarkMode() {
  var body = document.body;
  var samples = document.querySelectorAll(".sample");
  var sliderThumbs = document.querySelectorAll(".slider::-webkit-slider-thumb");
  var header = document.querySelectorAll(".header-text");
  var about = document.querySelectorAll(".about-text");
  var colors = document.querySelectorAll(".color");
  var reset = document.querySelectorAll("#resetButton");

  // Toggle the 'dark-mode' class on the body
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    // Dark mode is enabled, use white text
    samples.forEach(function (sample) {
      sample.style.color = "white";
      sample.classList.add("dark-mode");
    });
  } else {
    // Dark mode is disabled, use black text
    samples.forEach(function (sample) {
      sample.style.color = "black";
      sample.classList.remove("dark-mode");
    });
  }

  sliderThumbs.forEach(function (thumb) {
    thumb.classList.toggle("dark-mode");
  });
  
    colors.forEach(function (color) {
    color.classList.toggle("dark-mode");
  });

  // Toggle a 'dark-mode' flag in local storage
  var isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkMode);
}


const lightSampleColors = ["black", "#0000ff", "#ff0000", "#1AF80E"];
const darkSampleColors = ["white", "#0000ff", "#ff0000", "#1AF80E"];
let sampleColorIndex = 0;

function toggleColorSample() {
  const body = document.body;
  const samples = document.querySelectorAll(".sample");
  const colors = document.querySelectorAll(".color");

  if (body.classList.contains("dark-mode")) {
    // Dark mode is enabled, use dark colors
    for (const sample of samples) {
      sample.style.color = darkSampleColors[sampleColorIndex];
    }
    for (const color of colors) {
      color.style.backgroundColor = darkSampleColors[sampleColorIndex];
    }
  } else {
    // Dark mode is not enabled, use light colors
    for (const sample of samples) {
      sample.style.color = lightSampleColors[sampleColorIndex];
    }
    for (const color of colors) {
      color.style.backgroundColor = lightSampleColors[sampleColorIndex];
    }
  }

  sampleColorIndex = (sampleColorIndex + 1) % lightSampleColors.length;
}


document.addEventListener('DOMContentLoaded', function() {
  // Get the overlay and buttons
  var overlay = document.getElementById('overlay');
  var openBtn = document.getElementById('openOverlayBtn');
  var closeBtn = document.getElementById('closeOverlayBtn');

  // Open the overlay when the open button is clicked
  openBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
  });

  // Close the overlay when the close button is clicked
  closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
  });

  // Close the overlay when clicking outside the overlay content
  window.addEventListener('click', function(event) {
    if (event.target === overlay) {
      overlay.style.display = 'none';
    }
  });

  // Prevent the overlay from closing when clicking inside the overlay content
  document.getElementById('overlay').addEventListener('click', function(event){
    event.stopPropagation();
  });

  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Here you can add code to handle form submission, such as sending the data to a server
    // For demonstration purposes, we'll just log the form data
    var formData = new FormData(this);
    console.log('Form data:', formData);
    // Close the overlay
    overlay.style.display = 'none';
  });
});

  // Add click event listener to overlay to close it when clicked outside
  overlay.addEventListener("click", closeOverlay);