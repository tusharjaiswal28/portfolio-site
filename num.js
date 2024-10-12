
const numbers= prompt("Enter the number-:");
  let even="";
  let odd="";

  for(let i=0; i<numbers.length; i++)
    {
        if(numbers[i]%2==0)
            {
                even=even+numbers[i]+" ";
            }
        else{
            odd=odd+numbers[i]+" ";
        }
    }
console.log("Even no. -:",even);
console.log("Odd no. -:",odd);