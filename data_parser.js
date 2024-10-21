const data = require('./data.json')
const fs = require('fs')
let resultArray = []
for (songInfo of data.songs) {
  try{
    let expert = songInfo.sheets.find(sheets => sheets.difficulty === 'expert').internalLevelValue
    let master = songInfo.sheets.find(sheets => sheets.difficulty === 'master').internalLevelValue
    let name = songInfo.songId
    resultArray.push({name, "difficulty":{expert, master}})
  } catch (e) {
    console.log(songInfo.songId)
    console.log(e)
  }
}
fs.writeFileSync('data_parsed.json', JSON.stringify(resultArray, null))