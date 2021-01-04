/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let mapping = {
        line: {},
        col: {},
        square: {}
    };
    
    for (let line = 0; line < board.length; line++) {
        for (let col = 0; col < board[line].length; col++) {
            const val = board[line][col];
            if (val !== '.') {
                if (!(line in mapping['line'])) {
                    mapping['line'][line] = {};
                }
                
                if (!(col in mapping['col'])) {
                    mapping['col'][col] = {};
                }

                const square = [parseInt(line/3), parseInt(col/3)];
                if (!(square in mapping['square'])) {
                    mapping['square'][square] = {};
                }

                if (val in mapping['line'][line]
                    || val in mapping['col'][col]
                    || val in mapping['square'][square]) {
                    return false;
                } else {
                    mapping['line'][line][val] = true;
                    mapping['col'][col][val] = true;
                    mapping['square'][square][val] = true;
                }
            }
        }
    }
    return true;
};
