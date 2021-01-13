/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let rankings = {};
    points.forEach(x => {
        const value = (x[0] ** 2) + (x[1] ** 2);
        if (!(value in rankings)) {
            rankings[value] = [x];
        } else {
            rankings[value].push(x);
        }
    });
    let pointsArr = [];
    const rankedKeys = Object.keys(rankings);
    let i = 0;
    while (K > 0) {
        const arr = rankings[rankedKeys[i]];
        for (let j = 0; j < arr.length && K > 0; j++) {
            pointsArr.push(arr[j]);
            K -= 1;
        }
        i++;   
    }
    return pointsArr;
};