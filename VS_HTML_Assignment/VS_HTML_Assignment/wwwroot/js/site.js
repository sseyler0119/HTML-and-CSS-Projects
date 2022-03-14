// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function mOver(obj) {
    obj.innerHTML = "Slimey!"
}

function mOut(obj) {
    obj.innerHTML = "Guess my name!"
}

function imgFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://i.pinimg.com/originals/f2/9e/ba/f29eba19d1ed58efaa6b8ac884bfc683.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "Slimey the worm");
    document.getElementById("imageDiv").appendChild(x);
}