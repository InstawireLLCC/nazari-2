// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';



// document.addEventListener('DOMContentLoaded', (event) => {
//     const elements = document.body.getElementsByTagName('*');
//     for(let i = 0; i < elements.length; i++){
//         elements[i].style.opacity = 0;
//     }
//     setTimeout(() => {
//         for(let i = 0; i < elements.length; i++){
//             elements[i].style.transition = "opacity 1s";
//             elements[i].style.opacity = 1;
//         }
//     }, 500); // Start animation 500ms after DOM is loaded
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//   const elements = document.body.getElementsByTagName('*');
//   const delay = 25; // Adjust the delay between element animations

//   for (let i = 0; i < elements.length; i++) {
//       if (isElementInViewport(elements[i])) {
//         if (!isDescendant(elements[i], document.querySelector('.navbar'))) { 
//           elements[i].style.opacity = 0;
//           elements[i].style.transform = "scale(0.5)";
//           elements[i].style.transition = "opacity 0.5s, transform 0.5s";
//       }}
//   }

//   for (let i = 0; i < elements.length; i++) {
//       if (isElementInViewport(elements[i])) {
//         if (!isDescendant(elements[i], document.querySelector('.navbar'))) { 
          
//           setTimeout(() => {
//               elements[i].style.opacity = 1;
//               elements[i].style.transform = "scale(1)";
//           }, (i * delay) + 500); // Start fading halfway through (after 500ms)
//       }}
//   }
// });

// // Function to check if an element is in the viewport
// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }


// // Function to check if an element is a descendant of another element
// function isDescendant(element, ancestor) {
//   let node = element.parentNode;
//   while (node != null) {
//       if (node == ancestor) {
//           return true;
//       }
//       node = node.parentNode;
//   }
//   return false;
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const elements = document.body.getElementsByTagName('*');
//   const navbar = document.querySelector('.navbar');
//   const animatedElements = document.querySelectorAll('.animation');

//   // Define a function to check if an element is a descendant of a target element
//   function isDescendant(element, ancestor) {
//     while (element) {
//       if (element === ancestor) {
//         return true;
//       }
//       element = element.parentElement;
//     }
//     return false;
//   }

//   // Iterate through all elements and add animations to those not descendants of `.navbar`
//   Array.from(elements).forEach(element => {
//     if (!isDescendant(element, navbar) && !element.classList.contains('animation')) {
//       // Add your animation logic here, for example adding a CSS class
//       element.classList.add('blank');
//       element.classList.add('animation');
//       element.classList.remove('blank'); // Assuming you have a CSS class for animations
//     }
//   });

//   function checkFade() {
//     animatedElements.forEach(element => {
//       if (isElementInViewport(element)) {
//         element.classList.add('scroll-animation');
//       }
//     });
//   }

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   // Initial check when the page loads
//   checkFade();

//   // Check on scroll
//   window.addEventListener('scroll', checkFade);
// });

// const the_animation = document.querySelectorAll('.animation')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-animation')
//         }
//             else {
//                 entry.target.classList.remove('scroll-animation')
//             }
        
//     })
// },
//    { threshold: 0.5
//    });
// //
//   for (let i = 0; i < the_animation.length; i++) {
//    const elements = the_animation[i];

//     observer.observe(elements);
//   } 



// document.addEventListener('DOMContentLoaded', (event) => {
//   const elements = document.body.getElementsByTagName('*');
//   const delay = 100; // Adjust the delay between element animations
//   let animatedElements = [];

//   // Function to handle intersection changes
//   const handleIntersection = (entries, observer) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting && !animatedElements.includes(entry.target)) {
//               const target = entry.target;
//               if (!isDescendant(target, document.querySelector('.navbar'))) {
//                   animatedElements.push(target);
                  
                  
//                   setTimeout(() => {
//                       target.style.opacity = 1;
//                       target.style.transform = "scale(1)";
//                   }, delay);
//               }
//           }
//       });
//   };

//   // Create an IntersectionObserver
//   const observer = new IntersectionObserver(handleIntersection, {
//       threshold: 0.5 // Trigger animation when 50% of element is visible
//   });

//   // Observe each element
//   for (let i = 0; i < elements.length; i++) {
//       observer.observe(elements[i]);
//   }
// });


// Function to check if an element is a descendant of another element
// document.addEventListener('DOMContentLoaded', (event) => {
//   const elements = document.body.getElementsByTagName('*');
//   const delay = 10; // Adjust the delay between element animations

//   for (let i = 0; i < elements.length; i++) {
//       if (!isDescendant(elements[i], document.querySelector('.navbar'))) { // Exclude elements within the navbar
//           elements[i].style.opacity = 0;
//           elements[i].style.transform = "scale(0.5)";
//           elements[i].style.transition = "opacity 0.5s, transform 0.5s";
//       }
//   }

//   for (let i = 0; i < elements.length; i++) {
//       if (!isDescendant(elements[i], document.querySelector('.navbar'))) { // Exclude elements within the navbar
//           setTimeout(() => {
//               elements[i].style.opacity = 1;
//               elements[i].style.transform = "scale(1)";
//           }, (i * delay) + 50); // Start fading halfway through (after 500ms)
//       }
//   }
// });

// // Function to check if an element is a descendant of another element
// function isDescendant(element, ancestor) {
//   let node = element.parentNode;
//   while (node != null) {
//       if (node == ancestor) {
//           return true;
//       }
//       node = node.parentNode;
//   }
//   return false;
// }


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
const carousel = new bootstrap.Carousel('#myCarousel')
let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll down
      navbar.style.top = `-${navbar.offsetHeight}px`;
    } else {
      // Scroll up
      navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });
  $(document).ready(function () {
    $('.navbar-collapse').perfectScrollbar();
  });

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    $('[data-bs-spy="scroll"]').each(function () {
        var $section = $($(this).attr('href'));
        if ($section.position().top <= scrollTop && $section.position().top + $section.height() > scrollTop) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
// Function to handle adding fade-in class to elements
$(document).ready(function () {
    var $animationElements = $('.fade-in');
    $(window).on('scroll', function () {
        $animationElements.each(function () {
            var windowHeight = $(window).height();
            var windowTopPosition = $(window).scrollTop();
            var windowBottomPosition = (windowTopPosition + windowHeight);
            var $element = $(this);
            if ($element.hasClass('active')) return; // If already animated, don't repeat
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);
            // Check if element is in viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('active');
            }
        });
    });
});

function removeInvisibleClass() {
  document.body.classList.remove('invisible');
}

document.addEventListener('DOMContentLoaded', removeInvisibleClass);