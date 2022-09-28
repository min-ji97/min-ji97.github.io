
// import Swiper from 'swiper.js';
// import 'swiper/swiper-bundle.css';

// npx http-server 서버 켜서 하기..! -> 이젠 키면 안됨..ㅎㅎㅎ 

const navbar_text = document.querySelectorAll('.navbar_box a , .navbar_box i');
const navbar = document.querySelector('#navbar');
const toggleBtn = document.querySelector('.navbar_toggle-btn');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
      navbar.classList.add('background--dark' , 'transition--1s');
      toggleBtn.classList.add('color--dark', 'transition--1s');
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




 // init Swiper:
  var swiper = new Swiper('.swiper', {
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
  scrollbar : {
    el : '.swiper-scrollbar'
  },


 });

//  var swiper2 = new Swiper('.swiper_second', {

//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,

//   pagination: {
//     el : '.swiper-pagination',
//     clickable: true,
//   },

//  navigation: {
//    prevEl: '.swiper-button-prev',
//    nextEl: '.swiper-button-next',
//  },
//  scrollbar : {
//    el : '.swiper-scrollbar'
//  },

// });



 // 마우스 커서 이벤트..!! 
 
// const cursor = document.querySelector('.cursor');

// mouseEffect.addEventListener('mousemove',(e) => {
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });

// console.log(e.clientX);




// let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".navbar_menu_list li a"); //메뉴 링크
// //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
// window.addEventListener("scroll", cursor);
// window.addEventListener("mousemove", cursor);
// //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

// function cursor(e) {
//   mouseCursor.style.left = e.pageX + "px";
//   mouseCursor.style.top = e.pageY - scrollY + "px";
// }

// navLinks.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("link-grow");
//     mouseCursor.style.zIndex = "-1";
//     link.classList.add("hovered-link");
//   });
//   link.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("link-grow");
//     mouseCursor.style.zIndex = "1000";
//     link.classList.remove("hovered-link");
//   });
// });




gsap.registerPlugin(ScrollTrigger);

// Horizontal Scroll - GSAP ScrollTrigger


// const horizontalSections = gsap.utils.toArray('section.horizontal')

// horizontalSections.forEach(function (sec, i) {	
  
//   var thisPinWrap = sec.querySelector('.pin-wrap');
//   console.log(sec);
//   var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
//   var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

//   gsap.fromTo(thisAnimWrap, { 
//     x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
//   }, { 
//     x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
//     ease: "none",
//     scrollTrigger: {
//       trigger: sec,		
//       start: "top top",
//       end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
//       pin: thisPinWrap,
//       invalidateOnRefresh: true,
//       //anticipatePin: 1,
//       scrub: true,
//       //markers: true,
//     }
//   });

// });	

//  gsap pinning 

// 여기부터 프로젝트 슬라이드 삭제 노노 
gsap.defaults({ease: "power1", duration: 3});

const tl = gsap.timeline();
tl.from(".projects", {xPercent: 35 })


ScrollTrigger.create({
  animation: tl,
  trigger: "#project",
  start: "top top", 
  end: "+=4000",
  pin: true,
  scrub: true,
  duration: 1,
  anticipatePin: 1
});

const my_project_class = document.querySelectorAll(".my_project");

tl.to(my_project_class
  , {xPercent: -100, duration:2, ease: "none"})
  .to({},{duration:1});

///////////////////////////////여기까지 

  
// gsap.from('.skill_value',2,{
//   scrollTrigger: {
//       trigger: ".skillset",
//       start: 'top bottom',
//       toggleActions:'restart pause resume pause',
//       markers: {
//         startColor: 'yellow',
//         endColor: 'black',
//         fontSize: '4rem',
//         indent: 200
//       },
// },  
//   // x: -1071,
//   width: '0%',
//   ease: 'none',
//   // delay: 0.3,
//   // opacity: 1
// });


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

















// t2.to('.skill_value-html',{ 
//   width:'90%',
  
//   // toggleClass: {targets:'.skill_value-html', className: 'skill--width--90'},
//   ease: 'none'
  
// });



// t2.from('.skill_value',{
//   width: "0%" , duration: 3 
// })

///////////////////////////////////////////////////////////////////////

// t2.from('.skill_value', {xPercent: 0})

//   ScrollTrigger.create({
//     trigger : '.skillset',
//         start: 'top bottom',
//         // toggleActions : 'restart none reverse none',
//         markers: {
//             startColor: 'yellow',
//             endColor: 'black',
//             fontSize: '4rem',
//             indent: 200
//         },

//         // skill_value
//         onEnter: () => gsap.from('.skill_value',3,{
//             x: 0,
//             opacity: 1,
//             // stagger: 3,
//         }),

//         onLeave: () => gsap.to('.favorite_page_logo', {
//             x: -1000,
//             opacity: 0,
//           }),
//         onEnterBack: () => gsap.to('.favorite_page_logo', {
//             x: 1000,
//             opacity: 1,
            
//         }),
//         onLeaveBack: () => gsap.to('.favorite_page_logo',4, {
//         x: -1000,
//         opacity: 0,
//         }),

// });



// 반응형 햄버거바 클릭시 메뉴 보이게 하기

const navToggleBtn = document.querySelector('.navbar_toggle-btn');
const navbarMenu = document.querySelector('.navbar_menu');

navToggleBtn.addEventListener('click',()=>{
  navbarMenu.classList.toggle('showMenu');

})