let xhr = new XMLHttpRequest()

xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true)

xhr.onload = function(){
    try {
        if(xhr.status == 200){
        console.log(JSON.parse(xhr.responseText));
    }
    } catch (error) {
        console.log(error);
        
    }
}

xhr.send()
fetch("https://jsonplaceholder.typicode.com/posts")
.then(resp => resp.json())
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})