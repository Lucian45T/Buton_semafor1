let times = 1

function modifyyellow() {
    var YellowButon = document.getElementById('modify');
    YellowButon.classList.remove('btn-danger');
    YellowButon.classList.add('btn-warning');
}
function modifyred() {
    var RedButon = document.getElementById('modify');
    RedButon.classList.remove('btn-success');
    RedButon.classList.add('btn-danger');
}
function modifygreen(){
    var GreenButon = document.getElementById('modify');
    GreenButon.classList.remove('btn-warning');
    GreenButon.classList.add('btn-success');
}
function changecolor() {
   
    if (times == 3) {
        modifygreen()  
       }
    if (times == 2) {
       modifyyellow() 
      
    }
    if (times == 1) {
         modifyred()   
       }
} 
function modifycolor() {
    if (times <= 3 ) {
     ++times
    }
    if (times > 3) {
        times = 1
    }
     changecolor()
} 

