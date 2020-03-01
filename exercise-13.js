// Logic Challenge - X dan O

function xo(str) {
    var o = 0
    var x = 0
    for (var i=0; i<=str.length; i++){
        if (str[i] === 'x'){
            x++
        } else if (str[i] === 'o'){
            o++
        }
    }

    if (x === o){
        return true;
    } else {
        return false;
    }
  }
  

  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo'));
  console.log(xo('oxo'));
  console.log(xo('xxxooo'));
  console.log(xo('xoxooxxo'));