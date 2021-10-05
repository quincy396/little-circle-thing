class mySquare {
    constructor(x, y, size, color1,color2){
        this.x = x
        this.y = y
        this.size = size
        this.color1 = color1
        this.color2 = color2
        this.color = this.color1
        this.count = 10

    }
    drawing(){
        
        fill(this.color)
        square(this.x, this.y, this.size)
    }
    changeColor(){
        if(this.color ==this.color1){
            this.color = this.color2
        } else{
            this.color = this.color1
        }
    }
    update(){
        this.count -=1
        if (this.count<1){
            this.x= random(CanvasX)
            this.y= random(CanvasY)
            this.count = 40

        }
        
        
    
    }
    inside(x,y){
        let d = ((this.x - x)**2 + (this.y-y)**2)**0.5
        console.log(d)
        console.log(this.size)
        return d < this.size/2
    }

}