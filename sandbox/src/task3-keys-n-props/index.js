/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeCounts = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];
            // Если тип уже есть в объекте typeCounts, увеличиваем счетчик
            if (typeCounts[type]) {
                typeCounts[type]++;
            } else {
                // Иначе добавляем новый тип с начальным значением 1
                typeCounts[type] = 1;
            }
        }
    }

    return typeCounts;
};
