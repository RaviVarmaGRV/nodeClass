// import chalk from 'chalk';
const chalk  = require("chalk");

// // const chalkPackage = require("chalk");

console.log(chalk.yellow.inverse("Welcome to Node"));

// const chalkPackage = require("chalk");

var figlet=require("figlet");


figlet("Ravi Varma",function name(err,data) {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    
})
