let button = document.getElementById('get-data');

$(document).ready(function(){


//WARIANT 1
    $('#get-data').click(function() {
        $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data) {

            let pId = $('<p></p>').text(`Post Id: ${data.id}`);
            let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);

            $('body').append(pId);
            $('body').append(pUserId);
            $('body').append(pTitle);
            $('body').append(pBody);

        });

    });



//WARIANT 2
    $('#get-data').click(function() {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    .done(function(data) {

        let pId = $('<p></p>').text(`Post Id: ${data.id}`);
        let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
        let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        let pBody = $('<p></p>').text(`Body: ${data.body}`);

        $('body').append(pId);
        $('body').append(pUserId);
        $('body').append(pTitle);
        $('body').append(pBody);

    });

});

});