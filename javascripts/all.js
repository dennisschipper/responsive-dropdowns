(function(){
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
    function showItem(item) {
      height = item.children[0].offsetHeight;
      item.style.height = height + "px";
    }

    function hideItem(item) {
      item.style.height = "0px";
    }

    // If a dropdown has a height - set it to nothing
    function hideAllDropdowns(){
      for (var i = 0; i < items.length; i++) {
        hideItem(items[i].dropdown);
      }
    }

    // Find all the dropdowns and create an object for each one
    var x = document.querySelectorAll(".activate-dropdown");
    for (var i = 0; i < x.length; i++ ) {
      var y = new Item(x[i])
      items.push(y)
    }

    // Add the click event
    items.map(function(item){
      item.button.addEventListener("click", function(event){
        event.preventDefault();
        if (this.content.style.height == "0px" || this.content.style.height == false ) {
          showItem(this.content);
        } else {
          hideItem(this.content);
        }
      });
    })
  });

})()
