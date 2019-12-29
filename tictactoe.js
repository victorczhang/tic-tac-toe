const ticTacToe = () => {
    var playersTurn = 0;

    const render = (board) => {
        for (i=0; i < board.length; i++) {
            document.getElementById(`cell${i}`).innerHTML = board[i];
        }
    };

    const playerFactory = () => {
        player1 = document.getElementById('player1').value;
        player2 = document.getElementById('player2').value;
    };

    const gameController = () => {
        // var state;
        if (playersTurn == 0) {
            playersTurn = 1;
            // if (state == 3) {
            //     document.getElementById('current-player').innerHTML = 'Tie game!';
            // } else {
            //     if (document.getElementById('player2').value != '') {
            //         document.getElementById('current-player').innerHTML = 'Current Player: ' + document.getElementById('player2').value;
            //     } else {
            //         document.getElementById('current-player').innerHTML = 'Current Player: O';
            //     }
            // }
        } 
        else if (playersTurn == 1) {
            playersTurn = 0;
            // if (state == 3) {
            //     document.getElementById('current-player').innerHTML = 'Tie game!';
            // } else {
            //     if (document.getElementById('player1').value != '') {
            //         document.getElementById('current-player').innerHTML = 'Current Player: ' + document.getElementById('player1').value;
            //     } else {
            //         document.getElementById('current-player').innerHTML = 'Current Player: X';
            //     }
            // }
        }
    };

    const gameBoard = () => {
        // var state
        let board = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];

        let container = [...document.querySelectorAll('td')];

        container.forEach(item => {
            item.addEventListener('click', () => {
                indexToChange = (container.indexOf(item));
            });
        });
        
        return () => {
            if (playersTurn == 0) {
                if (board[indexToChange] != '') {
                    console.log('Taken!');
                    return;
                } else {
                    board.splice(indexToChange, 1, 'X');
            
                    // RENDER BOARD AFTER MAKING A MOVE
                    render(board);

                    // CHECK FOR WINNING SEQUENCE AFTER MOVE AND DISABLE CELLS

                    if (board[0]=='X' && board[1]=='X' && board[2]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }   
                    else if (board[3]=='X' && board[4]=='X' && board[5]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[6]=='X' && board[7]=='X' && board[8]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0]=='X' && board[4]=='X' && board[8]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0]=='X' && board[3]=='X' && board[6]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[2]=='X' && board[4]=='X' && board[6]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[1]=='X' && board[4]=='X' && board[7]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[2]=='X' && board[5]=='X' && board[8]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0] != '' && board[1] != '' && board[2] != '' 
                    && board[3] != '' && board[4] != '' && board[5] != '' 
                    && board[6] != '' && board[7] != '' && board[8] != '' 
                    ) {
                        // console.log('tied on X turn');
                        state = 3;
                        document.getElementById('current-player').innerHTML = 'Tie game!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                    };
                    gameController();
                }
            } else if (playersTurn == 1) {
                if (board[indexToChange] != '') {
                    console.log('Taken!');
                    return;
                } else {
                    board.splice(indexToChange, 1, 'O');

                    // AI(board);

                    // RENDER BOARD AFTER MAKING A MOVE

                    render(board);

                    if (board[0]=='O' && board[1]=='O' && board[2]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    } 
                    else if (board[3]=='O' && board[4]=='O' && board[5]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[6]=='O' && board[7]=='O' && board[8]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0]=='O' && board[4]=='O' && board[8]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0]=='O' && board[3]=='O' && board[6]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[1]=='O' && board[4]=='O' && board[7]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[2]=='O' && board[4]=='O' && board[6]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[2]=='O' && board[5]=='O' && board[8]=='O') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'O is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    } 
                    else if (
                        board[0] != '' && board[1] != '' && board[2] != '' 
                        && board[3] != '' && board[4] != '' && board[5] != '' 
                        && board[6] != '' && board[7] != '' && board[8] != '' 
                        ) {
                        // console.log('tied on O turn');
                        state = 3;

                        document.getElementById('current-player').innerHTML = 'Tie game!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                    };
                    gameController();
                }
            }
            board;
        };
    };

    const computerPlay = () => {
        let board = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];

        let container = [...document.querySelectorAll('td')];

        container.forEach(item => {
            item.addEventListener('click', () => {
                indexToChange = (container.indexOf(item));
                // console.log(indexToChange);
            });
        });
        
        return () => {
            if (playersTurn == 0) {
                if (board[indexToChange] != '') {
                    console.log('Taken!');
                    return;
                } else {
                    board.splice(indexToChange, 1, 'X');

                    // RENDER BOARD AFTER MAKING A MOVE

                    render(board);

                    AI(board);

                    render(board);

                    // CHECK FOR WINNING SEQUENCE AFTER MOVE AND DISABLE CELLS

                    if (board[0]=='X' && board[1]=='X' && board[2]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }   
                    else if (board[3]=='X' && board[4]=='X' && board[5]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[6]=='X' && board[7]=='X' && board[8]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0]=='X' && board[4]=='X' && board[8]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0]=='X' && board[3]=='X' && board[6]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[1]=='X' && board[4]=='X' && board[7]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[2]=='X' && board[5]=='X' && board[8]=='X') {
                        console.log('Winner!');
                        document.getElementById('current-player').innerHTML = 'X is the Winner!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                        return;
                    }
                    else if (board[0] != '' && board[1] != '' && board[2] != '' 
                    && board[3] != '' && board[4] != '' && board[5] != '' 
                    && board[6] != '' && board[7] != '' && board[8] != '' 
                    ) {
                        // console.log('tied on X turn');
                        state = 3;
                        document.getElementById('current-player').innerHTML = 'Tie game!';

                        document.getElementById('tictactoe-table').classList.remove('clickable');
                        document.getElementById('tictactoe-table').classList.add('nonclickable');
                    };

                    // gameController();
                }
            // } else if (playersTurn == 1) {
            //     if (board[indexToChange] != '') {
            //         console.log('Taken!');
            //     } else {

            //         AI(board);

            //         // RENDER BOARD AFTER MAKING A MOVE

            //         render(board);

            //         if (board[0]=='O' && board[1]=='O' && board[2]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         } 
            //         else if (board[3]=='O' && board[4]=='O' && board[5]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         }
            //         else if (board[6]=='O' && board[7]=='O' && board[8]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         }
            //         else if (board[0]=='O' && board[4]=='O' && board[8]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         }
            //         else if (board[0]=='O' && board[3]=='O' && board[6]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         }
            //         else if (board[1]=='O' && board[4]=='O' && board[7]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         }
            //         else if (board[2]=='O' && board[5]=='O' && board[8]=='O') {
            //             console.log('Winner!');
            //             document.getElementById('current-player').innerHTML = 'O is the Winner!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
            //             return;
            //         } 
            //         else if (
            //             board[0] != '' && board[1] != '' && board[2] != '' 
            //             && board[3] != '' && board[4] != '' && board[5] != '' 
            //             && board[6] != '' && board[7] != '' && board[8] != '' 
            //             ) {
            //             console.log('tied on O turn');
            //             state = 3;
            //             document.getElementById('current-player').innerHTML = 'Tie game!';

            //             document.getElementById('tictactoe-table').classList.remove('clickable');
            //             document.getElementById('tictactoe-table').classList.add('nonclickable');
                    // };
                //     gameController();
                // }
            }
            board;
        }
    };

    const AI = (board) => {
        var copyOfBoard = board.slice();
        var computerMoves = [];
                    
        for (i=0; i < copyOfBoard.length; i++) {
            computerMoves.push(copyOfBoard.indexOf('', i));
        };

        // clean up possible moves

        var negRemove = computerMoves.indexOf('-1');
        computerMoves.splice(negRemove, 1);

        let uniqueBoardCopy = [...new Set(computerMoves)];
        // console.log(uniqueBoardCopy);

        // SELECT RANDOM INDEX FROM ARRAY
        var randomIndex = Math.floor(Math.random() * uniqueBoardCopy.length);
        // console.log(randomIndex);

        // GET RANDOM MOVE

        var randomMove = uniqueBoardCopy[randomIndex];
        board.splice(randomMove, 1, 'O');
    };

    const resetGame = (board) => {
        for (i=0; i < board.length; i++) {
            document.getElementById(`cell${i}`).innerHTML = '';
        }
        render(board);
        console.log('Reset!')
    };

    return { playerFactory, gameBoard, render, gameController, computerPlay, AI, resetGame }
};

