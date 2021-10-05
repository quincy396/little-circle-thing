
const CanvasX = window.innerWidth
const CanvasY = window.innerHeight
let m



function setup(){
    createCanvas(CanvasX, CanvasY)
    m = new myCircle(CanvasX/2,CanvasY/2, 100, "blue", "yellow")
    s = new mySquare(CanvasX/2,CanvasY/2, 200, "yellow", "red")
}

function draw(){
    background(0)
    s.update()
    m.update(s)
    s.drawing()
    m.drawing()
}

function mousePressed(){
    if(m.inside(mouseX,mouseY)){
        m.changeColor()
    }
    
}
