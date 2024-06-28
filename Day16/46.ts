
let laptop = {
    make: "Dell",
    model: "XPS 13",
    year: 2023,
    describe: function(){
        console.log(`This laptop is ${this.year} ${this.make} ${this.model}`);
    }
};

laptop.describe();