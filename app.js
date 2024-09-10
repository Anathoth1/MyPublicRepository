const crazyButton = document.getElementById('crazyButton');
const surpriseText = document.getElementById('surpriseText');
const title = document.querySelector('h1');
let clickCount = 0;

crazyButton.addEventListener('click', function() {
    clickCount++;

    if (clickCount === 20) {
        triggerCrazyEvent();
    } else if (surpriseText.classList.contains('hidden')) {
        surpriseText.classList.remove('hidden');
        crazyButton.textContent = "Click Again for More Crazy!";
    } else {
        surpriseText.textContent = "WOW! Even crazier!";
        crazyButton.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
});

function triggerCrazyEvent() {
    document.body.style.transition = "all 1s ease";
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Explosão de cores
    setInterval(function() {
        document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 200);

    // Rodar o título freneticamente
    title.style.animation = "frenzyRotate 0.1s infinite linear";

    // Texto de surpresa explode e fica maluco
    surpriseText.textContent = "BOOM! CRAZIEST THING EVER!";
    surpriseText.style.fontSize = "5em";
    surpriseText.style.animation = "frenzyText 0.2s infinite alternate-reverse";
    
    // Tornar o botão insano
    crazyButton.textContent = "THIS IS CRAZY!!!";
    crazyButton.style.fontSize = "3em";
    crazyButton.style.animation = "buttonShake 0.3s infinite";

    // Adiciona um áudio maluco (se desejar)
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.loop = true;
    audio.play();
}
