let nums=[5];
let val1=-Infinity;
let val2=-Infinity;
for(let i of nums)
{
  if(i>val1)
  {
    val2=val1;
    val1=i;
  }
  else if(i>val2&&i!==val1)
  {
    val2=i;
  }
}
if(val2===-Infinity)
{
  console.log("No Second Largest number");
}
else
{
console.log("Second largest Number is:",val2);
}
