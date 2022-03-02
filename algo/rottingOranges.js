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
    let queue = [],
        minute = 0,
        fresh = 0;
    /**
     *  Iterate through whole matrix to:
     *  1. Add rotten oranges to the stack.
     *  2. Count number of fresh oranges, which helps to keep track of the number of minutes.
     */
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i,j])
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }
    const neighbors = [[0,1], [0, -1], [1, 0], [-1, 0]];
    /**
     * If there are no fresh oranegs, then nothing to change so will skip whole process.
     * 
     */
    while (!!queue.length && !!fresh) {
        /**
         * Iterate through the rotten ones in the queue, then have a second queue to hold the newly turned rotten oranges.  After finishing off the queue, set the queue to the new set of rotten oranges.
         */
        let newlyRotten = [];
        while (!!queue.length) {
            const [row, col] = queue.shift();
            neighbors.forEach(([r, c]) => {
                const newRow = row + r,
                    newCol = col + c;

                /**
                 * Check existence of cell and if it is fresh, if so then:
                 * 1. It becomes rotten.
                 * 2. The fresh count decreases.
                 * 3. The orange gets pushed to the newly rotting queue.
                 */
                if (grid[newRow] && grid[newRow][newCol]
                    && grid[newRow][newCol] === 1) {
                        grid[newRow][newCol] = 2;
                        fresh--;
                        newlyRotten.push([newRow, newCol]);
                    }
            });
        }
        /**
         * While iterating through:
         * 1. Timer increases as your iterate through the whole of the original queue.
         * 2. Original queue is set with the latest rotting queue.
         */
        queue = newlyRotten;
        minute++;
        
    }
    return !!fresh ? -1 : minute;
};

// let grid = [[2,1,1],[1,1,0],[0,1,1]], Output = 4;
// console.log(orangesRotting(grid), ' should be: ', Output);
// grid = [[2,1,1],[0,1,1],[1,0,1]], Output = -1;
// console.log(orangesRotting(grid), ' should be: ', Output);
// grid = [[0,2]], Output = 0;
// console.log(orangesRotting(grid), ' should be: ', Output);
grid = [[1,2]], Output = 1;
console.log(orangesRotting(grid), ' should be: ', Output);