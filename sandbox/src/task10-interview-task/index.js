
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {
        let product = 1;
        const digits = String(num).split('');

        for (const digit of digits) {
            product *= Number(digit);
        }

        num = product;
    }

    return num;
};
