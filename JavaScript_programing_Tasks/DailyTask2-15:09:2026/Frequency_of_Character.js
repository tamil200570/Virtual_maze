let s="aaaabbbcc uuuueeeasdwda";
let freq=new Array(26).fill(0);
for(let i=0;i<s.length;i++)
{
  freq[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
}
for(let i=0;i<s.length;i++)
{
  if(freq[s.charCodeAt(i)-'a'.charCodeAt(0)]!==0)
  {
    console.log(s.charAt(i),":",freq[s.charCodeAt(i)-'a'.charCodeAt(0)]);
    freq[s.charCodeAt(i)-'a'.charCodeAt(0)]=0;
  }
}

