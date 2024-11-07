// Import necessary functions from main.js
import { switchTypingMode, switchModeOptions } from "./main.js";

// Initialize the active mode to 0
let activeMode = 0;

// Select all elements with the attribute [menu] [menu-mode]
const menuModes = document.querySelectorAll("[menu] [menu-mode]");
// Select all elements with the attribute [menu-options-wrapper]
const menuOptions = document.querySelectorAll("[menu-options-wrapper]");
// Select all elements with the attribute [menu-options-item]
const menuOptionsItems = document.querySelectorAll("[menu-options-item]");

// Add click event listeners to each menu mode
menuModes.forEach((mode) =>
  mode.addEventListener("click", () => {
    // Remove the active attribute from the currently active menu mode
    document.querySelector("[menu-mode][active]").removeAttribute("active");
    // Set the active attribute to the clicked menu mode
    mode.setAttribute("active", "");

    // Get the value of the clicked menu mode
    const option = Number(mode.getAttribute("value"));

    // Remove the active attribute from the currently active menu options
    menuOptions.item(activeMode).removeAttribute("active");
    // Set the active attribute to the new menu options
    menuOptions.item(option).setAttribute("active", "");
    // Switch the typing mode to the new option
    switchTypingMode(option);
    // Update the active mode
    activeMode = option;
  })
);

// Add click event listeners to each menu options item
menuOptionsItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the active attribute from the currently active menu options item
    document
      .querySelector(`[menu-options-item][mode='${activeMode}'][active]`)
      .removeAttribute("active");
    // Set the active attribute to the clicked menu options item
    item.setAttribute("active", "");

    // Get the mode and value of the clicked menu options item
    const mode = Number(item.getAttribute("mode"));
    const option = Number(item.getAttribute("value"));
    // Switch the mode options to the new option
    switchModeOptions(mode, option);
  });
});
