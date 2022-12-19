// audio , button_play , button_pause
let audio = document.getElementsByTagName("audio")[0];
let btn_play = document.getElementById("btn_play");
let btn_stop = document.getElementById("btn_stop");
let range_volume = document.getElementById("range_volume");
// Function for Starting audio + show pouser button
function audio_play() {
    audio.play();
    btn_play.style.display = "none";
    btn_stop.style.display = "block";
   // if you went see console.log(audio.volume);
    //if you went see here console.log(range_volume.value);
    // audio oncompete Button Play Start work again
    audio.addEventListener('ended', audio_pause);
    // fix glitch when audio playing the button start show and pouse No ?
    // check This Solution Here in Function audio_pause
    audio.addEventListener('playing', () => {
        btn_play.style.display = "none";
        btn_stop.style.display = "block";
    })
    audio.addEventListener("pause", () => {
        btn_play.style.display = "block";
        btn_stop.style.display = "none";
    })
}
// Function for stoping audio + show Start button
function audio_pause() {
    audio.pause();
    btn_play.style.display = "block";
    btn_stop.style.display = "none";
    // if you went see Remove Comment {//} and remove this txt console.log(audio.volume);
    audio.addEventListener('playing', () => {
        btn_play.style.display = "none";
        btn_stop.style.display = "block";
    })
    audio.addEventListener("pause", () => {
        btn_play.style.display = "block";
        btn_stop.style.display = "none";
    })
}
function volume() {
    audio.volume = range_volume.value;
    //if you went see console.log(audio.volume);

}
// Start audio / Stop audio / edite volume of audio

btn_play.addEventListener("click",audio_play);
btn_stop.addEventListener("click",audio_pause);
range_volume.addEventListener("change",volume);
audio.addEventListener('playing', () => {
        btn_play.style.display = "none";
        btn_stop.style.display = "block";
    })
audio.addEventListener("pause", () => {
    btn_play.style.display = "block";
    btn_stop.style.display = "none";
})
