// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}


// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();



//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// slider carousel control


$('.slider_btn_prev').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('prev')
    $('.slider_image_carousel').carousel('prev')
})


$('.slider_btn_next').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('next')
    $('.slider_image_carousel').carousel('next')
})


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Role suavemente
    });
  }
  
  // Verifique a posição da página para mostrar ou ocultar o botão
  window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top-button');
    if (document.documentElement.scrollTop > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  // Adicione um ouvinte de evento de clique ao botão
  document.getElementById('back-to-top-button').addEventListener('click', scrollToTop);



  var likeCounters = [];

var likeButtons = document.querySelectorAll('.btn-1');

likeButtons.forEach(function(button) {
  var likeValue = button.getAttribute('data-like');
  likeCounters[likeValue] = 0;

  button.addEventListener('click', function(event) {
    event.preventDefault();

    if (likeCounters[likeValue] === 0) {
      likeCounters[likeValue]++;
      button.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> ' + likeCounters[likeValue];
    } else {
      alert('Só pode dar "Like" uma vez!'); // Mostra uma mensagem quando não for possível adicionar mais "likes"
    }
  });
});