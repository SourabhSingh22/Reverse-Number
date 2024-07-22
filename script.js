function reverseNumber() {
    let x = parseInt(document.getElementById('inputNumber').value);
    let num = x;
    // if (x === Number.MIN_SAFE_INTEGER) {
    //     document.getElementById('result').innerText = "0";
    //     return;
    // } else if (x < 0) {
    //     num = x * (-1);
    // } else {
    //     num = x;
    // }
    
    let revNum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        // if (revNum > Number.MAX_SAFE_INTEGER / 10) {
        //     document.getElementById('result').innerText = "0";
        //     return;
        // }
        revNum = (revNum * 10) + lastDigit;
        num = Math.floor(num / 10);
    }
    
    // if (x < 0) {
    //     revNum = -1 * revNum;
    // }

    document.getElementById('result').innerText = revNum;
}
