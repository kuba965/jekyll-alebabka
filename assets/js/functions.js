//Setup AnimateCSS
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName);

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}
//Nav
const navbar = document.querySelector("#nav");
const navStripe = document.querySelector("#nav-stripe");
const lace = document.querySelector(".lace");
window.addEventListener("scroll", function(e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 300) {
    navbar.classList.add("active");
    navbar.classList.add("animated", "slideInDown");
    navStripe.classList.add("visible");
    navStripe.classList.add("animated", "slideInLeft");
    lace.classList.add("visible");
    lace.classList.add("animated", "slideInRight");
  } else if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    navbar.classList.remove("animated", "slideInDown");
    navStripe.classList.remove("visible");
    navStripe.classList.remove("animated", "slideInLeft");
    lace.classList.remove("visible");
    lace.classList.remove("animated", "slideInRight");
  } else {
    navbar.classList.remove("active");
    navbar.classList.remove("animated", "slideInDown");
    navStripe.classList.remove("visible");
    navStripe.classList.remove("animated", "slideInLeft");
    lace.classList.remove("visible");
    lace.classList.remove("animated", "slideInRight");
  }
});
//End Nav

//Offer Opis
$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate(
      { scrollTop: $(".offer-content").offset().top },
      "slow"
    );
    return false;
  });
});
// const btnOffer = document.querySelector(".btn-torty");
// const opis = document.querySelector(".opis");

// btnOffer.addEventListener("click", function(e) {
//   if (!opis.classList.contains("active")) {
//     opis.classList.add("active", "animated", "fadeInDown");
//     document.getElementById("rodzaje").style.border = "3px solid #9b59b6";
//   } else if (opis.classList.contains("active")) {
//     opis.classList.remove("active", "animated", "fadeInDown");
//     document.getElementById("rodzaje").style.border = "0";
//   } else {
//     opis.classList.remove("active", "animated", "fadeInDown");
//     document.getElementById("rodzaje").style.border = "0";
//   }
// });

//Gallery
// $(document).ready(function() {
//   $("#lightGallery").lightGallery();
// });
$("#btn-torty").on("click", function() {
  $(this).lightGallery({
    dynamic: true,
    dynamicEl: [
      {
        src: "../assets/img/torty/2.jpg",
        thumb: "../assets/img/torty/2.jpg"
      },
      {
        src: "../assets/img/torty/3.jpg",
        thumb: "../assets/img/torty/3.jpg"
      },
      {
        src: "../assets/img/torty/4.jpg",
        thumb: "../assets/img/torty/4.jpg"
      },
      {
        src: "../assets/img/torty/5.jpg",
        thumb: "../assets/img/torty/5.jpg"
      },
      {
        src: "../assets/img/torty/6.jpg",
        thumb: "../assets/img/torty/6.jpg"
      },
      {
        src: "../assets/img/torty/8.jpg",
        thumb: "../assets/img/torty/8.jpg"
      },
      {
        src: "../assets/img/torty/9.jpg",
        thumb: "../assets/img/torty/9.jpg"
      },
      {
        src: "../assets/img/torty/10.jpg",
        thumb: "../assets/img/torty/10.jpg"
      },
      {
        src: "../assets/img/torty/11.jpg",
        thumb: "../assets/img/torty/11.jpg"
      },
      {
        src: "../assets/img/torty/12.jpg",
        thumb: "../assets/img/torty/12.jpg"
      },
      {
        src: "../assets/img/torty/13.jpg",
        thumb: "../assets/img/torty/13.jpg"
      }
    ]
  });
});
$("#btn-babeczki").on("click", function() {
  $(this).lightGallery({
    dynamic: true,
    dynamicEl: [
      {
        src: "../assets/img/babeczki/1.jpg",
        thumb: "../assets/img/babeczki/1.jpg"
      },
      {
        src: "../assets/img/babeczki/2.jpg",
        thumb: "../assets/img/babeczki/2.jpg"
      },
      {
        src: "../assets/img/babeczki/3.jpg",
        thumb: "../assets/img/babeczki/3.jpg"
      },
      {
        src: "../assets/img/babeczki/4.jpg",
        thumb: "../assets/img/babeczki/4.jpg"
      },
      {
        src: "../assets/img/babeczki/5.jpg",
        thumb: "../assets/img/babeczki/5.jpg"
      },
      {
        src: "../assets/img/babeczki/6.jpg",
        thumb: "../assets/img/babeczki/6.jpg"
      }
    ]
  });
});
$("#btn-ciasta").on("click", function() {
  $(this).lightGallery({
    dynamic: true,
    dynamicEl: [
      {
        src: "../assets/img/ciasta/1.jpg",
        thumb: "../assets/img/ciasta/1.jpg"
      },
      {
        src: "../assets/img/ciasta/2.jpg",
        thumb: "../assets/img/ciasta/2.jpg"
      },
      {
        src: "../assets/img/ciasta/3.jpg",
        thumb: "../assets/img/ciasta/3.jpg"
      },
      {
        src: "../assets/img/ciasta/4.jpg",
        thumb: "../assets/img/ciasta/4.jpg"
      },
      {
        src: "../assets/img/ciasta/5.jpg",
        thumb: "../assets/img/ciasta/5.jpg"
      },
      {
        src: "../assets/img/ciasta/6.jpg",
        thumb: "../assets/img/ciasta/6.jpg"
      },
      {
        src: "../assets/img/ciasta/7.jpg",
        thumb: "../assets/img/ciasta/7.jpg"
      },
      {
        src: "../assets/img/ciasta/8.jpg",
        thumb: "../assets/img/ciasta/8.jpg"
      },
      {
        src: "../assets/img/ciasta/9.jpg",
        thumb: "../assets/img/ciasta/9.jpg"
      }
    ]
  });
});
//
