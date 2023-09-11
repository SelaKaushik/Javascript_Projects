let progress = document.getElementById("progress");

let song = document.getElementById("song");
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");

let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlLeft = document.getElementById("ctrlLeft");
let ctrlRight = document.getElementById("ctrlRight")

/*song.onloadedmetadata = function(){
    progress.max = song.duaration;
    progress.value = song.currentTime;
}*/

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
function songplay_back(){
    if(ctrlLeft.classList.contains("fa-backward")){
        song.pause();
        song = song1;
        playPause();
        if(song.play()){
            setInterval(()=>{
                progress.value=song.currentTime;
            },500);
        }
        document.getElementById("h1").innerHTML = "Naa Roja Nuvve";
        document.getElementById("p1").innerHTML = "Hesham Abdul Wahab's";
    }
}
function songplay_for(){
    if(ctrlRight.classList.contains("fa-forward")){
        song.pause();
        song = song2;
        playPause();
        if(song.play()){
            setInterval(()=>{
                progress.value=song.currentTime;
            },500);
        }
        document.getElementById("h1").innerHTML = "Krishna Astakam";
        document.getElementById("p1").innerHTML = "Sri Adi Sankaracharya";
    }
}
song.onloadedmetadata = function(){
    progress.max = song.duaration;
    progress.value = song.currentTime;
}