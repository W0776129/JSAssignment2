//Assignment 3
//Aauthor: Nikhil Patel
//Date: 03 Oct 2021


//method 1

/*$(document).ready(function () {
   
    let getJSONObject = $.getJSON("team.json", function (data) {
        console.log("data from my getJSON method", data);
        
        let temp= '';
        $.each(data.teammembers, function (key, val) {
           temp += '<h3>' + val.name + '</h3>';
           temp += '<h4>' + val.title + '</h4>';
           temp += '<p>' + val.bio + '</p>';
            
        });
        $(`#team`).html(temp);
    }
});

*/


//method 2

$(document).ready(function () {
    setTimeout(loadJson, 5000);  // MAKE THE AJAX CALL AFTER A FEW SECONDS DELAY.
    $(`#team`).html('<p>Loading</p>');
        function loadJson() {
            $.ajax({
                type: 'GET',
                url: 'team.json',
                dataType: 'json',
                success: function (data) {
                    let temp= '';
                    $.each(data.teammembers, function (key, val) {
                       temp += '<h3>' + val.name + '</h3>';
                       temp += '<h4>' + val.title + '</h4>';
                       temp += '<p>' + val.bio + '</p>';
                        
                    });
                    $(`#team`).html(temp);
                },
                error: function(){
                    console.log("error");
                }
            });
        }
});