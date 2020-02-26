const picture = "https://t6.rbxcdn.com/c4e532bccfc14fb2ee421f74deb435bb"
let p = document.body.appendChild (
  document.createElement ( "p" ))
p.style = `
  width: 100px;
  height: 100px;
  border: solid 1px gray;
  transition: 1s linear;
  `
p.onclick = function ( event ) {
  if ( event.eventPhase === 3 ) this.firstChild.remove()
  else {
      let img = event.target.appendChild (
          document.createElement ( "img" )
      )
      img.src = picture
      img.width = 100
}}
p.onmouseover  = function(event) {
  event.target.width = 200
  event.target.style.transition = '1s linear'
  event.target.style.border = 'solid 1px gray'
};
p.onmouseout = function(event) {
  event.target.width = 100
};