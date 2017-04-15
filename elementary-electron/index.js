var picture = require('cat-picture')
var image = require('lightning-image-poly')
var fs = require('fs')
var remote = require('electron').remote

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, (err,data)=> {
    fs.writeFile('annotation.pdf',data,(err) => {
      if (err) alert('error generating pdf!' + err.message)
      else alert('pdf saved!')
    })
  })
}
window.addEventListener('keydown', (e) => {
  if(e.keyCode == 80) save()
})
var src = picture.src
picture.remove()

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
