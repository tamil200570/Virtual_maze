let n=8;
let a=0;
let b=1;
process.stdout.write(a+" "+b+" ");
for(let i=2;i<n;i++)
{
    let c=a+b;
    process.stdout.write(c+" ");
    a=b;
    b=c;
    
}