function showLetter() {
    document.getElementById("letter").classList.remove("hidden");
}

const text = "The Doctor Recommendated You Take This Once A Week";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}
typingEffect();

/* Countdown */
const meetDate = new Date("Jun 21, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = meetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML =
        days + " days to go ❤️";

}, 1000);

/* Music */
function playMusic() {
    document.getElementById("song").play();
}
function playSong1(){ document.getElementById("song1").play(); }
function playSong2(){ document.getElementById("song2").play(); }
function playSong3(){ document.getElementById("song3").play(); }
function playSong4(){ document.getElementById("song4").play(); }
function playSong5(){ document.getElementById("song5").play(); }
function playSong6(){ document.getElementById("song6").play(); }
function playSong7(){ document.getElementById("song7").play(); }
function playSong8(){ document.getElementById("song8").play(); }
function playSong9(){ document.getElementById("song9").play(); }
function playSong10(){ document.getElementById("song10").play(); }
function playSong11(){ document.getElementById("song11").play(); }
function playSong12(){ document.getElementById("song12").play(); }
function playSong13(){ document.getElementById("song13").play(); }
function playSong14(){ document.getElementById("song14").play(); }
function playSong15(){ document.getElementById("song15").play(); }
function playSong16(){ document.getElementById("song16").play(); }
function playSong17(){ document.getElementById("song17").play(); }
function playSong18(){ document.getElementById("song18").play(); }
function playSong19(){ document.getElementById("song19").play(); }
function playSong20(){ document.getElementById("song20").play(); }
function playSong21(){ document.getElementById("song21").play(); }
function playSong22(){ document.getElementById("song22").play(); }
function playSong23(){ document.getElementById("song23").play(); }

function playSong(songId) {
    // Get all audio elements
    let songs = document.querySelectorAll("audio");

    // Pause all songs first
    songs.forEach(song => {
        song.pause();
        song.currentTime = 0;
    });

    // Play selected song
    document.getElementById(songId).play();
}