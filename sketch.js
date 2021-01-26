var form, welcome,task
var db, viewtask,home
var badge;
var points,getPoints=0;

function setup() {
  createCanvas(displayWidth,displayHeight);
  db= firebase.database()
 welcome=new Home()
 
 db.ref("totalPointsGained").on("value",(data)=>{
  getPoints=data.val()
})
}

function draw() {
welcome.display()



  background(255,255,255);  
  
}