// Navbar
window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 2) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};

// Smooth scrolling anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//FORMSPREE
/* paste this line in verbatim */
window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/mdorokny",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    {type: "submit"},
  ],
  styles: {
    title: {
      backgroundColor: "gray",
    },
    button: {
      backgroundColor: "gray",
    },
  },
});

// AOS
AOS.init({
  duration: 750,
});
