let nums=[1,1,2,3,4,5,1];
for(let i=0;i<nums.length;i++)
{
    for(let j=i+1;j<nums.length;j++)
    {
        if(nums[i]==nums[j])
        {
            nums.splice(j,1);
            j--;
        }
    }
}
console.log(nums);