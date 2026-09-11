let nums=[4,5,90,2,8,9,1];
let max=-Infinity;
let min=Infinity;
for(let val of nums)
{
    if(min>val)
    {
        min=val;
    }
    if(max<val)
    {
        max=val;
    }
}
console.log("Maximum Value: ",max);
console.log("Minimum vValue:",min);