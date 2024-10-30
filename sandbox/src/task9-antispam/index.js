/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text - текст, проверяемый на спам
 * @param {String[]} keywords - массив ключевых слов
 * @returns {Boolean}
 */
export const isSpam = (text, keywords) => {
    return keywords.some(keyword => text.includes(keyword));
};
