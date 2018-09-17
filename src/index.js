/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var loveTrianglesSum = 0;
    for (var i = 0; i < preferences.length; i++) {
        var firstLover = preferences[i];
        var secondLover = preferences[firstLover - 1];
        if (preferences[i] !== i + 1 && preferences[secondLover - 1] - 1 == i) {
            loveTrianglesSum++;
            preferences[i] = 0;
            preferences[firstLover - 1] = 0;
            preferences[secondLover - 1] = 0;
        }
    }
    return loveTrianglesSum;
}