// Wait for DOM to load.
$(function() {
  $(".card img").on("click", function(event) {
    var currentItem = $(this).data("profileItem");

    var siblingCardBody = $(this).next();

    //toggle hide/unhide project information when clicked
    if (siblingCardBody.hasClass("collapse")) {
      siblingCardBody.removeClass("collapse");
    } else {
      siblingCardBody.addClass("collapse");
    }


  });

});