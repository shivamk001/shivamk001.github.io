var started=false;
const ball=document.getElementById('ball')
const upperBar=document.getElementById('upper');
const lowerBar=document.getElementById('lower');
const width = window.innerWidth;
const height = window.innerHeight;
const moveBy=20;
let moveX=4;
let moveY=4;
let ballMoving;

(function(){
    localStorage.setItem('max-score', JSON.stringify({'name':'', 'score':0}))
    alert(`This is your first time`)
})()

function resetPosition(winner){

    //set position of ball
    if(winner=='Player1'){
        console.log('Player2 starts')
        ball.style.position='absolute';
        ball.style.top=parseInt(lowerBar.offsetTop-lowerBar.offsetHeight)+'px';//upperBar.offsetHeight+'px';
        ball.style.left=0.48*width+'px';
    }
    else if(winner=='Player2'){
        console.log('Player1 starts')
        ball.style.position='absolute';
        ball.style.top=upperBar.offsetHeight+'px';//parseInt(height-lowerBar.offsetHeight)+'px';
        ball.style.left=0.48*width+'px';
    }

    //set position of bars
    upperBar.style.position='absolute';
    upperBar.style.top='0px';
    upperBar.style.left=0.33*width+'px';

    lowerBar.style.position='absolute';
    lowerBar.style.top=0.97*height+'px';
    lowerBar.style.left=0.33*width+'px';
}

function updateScore(winner, score){
    console.log('Score Updated', score, started)
    if(winner=='Draw'){
        alert(`Its a draw on Score ${score}`)
    }
    else{
        alert(`${winner} wins, Score is ${score}`)
    }
    if(score>JSON.parse(localStorage.getItem('max-score')).name){
        alert(`New Max Score: ${score}`)
        localStorage.setItem('max-score', JSON.stringify({'name': winner, 'score': score}))
    }
    started=false
    clearInterval(ballMoving)
    resetPosition(winner)
}

function onControlPress(e){

    //console.log('KEYCODE:', e.keyCode)
    let left=upperBar.style.left;
    //console.log('First Left:', left);
    if(left==''){
        left=width*0.33;
    }
    else{
        //console.log(left, left.substring(0, left.length-2))
        left=parseInt(left.substring(0, left.length-2));
        //console.log('Left:', left);
    }

    if(e.key=='a'){
        //move left
        left-=moveBy;
        if(left<0){
            left=0;
        }

        if(left>0.67*width){
            // right=0;
            left=0.67*width;
        }
        left+='px'
        // console.log('After Left:', left)
    
        upperBar.style.left=left;
        lowerBar.style.left=left;
    }
    else if(e.key=='d'){
        //move right
        left+=moveBy;
        if(left<0){
            left=0;
        }

        if(left>0.67*width){
            // right=0;
            left=0.67*width;
        }
        left+='px'
        // console.log('After Left:', left)
    
        upperBar.style.left=left;
        lowerBar.style.left=left;
    }
    else if(e.key=='Enter'){
        console.log('Enter key pressed')

        if(!started){
            started=true
            let ballRect=ball.getBoundingClientRect()
            let ballX=ballRect.x
            let ballY=ballRect.y
            let ballDia=ballRect.width
            let upperBarHeight=upperBar.offsetHeight
            let lowerBarHeight=lowerBar.offsetHeight
            let upperBarWidth=upperBar.offsetWidth
            let lowerBarWidth=lowerBar.offsetWidth
            let score1=0, score2=0;

            ballMoving=setInterval(function(){
                let upperBarX=upperBar.getBoundingClientRect().x;
                let lowerBarX=lowerBar.getBoundingClientRect().x;
                let ballCentre=ballX+ballDia/2;
                ballX+=moveX;
                ballY+=moveY;
                ball.style.left=ballX+'px'
                ball.style.top=ballY+'px'

                if(((ballX+ballDia)>window.innerWidth) || (ballX<0)){
                    //ball bahar chali gayi
                    moveX=-moveX;
                }

                //upar
                if(ballY<=upperBarHeight){
                    moveY=-moveY;
                    if((ballCentre<upperBarX) || (ballCentre>(upperBarX+upperBarWidth))){
                        //missed the ball by player1
                        // if(score1==score2){
                        //     if(score1==0){
                        //         updateScore('Player1', Math.max(score1, score2))
                        //     }
                        //     else{
                        //         updateScore('Draw', Math.max(score1, score2))
                        //     }
                        // }
                        // else{
                            updateScore('Player2', Math.max(score1, score2))
                        
                    }
                    score2++;
                }
                
                //niche
                if((ballY+ballDia)>(window.innerHeight-lowerBarHeight)){
                    //ball is below
                    moveY=-moveY;
                    if((ballCentre<lowerBarX) || (ballCentre>(lowerBarX+lowerBarWidth))){
                        //missed the ball by player2
                        // if(score1==score2){
                        //     if(score1==0){
                        //         updateScore('Player2', Math.max(score1, score2))
                        //     }
                        //     else{
                        //         updateScore('Draw', Math.max(score1, score2))
                        //     }
                        // }
                        // else{
                            updateScore('Player1', Math.max(score1, score2))
                        
                    }
                    score1++;
                }
                console.log('Score1:', score1, ' Score2:', score2)
            }, 10)
        }
    }





}






document.addEventListener('keypress', onControlPress)
