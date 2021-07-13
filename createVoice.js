export let main, audio
export function createVoice(src){
  main = document.querySelector(".main")
  audio = document.createElement("audio")
  main.appendChild(audio)
  audio.src = src
  audio.type = "audio/mpeg"
  audio.autoplay = true
  audio.loop = true
  console.log(audio)
}

