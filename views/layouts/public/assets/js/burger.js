$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#newburger").val().trim(),
          devoured: $("[burger_name=devoured]:checked").val().trim()
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("new burger created");
            location.reload();
          }
        );
    });  

    $(".eatburger").on("click", function(event) {
        even.preventDefault();

        var id = $(this).data("id");
        var devouredStatus = {
            devoured = 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function() {
            console.log("Burger has been devoured");
            location.reload();
        });
    });

    $(".deleteburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});