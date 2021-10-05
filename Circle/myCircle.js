class myCircle {
    constructor(x, y, size, color1,color2){
        this.x = x
        this.y = y
        this.size = size
        this.color1 = color1
        this.color2 = color2
        this.color = this.color1
        this.speed = 2

    }
    drawing(){
        
        fill(this.color)
        ellipse(this.x,this.y,this.size, this.size)
    }
    changeColor(){
        if(this.color ==this.color1){
            this.color = this.color2
        } else{
            this.color = this.color1
        }
    }
    update(s){
        if(this.collision(s)){
            return
        }
        this.x+= this.speed
        this.y+= this.speed
        if (this.x>CanvasX){
            this.x=0
        }
        if (this.y>CanvasY){
            this.y=0
        }
    }
    collision(s){
        //if((this.x+size/2)){}
        return false
    }
    inside(x,y){
        let d = ((this.x - x)**2 + (this.y-y)**2)**0.5
        console.log(d)
        console.log(this.size)
        return d < this.size/2
    }

}