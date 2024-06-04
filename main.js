
// import Swiper from 'swiper.js';
// import 'swiper/swiper-bundle.css';

const navbar_text = document.querySelectorAll('.navbar_box a , .navbar_box i');
const navbar = document.querySelector('#navbar');
const toggleBtn = document.querySelector('.navbar_toggle-btn');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if((window.scrollY > navbarHeight)){
      navbar.classList.add('background--dark' , 'transition--1s');
      // toggleBtn.classList.add('color--dark', 'transition--1s');
      navbar_text.forEach((item)=>{
        item.classList.add('color--white' ,'transition--1s');
      })
    }else{
      navbar.classList.remove('background--dark' );
      toggleBtn.classList.remove('color--dark');
      navbar_text.forEach((item)=>{
        item.classList.remove('color--white');
      })

    }
});


// 반응형 햄버거바 클릭시 메뉴 보이게 하기

const navToggleBtn = document.querySelector('.navbar_toggle-btn');
const navbarMenu = document.querySelector('.navbar_menu');

navToggleBtn.addEventListener('click',()=>{
  navbar.classList.add('background--dark' , 'transition--1s');
  navbarMenu.classList.toggle('showMenu');
 

});

 // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    // direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    //  modules: [Navigation, Pagination],
    pagination: {
      el : '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
 });


////////////////////////////////


gsap.registerPlugin(ScrollTrigger);


// my project 부분 수평으로 넘어가게 만든건데 별로 안이쁜듯하여 뺍니다.....
      // gsap.defaults({ease: "power1", duration: 3});

      // const tl = gsap.timeline();
      // tl.from(".projects", {xPercent: 35 })


      // ScrollTrigger.create({
      //   animation: tl,
      //   trigger: "#project",
      //   start: "top top", 
      //   end: "+=4000",
      //   pin: true,
      //   scrub: true,
      //   duration: 1,
      //   anticipatePin: 1
      // });

      // const my_project_class = document.querySelectorAll(".my_project");

      // tl.to(my_project_class
      //   , {xPercent: -100, duration:2, ease: "none"})
      //   .to({},{duration:1});

///////////////////////////////여기까지 

const t2 = gsap.timeline()
  .to('.skill_value-html',{width:'90%', ease: 'power2.out', duration: 0.1})
  .to('.skill_value-css', {width:'90%', duration: 0.1})
  .to('.skill_value-js', {width:'70%', duration: 0.1})
  .to('.skill_value-vue', {width:'78%', duration: 0.1})
  .to('.skill_value-node',{width:'50%', duration: 0.1})
  .to('.skill_value-git', {width:'40%', duration: 0.1});


const st = ScrollTrigger.create({
  animation: t2,
  trigger: '.skillset',
  start: 'top bottom',
  // markers: {
  //   startColor: 'yellow',
  //   endColor: 'black',
  //   fontSize: '4rem',
  //   indent: 200
  // },
  toggleActions:"restart reset restart reset",
  // onEnter: () => gsap.to('.skill_value',1,{
  //   width: "0%"
  // }),
 
  // ease: 'none',
});