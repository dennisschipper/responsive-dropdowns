document.addEventListener("DOMContentLoaded", function(event) {

  var items = [];
  // Create an object to stick or related dropdown elements (button, dropdown content)
  var Item = function(item) {
    this.item = item
    this.dropdown = findDropdown(item);
    this.button = findButton(item);
    this.button.content = this.dropdown;
  }

  // Find the .dropdown-container inside an item (assuming there's not multiple ones for now, might change in the future to make it more bulletproof)
  function findDropdown(item){
    return item.querySelectorAll(".dropdown-container")[0];
  }

  // Find a button inside an ".activate-dropdown" (again, we assume there's only one button in there, so we only target the first item in the returned nodelist)
  function findButton(item){
    return item.querySelectorAll(".dropdown-button")[0];
  }

  // Toggles class between active/not active
  function toggleClass(item, new_class){
    var c = item.className.split(" ");

    // Check for an .active class
    if (c.indexOf(new_class) > -1) {
      position = c.indexOf(new_class);
      c[position] = ""
      item.className = c.join(" ");
      item.style.height = "0px"

    } else {
      c.push(new_class);
      item.className = c.join(" ");
      height = item.children[0].offsetHeight;
      item.style.height = height + "px";
    }

  }

  // Find all the dropdowns and create an object for each one
  var x = document.querySelectorAll(".activate-dropdown");
  for (var i = 0; i < x.length; i++ ) {
    var y = new Item(x[i])
    items.push(y)
  }

  // Add the click event
  for (var i = 0; i < items.length; i++) {
    items[i].button.addEventListener("click", function(event){
      event.preventDefault();
      toggleClass(this.content, "active")
    })
  }

});
