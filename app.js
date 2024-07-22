let myLabel=document.querySelector('.myLabel')
let myText=document.querySelector('.myText')
let myButton=document.querySelector('.myButton')
let paragraph=document.querySelector('.paragraph')


let age='';

myButton.onclick=function(){

    age=myText.value

    if(age >=18){

        paragraph.textContent='This is the age to read books, not to play video games unless you wanna make your career in them. Try To Be Focused ON Your Goals.'

    }


    else{

        paragraph.textContent='You Are Too Young To Think About Your Life. Just Go ANd Play with your friends. Need Some Chocolate?'  
    }
}


