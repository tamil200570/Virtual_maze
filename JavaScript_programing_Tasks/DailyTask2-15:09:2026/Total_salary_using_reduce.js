let employees = [
    { name: "Arun", salary: 45000 },
    { name: "Kumar", salary: 60000 },
    { name: "Priya", salary: 75000 },
    { name: "Ravi", salary: 50000 },
    { name: "Vijay", salary: 55000 }
];
let result=employees.reduce(function(result,emp)
                            {
                              result+=emp.salary;
                              return result;
                            },0);
console.log(result);
