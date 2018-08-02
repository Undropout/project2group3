var divParent = $("#parentDiv");
var divChild = $("#childDiv");

var tdivParent = divParent.clone();
var tdivChild = divChild.clone();

function sigIn() {
    $("#signInModal").modal('toggle');
}

function register() {
    $("#registerModalParent").modal('toggle');
}

$("#loginButton").on("click", function(){
    signIn();
});