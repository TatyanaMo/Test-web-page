//alert("Hello kitty.");

function printText() {
    alert("Bye Kitty");
}

function printCustomText(text) {
    alert(text);
}

function printInputText() {
    const txt = document.getElementById("inputField").value;
    document.getElementById("inputField").value = '';
    const history = document.getElementById("chat").innerHTML;
    document.getElementById("chat").innerHTML = history + '<div class="msg">' + txt + '</div>';

//    alert(txt);
}

$.get(
    "https://samples.openweathermap.org/data/2.5/weather?id=524901&appid=b1b15e88fa797225412429c1c50c122a1",
    function(data) {
        alert(data);
    }
);