// Initialize Game, make it playable and wired up below:

const initGame = ticTacToe();
const initGameboard = initGame.gameBoard();
const initComputerPlay = initGame.computerPlay();
// const reset = initGame.resetGame();
// const initAI = initComputerPlay.AI(board);

// document.getElementById('resetButton').addEventListener('click', reset);

// for (var i = 0 ; i < document.querySelectorAll('td').length; i++) {
//     const cellButton = document.getElementById(`cell${i}`);
//     cellButton.addEventListener('click', initGameboard);
// };


document.getElementById('startGame').addEventListener('click', function() {
    for (var i = 0 ; i < document.querySelectorAll('td').length; i++) {
        const cellButton = document.getElementById(`cell${i}`);
        cellButton.addEventListener('click', initGameboard);
    };
});

// BELOW WORKS KIND OF

document.getElementById('computerPlay').addEventListener('click', function() {
    for (var i = 0 ; i < document.querySelectorAll('td').length; i++) {
        const cellButton = document.getElementById(`cell${i}`);
        cellButton.addEventListener('click', initComputerPlay);
    };
    // initAI;
});

// TESTING BELOW

// document.getElementById('computerPlay').addEventListener('click', function() {
//     for (var i = 0 ; i < document.querySelectorAll('td').length; i++) {
//         const cellButton = document.getElementById(`cell${i}`);
//         cellButton.addEventListener('click', initGameboard);
//     };
//     initAI(board);
// });


// Winning Solutions: 

// let board = [
//     'X', 'X', 'X',
//     '', '', '',
//     '', '', '',
// ];

// let board = [
//     '', '', '',
//     'X', 'X', 'X',
//     '', '', '',
// ];

// let board = [
//     '', '', '',
//     '', '', '',
//     'X', 'X', 'X',
// ];

// let board = [
//     'X', '', '',
//     'X', '', '',
//     'X', '', '',
// ];

// let board = [
//     '', 'X', '',
//     '', 'X', '',
//     '', 'X', '',
// ];

// let board = [
//     '', '', 'X',
//     '', '', 'X',
//     '', '', 'X',
// ];

// let board = [
//     'X', '', '',
//     '', 'X', '',
//     '', '', 'X',
// ];

// let board = [
//     '', '', 'X',
//     '', 'X', '',
//     'X', '', '',
// ];