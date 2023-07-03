window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.custom-navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar-scroll');
      navbar.style.marginTop = '0';
      navbar.style.marginLeft = '20px';
  } else {
      navbar.classList.remove('navbar-scroll');
      navbar.style.marginTop = '40px';
      navbar.style.marginLeft = '20px';
    }
  });

  document.querySelectorAll(".image-container img").forEach(image => {
    image.onclick = () => {
      document.querySelector(".popup-image").style.display = "block";
      document.querySelector(".popup-image img").src = image.getAttribute("src");
      document.querySelector(".arrow-left").style.display = "block";
      document.querySelector(".arrow-right").style.display = "block";
    };
  });
  
  document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
    document.querySelector(".arrow-left").style.display = "none";
    document.querySelector(".arrow-right").style.display = "none";
  };

  $(document).ready(function() {
    var indice = 0;
    var imagenes = $("#galeria img");
    
    // Oculta todas las imágenes, excepto la primera
    imagenes.hide();
    imagenes.first().show();
    
    // Función para mostrar la imagen siguiente
    function mostrarSiguiente() {
      imagenes.eq(indice).hide();
      indice = (indice + 1) % imagenes.length;
      imagenes.eq(indice).show();
    }
    
    // Función para mostrar la imagen anterior
    function mostrarAnterior() {
      imagenes.eq(indice).hide();
      indice = (indice - 1 + imagenes.length) % imagenes.length;
      imagenes.eq(indice).show();
    }
    
    // Asignar eventos a los botones
    $("#siguiente").click(mostrarSiguiente);
    $("#anterior").click(mostrarAnterior);
  });

