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

    $.get('/data.json', function (data) {
        console.log(".get data function is running");
        addressInfo = data;

        });
    console.log(addressInfo);
    street = addressInfo.address.street;
    city =  addressInfo.address.city;
    state = addressInfo.address.stateMN;
    zip = addressInfo.address.zip;
    console.log(street, city, state, zip);
    $(".compAdd").appened("<div>street +  city + "," </div>");


    $('.luce-info').append('<ul class="col-md-12 right"><li>Responsible for delivery of food, accurate order taking, and friendly customer service.</li></ul>');
    $( "li, p" ).hover(
        function() {
            $( this ).addClass("bigger");
        }, function() {
            $( this ).removeClass( "bigger" );
        });
});
