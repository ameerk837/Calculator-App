let string = "";
let btns = document.querySelectorAll('.btn');

Array.from(btns).forEach(function(button){

    button.addEventListener('click',function(e){
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('displaybox').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.getElementById('displaybox').value = string;
        }
        else{
            string+=e.target.innerHTML;
            document.getElementById('displaybox').value = string;
        }
        
        
    });
});