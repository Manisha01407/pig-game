'use strict'
let s1=document.getElementById('score1');
let s2=document.getElementById('score2');
let fs1=document.getElementById('finalscore1');
let fs2=document.getElementById('finalscore2');
let dice=document.getElementById('dice');
let roledice=document.getElementById('roledice');
let player1=document.getElementById('player1');
let player2=document.getElementById('player2');
let hold=document.getElementById('hold');
let newgame=document.getElementById('newgame');

dice.classList.add('hidden');
roledice.addEventListener('click',()=>{
    let dicenumber=Math.floor(Math.random()*6)+1;
    dice.src=`dice-${dicenumber}.jpg`;
    dice.classList.remove('hidden');
    if(player1.classList.contains('bg-pink-300')){
        if(dicenumber!=1){
            s1.innerText=Number(s1.innerText)+dicenumber;
        }else{
            s1.innerText=0;
            player1.classList.remove('bg-pink-300');
            player1.classList.add('bg-pink-100');
            player2.classList.remove('bg-pink-100');
            player2.classList.add('bg-pink-300');
        }
    }else{
        if(dicenumber!=1){
            s2.innerText=Number(s2.innerText)+dicenumber;
        }else{
            s2.innerText=0;
            player1.classList.add('bg-pink-300');
            player1.classList.remove('bg-pink-100');
            player2.classList.add('bg-pink-100');
            player2.classList.remove('bg-pink-300');
        }
    }
})
hold.addEventListener('click',()=>{
    if(player1.classList.contains('bg-pink-300')){
        fs1.innerText=Number(fs1.innerText)+Number(s1.innerText);
        if(Number(fs1.innerText)>=100){
            window.alert(`player 1 won the match with score ${fs1.innerText} and difference ${fs1.innerText-fs2.innerText}`);
        }else{
            s1.innerText=0;
            player1.classList.remove('bg-pink-300');
            player1.classList.add('bg-pink-100');
            player2.classList.remove('bg-pink-100');
            player2.classList.add('bg-pink-300');
        }
    }else{
        fs2.innerText=Number(fs2.innerText)+Number(s2.innerText);
        if(Number(fs2.innerText)>=100){
            window.alert(`player 2 won the match with score ${fs2.innerText} and difference ${fs2.innerText-fs1.innerText}`);
        }else{
            s2.innerText=0;
            player1.classList.add('bg-pink-300');
            player1.classList.remove('bg-pink-100');
            player2.classList.add('bg-pink-100');
            player2.classList.remove('bg-pink-300');
        }
    }
})

newgame.addEventListener('click',()=>{
    dice.classList.add('hidden');
    s1.innerText=0;
    s2.innerText=0;
    fs1.innerText=0;
    fs2.innerText=0;
    if(player2.classList.contains('bg-pink-300')){
        player2.classList.remove('bg-pink-300');
        player2.classList.add('bg-pink-100');
        player1.classList.remove('bg-pink-100');
        player1.classList.add('bg-pink-300');
    }
})
