/*
const input = document.getElementById("button");

function addingEventListener() {
    alert('I was clicked!');
    }

input.addEventListener('click', addingEventListener);
*/




const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener("click", function() {
        alert("I was clicked!");
    });
}

addingEventListener()
