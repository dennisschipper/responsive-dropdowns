document.addEventListener("DOMContentLoaded", function(event) {

  var items = [];
  var Item = function(item) {
    this.item = item
    this.dropdown = findDropdown(item);
    this.button = findButton(item);
    this.button.content = this.dropdown
  }

  // Find a dropdown inside an ".activate-dropdown"
  function findDropdown(item){
    var children = item.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].className.indexOf("dropdown-container") > -1) {
        return children[i];
      }
    }
  }

  // Find a button inside an ".activate-dropdown"
  function findButton(item){
    var children = item.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].className.split(" ").indexOf("dropdown-button") > -1) {
        return children[i];
      }
    }
  }

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

  // Find all the dropdowns
  var x = document.getElementsByClassName("activate-dropdown");
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
