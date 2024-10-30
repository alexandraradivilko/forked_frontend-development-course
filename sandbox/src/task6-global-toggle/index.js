
/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    // Находим все элементы с указанным классом
    const elements = document.querySelectorAll(`.${className}`);
    
    // Если элементы не найдены, прекращаем работу
    if (elements.length === 0) return;
    
    // Определяем, является ли переданный класс активным
    const isActive = className.endsWith('_active');
    
    // Определяем, какой класс будет новым (активный или дефолтный)
    const newClass = isActive ? className.slice(0, -7) : `${className}_active`;
    
    // Меняем класс для всех найденных элементов
    elements.forEach(element => {
        element.classList.remove(className);
        element.classList.add(newClass);
    });
};
