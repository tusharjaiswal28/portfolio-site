const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let bag="";
let primeArray=[]; // creating new arry to store prime number

// loop for checking prime number
  for(let i=0; i<numbers.length; i++)
  {
    let count=0;
    for(let j=1; j<=numbers[i]; j++)
    {
        if(numbers[i]%j==0)
        {
            count++;
        }
    }
    if(count==2){
        bag=bag+numbers[i]+" ";
        let temp=numbers[i];
        primeArray.push(temp); // storing prime number in new array
    }
  }
  console.log(bag);

// Sorting of new array

for(let i=0; i<primeArray.length; i++)
{
    for(let j=i+1; j<primeArray.length; j++)
    {
        if(primeArray[i]>primeArray[j])
        {
            let temp=primeArray[i];
            primeArray[i]=primeArray[j];
            primeArray[j]=temp;
        }
    }
}
let x=primeArray.length;
console.log("Minimum no. in array",primeArray[0]);
console.log("Maximum no. in array",primeArray[x-1]);

// Calculating the sum of all prime number

let sum=0;
for(let i=0; i<x; i++)
{
    sum=sum+primeArray[i];
}

console.log("Sum of all prime number in array",sum);