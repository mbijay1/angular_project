//using this in (controller as alias )instead of scope 
angular.module("app").controller("storeController",function(){
     var gems =[
         {
            name:"Hexagonal",
            price:1200,
            description:"Very beautiful gem with blue color",
            canPurchase:true,
             soldOut:false
        },
        {  
           name:"Octagonal",
            price:2000,
            description:"Red color gem",
            canPurchase:false,
            soldOut:false
        }
    ]
    this.products=gems;// controller property product   
});
