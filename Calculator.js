let calculation='';
        function updateCalculation(value){
            calculation+=value;
            console.log(calculation);
            displayCalculation();
        }
        function displayCalculation(){
            document.querySelector('.display-js').innerHTML=`${calculation}`;
        }