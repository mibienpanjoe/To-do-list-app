const inputBox = document.getElementById('input-box');
const ListContainer = document.getElementById('list-container')
function addTask(){
    if(inputBox.value===''){
        alert("Enter a task name");
    }
    else{
        let li= document.createElement('li');
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);
        inputBox.value='';

        let span =document.createElement('span');
        span.innerHTML='\u00d7'
        li.appendChild(span);
        inputBox.value='';
    }
    }

ListContainer.addEventListener("click",function(e){
        if (e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false)
function saveData(){
    localStorage.setItem('Data',ListContainer.innerHTML)
}

function showData(){
    ListContainer.innerHTML=localStorage.getItem('Data')
}

showData();