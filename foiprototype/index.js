(function () {
  var widget,
    initAddressFinder = function () {
      console.log(document.getElementById("addrs_1"));
      widget = new AddressFinder.Widget(
        document.getElementById("addrs_1"),
        "JNVPE6LG4YR8XHAM7WCT",
        "AU",
        {
          address_params: {
            gnaf: "1",
          },
        }
      );
      widget.on("result:select", function (fullAddress, metaData) {
        // You will need to update these ids to match those in your form
        document.getElementById("addrs_1").value = metaData.address_line_1;
        document.getElementById("addrs_2").value = metaData.address_line_2;
        document.getElementById("suburb").value = metaData.locality_name;
        document.getElementById("state").value = metaData.state_territory;
        document.getElementById("postcode").value = metaData.postcode;
      });
    };

  function downloadAddressFinder() {
    var script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    script.onload = initAddressFinder;
    document.body.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", downloadAddressFinder);
})();

// import "tailwindcss/tailwind.css"

// alert("asdf");

var show = function (elem) {
  elem.style.display = "block";
};

var hide = function (elem) {
  elem.style.display = "none";
};

var toggle = function (elem) {
  console.log("🏄🏻‍♂️ ~ elem", elem);

  // If the element is visible, hide it
  if (window.getComputedStyle(elem).display === "block") {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};

const toggleElement = (id) => {
  console.log("🏄🏻‍♂️ ~ id", id);
  const elem = document.getElementById(id);

  if (window.getComputedStyle(elem).display === "block") {
    hide(elem);
    return;
  }
  show(elem);
};

const showElement = (id, scrollTo = false) => {
  const elem = document.getElementById(id);
  show(elem);

  if (scrollTo) {
    setTimeout(function () {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
};

const hideElement = (id) => {
  const elem = document.getElementById(id);

  if (window.getComputedStyle(elem).display === "block") {
    hide(elem);
    return;
  }
};

// function

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains("toggle")) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);
  },
  false
);
