var $submitAddl = $("#submitaddl");
var $submitTask = $("#submittask");
var $currentTasks = $("#currenttasks");



$submitAddl.on("click", updateaddl);
$submitTask.on("click", submittask);

function getTasks() {
    return $.ajax({
        url: "api/tasks",
        type: "GET"
    });
}

// going braindead best display i can thing of atm
var refreshTasks = function() {
    getTasks().then(function(data) {
        console.log(data);
        $currentTasks.empty();
        var $th1=$('<th>');
        $th1.append("Task");
        var $th2=$('<th>');
        $th2.append("Reward");
        var $th3=$('<th>');
        $th3.append("Status");
        $currentTasks.append($th1, $th2, $th3);
        
        $currentTasks.append()
        for (var i = 0; i < data.length; i++) {

            var $t = $('<tr>');
            var $td1 = $('<td>')
            $td1.append(data[i].task);
            var $td2 = $('<td>')
            $td2.append(data[i].reward);
            var $td3 = $('<td>')
            $td3.append(data[i].task_status);
            $t.append($td1, $td2, $td3);
            $currentTasks.append($t);

        }
    });
};

function updateaddl() {
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

function submittask() {
    event.preventDefault();
    var $taskName = $("#taskname").val();
    var $reward = parseInt($("#reward").val());
    console.log($taskName);
    $.ajax({
        url: "/api/createtask",
        type: "POST",
        data: {
            task: $taskName,
            reward: $reward
        }
    }).then(function(data) {
        console.log(data);
        refreshTasks();
    })
}

refreshTasks();
