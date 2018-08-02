var $sendEmail = $("#sendemail");

$sendEmail.on("click", doshit);

function doshit() {
    $.ajax({
        url: "/api/sendemail",
        type: "POST"
    }).then(function(data) {
        console.log(data);
    })
}