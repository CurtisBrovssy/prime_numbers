// This is my solution to the coding problem from edabit.com. The goal is to find any prime number in range

function primeInRange(n1, n2) {
    let deduct = n2 - n1;
    let range = [n1];
    for (let i = 0; i < deduct; i++){
        let add = range[range.length - 1] + 1;
        range.push(add);
    }

    let bool = [];

    for (let i = 0; i < range.length; i++){

        for (let t = 2; t < range[i]; t++){
            let sum = (range[i] / t - Math.floor(range[i] / t)) == 0;
            if (sum){
                bool.push(range[i]);
            } 
        }
    }

    const result = range.every(i => bool.includes(i));

    if(result === true) {
        return false;
    } else {
        return true;
    }

};

console.log(primeInRange(21, 23))
