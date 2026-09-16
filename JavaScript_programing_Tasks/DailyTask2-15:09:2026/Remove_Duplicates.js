let nums=[10,10,20,30,20];
let dp=[];
for(let i=0;i<nums.length;i++)
{
  for(let j=i+1;j<nums.length;j++)
  {
    if(nums[i]===nums[j])
    {
      if(dp.indexOf(nums[i])===-1)
      {
      dp.push(nums[i]);
      }
      break;
    }
  }
}
console.log(dp);
