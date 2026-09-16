let products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 15000 }
];
products.sort((a,b)=>b.price-a.price);
console.log(products);
