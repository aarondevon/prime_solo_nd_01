







$( document ).ready(function() {
    $('.luce-info').append('<ul class="slide"><li>Responsible for delivery of food, accurate order taking, and friendly customer service.</li></ul>');
    $( "li, p" ).hover(
        function() {
            $( this ).addClass("bigger");
        }, function() {
            $( this ).removeClass( "bigger" );
        });
});