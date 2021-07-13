export let allData = {
  name: ["yusinzxc","b","c"],
  img: ["../images/Caller/Ahnyujin.jpeg","b.jpg","c.jpg"],
  voice: ["../voices/yujin/yujincall.mp3", "b.mp3", "c.mp3"]
}
const { name, img, voice } = allData

export const mergeData = []
for (const i in name){
  mergeData.push({
    name: name[i],
    img: img[i],
    voice: voice[i]
  })
}
console.log(mergeData)
