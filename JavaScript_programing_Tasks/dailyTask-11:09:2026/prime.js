let n=5;
if(n==1)
{
    console.log("Not a prime Number");
    return;
}
for(let i=2;i<=Math.sqrt(n);i++)
{
    if(n%i==0)
    {
        console.log("Not a Prime Number");
        return;
    }
}
console.log("Prime Number");