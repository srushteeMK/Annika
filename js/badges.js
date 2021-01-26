class Badges{
    constructor(){
this.points=createElement("h1")
this.getPoints=getPoints
this.badge1= createImg("Images/green.png")
this.badge2= createImg("Images/red.png")
this.badge3= createImg("Images/gold.png")
this.badge1.hide()
this.badge2.hide()
this.badge3.hide()
this.back=createButton("Back");
this.describe=createElement("h2");
    }
    display(){
       
        console.log(getPoints)
        this.points.html("Total Points Gained-"+this.getPoints)
        this.points.position(width/2-100,10)
        this.badge1.position(width/2-300, height/2-300)
        this.badge1.style("width","200px")
        this.badge2.position(width/2, height/2-300)
        this.badge2.style("width","200px")
        this.badge3.position(width/2+300, height/2-280)
        this.badge3.style("width","150px")
        if(this.getPoints>=50){
this.badge1.show()
}   
 if(this.getPoints>=150){
    this.badge2.show()
    }
    if(this.getPoints>=200){
        this.badge3.show()
        }
        this.back.position(width/2+150,height/2+60)
        this.back.style("border-width", "3px")
        this.back.style("font-size","35px")
        this.back.style("border-radius","10px")

        this.describe.html("Gain more points to unlock more badges");
        this.describe.position(width/2-300,height/2+50)
        this.back.mousePressed(()=>{
            home=new Home()
        home.display();
        this.points.hide();
        this.badge1.hide();
        this.back.hide();
        this.describe.hide()
        this.badge2.hide()
this.badge3.hide()
        })
    }
}