/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.reduce((sum, number) => {
        return number % 2 === 0 ? sum + number : sum;
    }, 0);
};
