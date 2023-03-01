       
    function countDown(num){
        let id = setInterval(function(){
            num--;                
            if (num <= 0 ) {
                clearInterval(id);
                console.log("DONE!");
            } else {
                console.log(num);                     
            }
        }, 1000);
    } 

    countDown(4)

    function randomGame() {
        let temp  = 0;
        let count = 0;
        const NUM = 0.75;
        let timer = setInterval(function() {
            count++;
            temp = Math.random();
            if (temp >= NUM) {
                clearInterval(timer);
                console.log('It took ' + count + ' try/tries.');                
            }
        }, 1000)
    }
