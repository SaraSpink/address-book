//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.cityState = function() {
  return this.city + ", " + this.state;

}

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
   $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label for="new-addLine1">Street</label>' +
                                  '<input type="text" class="form-control new-addLine1">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-addLine2">City</label>' +
                                  '<input type="text" class="form-control new-addLine2">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-addLine3">State</label>' +
                                  '<input type="text" class="form-control new-addLine3">' +
                                '</div>' +
                              '</div>');
 });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedAdd1 = $(this).find("input.new-addLine1").val();
      var inputtedAdd2 = $(this).find("input.new-addLine2").val();
      var inputtedAdd3 = $(this).find("input.new-addLine3").val();
      var home = new Address(inputtedAdd1, inputtedAdd2, inputtedAdd3);
      newContact.address.push(home);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      // $(".addLine1").text(home.street);
      // $(".addLine2").text(home.cityState());
      $("ul#addresses").text("");
        newContact.address.forEach(function(add) {
          $("ul#addresses").append("<li>" + add.street + ", " + add.city + " " + add.state + "</li>");

    });
  });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-addLine1").val("");
    $("input#new-addLine2").val("");
    $("input#new-addLine3").val("");
  });
});
