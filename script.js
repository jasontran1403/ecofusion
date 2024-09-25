// Script to handle the header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkScroll() {
    const targetElement = document.querySelector(".section-2-content-1");
    const targetElement2 = document.querySelector(".section-2-content-2");
    const targetElement3 = document.querySelector(".row-1");
    const targetElement4 = document.querySelector(".row-2");
    const targetElement5 = document.querySelector(".cards");
    const subtargetElement1 = document.querySelector(".card-1");
    const subtargetElement2 = document.querySelector(".card-2");
    const subtargetElement3 = document.querySelector(".card-3");

    const contents = targetElement.querySelectorAll(
      ".content1, .content2, .content3"
    );
    const contents2 = targetElement2.querySelectorAll(
      ".content-1, .content-2"
    );
    const contents3 = targetElement3.querySelectorAll(".card-section-3");

    const contents4 = targetElement4.querySelectorAll(".card-section-3");

    const contents5 = targetElement5.querySelectorAll(".card-section-4");

    if (isElementInViewport(targetElement)) {
      contents[0].classList.add("animate__jello");
      contents[1].classList.add("animate__heartBeat");
      contents[1].classList.add("animate__jello");
      contents.forEach((content) => {
        content.classList.add("animate__bounceIn");
      });
    } else {
      contents[0].classList.remove("animate__jello");
      contents[1].classList.remove("animate__heartBeat");
      contents[1].classList.remove("animate__jello");
      contents.forEach((content) => {
        content.classList.remove("animate__bounceIn");
      });
    }

    if (isElementInViewport(targetElement2)) {
      contents2[0].classList.add("animate__backInLeft");
      contents2[1].classList.add("animate__backInRight");
      contents2.forEach((content) => {
        content.classList.add("animate__animated");
      });
    } else {
      contents2[0].classList.remove("animate__backInLeft");
      contents2[1].classList.remove("animate__backInRight");
      contents2.forEach((content) => {
        content.classList.remove("animate__animated");
      });
    }

    if (isElementInViewport(targetElement3)) {
      console.log("section2");
      contents3[0].classList.add("animate__fadeInUp");
      contents3[1].classList.add("animate__fadeInUp");
      contents3[1].classList.add("animate__delay-1s");
      contents3[2].classList.add("animate__fadeInUp");
      contents3[2].classList.add("animate__delay-2s");
      contents3.forEach((content) => {
        content.classList.add("animate__animated");
      });
    } else {
      contents3[0].classList.remove("animate__fadeInUp");
      contents3[1].classList.remove("animate__fadeInUp");
      contents3[1].classList.remove("animate__delay-1s");
      contents3[2].classList.remove("animate__fadeInUp");
      contents3[2].classList.remove("animate__delay-2s");
      contents3.forEach((content) => {
        content.classList.remove("animate__animated");
      });
    }

    if (isElementInViewport(targetElement4)) {
      contents4[0].classList.add("animate__fadeInUp");
      contents4[1].classList.add("animate__fadeInUp");
      contents4[1].classList.add("animate__delay-1s");
      contents4[2].classList.add("animate__fadeInUp");
      contents4[2].classList.add("animate__delay-2s");
      contents4.forEach((content) => {
        content.classList.add("animate__animated");
      });
    } else {
      contents4[0].classList.remove("animate__fadeInUp");
      contents4[1].classList.remove("animate__fadeInUp");
      contents4[1].classList.remove("animate__delay-1s");
      contents4[2].classList.remove("animate__fadeInUp");
      contents4[2].classList.remove("animate__delay-2s");
      contents4.forEach((content) => {
        content.classList.remove("animate__animated");
      });
    }

    if (isElementInViewport(subtargetElement1)) {
      contents5[0].classList.add("animate__jackInTheBox")
      contents5[0].classList.add("animate__animated")
    } else {
      contents5[0].classList.remove("animate__jackInTheBox")
      contents5[0].classList.remove("animate__animated")
    }
    if (isElementInViewport(subtargetElement2)) {
      contents5[1].classList.add("animate__jackInTheBox")
      contents5[1].classList.add("animate__animated")
    } else {
      contents5[1].classList.remove("animate__jackInTheBox")
      contents5[1].classList.remove("animate__animated")
    }
    if (isElementInViewport(subtargetElement3)) {
      contents5[2].classList.add("animate__jackInTheBox")
      contents5[2].classList.add("animate__animated")
    } else {
      contents5[2].classList.remove("animate__jackInTheBox")
      contents5[2].classList.remove("animate__animated")
    }
  }

  window.addEventListener("scroll", checkScroll);