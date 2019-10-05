window.addEventListener('load', launch);


function launch(){
      document.addEventListener('keydown', playsound);
      const keys = document.querySelectorAll('.key');
      keys.forEach(key => {
          key.addEventListener('transitionend', e => {
              e.target.classList.remove('playing');
          })
      })

}

function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio) {
        audio.currentTime = 0;
        audio.play();
        const drum = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        drum.classList.add('playing')
    }


}