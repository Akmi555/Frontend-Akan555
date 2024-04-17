console.log("----------------------------------------Задание 4 -----------------------------------------------------");
function primeNamberInBetween(s) {
    
    // const primeNamber = f => f % f === 0 && f !==1 && f % 2 !==0? true: false;
    
    
    const array = [];
    for (let i = 1; i <= Math.floor(s); i++) {
        if (primeNamber(i) === true ) {
            array.push(i);
        }      
    }  
    return array;  
}
console.log(primeNamberInBetween(10));
function primeNamber (f) {
    if (f > 1 ) {
        for (let i = 2; i <= Math.sqrt(f); i++) {
        if (f % i === 0 ) {
            return false;
        }               
    }
    return true;
    }
    return false;
}
console.log("----------------------------------------Задание 4 стрелочные фунции -----------------------------------------------------");

const primeNumberInBetween = s => {
    const array = [];
    for (let i = 1; i <= Math.floor(s); i++) {
        if (primeNumber(i)) {
            array.push(i);
        }
    }
    return array;
};

const primeNumber = f => {
    if (f > 1) {
        for (let i = 2; i <= Math.sqrt(f); i++) {
            if (f % i === 0) {
                return false;
            }
        }
        return true;
    }
    return false;
};

console.log(primeNumberInBetween(100));
