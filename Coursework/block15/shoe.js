const shoe = {
    brand: "adidas",
    laces: true,
    velcro: false,
    color: "purple",
    activity: ["running", "fashion", "walking"],
    material: ["leather", "sueded"],
    wear: function(){
        console.log("wear shoes")
    },
    clean: function(){
        console.log("clean shoe")
    },

}

console.log(shoe.brand);

shoe.brand = "nike";
console.log(shoe)


