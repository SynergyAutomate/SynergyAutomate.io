export var hide = function (element, ms) {
  if (ms === void 0) {
    ms = 300;
  }
  if (!element) return;
  var currentTransition = element.style.transition;
  element.style.transition = "opacity " + ms + "ms";
  requestAnimationFrame(function () {
    element.style.opacity = "0";
    setTimeout(function () {
      element.style.display = "none";
      element.setAttribute("hidden", "hidden");
      element.style.transition = currentTransition;
    }, ms);
  });
};
export var show = function (element, ms) {
  if (ms === void 0) {
    ms = 300;
  }
  if (!element) return;
  element.style.opacity = "0";
  element.style.display = "";
  element.removeAttribute("hidden");
  var currentTransition = element.style.transition;
  element.style.transition = "opacity " + ms + "ms";
  requestAnimationFrame(function () {
    element.style.opacity = "1";
    setTimeout(function () {
      element.style.transition = currentTransition;
    }, ms);
  });
};
