const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'The Charmer\'s Call',
        cover: 'assets/1.jpg',
        artist: 'Hanu Dixit',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'You Will Never See Me Coming',
        cover: 'assets/2.jpg',
        artist: 'NEFFEX',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Intellect',
        cover: 'assets/3.jpg',
        artist: 'Yung Logos',
    },
    {
        path: 'assets/Mélanine.mp3',
        displayName: 'Mélanine',
        cover: 'assets/4.jpg',
        artist: 'Heuss LEnfoiré ft. Werenoi',
    },
    {
        path: 'assets/NothingPersonal.mp3',
        displayName: 'Nothing Personal',
        cover: 'assets/5.jpg',
        artist: 'TIF',
    },
    {
        path: 'assets/6.mp3',
        displayName: 'Carrousel',
        cover: 'assets/6.jpg',
        artist: 'Saad Lamjarred & Enesse',
    },
    {
        path: 'assets/Jelaba.mp3',
        displayName: 'Jelaba',
        cover: 'assets/7.jpg',
        artist: 'Liamsi feat Tawsen',
    },
    {
        path: 'assets/GHANILI.mp3',
        displayName: 'GHANILI',
        cover: 'assets/8.jpg',
        artist: 'KAWTAR',
    },
    {
        path: 'assets/CarreVip.mp3',
        displayName: 'Carré Vip',
        cover: 'assets/9.jpg',
        artist: 'Naps',
    },
    {
        path: 'assets/Rude.mp3',
        displayName: 'Rude',
        cover: 'assets/10.jpg',
        artist: 'Benab feat Maes',
    },
    {
        path: 'assets/Faya.mp3',
        displayName: 'Faya',
        cover: 'assets/11.jpg',
        artist: 'Benab feat Maes',
    },
    {
        path: 'assets/CœurNoir.mp3',
        displayName: 'Cœur Noir',
        cover: 'assets/12.jpg',
        artist: 'Benab',
    },
    {
        path: 'assets/Lila.mp3',
        displayName: 'Lila',
        cover: 'assets/13.jpg',
        artist: 'Benab',
    },
    {
        path: 'assets/Cartelo.mp3',
        displayName: 'Cartelo',
        cover: 'assets/14.jpg',
        artist: 'Benab',
    },
    {
        path: 'assets/Sonar.mp3',
        displayName: 'SOÑAR',
        cover: 'assets/15.jpg',
        artist: 'Morad',
    },
    {
        path: 'assets/Santa.mp3',
        displayName: 'Santa',
        cover: 'assets/16.jpg',
        artist: 'Rvssian, Rauw Alejandro, Ayra Starr',
    },
    {
        path: 'assets/Mask.mp3',
        displayName: 'Mask',
        cover: 'assets/17.jpg',
        artist: 'Mons Saroute',
    },
    {
        path: 'assets/BlueLove.mp3',
        displayName: 'Blue Love',
        cover: 'assets/18.jpg',
        artist: 'Toto',
    },
    {
        path: 'assets/MARADONA.mp3',
        displayName: 'MARADONA',
        cover: 'assets/19.jpg',
        artist: 'Stormy',
    },
    {
        path: 'assets/TesRêves.mp3',
        displayName: 'Tes rêves',
        cover: 'assets/20.jpg',
        artist: 'Dabs feat. Maes',
    },
    {
        path: 'assets/Vide.mp3',
        displayName: 'Vide',
        cover: 'assets/21.jpg',
        artist: 'Flenn',
    },
    {
        path: 'assets/Calme.mp3',
        displayName: 'Calme',
        cover: 'assets/22.jpg',
        artist: 'Flenn',
    },
    {
        path: 'assets/MiAmor.mp3',
        displayName: 'Mi Amor',
        cover: 'assets/23.jpg',
        artist: 'Dhurata Dora ft. Noizy ',
    },                
    {
        path: 'assets/Caira.mp3',
        displayName: 'Ça ira',
        cover: 'assets/24.jpg',
        artist: 'SCH',
    },
    {
        path: 'assets/Comforter.mp3',
        displayName: 'Comforter',
        cover: 'assets/27.jpg',
        artist: 'El GrandeToto',
    },
    {
        path: 'assets/Flou.mp3',
        displayName: 'Flou',
        cover: 'assets/28.jpg',
        artist: 'Flenn',
    },
    {
        path: 'assets/Halla.mp3',
        displayName: 'Halla',
        cover: 'assets/29.jpg',
        artist: 'Anas',
    },
    {
        path: 'assets/Napoli.mp3',
        displayName: 'Napoli',
        cover: 'assets/30.jpg',
        artist: 'Anas',
    },
    {
        path: 'assets/Normal.mp3',
        displayName: 'Normal',
        cover: 'assets/31.jpg',
        artist: 'Anas',
    },
    {
        path: 'assets/Ghariba.mp3',
        displayName: 'Ghariba',
        cover: 'assets/32.jpg',
        artist: 'Nordo',
    },
    {
        path: 'assets/Bouncing.mp3',
        displayName: 'Bouncing',
        cover: 'assets/26.jpg',
        artist: 'Chris Brown',
    },
    {
        path: 'assets/AngelTen.mp3',
        displayName: ' Angel Numbers - Ten Toes',
        cover: 'assets/25.jpg',
        artist: 'Chris Brown ' 
    },
    {
        path: 'assets/AfterHours.mp3',
        displayName: 'After Hours',
        cover: 'assets/33.jpg',
        artist: 'The Weekend',
    },
    {
        path: 'assets/34.mp3',
        displayName: 'Mouth To A Flame ',
        cover: 'assets/34.jpg',
        artist: 'The Weekend',
    },
    {
        path: 'assets/35.mp3',
        displayName: 'Call Out My Name',
        cover: 'assets/35.jpg',
        artist: 'The Weekend',
    },
    {
        path: 'assets/36.mp3',
        displayName: 'Mechi',
        cover: 'assets/36.jpg',
        artist: 'Flenn',
    },
    {
        path: 'assets/37.mp3',
        displayName: 'Dawini',
        cover: 'assets/37.jpg',
        artist: 'Tawsen feat Ayoub Anbaoui',
    },
    {
        path: 'assets/38.mp3',
        displayName: 'Bechouia',
        cover: 'assets/38.jpg',
        artist: 'Anas',
    },
    {
        path: 'assets/39.mp3',
        displayName: 'Badadi',
        cover: 'assets/39.jpg',
        artist: 'Douaa Lahyaoui',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);