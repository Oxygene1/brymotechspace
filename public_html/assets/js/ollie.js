/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// portfolio carousel
$("#owl-portfolio").owlCarousel({
  margin: 30,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
      loop: false,
    },
  },
});

// testmonial carousel
$("#owl-testmonial").owlCarousel({
  center: true,
  items: 1,
  loop: true,
  nav: true,
  dots: false,
});

// document.getElementById("myButton").addEventListener("click", function (event) {
  

// });
function sendEmail() {
  var from_name = document.getElementById("from_name").value;
  var from_email = document.getElementById("from_email").value;
  let from_phone = document.getElementById("from_phone").value;
  var message = document.getElementById("message").value;
  let alertresponse = document.getElementById("alertresponse");
  // Use EmailJS to send the email
  emailjs
    .send("service_drh596k", "template_qxmxz6l", {
      from_name: from_name,
      from_email: from_email,
      message: message,
      from_phone: from_phone,
    })
    .then(function () {
      let success = `Message successfully sent!`;
      setTimeout(function () {
        alertresponse.innerHTML = `<p class="successMessage">${success}</p>`;
      }, 2000);
    })
    .catch(function (error) {
      setTimeout(function () {
        console.log(error);
        let errorMessage = `there was an error while sending your message`;
        alertresponse.innerHTML = `<p class="errorMessage">${errorMessage}</p>`;
      }, 2000);
    });
}
