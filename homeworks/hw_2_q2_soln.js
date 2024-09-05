console.log(0.1 + 0.2)
return

// Copyright Tom Collins, 21.1.2024
// Pre-processing MIDI files, calculating their mean MIDI note number, and
// writing them to file.

// Requires
const argv = require('minimist')(process.argv.slice(2))
const fs = require("fs")
const path = require("path")
const plotlib = require("nodeplotlib")
const mm = require("maia-markov")
const mu = require("maia-util")
const an = new mm.Analyzer()

// Individual user paths
const mainPaths = {
  "tom": {
    "inDir": path.join(
      "/Users", "tomthecollins", "Shizz", "UMiami", "Teaching", "511-611",
      "fall24", "homeworks", "hw_2", "music_data", "josquin_bach_midi"
    ),
    "outDir": path.join(
      "/Users", "tomthecollins", "Shizz", "repos", "mmi-mus-ai-nodejs", "io",
      "out"
    ),
    "outFileName": "mean_mnns"
  },
  "anotherUser": {
    // ...
  }
}

// Parameters
const param = {
  "ontimeIndex": 0,
  "mnnIndex": 1,
  "durIndex": 2
}

// Declare/initialize the variables that will contain the results of the analysis.
const myArr = []
const myObj = {}

// Import and analyse the MIDI files.
const mainPath = mainPaths[argv.u]
console.log("Here we go!")
let files = fs.readdirSync(mainPath["inDir"])
files = files.filter(function(file){
  return path.extname(file) === ".mid"
})
console.log("files.length:", files.length)

// Iterate
files
// .slice(0, 1)
.forEach(function(file, ithFile){
  console.log("ithFile:", ithFile)
  const fid = file.split(".mid")[0]
  console.log("fid:", fid)
  try {
    // Array to record proportion of segments for which all notes are inside.
    let insideArr = []
    const mi = new mm.MidiImport(path.join(mainPath["inDir"], file))
    const seg = mu.segment(mi.points, true, param.ontimeIndex, param.durIndex)
    // Have a look at the first five segments.
    console.log("seg.slice(0, 5):", seg.slice(0, 5))
    // Extract feature.
    seg.forEach(function(s){
      const ans = every_inside(s, param.ontimeIndex, param.durIndex)
      insideArr.push(ans)
    })
    console.log("insideArr:", insideArr)
    // Count number of trues.
    const trues = insideArr.reduce(function(a, b){
      if (b){
        return a + 1
      }
      else {
        return a
      }
    }, 0)
    console.log("trues:", trues)
    console.log("insideArr.length:", insideArr.length)
  }
  catch (e) {
    console.log(e)
  }
})


// Helper function
function everything_inside(
  givenSegment, ontimeIndex, durIndex
){
  // I've coded this function with forEach() to demonstrate its use, but it
  // would be better coded with every(), which is a JS array method to test
  // whether every element of an array passes a test, and will stop early as
  // soon as one element does not pass. I've put this more efficient approach
  // below.

  // console.log("givenSegment.points:", givenSegment.points)
  // console.log(givenSegment.ontime, givenSegment.offtime)
  let ans = true
  // givenSegment has properties ontime, offtime, and points.
  givenSegment.points.forEach(function(pt){
    // If conditional concerning pt[ontimeIndex] and ontime,
    // and  pt[ontimeIndex] + pt[durIndex] and offtime.
    if (
      pt[ontimeIndex] < givenSegment.ontime ||
      pt[ontimeIndex] + pt[durIndex] > givenSegment.offtime
    ){
      // If the conditional evaluates to true, return false from the overall function.
      ans = false
    }
  })
  // If we get here with ans unaltered, then each note is "inside the segment",
  // and true will be returned.
  return ans
}


function every_inside(
  givenSegment, ontimeIndex, durIndex
){
  // console.log("givenSegment.points:", givenSegment.points)
  // console.log(givenSegment.ontime, givenSegment.offtime)
  // givenSegment has properties ontime, offtime, and points.
  return givenSegment.points.every(function(pt){
    // If conditional concerning pt[ontimeIndex] and ontime,
    // and  pt[ontimeIndex] + pt[durIndex] and offtime.
    return pt[ontimeIndex] >= givenSegment.ontime &&
    pt[ontimeIndex] + pt[durIndex] <= givenSegment.offtime
  })
}
