let person= function (name){
    this.name=name;
}
person.prototype.Name = function(){
    console.log("my name is " + this.name);
}
let teacher = function(name,branch){
    person.call(this,name);
    this.branch=branch;
}
teacher.prototype= Object.create(person.prototype);
teacher.prototype.constructor=teacher;
teacher.prototype.BranchShow= function(){
    console.log("my branch is " + this.branch);
}
let student = function(name,number){
    person.call(this,name);
    this.number=number;
}
student.prototype= Object.create(person.prototype);
student.prototype.constructor=student;
student.prototype.work=function(){
    console.log("ı study is math");
}
let headmaster = function(name,branch){
    teacher.call(this, name,branch)
}
headmaster.prototype=Object.create(teacher.prototype);
headmaster.prototype.constructor= headmaster;
headmaster.prototype.Task=function(){
    console.log("today ı have a lot of task ")
}
let prsn= new person("mert");
let teach= new teacher("aysu","math");
let std= new student("ahmet",1256);
let hm= new headmaster("aslı","art");
prsn.Name();
teach.Name();
teach.BranchShow();
std.Name();
std.work();
hm.Name();
hm.BranchShow();




