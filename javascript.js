let flag=1;
let string = "";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', function(event){
        if(event.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML=='C'){
            string='';
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML=='e'){
            flag=Math.E;
            string=eval(string*flag);
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML=='%'){
            flag=0.01;
            string=eval(string*flag);
            document.querySelector('input').value=string;
        }
        else{
            string= string + event.target.innerHTML;
            document.querySelector('input').value=string;
        } 
    })
})