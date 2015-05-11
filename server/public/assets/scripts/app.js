
var addressInfo;
var street, city, state, zip;


$( document ).ready(function() {
    $.ajax({
        method : "GET",
        url: "/views/contact.html",
        success: function(data) {
            $(".contact").append(data);
        }
    });

    $.get('/assets/data/data.json', function (data) {
        console.log(".get data function is running");
        addressInfo = data;
        addAddress(addressInfo);

        });

    function addAddress(data) {
        street = addressInfo.address.street;
        city = addressInfo.address.city;
        state = addressInfo.address.stateMN;
        zip = addressInfo.address.zip;

        $(".footer").append("<div>" +street + " " + city + ", " + state + " " + zip+ "</div>");
        console.log("writting addy");
        console.log(street, city, state, zip);
    }




    $('.luce-info').append('<ul class="col-md-12 right"><li>Responsible for delivery of food, accurate order taking, and friendly customer service.</li></ul>');
    $( "li, p" ).hover(
        function() {
            $( this ).addClass("bigger");
        }, function() {
            $( this ).removeClass( "bigger" );
        });
});
