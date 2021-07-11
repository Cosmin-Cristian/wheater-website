
var input = document.getElementById("city");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
}
});

