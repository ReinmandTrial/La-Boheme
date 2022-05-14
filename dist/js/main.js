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

const imagesLargeFade = document.querySelectorAll('.image-large')
imagesLargeFade.forEach(imageLargeFade => {
   let arr = ['slide-down', 'slide-left', 'slide-right', 'slide-up'];
   let rand = Math.floor(Math.random() * arr.length);
   imageLargeFade.querySelector('.image-large__slide').setAttribute('data-aos', arr[rand])
});

document.addEventListener('DOMContentLoaded', function () {

   var searchBtns = document.querySelectorAll('.search__btn')

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
   searchBtns.forEach(searchBtn => {
      searchBtn.addEventListener('click', function () {
         this.closest('.search').classList.toggle('active')
      })
   });

   function logoRotate() {
      document.querySelector('.logo__wrap').classList.remove('animate');
      setTimeout(function () {
         document.querySelector('.logo__wrap').classList.add('animate');

      }, 200)
   }
   // logoRotate()
   setInterval(logoRotate, 5000);

   const imagesLarge = document.querySelectorAll('.image-large')
   imagesLarge.forEach(imageLarge => {
      let arr = ['image-large--1', 'image-large--2', 'image-large--3', 'image-large--4', 'image-large--5', 'image-large--6', 'image-large--7'];
      let rand = Math.floor(Math.random() * arr.length);
      imageLarge.classList.add(arr[rand])
   });


   AOS.init();
})

