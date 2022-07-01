

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

      btnSound && btnSound.addEventListener('click', function () {
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







   }
   var panorama, viewer;





   var wall1hotspot1konzertinfo = new PANOLENS.Infospot(300, 'img/panorama/icons/info.png');
   wall1hotspot1konzertinfo.position.set(3000.00, -300.00, -3800.00);

   wall1hotspot1konzertinfo.addHoverText('Konzertinfo');

   wall1hotspot1konzertinfo.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-1-hotspot-1-konzertinfo').style.opacity = '1'
         document.getElementById('wall-1-hotspot-1-konzertinfo').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-1-hotspot-1-konzertinfo').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall1hotspot2programm = new PANOLENS.Infospot(300, 'img/panorama/icons/plus.png');
   wall1hotspot2programm.position.set(4000.00, -700.00, -3100.00);
   wall1hotspot2programm.addHoverText('Programm');

   wall1hotspot2programm.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-1-hotspot-2-programm').style.opacity = '1'
         document.getElementById('wall-1-hotspot-2-programm').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-1-hotspot-2-programm').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall1hotspot3kuebar = new PANOLENS.Infospot(300, 'img/panorama/icons/plus2.png');
   wall1hotspot3kuebar.position.set(3800.00, 600.00, -100.00);
   wall1hotspot3kuebar.addHoverText('Risto Kübar');

   wall1hotspot3kuebar.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-1-hotspot-3-kuebar').style.opacity = '1'
         document.getElementById('wall-1-hotspot-3-kuebar').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-1-hotspot-3-kuebar').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall1hotspot4guenter = new PANOLENS.Infospot(300, 'img/panorama/icons/plus3.png');
   wall1hotspot4guenter.position.set(4000.00, 700.00, -3200.00);
   wall1hotspot4guenter.addHoverText('Matthias Günther');

   wall1hotspot4guenter.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-1-hotspot-4-guenter').style.opacity = '1'
         document.getElementById('wall-1-hotspot-4-guenter').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-1-hotspot-4-guenter').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall1hotspot5trinkl = new PANOLENS.Infospot(300, 'img/panorama/icons/plus4.png');
   wall1hotspot5trinkl.position.set(4000.00, 450.00, 2000.00);
   wall1hotspot5trinkl.addHoverText('Sonya Trinkl');

   wall1hotspot5trinkl.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-1-hotspot-5-trinkl').style.opacity = '1'
         document.getElementById('wall-1-hotspot-5-trinkl').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-1-hotspot-5-trinkl').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });




   var wall2hotspot1konzertinfo = new PANOLENS.Infospot(300, 'img/panorama/icons/info2.png');
   wall2hotspot1konzertinfo.position.set(4000.00, -350.00, 3000.00);

   wall2hotspot1konzertinfo.addHoverText('Konzertinfo');

   wall2hotspot1konzertinfo.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-2-hotspot-1-konzertinfo').style.opacity = '1'
         document.getElementById('wall-2-hotspot-1-konzertinfo').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-2-hotspot-1-konzertinfo').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall2hotspot2programm = new PANOLENS.Infospot(300, 'img/panorama/icons/plus5.png');
   wall2hotspot2programm.position.set(2000.00, -900.00, 3700.00);
   wall2hotspot2programm.addHoverText('Programm');

   wall2hotspot2programm.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-2-hotspot-2-programm').style.opacity = '1'
         document.getElementById('wall-2-hotspot-2-programm').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-2-hotspot-2-programm').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall2hotspot3gabanyi = new PANOLENS.Infospot(300, 'img/panorama/icons/plus6.png');
   wall2hotspot3gabanyi.position.set(-100.00, -500.00, 4000.00);
   wall2hotspot3gabanyi.addHoverText('Stefan Gabányi');

   wall2hotspot3gabanyi.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-2-hotspot-3-gabanyi').style.opacity = '1'
         document.getElementById('wall-2-hotspot-3-gabanyi').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-2-hotspot-3-gabanyi').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });




   var wall3hotspot1konzertinfo = new PANOLENS.Infospot(300, 'img/panorama/icons/info3.png');
   wall3hotspot1konzertinfo.position.set(-3800.00, -300.00, 3000.00);
   wall3hotspot1konzertinfo.addHoverText('Konzertinfo');

   wall3hotspot1konzertinfo.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-3-hotspot-1-konzertinfo').style.opacity = '1'
         document.getElementById('wall-3-hotspot-1-konzertinfo').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-3-hotspot-1-konzertinfo').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall3hotspot2programm = new PANOLENS.Infospot(300, 'img/panorama/icons/plus7.png');
   wall3hotspot2programm.position.set(-3800.00, 300.00, 1000.00);
   wall3hotspot2programm.addHoverText('Programm');

   wall3hotspot2programm.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-3-hotspot-2-programm').style.opacity = '1'
         document.getElementById('wall-3-hotspot-2-programm').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-3-hotspot-2-programm').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall3hotspot3taran = new PANOLENS.Infospot(300, 'img/panorama/icons/plus8.png');
   wall3hotspot3taran.position.set(-3800.00, -900.00, -150.00);
   wall3hotspot3taran.addHoverText('Eugene Taran');

   wall3hotspot3taran.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-3-hotspot-3-taran').style.opacity = '1'
         document.getElementById('wall-3-hotspot-3-taran').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-3-hotspot-3-taran').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });



   var wall4hotspot1konzertinfo = new PANOLENS.Infospot(300, 'img/panorama/icons/info4.png');
   wall4hotspot1konzertinfo.position.set(-3800.00, -300.00, -2500.00);
   wall4hotspot1konzertinfo.addHoverText('Konzertinfo');

   wall4hotspot1konzertinfo.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-4-hotspot-1-konzertinfo').style.opacity = '1'
         document.getElementById('wall-4-hotspot-1-konzertinfo').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-4-hotspot-1-konzertinfo').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall4hotspot2programm = new PANOLENS.Infospot(300, 'img/panorama/icons/plus9.png');
   wall4hotspot2programm.position.set(-3200.00, 400.00, -3800.00);
   wall4hotspot2programm.addHoverText('Programm');

   wall4hotspot2programm.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-4-hotspot-2-programm').style.opacity = '1'
         document.getElementById('wall-4-hotspot-2-programm').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-4-hotspot-2-programm').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall4hotspot3schilde = new PANOLENS.Infospot(300, 'img/panorama/icons/plus10.png');
   wall4hotspot3schilde.position.set(-1900.00, 720.00, -3800.00);
   wall4hotspot3schilde.addHoverText('Gertrud Schilde');

   wall4hotspot3schilde.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-4-hotspot-3-schilde').style.opacity = '1'
         document.getElementById('wall-4-hotspot-3-schilde').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-4-hotspot-3-schilde').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall4hotspot4oesterhelt = new PANOLENS.Infospot(300, 'img/panorama/icons/plus11.png');
   wall4hotspot4oesterhelt.position.set(-400.00, -600.00, -3800.00);
   wall4hotspot4oesterhelt.addHoverText('Carl Oesterhelt');

   wall4hotspot4oesterhelt.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-4-hotspot-4-oesterhelt').style.opacity = '1'
         document.getElementById('wall-4-hotspot-4-oesterhelt').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-4-hotspot-4-oesterhelt').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall4hotspot5quellennachweise = new PANOLENS.Infospot(300, 'img/panorama/icons/c.png');
   wall4hotspot5quellennachweise.position.set(800.00, -800.00, -3200.00);
   wall4hotspot5quellennachweise.addHoverText('Quellennachweise');

   wall4hotspot5quellennachweise.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-4-hotspot-5-quellennachweise').style.opacity = '1'
         document.getElementById('wall-4-hotspot-5-quellennachweise').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-4-hotspot-5-quellennachweise').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });


   var wall4hotspot6ensemble = new PANOLENS.Infospot(300, 'img/panorama/icons/essemble.png');
   wall4hotspot6ensemble.position.set(1700.00, 900.00, -3200.00);
   wall4hotspot6ensemble.addHoverText('Ensemble');

   wall4hotspot6ensemble.addEventListener('click', function () {
      if ($(window).width() >= 992) {

         document.getElementById('wall-4-hotspot-6-ensemble').style.opacity = '1'
         document.getElementById('wall-4-hotspot-6-ensemble').style.pointerEvents = 'visible'
      } else {
         document.getElementById('wall-4-hotspot-6-ensemble').style.display = 'block'

      }
      if ($(window).width() < 992) {
         $('.la-boheme__bottom').css('display', 'none')
      }
   });






   $('.infospot__close').on('click', function () {
      if ($(window).width() >= 992) {

         $(this).closest('.infospot').css('opacity', '0')
         $(this).closest('.infospot').css('pointer-events', 'none')
      } else {
         $(this).closest('.infospot').css('display', 'none')
      }


      wall1hotspot1konzertinfo.unlockHoverElement()
      wall1hotspot2programm.unlockHoverElement()
      wall1hotspot3kuebar.unlockHoverElement()
      wall1hotspot4guenter.unlockHoverElement()
      wall1hotspot5trinkl.unlockHoverElement()
      wall2hotspot1konzertinfo.unlockHoverElement()
      wall2hotspot2programm.unlockHoverElement()
      wall2hotspot3gabanyi.unlockHoverElement()
      wall3hotspot1konzertinfo.unlockHoverElement()
      wall3hotspot2programm.unlockHoverElement()
      wall3hotspot3taran.unlockHoverElement()
      wall4hotspot1konzertinfo.unlockHoverElement()
      wall4hotspot2programm.unlockHoverElement()
      wall4hotspot3schilde.unlockHoverElement()
      wall4hotspot4oesterhelt.unlockHoverElement()
      wall4hotspot5quellennachweise.unlockHoverElement()
      wall4hotspot6ensemble.unlockHoverElement()
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





   panorama = new PANOLENS.ImagePanorama('img/panorama_final.jpg');

   // menu

   $(window).on('resize', function () {
      if (window.innerWidth <= 992) {

         $('.menu__btn').on('click', function () {
            $('.menu__list').show()
         })
         $(document).on('click', function (e) {
            if (!e.target.closest('.menu')) {
               $('.menu__list').hide()
            }
         })
      } else {
         $('.menu__list').show()

      }
   })
   // menu

   panorama.add(
      // wall1hotspot1konzertinfo,
      // wall1hotspot2programm,
      wall1hotspot3kuebar,
      wall1hotspot4guenter,
      wall1hotspot5trinkl,
      // wall2hotspot1konzertinfo,
      // wall2hotspot2programm,
      wall2hotspot3gabanyi,
      // wall3hotspot1konzertinfo,
      // wall3hotspot2programm,
      wall3hotspot3taran,
      // wall4hotspot1konzertinfo,
      // wall4hotspot2programm,
      wall4hotspot3schilde,
      wall4hotspot4oesterhelt,
      wall4hotspot5quellennachweise,
      wall4hotspot6ensemble
   );
   // panorama.add(wall1hotspot2programm);
   // panorama.add(wall1hotspot3kuebar);
   // panorama.add(wall1hotspot4guenter);
   // panorama.add(wall1hotspot5trinkl);

   // panorama.add(wall2hotspot1konzertinfo);
   // panorama.add(wall2hotspot2programm);


   // panorama.add(infospot);
   // panorama.add(infospot2);



   const htmlPanorama = document.getElementById('panorama')
   viewer = new PANOLENS.Viewer({
      container: htmlPanorama,
      // horizontalView: true,
      autoHideInfospot: false,
      rotateSpeed: -0.2,
      controlBar: false,
      autoRotate: true,
      autoRotateSpeed: 0.55,
      autoRotateActivationDuration: 500,
      cameraFov: 70,
   });
   viewer.OrbitControls.maxFov = 70;
   viewer.add(panorama);

   viewer.OrbitControls.minPolarAngle = Math.PI / 2.2;
   viewer.OrbitControls.maxPolarAngle = Math.PI * 2 / 3.7;
   // viewer.OrbitControls.addEventListener('change', function () {
   //    // console.log('change');
   //    console.log(panorama.getZoomLevel());


   // })
   // panorama

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

