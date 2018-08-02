var $sendEmail = $("#sendemail");
var $submitUpdate = $("#submitupdate");


$sendEmail.on("click", doshit);

function doshit() {
    $.ajax({
        url: "/api/sendemail",
        type: "POST"
    }).then(function(data) {
        console.log(data);
    })
}

$submitUpdate.on("click", updateshit);

function updateshit(){
    event.preventDefault();
    var $updateField = $("#update-field").val();
    $.ajax({
        url: "/api/update",
        type: "PUT",
        data: {
            anewthing: $updateField
        }
    }).then(function(data) {
        console.log(data);
    })
}