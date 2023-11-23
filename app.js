let SCORE = document.getElementById('score');
let BUTTONS = [ document.getElementById('decrease-btn'),
                document.getElementById('reset-btn'),
                document.getElementById('increase-btn')
            ]

function update_score_color(){
    if(Number(SCORE.textContent)==0){
        SCORE.style.color = 'black';
    }else if(Number(SCORE.textContent)<0){
        SCORE.style.color = 'red';
    }else{
        SCORE.style.color = 'green';
    }
}

function eventClickButton(index){
    if(index == 0){
        SCORE.textContent = Number(SCORE.textContent)-1
    }else if(index == 2){
        SCORE.textContent = Number(SCORE.textContent)+1
    }else{
        SCORE.textContent = 0;
    }
}

BUTTONS.forEach(button=>{
    button.addEventListener('click',function (){
        let index = BUTTONS.indexOf(button);
        eventClickButton(index);
        update_score_color();
    })
})
