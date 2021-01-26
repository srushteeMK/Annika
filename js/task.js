class Task {

constructor(){
    this.task= null
    this.description=null
    this.points=null
    this.reward=null
    this.backhome=createButton("Back");
}

update(task,description,points,reward){
db.ref("/").update({
    task:task, 
    description:description,
    points:points,
    reward:reward
})
}
display(){
    this.backhome.position(width/2+100,height/2)
  this.backhome.style("border-width", "3px")
  this.backhome.style("font-size","35px")
  this.backhome.style("border-radius","10px")
 
}

}