import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	gameResult = "";
	error = "";
	count = 0;
	player = 1;
	player1 = "Player 1";
	player2 = "Robot";
	player1Won=0;
	player2Won=0;
	display: boolean = false;
	
	arr: any[][] = [['', '', ''], ['', '', ''], ['', '', '']];

	setPlayer(n: number) {
		this.player = n;
		console.log(this.player);
		this.player1 = "Player 1";
		this.player2 = "Player 2";
		this.display = true;
	}
	playerNames(p1: string, p2: string) {
		this.player1 = p1;
		if (this.player == 1) {
			this.player2 = "Robot";
		}
		else {
			this.player2 = p2;
		}

		console.log(this.player1 + " " + this.player2);
		this.display = false;
		this.playAgain();
		this.player1Won=0;
		this.player2Won=0;
	}
	// call checkResult without setTimeOut works fine, with setTimeOut, the function has been called but not executing other parts
	addSign(i: number, j: number) {
		if (this.player == 0) {
			this.error = "Select player please!"
		}
		if (this.player == 2) {
			if (this.count % 2 == 0) {
				this.fillArray(i, j, 'X');
				this.checkResult('X');
				this.count++;
				// setTimeout(function(){
				// 	this.checkResult('X');
				// },1000);

				// setTimeout(this.checkResult,1000,'X');

				// setTimeout(() => this.checkResult('X'),1000);
				// if(this.checkResult('X')==true){
				// 	this.gameResult="Player 1 won!";
				// }
			}
			else {
				this.fillArray(i, j, 'O');
				this.checkResult('O');
				this.count++;
				// setTimeout(function(){
				// 	this.checkResult('O');
				// },1000);

				// setTimeout(this.checkResult,1000,'O');

				// setTimeout(() => this.checkResult('O'),1000);
				// if(this.checkResult('O')==true){
				// 	this.gameResult="Player 2 won!";
				// }
			}
			if (this.count == 9 && this.gameResult == "") {
				this.gameResult = "Draw!";
			}
		}
		if (this.player == 1) {
			if (this.count < 9) {
				this.fillArray(i, j, 'X');
				this.checkResult('X');
				this.count++;
				console.log(this.count);

				this.checkNextMove(i, j, 'O');
				this.checkResult('O');
				this.count++;
				console.log(this.count);
			}

			if (this.count == 10 && this.gameResult == "") {
				this.displayGameResult('Draw');
			}
		}
	}

	checkNextMove(i: number, j: number, sign: string) {
		if (i == 0 && j == 0) {
			if (this.arr[0][1] == "" && this.arr[0][2] == "X") {
				this.arr[0][1] = "O";
			} else if (this.arr[1][0] == "" && this.arr[2][0] == "X") {
				this.arr[1][0] = "O";
			} else if (this.arr[1][1] == "" && this.arr[2][2] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][2] == "" && this.arr[0][1] == "X") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][0] == "" && this.arr[1][0] == "X") {
				this.arr[2][0] = "O";
			} else if (this.arr[2][2] == "" && this.arr[1][1] == "X") {
				this.arr[2][2] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			}
		}
		if (i == 0 && j == 1) {
			if (this.arr[1][1] == "" && this.arr[2][1] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[2][1] == "" && this.arr[1][1] == "X") {
				this.arr[2][1] = "O";
			} else if (this.arr[0][0] == "" && this.arr[0][2] == "X") {
				this.arr[0][0] = "O";
			} else if (this.arr[0][2] == "" && this.arr[0][0] == "X") {
				this.arr[0][2] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			}
		}
		if (i == 0 && j == 2) {
			if (this.arr[0][1] == "" && this.arr[0][0] == "X") {
				this.arr[0][1] = "O";
			} else if (this.arr[1][2] == "" && this.arr[2][2] == "X") {
				this.arr[1][2] = "O";
			} else if (this.arr[1][1] == "" && this.arr[2][0] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][0] == "" && this.arr[0][1] == "X") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][2] == "" && this.arr[1][2] == "X") {
				this.arr[2][2] = "O";
			} else if (this.arr[2][0] == "" && this.arr[1][1] == "X") {
				this.arr[2][0] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			}
		}
		if (i == 1 && j == 0) {
			if (this.arr[1][1] == "" && this.arr[1][2] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[1][2] == "" && this.arr[1][1] == "X") {
				this.arr[1][2] = "O";
			} else if (this.arr[0][0] == "" && this.arr[2][0] == "X") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][0] == "" && this.arr[0][0] == "X") {
				this.arr[2][0] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			}
		}
		if (i == 1 && j == 1) {
			if (this.arr[0][0] == "" && this.arr[2][2] == "X") {
				this.arr[0][0] = "O";
			} else if (this.arr[0][2] == "" && this.arr[2][0] == "X") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][0] == "" && this.arr[0][2] == "X") {
				this.arr[2][0] = "O";
			} else if (this.arr[2][2] == "" && this.arr[0][0] == "X") {
				this.arr[2][2] = "O";
			} else if (this.arr[1][0] == "" && this.arr[1][2] == "X") {
				this.arr[1][0] = "O";
			} else if (this.arr[1][2] == "" && this.arr[1][0] == "X") {
				this.arr[1][2] = "O";
			} else if (this.arr[0][1] == "" && this.arr[2][1] == "X") {
				this.arr[0][1] = "O";
			} else if (this.arr[2][1] == "" && this.arr[0][1] == "X") {
				this.arr[2][1] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			}
		}
		if (i == 1 && j == 2) {
			if (this.arr[1][1] == "" && this.arr[1][0] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[1][0] == "" && this.arr[1][1] == "X") {
				this.arr[1][0] = "O";
			} else if (this.arr[0][2] == "" && this.arr[2][2] == "X") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][2] == "" && this.arr[0][2] == "X") {
				this.arr[2][2] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			}
		}
		if (i == 2 && j == 0) {
			if (this.arr[1][0] == "" && this.arr[0][0] == "X") {
				this.arr[1][0] = "O";
			} else if (this.arr[2][1] == "" && this.arr[2][2] == "X") {
				this.arr[2][1] = "O";
			} else if (this.arr[1][1] == "" && this.arr[0][2] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[0][0] == "" && this.arr[1][0] == "X") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][2] == "" && this.arr[2][1] == "X") {
				this.arr[2][2] = "O";
			} else if (this.arr[0][2] == "" && this.arr[1][1] == "X") {
				this.arr[0][2] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			}
		}
		if (i == 2 && j == 1) {
			if (this.arr[0][1] == "" && this.arr[1][1] == "X") {
				this.arr[0][1] = "O";
			} else if (this.arr[1][1] == "" && this.arr[0][1] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[2][2] == "" && this.arr[2][0] == "X") {
				this.arr[2][2] = "O";
			} else if (this.arr[2][0] == "" && this.arr[2][2] == "X") {
				this.arr[2][0] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[2][2] == "") {
				this.arr[2][2] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			}
		}
		if (i == 2 && j == 2) {
			if (this.arr[0][2] == "" && this.arr[1][2] == "X") {
				this.arr[0][2] = "O";
			} else if (this.arr[2][1] == "" && this.arr[2][0] == "X") {
				this.arr[2][1] = "O";
			} else if (this.arr[1][1] == "" && this.arr[0][0] == "X") {
				this.arr[1][1] = "O";
			} else if (this.arr[1][2] == "" && this.arr[0][2] == "X") {
				this.arr[1][2] = "O";
			} else if (this.arr[2][0] == "" && this.arr[2][1] == "X") {
				this.arr[2][0] = "O";
			} else if (this.arr[0][0] == "" && this.arr[1][1] == "X") {
				this.arr[0][0] = "O";
			} else if (this.arr[1][1] == "") {
				this.arr[1][1] = "O";
			} else if (this.arr[1][2] == "") {
				this.arr[1][2] = "O";
			} else if (this.arr[2][1] == "") {
				this.arr[2][1] = "O";
			} else if (this.arr[0][0] == "") {
				this.arr[0][0] = "O";
			} else if (this.arr[2][0] == "") {
				this.arr[2][0] = "O";
			} else if (this.arr[0][2] == "") {
				this.arr[0][2] = "O";
			} else if (this.arr[1][0] == "") {
				this.arr[1][0] = "O";
			} else if (this.arr[0][1] == "") {
				this.arr[0][1] = "O";
			}
		}
	}


	checkResult(sign: string) {
		let p = 0;
		let q = 0;

		for (p = 0, q = 0; q < 3; q++ , p = 0) {
			if (this.arr[p][q] == sign && this.arr[++p][q] == sign && this.arr[++p][q] == sign) {
				console.log("p: " + p + " q: " + q);
				this.displayGameResult(sign);
			}
			p = 0;
			if (this.arr[q][p] == sign && this.arr[q][++p] == sign && this.arr[q][++p] == sign) {
				console.log("p: " + p + " q: " + q);
				this.displayGameResult(sign);
			}
		}
		if ((this.arr[0][0] == sign && this.arr[1][1] == sign && this.arr[2][2] == sign) || (this.arr[0][2] == sign && this.arr[1][1] == sign && this.arr[2][0] == sign)) {
			this.displayGameResult(sign);
		}
	}

	displayGameResult(sign: string) {
		if (sign == "X") {
			this.gameResult = this.player1 + " winner!";
			this.player1Won++;
		} else if (sign == 'O') {
			this.gameResult = this.player2 + " winner!";
			this.player2Won++;
		} else {
			this.gameResult = "Draw!";
		}

	}
	fillArray(i: number, j: number, sign: string) {
		this.arr[i][j] = sign;
	}

	playAgain() {
		this.count = 0;
		this.arr = [['', '', ''], ['', '', ''], ['', '', '']];
		this.gameResult = "";
	}
}
