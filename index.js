const motAzerty = document.querySelector('.Azerty')
const input = document.querySelector('.insertion')   
const scoreInput = document.getElementById('point')

document.querySelector('button').addEventListener('click', function () {
let motInscrit = input.value.trim().toLowerCase();
    if (motInscrit === motAzerty) {
            let score = parseInt(scoreInput.value);
            score++;
            scoreInput.value = score;
        }
        input.value = '';
});
