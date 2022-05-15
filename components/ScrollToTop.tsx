import React from "react";

function ScrollToTop() {
  function scrollToTopOfWindow() {
    if (window != undefined)
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div
      onClick={scrollToTopOfWindow}
      className="fixed flex items-center justify-center w-4 h-4 p-8 transition-all duration-300 rounded-full bottom-10 right-10 bg-primary hover:bg-lightGray"
    >
      <i className="text-3xl material-icons text-coal">arrow_circle_up</i>
    </div>
  );
}

export default ScrollToTop;
