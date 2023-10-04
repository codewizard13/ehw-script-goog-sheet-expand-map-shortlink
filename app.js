// Expand Short URLs to Geolocation Coordinates
//
// app.gs

function ExpandURL(url){
  var response = UrlFetchApp.fetch(url,{followRedirects: false});
  var longurl = decodeURIComponent(response.getHeaders()['Location'])
  return longurl;
}

let urlToTest = "https://maps.app.goo.gl/d2rEBrehakJisVfZ9"

let longURL = ExpandURL(urlToTest)
let longTestUrl = "https://www.google.com/maps/place/0.316984,32.934252/data=!4m6!3m5!1s0!7e2!8m2!3d0.3169835!4d32.9342524?utm_source=mstt_1&entry=gps"

console.log(`longUrl: ${longURL}`)

// url is a long expanded url
function ParseCoords(url) {

    let coordStr = ''

    // If Apple Maps
    if (url.indexOf("maps.apple.com") > 0) {
      console.log("==[ This is an Apple Map url ]==")

      coordStr = /&ll=([^&]+)/.exec(url)[1];

      console.log(`coordStr: ${coordStr}\n`)


    }

    // If Google Maps
    if (url.search(/google.com\/maps\/place/) > 0 ) {
      console.log("==[ This is an Google Map url ]==")

      coordStr = /\/place\/(.*)\/data/.exec(url)[1];
      console.log(`coordStr: ${coordStr}\n`)

    }

    if (url.search(/maps.google.com\/?\?q/) > 0 ||
      url.search(/maps.google.com(\/maps)/) > 0
    ) {
      console.log("==[ This is an Google Map url ]==")

      coordStr = /(\?|\&)([^=]+)=([^&]+)/.exec(url)[3];
      coordStr.replace("\?q","")
      
      console.log(`coordStr: ${coordStr}\n`)
    }

  return coordStr

}

let coords = ParseCoords(longTestUrl)
console.log(coords)