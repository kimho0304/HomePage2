let eyeg = document.getElementsByClassName('eye')
let nosie = document.getElementById('noise')
let dx = 1.0
let flag = -1

function op(){

    if (dx <= 0.0){
        flag = 1
    }

    else if(dx == 1.0){
        flag = -1
    }
    dx = dx+flag*0.02
    for(var i = 0; i<eyeg.length; i++){
        eyeg[i].style.opacity = String(dx)
    }      
    console.log(dx)
    setTimeout(op, 50)
    
}

op()

function credit(){
    confirm("Images of Gallery from ITOMAN-e")
    confirm(". . . . . . . .")
}

cnt = 1
function eyes(){
    
    let screen_width = window.innerWidth
    let screen_height = window.innerHeight
    var eye = document.createElement('img')
    var area = document.getElementById('area')
    
    var x = Math.floor(Math.random()*screen_width)
    var y = Math.floor(Math.random()*screen_height)
    eye.style.top = String(y)+"px"
    eye.style.left = String(x)+"px"
    eye.setAttribute('src', '/imgs/eye.gif')
    eye.setAttribute('class', 'eye')
    cnt+=1
    eye.style.position = 'absolute'
    eye.style.zIndex = 1
    document.body.appendChild(eye)
    console.log('fuck')
}


