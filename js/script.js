/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var valueArray = new Array(3);
$(document).ready(function () {
    var count = 0;
    fillArray();
    $(document).on('click', '.btn', function () {
        count++;
        if (count % 2 === 0) {
            $(this).html('O');
            $(this).css('color','limegreen');
            $(this).attr("disabled", true);
            fillArray();
            setTimeout(function () {
                if (checkStatus('O')) {
                    alert("Player 2 winner !");
                    $('.btn').attr("disabled", true);
                }
            }, 200);
        } else {
            $(this).html('X');
            $(this).css('color','gold');
            $(this).attr("disabled", true);
            fillArray();
            setTimeout(function () {
                if (checkStatus('X')) {
                    alert("Player 1 winner !");
                    $('.btn').attr("disabled", true);
                }
            }, 200);
        }
        if (count === 9) {
            if (!checkStatus('O') && !checkStatus('X')) {
                setTimeout(function () {
                    alert("Draw !");
                }, 200);
            }
        }
    });
    
    $(document).on('click','#playAgain',function(){
       $('.btn').html('');
       count=0;
       $('.btn').attr("disabled", false);
       valueArray=[];
//       console.log(valueArray);
    });
});
var checkStatus = function (sign) {
    var i = 0;
    var j = 0;
    for (i = 0, j = 0; j < 3; j++, i = 0) {
        if ((valueArray[i][j] === sign && valueArray[++i][j] === sign && valueArray[++i][j] === sign)) {
            return true;
        }
        i = 0;
        if ((valueArray[j][i] === sign && valueArray[j][++i] === sign && valueArray[j][++i] === sign)) {
            return true;
        }
    }
    if ((valueArray[0][0] === sign && valueArray[1][1] === sign && valueArray[2][2] === sign) ||
            (valueArray[0][2] === sign && valueArray[1][1] === sign && valueArray[2][0] === sign)) {
        return true;
    }

//    if ((valueArray[0][0] === 'X' && valueArray[0][1] === 'X' && valueArray[0][2] === 'X') ||
//            (valueArray[1][0] === 'X' && valueArray[1][1] === 'X' && valueArray[1][2] === 'X') ||
//            (valueArray[2][0] === 'X' && valueArray[2][1] === 'X' && valueArray[2][2] === 'X') ||
//            (valueArray[0][0] === 'X' && valueArray[1][0] === 'X' && valueArray[2][0] === 'X') ||
//            (valueArray[0][1] === 'X' && valueArray[1][1] === 'X' && valueArray[2][1] === 'X') ||
//            (valueArray[0][2] === 'X' && valueArray[1][2] === 'X' && valueArray[2][2] === 'X') ||
//            (valueArray[0][0] === 'X' && valueArray[1][1] === 'X' && valueArray[2][2] === 'X') ||
//            (valueArray[0][2] === 'X' && valueArray[1][1] === 'X' && valueArray[2][0] === 'X')) {
//        alert("Player 1 won");
//        $('.btn').attr("disabled", true);
//    } else if ((valueArray[0][0] === '0' && valueArray[0][1] === '0' && valueArray[0][2] === '0') ||
//            (valueArray[1][0] === '0' && valueArray[1][1] === '0' && valueArray[1][2] === '0') ||
//            (valueArray[2][0] === '0' && valueArray[2][1] === '0' && valueArray[2][2] === '0') ||
//            (valueArray[0][0] === '0' && valueArray[1][0] === '0' && valueArray[2][0] === '0') ||
//            (valueArray[0][1] === '0' && valueArray[1][1] === '0' && valueArray[2][1] === '0') ||
//            (valueArray[0][2] === '0' && valueArray[1][2] === '0' && valueArray[2][2] === '0') ||
//            (valueArray[0][0] === '0' && valueArray[1][1] === '0' && valueArray[2][2] === '0') ||
//            (valueArray[0][2] === '0' && valueArray[1][1] === '0' && valueArray[2][0] === '0')) {
//        alert("Player 2 won");
//        $('.btn').attr("disabled", true);
//    }
};
var fillArray = function () {
    var i = 0;
    var j = 0;
    for (i = 0; i < 3; i++) {
        valueArray[i] = new Array(3);
        for (j = 0; j < 3; j++) {
            valueArray[i][j] = $('#' + parseInt(i) + parseInt(j)).html();
        }
    }
};