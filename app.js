let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])


nextBtn.onclick = function() {
    moveSlider('next')
}


 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true})
}



window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    if (window.scrollY > 100) {
      menu.style.opacity = '0';
    } else {
      menu.style.opacity = '1';
    }
  });
  
  var menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      this.querySelector('img').style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseout', function() {
      this.querySelector('img').style.transform = 'scale(1)';
    });
  });
  


  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.background = "rgba(0,0,0,0.6)";
        header.style.backdropFilter = "blur(5px)"; 
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none"; 
    }
});



document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector('.grid2');
  var iso = new Isotope(grid, {
      itemSelector: '.item2',
      layoutMode: 'fitRows'
  });

  var filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          var filterValue = button.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
      });
  });
});






function countTo(target, element) {
  var current = 0;
  var increment = Math.ceil(target / 100);

  var timer = setInterval(function() {
      current += increment;
      if (current > target) {
          clearInterval(timer);
          current = target;
      }
      element.textContent = current;
  }, 50); 
}


var totalProjects = document.getElementById('totalProjects');
var satisfiedClients = document.getElementById('satisfiedClients');
var awardsWon = document.getElementById('awardsWon');
var milestonesMet = document.getElementById('milestonesMet');

countTo(505, totalProjects);
countTo(220, satisfiedClients);
countTo(720, awardsWon);
countTo(707, milestonesMet);






$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})



ScrollReveal().reveal('.box', {
  delay: 300,
  duration: 1000,
  distance: '20px',
  origin: 'bottom',
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 200
});


var messengerButton = document.getElementById("messengerButton");
  var messengerPopup = document.getElementById("messengerPopup");

  messengerButton.addEventListener("click", function() {
    messengerPopup.classList.toggle("show");
  });





