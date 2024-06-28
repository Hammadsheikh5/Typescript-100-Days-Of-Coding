import chalk from "chalk";
let laptop = {
    make: "Dell",
    model: "XPS 13",
    year: 2023,
    describe: function () {
        console.log(chalk.green(`This laptop is ${this.year} ${this.make} ${this.model}`));
    }
};
laptop.describe();
