var laptop = {
    make: "Dell",
    model: "XPS 13",
    year: 2023,
    describe: function () {
        console.log("This laptop is ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    }
};
laptop.describe();
