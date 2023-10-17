$(document).ready(function(){
    $('.card-block-svm').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,

      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          },
        },

        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          }

      ],

    

    });
  
    $('.prev').on('click', function(){
      $('.card-block-svm').slick('slickPrev');
    });
  
    $('.next').on('click', function(){
      $('.card-block-svm').slick('slickNext');
    });
  });




  $(document).ready(function(){
    $('.card-block-svm-2').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,

      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          },
        },

        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          }

      ],

    

    });
  
    $('.prev-2').on('click', function(){
      $('.card-block-svm-2').slick('slickPrev');
    });
  
    $('.next-2').on('click', function(){
      $('.card-block-svm-2').slick('slickNext');
    });
  });


  /*----------------------------------------------*/ 




  
var menuOpen = false;

var menuToggleImg = document.querySelector("#menuToggle img");

function toggleNav() {
    if (menuOpen) {
        closeNav();
        menuOpen = false;
        menuToggleImg.src = "src/vaadin_menu.svg" 
    } else {
        openNav();
        menuOpen = true;
        menuToggleImg.src = "src/close-button.svg" 
    }
}

function openNav() {
    document.getElementById("main").style.transform = "translateX(300px)";
}

function closeNav() {
    document.getElementById("main").style.transform = "translateX(0px)";
}


document.querySelector("#menuToggle").addEventListener("click", toggleNav);


/*----------------------------------------------------*/

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalButton");
var btn1 = document.getElementById("openModalButton-1");
var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

btn1.onclick = function() {
  modal.style.display = "flex";
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}