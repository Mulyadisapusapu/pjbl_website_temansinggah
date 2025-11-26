const saveButtons = document.querySelectorAll(".save-button, .save-button-notag");

saveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    const currentSrc = img.getAttribute("src");

    if (currentSrc.includes("icon_save-on.svg")) {
      img.setAttribute("src", "/website_materials/icon_save.svg");
    } else {
      img.setAttribute("src", "/website_materials/icon_save-on.svg");
    }
  });
});