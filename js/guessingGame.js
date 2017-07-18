function guessingGame() {
    var isConfirm ;
    var randomNumber ;
    var reward ;
    var multipleInterval = 1 ;
    var multipleReward = 1 ;
    var totalReward = 0 ;

// list of functions
    function isUserWantPlay() {
        isConfirm = confirm("Чи бажаєте ви почати гру?");
            if(isConfirm){
                return isConfirm;
            } else {
                console.log("Сьогодні ви не виграли мільйон, а могли.");
            }
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


    function isEntryValueNumber(value, message) {
            while (isNaN(value) || value === "") {
                value = prompt(message, "") ;
            }
            return value ;
    }

    function giveThreeAttempts(){
        for(var i = 1; i <= 5; i = i*i + 1 ) {
            var userAnswer = parseInt(prompt(`Введіть ваше число від 0 до ${5 * multipleInterval}`, ""));
            isEntryValueNumber(userAnswer, `ПОМИЛКА. Введіть ваше ЧИСЛО від 0 до ${5 * multipleInterval}`) ;
            reward = 0;
            var userWon = false;
            if (randomNumber === userAnswer ) {
                reward = 10 / i * multipleReward ;
                console.log(`Ви виграли ${reward} $.`);
                userWon = true;
                break;
            }
        }
    }

    function startGame(answer) {
            while (answer) {
                randomNumber = getRandomNumber(0, 5 * multipleInterval);
                //console.log(randomNumber);  -- tip to know which number was rolled
                giveThreeAttempts();
                if (reward > 0) {
                    multipleInterval*=2;
                    multipleReward*=3;
                    totalReward += reward;
                } else {
                    multipleInterval = 1;
                    multipleReward = 1;
                    totalReward = 0;
                    console.log(`Ваш виграш ${totalReward} $.`);
                }

                answer = confirm(`Ваш виграш ${totalReward} $. Граємо далі?`) ;

                if (answer === false) {
                    console.log(`Дякуємо за гру, ваш виграш становить ${totalReward} $.`);
                }
            }
    }
// end of list

    isUserWantPlay();
    startGame(isConfirm);
}

guessingGame();
