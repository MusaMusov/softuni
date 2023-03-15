function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let productName = input[index];
    index++;
 
    let totalPrice = 0;
    let productCount = 0;
    while (productName !== "Stop") {
        let productPrice = Number(input[index]);
        index++;

       
        productCount++;
       
        if (productCount % 3 === 0) {
            productPrice*=0.5
        }
        totalPrice+=productPrice
        if (totalPrice > budget) {
            break;
        } 
 
        productName = input[index];
        index++;
    }
    let diff = Math.abs(totalPrice - budget)
   if (productName === "Stop") {
    console.log(`You bought ${productCount} products for ${totalPrice.toFixed(2)} leva.`);
   }
   if (totalPrice > budget) {
    console.log(`You don't have enough money!`);
    console.log(`You need ${diff.toFixed(2)} leva!`);
   }
 
}
touristShop(["153.20",'Backpack','25.20','Shoes','54','Sunglasses','30',"Stop"])