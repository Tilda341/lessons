var tags = ['div', 'h1', 'a', 'p']
var classes = ['main', 'title', 'link', 'parag']
var styles = document.head.appendChild (
    document.createElement ( "style" )
)
var style = `
    .main{
        border: 1px solid black;
        width: 50px;
        height: 50px;
    }
    .title{
        font-size:26px;
        color:yellow;
    }
    .link{
        border: 1px solid red;
        width:50px;
        height: 50px;
    }
    .parag{
        font-size:26px;
        color:orange;
    }
`
styles.innerHTML = style;

tags.forEach(function(item, index){
        var elem = document.body.appendChild (
        document.createElement(item)
    )
    elem.className = classes[index];
}
)


