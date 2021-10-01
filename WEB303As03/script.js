$(function () {
   
    var getJSONObject = $.getJSON("team.json", function (data) {
        console.log("data from my getJSON method", data);
        
        $.each(data.teammembers, function (key, val) {
            console.log("did we get the data?", key, val)
            $(`#team`).html(
                `<h3>${val.name}</h3>
                 <h4>${val.title}</h4>
                 <p>${val.bio}</p>`
            )
        });
    }).always(function (data, status, error) {
        console.log("data", data, "status", status, "error", error);
    });
});