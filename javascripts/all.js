document.addEventListener("DOMContentLoaded", function(event) {

  // Find all the buttons that activate dropdowns (.dropdown-button in this case)
  function find_dropdown_buttons(buttonClass) {
    var dropdown_buttons = document.getElementsByClassName(buttonClass);
    return dropdown_buttons;
  }

  // All the dropdowns
  var dropdowns = document.getElementsByClassName("dropdown-container");
  function hideActiveDropdowns(name) {
    for(var i = 0; i < name.length; i++) {
      name[i].style.height = "0px"
      name[i].className = "dropdown-container"
    }
  }

  // Find the associated dropdown to what we clicked
  function find_dropdown(item) {
    container = item.parentNode;// Find the parent
    var dropdown;// Add the var

    // Check the children of the parent, and find the actual dropdown
    for (var i = 0; i < container.children.length; i++) {
      if (container.children[i].className == "dropdown-container" || container.children[i].className == "dropdown-container expanded" ) {
        dropdown = container.children[i];
      }
    }
    // Find the height of the dropdown
    // Might be better to check for .dropdown, but for now we'll just grab the first element in the container
    var dropdown_height = dropdown.children[0].offsetHeight;

    // Toggle the class
    // We could be managing the toggle based on dropdown.style.height but the class switch is future proofing for extra interactions
    if (dropdown.className == "dropdown-container") {
      hideActiveDropdowns(dropdowns);
      dropdown.className = "dropdown-container expanded"
      dropdown.style.height = dropdown_height + "px";
    } else {
      dropdown.className = "dropdown-container"
      dropdown.style.height = "0" + "px";
    }
  }

  // Find all the buttons
  var buttons = find_dropdown_buttons("dropdown-button");
  // Add click event to all the buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event){
      event.preventDefault();
      // Search the parent node for a dropdown and activate it
      find_dropdown(this);
    })
  }
})
;
