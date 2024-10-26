const audio = document.getElementById("audio");
const record = document.querySelector(".record");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        record.classList.add("spin");
    } else {
        audio.pause();
        record.classList.remove("spin");
    }
}
