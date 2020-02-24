var show = document.getElementById('show'); 
        
          
        function Factorial(n) { 
         
            var ans=1; 
              
            for (var i = 2; i <= n; i++) 
                ans = ans * i; 
            return ans; 
        } 
          
        function calc() {  
            var n = document.getElementById("exp").value;
            show.innerHTML = Factorial(n); 
        }  
