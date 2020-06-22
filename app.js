document.querySelector('.get-jokes').addEventListener('click',getJokes);
function getJokes(e){
    const number=document.querySelector("#number").value;
    if(number>0){

    const xhr=new XMLHttpRequest();
    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if (this.status === 200){
            const response=JSON.parse(this.responseText);
            
            let output='';

            if(response.type==='success'){
                response.value.forEach(function(joke){
                    output=output+`<li>${joke.joke}</li>`

                });
            document.querySelector(".jokes").innerHTML=output;

            }
            else{
                output=output + `<li>Something went wrong,please try again</li>`;
            }

        }
    }    
    xhr.send();
}
else{
    alert('please enter valid number of jokes');
}
    
    
    
    e.preventDefault();
}