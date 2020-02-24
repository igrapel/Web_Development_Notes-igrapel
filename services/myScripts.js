
      function myMax(){
        var s1 = document.getElementById("score1").value;
        var s2 = document.getElementById("score2").value;
        var s3 = document.getElementById("score3").value;
        var highest = Math.max(s1, s2, s3);
          document.getElementById("highest").innerHTML = "The University will only consider: " + highest + " also, lmao you stinky";
      }

      function myPow(){
        var base = document.getElementById("base").value;
        var exp = document.getElementById("exp").value;
        var answer = Math.pow(base, exp);
        document.getElementById("ans1").innerHTML = "your value of the thing you typed is: " + answer + " also, lmao you stinky";
      }

      function myAvg(){
        var g1 = document.getElementById("grade1").value;
        var g2 = document.getElementById("grade2").value;
        var g3 = document.getElementById("grade3").value;
        var g4 = document.getElementById("grade4").value;
        var g5 = document.getElementById("grade5").value;
        var g6 = document.getElementById("grade6").value;
        var g7 = document.getElementById("grade7").value;
        var g8 = document.getElementById("grade8").value;
        var min = Math.min(g1,g2,g3,g4,g5,g6,g7,g8);
        var max = Math.max(g1,g2,g3,g4,g5,g6,g7,g8);

        g1 = Number(g1);
        g2 = Number(g2);
        g3 = Number(g3);
        g4 = Number(g4);
        g5 = Number(g5);
        g6 = Number(g6);
        g7 = Number(g7);
        g8 = Number(g8);
        min = Number(min);
        max = Number(max);

        console.log(typeof g1);
        console.log(typeof g2);
        console.log(typeof g3);
        console.log(typeof g4);
        console.log(typeof g5);
        console.log(typeof g6);
        console.log(typeof g7);
        console.log(typeof g8);
        console.log(typeof min);
        console.log(typeof max);

        var avg = (g1+g2+g3+g4+g5+g6+g7+g8-min-max)/8;
        var rAvg = Math.round(avg);
        var next = Math.ceil(avg);
          document.getElementById("rAvg").innerHTML = "Your average grade is: " + rAvg + " lmao you stinky <br/> You are close to your next highest grade: " + next;
      }

      function hypotenuse(){
        var a = document.getElementById("l1").value;
        var b = document.getElementById("l2").value;
        var a2 = Math.pow(a,2);
        var b2 = Math.pow(b,2);
        var added = a2+b2;
        var sqrt = Math.sqrt(added);
        var c = sqrt.toFixed(3);
        document.getElementById("c").innerHTML = "Your hypotenuse is: " + c;
      }

      function leg(){
        var leg1 = document.getElementById("leg1").value;
        var hyp = document.getElementById("hyp").value;
        var b2 = Math.pow(leg1,2);
        var c2 = Math.pow(hyp,2);
        var minused = c2-b2;
        var sqrt = Math.sqrt(minused);
        var leg2 = sqrt.toFixed(3);
        document.getElementById("leg2").innerHTML = "Your second leg is: " + leg2;
      }

      function distance(){
        var x1 = document.getElementById("x1").value;
        var x2 = document.getElementById("x2").value;
        var y1 = document.getElementById("y1").value;
        var y2 = document.getElementById("y2").value;
        var xdiff = x1-x2;
        var xd = Math.pow(xdiff,2);
        var ydiff = y1-y2;
        var yd = Math.pow(ydiff,2);
        var added = xd+yd;
        var d = Math.sqrt(added);
        var d = d.toFixed(2);
        document.getElementById("d").innerHTML = "Your distance is: " + d + "<br/> You should not travel more than: " + Math.floor(d);
      }
      
      function quadratic() {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        a = Number(a);
        b = Number(b);
        c = Number(c);

        // Positive
        var pNegB = b * -1;
        var pSqB = Math.pow(b, 2);
        var pFourAC = 4 * a * c;
        var pDiffABC = pSqB - pFourAC;
        var pSqrtABC = Math.sqrt(pDiffABC);
        var pTopFraction = pNegB + pSqrtABC;
        var pTwoA = a * 2;
        var pX = pTopFraction / pTwoA;
        var pX = pX.toFixed(3);

        //Negative
        var nNegB = b * -1;
        var nSqB = Math.pow(b, 2);
        var nFourAC = 4 * a * c;
        var nDiffABC = nSqB - nFourAC;
        var nSqrtABC = Math.sqrt(nDiffABC);
        var nTopFraction = nNegB - nSqrtABC;
        var nTwoA = a * 2;
        var nX = nTopFraction / nTwoA;
        var nX = nX.toFixed(3);

        // if statements

        if (pX != nX) {
          document.getElementById("pX").innerHTML = "x = " + pX;
          document.getElementById("nX").innerHTML = "x = " + nX;
        }

        if ((pX === nX)) {
          document.getElementById("pX").innerHTML =
            "x = " + pX + "<br /> This quadratic has one solution";
        }

        if (isNaN(pX || nX)) {
          document.getElementById("sol").innerHTML =
            "This quadratic has no solution.";
        }
      }
      
      
      }
      
var showAns = document.getElementById('yourAns'); 
        
function Factorial(n) { 
var ans=1; 
              
for (var i = 2; i <= n; i++) 
{ 
ans = ans * i; 
}
return ans;  
                       } 
          
function calc() {  
var n = document.getElementById("exp").value;
showAns.innerHTML = "Your Factorial is " + Factorial(n); 
        }  

    
