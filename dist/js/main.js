

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});


// const imagesLargeFade = document.querySelectorAll('.image-large')
// imagesLargeFade.forEach(imageLargeFade => {
//    let arr = ['slide-down', 'slide-left', 'slide-right', 'slide-up'];
//    let rand = Math.floor(Math.random() * arr.length);
//    imageLargeFade.querySelector('.image-large__slide').setAttribute('data-aos', arr[rand])
// });

const imagesFade = document.querySelectorAll('.image')
imagesFade.forEach(imageFade => {
   let arr = ['slide-down', 'slide-left', 'slide-right', 'slide-up'];
   let rand = Math.floor(Math.random() * arr.length);
   imageFade.querySelector('.image__item').setAttribute('data-aos', arr[rand])
});
const imagesLarge = document.querySelectorAll('.image-large')
imagesLarge.forEach(imageLarge => {
   let arr = ['image-large--1', 'image-large--2', 'image-large--3', 'image-large--4', 'image-large--5', 'image-large--6', 'image-large--7'];
   let rand = Math.floor(Math.random() * arr.length);
   imageLarge.classList.add(arr[rand])
});

const images = document.querySelectorAll('.image')
images.forEach(image => {
   let arrMargin = ['mt-100', 'mt-0'];
   let randMargin = Math.floor(Math.random() * arrMargin.length);
   image.classList.add(arrMargin[randMargin])
   let arr = ['image--1', 'image--2', 'image--3', 'image--4', 'image--5', 'image--6'];
   let rand = Math.floor(Math.random() * arr.length);
   image.classList.add(arr[rand])
});
document.addEventListener('DOMContentLoaded', function () {

   if ($('body').hasClass('home-page')) {
      document.addEventListener('mousemove', (e) => {
         const logos = document.querySelectorAll('.logo')
         let x = e.pageX / 150
         let matX = x.toFixed(1)
         let y = e.pageY / 150
         let matY = y.toFixed(1)
         logos.forEach(element => {
            element.style.transform = `translate(${matX + 'px'}, ${matY + 'px'})`;
         });

      });

      var searchBtns = document.querySelectorAll('.search__btn')
      searchBtns.forEach(searchBtn => {
         searchBtn.addEventListener('click', function () {
            this.closest('.search').classList.toggle('active')
         })
      });


      function logoRotate() {
         const mainLogos = document.querySelectorAll('.logo__wrap')
         mainLogos.forEach(el => {
            el.classList.remove('animate');
            setTimeout(function () {
               el.classList.add('animate');
            }, 200)
         });
      }
      setInterval(logoRotate, 5000);


      const btnSound = document.querySelector('.home__btn-sound')

      btnSound.addEventListener('click', function () {
         if (btnSound.classList.contains('on')) {
            btnSound.innerHTML = '<span class="home__btn-sound-icon"><img src="img/svg-icons/close.svg" alt=""></span>Ton aus'
            btnSound.classList.remove('on')
         } else {
            btnSound.innerHTML = '<span class="home__btn-sound-icon"><img src="img/svg-icons/sound-on.svg" alt=""></span>Ton an'
            btnSound.classList.add('on')

         }
      })

      const catalog = new Swiper('.catalog-slider', {
         navigation: {
            nextEl: '.catalog-slider__btn-next',
            prevEl: '.catalog-slider__btn-prev',
         },
         breakpoints: {
            1100: {
               slidesPerView: 3,

            },
            768: {
            },
            320: {
               slidesPerView: 2,
            }
         },
         simulateTouch: false,
         allowTouchMove: false,
         slidesPerView: 3,
         speed: 1000
      });
      var cards = document.querySelectorAll('.card')
      cards.forEach(el => {
         var contentHeight = el.querySelector('.card__content').clientHeight

         el.style.height = contentHeight + 'px'

      });

      // panorama


      var infospot, infospot2, panorama, viewer;

      const hotspotInfo2 = document.getElementById('infospot-info')
      const hotspotPlus = document.getElementById('infospot-plus')

      infospot = new PANOLENS.Infospot(300, 'img/panorama/icons/info.png');
      infospot.position.set(4000.00, 600.00, 10.00);
      infospot.addHoverText('Risto Kübar');

      infospot.addEventListener('click', function () {
         hotspotPlus.style.display = 'flex'
         if ($(window).width() <= 992) {
            $('.la-boheme__bottom').css('display', 'none')
         }
      });

      infospot2 = new PANOLENS.Infospot(300, 'img/panorama/icons/plus.png');
      infospot2.position.set(4000.00, -200.00, -1600.00);
      infospot2.addHoverText('Konzertinfo');

      infospot2.addEventListener('click', function () {
         hotspotInfo2.style.display = 'flex'
         if ($(window).width() <= 992) {
            $('.la-boheme__bottom').css('display', 'none')
         }
      });


      $('.infospot__close').on('click', function () {
         $(this).closest('.infospot').css('display', 'none')
         if ($(window).width() <= 992) {
            $('.la-boheme__bottom').css('display', 'flex')
         }
      })
      if ($(window).width() <= 992) {
         $(document).on('click', function (e) {
            if (!e.target.closest('.infospot')) {
               $('.infospot').hide()
               $('.la-boheme__bottom').css('display', 'flex')

            }
         })
      }




      panorama = new PANOLENS.ImagePanorama('img/pan_08 (1).jpg');

      // menu
      if (window.innerWidth <= 992) {
         panorama.addEventListener('ready', function () {
            console.log('ready');

            // infospot.onHover()
            // infospot.onHoverStart
            infospot.lockHoverElement()
            infospot2.lockHoverElement()
         })


         $('.menu__btn').on('click', function () {
            $('.menu__list').show()
         })
         $(document).on('click', function (e) {
            if (!e.target.closest('.menu')) {
               $('.menu__list').hide()
            }
         })
      }
      // menu



      panorama.add(infospot);
      panorama.add(infospot2);



      const htmlPanorama = document.getElementById('panorama')
      viewer = new PANOLENS.Viewer({
         container: htmlPanorama,
         rotateSpeed: -0.2,
         controlBar: false,
         autoRotate: true,
         autoRotateSpeed: 0.7,
         autoRotateActivationDuration: 5000
      });
      viewer.add(panorama);

      // infospot2.addEventListener('ready', function () {
      //    console.log('ready');

      //    infospot.onHoverStart()
      // })
      // panorama




   }


   if ($('body').hasClass('page-plug') && window.innerWidth < 992) {
      $('.plug__table-wrap').attr('data-aos-offset', '-500')
      $('.plug__table-bg').attr('data-aos-offset', '-500')
   }

   AOS.init({
      // once: false,
   });
   if ($('body').hasClass('page-plug')) {

      $('.plug__btn-to-more').on('mouseover', function () {
         $(this).find('source').attr('srcset', 'img/svg-icons/Button_Rollover.svg')
         $(this).find('img').attr('src', 'img/svg-icons/Button_Rollover.svg')
      })
      $('.plug__btn-to-more').on('mouseleave', function () {
         $(this).find('source').attr('srcset', 'img/svg-icons/Button_Idle.svg')
         $(this).find('img').attr('src', 'img/svg-icons/Button_Idle.svg')
      })

      // const tableHeight = $('.plug__table-wrap').height()
      // $('.plug__table-bg').css('margin-bottom', (tableHeight + 12) * -1)
      // $('.plug__table-bg').height(tableHeight + 12)

      setTimeout(function () {
         const plugCards = new Swiper('.plug__slider', {
            simulateTouch: false,
            slidesPerView: 1,
            speed: 1000,
            effect: 'creative',
            creativeEffect: {
               perspective: true,
               limitProgress: 1,
               transformEl: 'test',
            },
         });
         var swipeWait = true
         setInterval(function () {
            if (plugCards.realIndex != 3) {
               if (plugCards.realIndex == 0 || plugCards.realIndex == 1) {
                  if (swipeWait == true) {
                     swipeWait = false
                  } else if (swipeWait == false) {
                     plugCards.slideNext();
                     swipeWait = true
                  }
               } else {
                  plugCards.slideNext();
               }
            } else {
               plugCards.slideTo(0)
            }

         }, 4000)
      }, 4200)
      document.addEventListener('mousemove', (e) => {
         const plugMainLogo = document.querySelector('.plug__logo')
         let x = e.pageX / 150
         let matX = x.toFixed(1)
         let y = e.pageY / 150
         let matY = y.toFixed(1)
         plugMainLogo.style.transform = `translate(${matX + 'px'}, ${matY + 'px'})`;
      });
      // document.addEventListener('mousemove', (e) => {
      //    const logos = document.querySelectorAll('.logo')
      //    let x = e.pageX / 150
      //    let matX = x.toFixed(1)
      //    let y = e.pageY / 150
      //    let matY = y.toFixed(1)
      //    logos.forEach(element => {
      //       element.style.transform = `translate(${matX + 'px'}, ${matY + 'px'})`;
      //    });

      // });

      function logoRotate() {
         const plugLogos = document.querySelectorAll('.logo__wrap')
         plugLogos.forEach(el => {
            el.classList.remove('animate');
            setTimeout(function () {
               el.classList.add('animate');
            }, 200)
         });
      }
      setInterval(() => {
         setInterval(logoRotate, 5000)
      }, 10000)


      let tableMove = gsap.from(".plug__table-wrap", {
         y: window.innerHeight * -1,
         // x: -550,
         ease: "power2.out",
         duration: 3,
         delay: 2
      });
      let tableBgMove = gsap.from(".plug__table-bg", {
         y: window.innerHeight * -1,
         ease: "power2.out",
         duration: 3,
         delay: 2
      });
      let barcodeMove = gsap.from(".plug__main-image-wrap", {
         ease: CustomEase.create("custom", "M0,0 C0.382,0.896 0.426,0.986 0.562,1.03 0.664,1.063 0.76,1.092 1,1 "),       // x: -550,
         width: 0,
         // x: -700,
         duration: 1,
         delay: 0.6
      });
      $('.pt-trigger').on('click', function () {
         if (!$(this).hasClass('plug__logo') && !$(this).hasClass('plug__text-logo') && !$(this).hasClass('plug__btn-to-more')) {
            setTimeout(() => {

               if ($('.pt-page-1').hasClass('pt-page-current')) {
                  console.log('restart');

                  tableMove.restart(true, false)
                  // $('.plug__main-image').width(0)
                  tableBgMove.restart(true, false)
                  barcodeMove.restart(true, false)
               }
            }, 100)
         }
      });
   }



})

