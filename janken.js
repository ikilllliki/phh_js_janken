window.addEventListener('load',function(){
    let PlayerHand;
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let robotHandField = document.getElementById('robot_hand');
    let result = document.getElementById('result');

    function janken(hand){
        let hands = ['rock','paper','scissors'];
        robotHand = hands[Math.floor(Math.random() * hands.length)];
        robotHandField.innerHTML = '相手の手は' + robotHand
        result.innerHTML = judge(hand,robotHand)
// 1. robotHandの手を決めましょう、乱数を使えば決まるよ！
// 2. 勝敗判定の処理を書いてみましょう、別に関数にした方がいいかも
// 3. 勝敗判定とロボットの手をHTMLに書き込みましょう
    }
    
    function judge (myHand,robotHand){
        if (myHand === robotHand){
            return 'あいこ'
        }else if(
            (myHand === 'rock' && robotHand === 'scissors')||
            (myHand === 'scissors' && robotHand === 'paper')||
            (myHand === 'paper' && robotHand === 'rock')){
                return 'あなたの勝ち'
            }else{
                return 'あなたの負け'
            }
    }

    rock.addEventListener('click',function(){
        janken ('rock');
    });

    paper.addEventListener('click',function(){
        janken ('paper');
    });

    scissors.addEventListener('click',function(){
        janken ('scissors');
    });

});