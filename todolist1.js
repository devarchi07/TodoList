let sub = document.getElementById("sub")
let tbody = document.getElementById("tbody")
let arr = []

function initialize()
{    let task = document.getElementById("task").value
     let desc = document.getElementById("desc").value
    if(localStorage.getItem('arr')==null)
    {   console.log("if")
       
        arr.push([task,desc])
        localStorage.setItem("arr",JSON.stringify(arr))
        console.log(arr)
    }
    else
    {   console.log("else")
        store = localStorage.getItem('arr')
        console.log(store)
        arr = JSON.parse(store)
        console.log(arr)
        arr.push([task,desc])
        localStorage.setItem("arr",JSON.stringify(arr))
    }

    update()
}

function update(){
    if(localStorage.getItem('arr')==null)
    {  
        console.log("if")
        
        localStorage.setItem("arr",JSON.stringify(arr))
        console.log(arr)
    }
    else
    {   console.log("else")
        store = localStorage.getItem('arr')
        console.log(store)
        arr = JSON.parse(store)
        console.log(arr)
        
        localStorage.setItem("arr",JSON.stringify(arr))
    }

    
    
    let str =""
    
    console.log(arr.length)
    for(let i=0;i<arr.length;i++)
    {
        str+=`<tr>
         <td>${i+1}</td>
         <td>${arr[i][0]}</td>
         <td>${arr[i][1]}</td>
         <td><button onclick="del(${i})">DELETE</button></td>
         </tr>`
    }
    tbody.innerHTML=str
}


sub.addEventListener("click",initialize)
update()
 function del(item){
    store = localStorage.getItem('arr')
    arr = JSON.parse(store)
    if(item>-1)
    {
        arr.splice(item,1)
    }
   
    localStorage.setItem("arr",JSON.stringify(arr))
    update()
    alert(`"Congrats on finishing  Task 🎉🎉🎉🎉🎉🎉"`)
 }
  
 function clear_list(){
    if( confirm("DO YOU REALLY WANT TO CLEAR ALL TASK?"))
    {
     localStorage.clear()
     update()
     alert("Congrats on finishing all Task 🎉🎉🎉🎉🎉🎉")
 }}
 
 today= new Date
res=today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()
t=document.getElementById("time")
t.innerText=res