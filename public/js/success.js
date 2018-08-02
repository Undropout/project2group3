var $submitAddl = $("#submitaddl");
var $submitTask = $("#submittask");



$submitAddl.on("click", updateaddl);
$submitTask.on("click", submittask);



function updateaddl(){
    event.preventDefault();
    var $addressedAs = $("#addressedas").val();
    var $email = $("#email").val();
    var $username = $("#username").val();
    $.ajax({
        url: "/api/update",
        type: "PUT",
        data: {
            addressedas: $addressedAs,
            email: $email,
            username: $username
        }
    }).then(function(data) {
        console.log(data);
    })
}

function submittask(){
    event.preventDefault();
    console.log("Wtf");
    var $taskName = $("#taskname").val();
    var $reward = parseInt($("#reward").val());
    $.ajax({
        url: "/api/createtask",
        type: "POST",
        data: {
            taskname: $taskName,
            reward: $reward
        }
    }).then(function(data) {
        console.log(data);
    })
}