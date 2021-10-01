$(function () {
   
    let getJSONObject = $.getJSON("team.json", function (data) {
        console.log("data from my getJSON method", data);
        
        let temp= '';
        $.each(data.teammembers, function (key, val) {
           temp += '<h3>' + val.name + '</h3>';
           temp += '<h4>' + val.title + '</h4>';
           temp += '<p>' + val.bio + '</p>';
            
        });
        $(`#team`).html(temp);
    }).always(function (data, status, error) {
        console.log("data", data, "status", status, "error", error);
    });
});