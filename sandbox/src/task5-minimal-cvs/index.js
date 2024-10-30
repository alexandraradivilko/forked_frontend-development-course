
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const versions = [initialCommit.slice()];

    return {
        head: () => versions[versions.length - 1],
        history: () => versions.slice(),
        push: (element) => {
            const newVersion = [...versions[versions.length - 1], element];
            versions.push(newVersion);
        },
        pop: () => {
            const currentVersion = versions[versions.length - 1];
            const newVersion = currentVersion.slice(0, -1);
            versions.push(newVersion);
            return currentVersion[currentVersion.length - 1];
        }
    };
};
