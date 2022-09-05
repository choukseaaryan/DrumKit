for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

    document.addEventListener("keydown", function (event) {
        playSound(event.key);
        buttonAnimation(event.key);
    });
}

function playInstrument(instrument) {
    var audio = new Audio("sounds/"+instrument+".mp3")
    audio.play();
}

function playSound(key) {
    switch(key) {
        case "w":
            playInstrument("crash");
            break;
        case "a":
            playInstrument("kick-bass");
            break;
        case "s":
            playInstrument("snare");
            break;
        case "d":
            playInstrument("tom-1");
            break;
        case "j":
            playInstrument("tom-2");
            break;
        case "k":
            playInstrument("tom-3");
            break;
        case "l":
            playInstrument("tom-4");
            break;
    }
}

function buttonAnimation (key) {
    var btn = ("." + key);

    document.querySelector(btn).classList.add("pressed");
    setTimeout(function () {
        document.querySelector(btn).classList.remove("pressed")
    }, 200);
}