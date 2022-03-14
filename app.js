'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    
    if(className== "light-teme"){
    this.textContet="Dark";
    }
    else{
        this.textContet = "Light";
    }
    console.log ('current class name:'+ className);
});