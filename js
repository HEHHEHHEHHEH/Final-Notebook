var title =  document.getElementById("title")
var descrip = document.getElementById('desc')
var cont = document.getElementById('noteCard')

var add = () => {

    if(title.value === ""  || descrip.value === ""){
        alert("Please! Enter your Notes First\nFields cannot be empty.")
    }
    else{
        var card = document.createElement('div')
        card.setAttribute("class" , 'card')

        var h1 = document.createElement('h1')
        var h1tx = document.createTextNode(title.value)
        h1.setAttribute('class' , "h1tx")
        h1.appendChild(h1tx)
    
        var p = document.createElement('p')
        var ptx = document.createTextNode(descrip.value)
        p.setAttribute('class' , "ptx")
        p.appendChild(ptx)

        var btn = document.createElement('button')
        var btntxt = document.createTextNode('Edit')
        btn.setAttribute('class' , "btntx")
        btn.setAttribute('onclick' , 'edit(this)' )
        btn.appendChild(btntxt)

        var btn1 = document.createElement('button')
        var btn1txt = document.createTextNode('Delete')
        btn1.setAttribute('class' , "btn1tx")
        btn1.setAttribute('onclick' , "del(this)")
        btn1.appendChild(btn1txt)

    
        cont.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        card.appendChild(btn)
        card.appendChild(btn1)
      
        title.value = '';
        descrip.value = '';
    }
}

var edit = (e) => {

    
    var head = e.parentNode.firstChild.innerHTML;
    var descript = e.parentNode.childNodes[1].innerHTML;
    
    // console.log(head , descrippp)
    
    var titles = prompt('Enter your Note', head )
    var descript = prompt('Edit your ' , descript)

    e.parentNode.firstChild.innerHTML = titles ;
    e.parentNode.childNodes[1].innerHTML = descript
     
}
var delAll = () => {
    cont.innerHTML = ''
}
var del = (e) => {
    e.parentNode.remove()
}
