chooseTopppings()
.then(function(toppings){
    return placeOrder(toppings);
})
.then(function(order){
    return collectOrder(order);
})
.then(function(pizza){
    return eatPizza(pizza);
})
.catch(failureCallback());