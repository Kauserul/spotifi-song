let songIndex = 0;
let audioElement = new Audio("song/1.mp3")
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songsContainer = Array.from(document.getElementsByClassName("songsContainer"))
let masterSongList = document.getElementById("masterSongList")

let songs = [
    {songName : "Amari Tasbir ho  ", filePath : "song/1.mp3" , coverPath : "cover/1.jpg"},
    {songName : "Allhdi Kosom ", filePath : "song/2.mp3" , coverPath : "cover/2.jpg"},
    {songName : "Kal Rastate me ", filePath : "song/3.mp3" , coverPath : "cover/3.jpg"},
    {songName : "Ahona mare pase ", filePath : "song/4.mp3" , coverPath : "cover/4.jpg"},
    {songName : "opordi by arman  ", filePath : "song/5.mp3" , coverPath : "cover/5.jpg"},
    {songName : "yo yo hani shing ", filePath : "song/6.mp3" , coverPath : "cover/6.jpg"},
    {songName : "tere bena ami ", filePath : "song/7.mp3" , coverPath : "cover/7.jpg"},
    {songName : "colo palaya jai ", filePath : "song/8.mp3" , coverPath : "cover/8.jpg"},
    {songName : "amr sate jabe ", filePath : "song/9.mp3" , coverPath : "cover/9.jpg"},
    {songName : "amari tasbir ", filePath : "song/10.mp3" , coverPath : "cover/10.jpg"},

]

//Change Cover and songName
songsContainer.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songNames")[0].innerText = songs[i].songName
})




masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;

    }

    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0;

    }  
})

audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})



const makeAllPlayers = ()=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")

    })
}

Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{

        songIndex = parseInt(e.target.id);
        makeAllPlayers();
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongList.innerText = songs[songIndex].songName
        audioElement.currentTime = 1;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;

    })
})


document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex >=9){
        songIndex = 0;
    }
    else{
        songIndex += 1
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongList.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity = 1;
})

document.getElementById("privious").addEventListener("click", ()=>{
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongList.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity = 1;
})



