console.log('New JavaScript file')
var list = document.getElementById('todo-list')
var btnAdd = document.getElementById('add-item')
var btnUpdate = document.getElementById('update-item')
var btnDelete = document.getElementById('delete-item')
var inputData = document.getElementById('todo-input')
var InputData =''
 inputData.addEventListener('input',function(e){
     Inputvalue = e.target.value
 })
 inputData.addEventListener('keyup',function(e){
     if(e.keyCode ===13){
         addListItem()
     }
 })
     function createNewNode(){
        var newListElement =document.createElement('li')
        var textNode =document.createTextNode(Inputvalue)
        newListElement.appendChild(textNode)
        newListElement.id ='item'+(list.childElementCount+1) 
        return newListElement 
     }
 function addListItem(){
     if (Inputvalue !==undefined && Inputvalue!==null && Inputvalue!=='') {
         list.appendChild(newListElement)
        inputData.value =''
        Inputvalue=''
           }else{
            alert('please enter something and try again.')
        }
     }
 btnAdd.addEventListener('click',addListItem)
 btnUpdate.addEventListener('click',function(){
     var firstElement =list.firstElementChild
     var nameListElement =createNewNode()
     list.replaceChild(nameListElement,firstElement)
 })
 btnDelete.addEventListener('click',function(){
     var firstElement =list.firstElementChild
     list.removeChild(firstElement)
 })


 function getPostsfromServer(){
     var http =XMLHttpRequest()
     http.onreadystatechange =function(){
         if(this.readyState ===4){
         if(this.status ===200){
             console.log(JSON.parse(this.responseText))
             for(var i=0; i<res.length; i++){
                 console.log(res[i].id,res[i].title)
             }
         }else{
             console.log('call Failed')
         }
         }
     }
     http.open('GET','https://my-json-server.typicode.com/typicode/demo/posts',true)
http.send()
    }
    getPostsFromServer()


    function createNewNodePostOnServer(){
        var http =new XMLHttpRequest()
     http.open('POST','https://my-json-server.typicode.com/typicode/demo/posts',true)
    http.onreadystatechange =function(){
        if(this.readyState === 4){
            var res =JSON.parse(this.responseText)
            list.appendChild(createLiElementDynamically(res.id,Inputvalue))
            console.log('call Failed')
        }
    }
    
    
     var obj =JSON.stringify({
         "id":4,
         "title":Inputvalue
     })
     http.send(obj)
    }