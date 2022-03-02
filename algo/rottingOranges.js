/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                queue.push([i,j,0])
            }
        }
    }
};

let grid = [[2,1,1],[1,1,0],[0,1,1]], Output = 4;
console.log(orangesRotting(grid), ' should be: ', Output);
grid = [[2,1,1],[0,1,1],[1,0,1]], Output = -1;
console.log(orangesRotting(grid), ' should be: ', Output);
grid = [[0,2]], Output = 0;
console.log(orangesRotting(grid), ' should be: ', Output);