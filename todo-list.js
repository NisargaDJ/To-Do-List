function addtask(){
var taskInputElement=document.getElementById("taskInput");
var taskInput=document.getElementById("taskInput").value;
var tasklist=document.getElementById("tasklist");

if(taskInput==""){
        alert("please enter the task");
        return;
}


var listItems=document.createElement('li');
listItems.innerText=taskInput;
tasklist.appendChild(listItems);

var buttoncontainer=document.createElement('div');
listItems.appendChild(buttoncontainer);
buttoncontainer.className="task-button";

var Completebutton=document.createElement('button');
buttoncontainer.appendChild(Completebutton);
Completebutton.innerText="Completed";
Completebutton.onclick=function(){
    listItems.classList.toggle('Completed')
}

var Deletebutton=document.createElement('button');
buttoncontainer.appendChild(Deletebutton);
Deletebutton.innerText="Delete";
Deletebutton.onclick=function(){
    tasklist.removeChild(listItems);
}

taskInputElement.value="";

}