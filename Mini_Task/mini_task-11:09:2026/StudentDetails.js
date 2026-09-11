const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Student Name: ", (input1) => {
    rl.question("Enter Tamil mark: ",(input2)=>
    {
     rl.question("Enter English mark: ",(input3)=>
    {
      rl.question("Enter Maths mark: ",(input4)=>
    {
     rl.question("Enter Social mark: ",(input5)=>
    {
      rl.question("Enter Science mark: ",(input6)=>
    {
       let name=String(input1);
       let tamil=Number(input2);
       let english=Number(input3);
       let maths=Number(input4);
       let social=Number(input5);
       let science=Number(input6);
       rl.close();
       console.log("Student Name: ",name);
       console.log(total(tamil,english,maths,social,science));
       console.log(percentage(tamil,english,maths,social,science));
       console.log(grade(tamil,english,maths,social,science));
       console.log(result(tamil,english,maths,social,science));
    });
    });
    });
    });
    });
});

function total(tamil,english,maths,social,science)
{
      let sum=tamil+english+maths+science+social;
      console.log("Total Mark : ",sum," out of 500");
}
function percentage(tamil,english,maths,social,science)
{
        let sum=tamil+english+maths+science+social;
        let percent=(sum/500)*100;
      console.log(" Mark Percentage: ",percent.toFixed(2)," out of 100");
}
function grade(tamil,english,maths,social,science)
{
     let sum=tamil+english+maths+science+social;
        let percent=(sum/500)*100;
if(percent >= 90 && percent <= 100) 
{
    console.log("O grade");
}
else if (percent >= 80 && percent < 90) 
{
    console.log("A+ grade");
}
else if (percent >= 70 && percent < 80) 
{
    console.log("A grade");
}
else if (percent >= 60 && percent < 70) 
{
    console.log("B+ grade");
}
else if (percent >= 50 && percent < 60) 
{
    console.log("B grade");
}
else if (percent >= 40 && percent < 50) 
{
    console.log("C grade");
}
else 
{
    console.log("Fail");
}

}
function result(tamil,english,maths,social,science)
{
    if(tamil>=40&&english>=40&&maths>=40&&science>=40&&social>=40)
    {
        console.log("Cogratulation you are Pass");
    }
    else
    {
        s=console.log("Sory You are Failed");
    }
}
