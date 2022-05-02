const player = document.querySelector('.player')
      playBtn = document.querySelector('.play')
      audio = document.querySelector('.audio')
      progressContainer = document.querySelector('.progress__container')
      progress = document.querySelector('.progress')
      cover = document.querySelector('.cover')
      imgSrc = document.querySelector('.img-src')

// !play
function playSong() {
   player.classList.add('play')
   imgSrc.src = '../img/pause.png'
   audio.play()
}

// !pause
function pauseSong() {
   player.classList.remove('play')
   imgSrc.src = './../img/play-button.png'
   audio.pause()
}
playBtn.addEventListener('click', () => {
   const isPlaying = player.classList.contains('play')
   if (isPlaying) {
      pauseSong()
   } else  {
      playSong()
   }
})

// !progress bar
function updateProgress(e) {
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime / duration) * 100
   progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress )

// !Sett progress
function setProgress(e) {
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration
   audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

// !autoPlay
audio.addEventListener('ended', pauseSong)