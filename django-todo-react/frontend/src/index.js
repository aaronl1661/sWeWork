// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
window.addEventListener('DOMContentLoaded', event => {

  const sidebarWrapper = document.getElementById('sidebar-wrapper');
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', event => {
      event.preventDefault();
      sidebarWrapper.classList.toggle('active');
      _toggleMenuIcon();
      menuToggle.classList.toggle('active');
  })

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
  scrollTriggerList.map(scrollTrigger => {
      scrollTrigger.addEventListener('click', () => {
          sidebarWrapper.classList.remove('active');
          menuToggle.classList.remove('active');
          _toggleMenuIcon();
      })
  });

  function _toggleMenuIcon() {
      const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
      const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
      if (menuToggleBars) {
          menuToggleBars.classList.remove('fa-bars');
          menuToggleBars.classList.add('fa-xmark');
      }
      if (menuToggleTimes) {
          menuToggleTimes.classList.remove('fa-xmark');
          menuToggleTimes.classList.add('fa-bars');
      }
  }

  // Scroll to top button appear
  document.addEventListener('scroll', () => {
      const scrollToTop = document.body.querySelector('.scroll-to-top');
      if (document.documentElement.scrollTop > 100) {
          if (!scrollToTopVisible) {
              fadeIn(scrollToTop);
              scrollToTopVisible = true;
          }
      } else {
          if (scrollToTopVisible) {
              fadeOut(scrollToTop);
              scrollToTopVisible = false;
          }
      }
  })
})

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
      if ((el.style.opacity -= .1) < 0) {
          el.style.display = "none";
      } else {
          requestAnimationFrame(fade);
      }
  })();
};

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
      }
  })();
};
