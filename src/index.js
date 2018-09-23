/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTrianglesSum = 0;

    for (let index = 0; index < preferences.length; index++) {

        if (preferences[index] !== index + 1 && preferences[preferences[preferences[index] - 1] - 1] - 1 == index) {
            loveTrianglesSum++;
            preferences[index] = 0;
            preferences[preferences[index] - 1] = 0;
            preferences[preferences[preferences[index] - 1] - 1] = 0;
        }

    }

    return loveTrianglesSum;
}