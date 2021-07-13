import * as create from "./createVoice.js";
import { variables } from "./vars_and_datas/vars.js";
import * as datas from "./vars_and_datas/datas.js";

/* Variable */
const { bgImg, callerName, callerImg, accept, decline } = variables;

class WhosCalling{
  constructor(name,img,voice){
    this.name = name
    this.img = img
    this.voice = voice
  }
  design(){
    callerName.innerHTML = this.name
    callerImg.src = this.img
    bgImg.src = this.img
  }
  buttons(){
    accept.style.display = "none"
    create.createVoice(this.voice)
  }
}

const call = new WhosCalling(
  datas.mergeData[0].name,
  datas.mergeData[0].img,
  datas.mergeData[0].voice
)
call.design()
accept.onclick = function(){
  call.buttons()
  decline.onclick = () => {
    window.location.reload()
  }
}
