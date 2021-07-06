// import { show, hide } from "./node_modules/show-hide/dist/index.js";


(function () {
  var widget,
    initAddressFinder = function () {
      console.log(document.getElementById("addrs_1"));
      widget = new AddressFinder.Widget(document.getElementById("addrs_1"), "JNVPE6LG4YR8XHAM7WCT", "AU", {
        address_params: {
          gnaf: "1",
        },
      });
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

// var show = function (elem) {
//   // elem.style.display = "block";

//   elem.classList.remove("dis-none");
// };

// var hide = function (elem) {
//   // elem.style.display = "none";
//   elem.classList.add("dis-none");
// };


export const toggleElement = (id) => {
  const elem = document.getElementById(id);

  if (elem.classList.contains("dis-none")) {
    show(elem);
  } else {
    hide(elem);
  }
};



export const showElement = (id, scrollTo = false) => {
  const elem = document.getElementById(id);
  show(elem);

  if (scrollTo) {
    scrollToTop(elem);
  }
};

export const hideElement = (id) => {
  const elem = document.getElementById(id);

  hide(elem);
};

const saveSection = (id) => {
  const elem = document.getElementById(id);
  
  hide(elem);

  const progress = document.getElementById("progress_" + id);
  if (progress) {
    progress.classList.remove("au-progress-indicator__link--doing");
    progress.classList.remove("au-progress-indicator__link--todo");
    progress.classList.add("au-progress-indicator__link--done");

    progress.firstElementChild.innerText = "Done";
  }
};

const initSection = (id) => {
  const elem = document.getElementById(id);
  show(elem);
  scrollToTop();

  const progress = document.getElementById("progress_" + id);
  if (progress) {
    progress.classList.remove("au-progress-indicator__link--done");
    progress.classList.remove("au-progress-indicator__link--todo");
    progress.classList.add("au-progress-indicator__link--doing");
    progress.firstElementChild.innerHTML = "Doing";
  }
};

const scrollToTop = (elem = null) => {
  if (!elem) {
    elem = document.getElementsByTagName("body")[0];
  }
  setTimeout(function () {
    elem.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

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
