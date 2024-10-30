
/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const randomNum = getRandomInt(a, b);
    return isPrime(randomNum) ? 'run' : 'hit';
};

