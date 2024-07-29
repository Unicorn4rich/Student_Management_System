#! /usr/bin/env node
// Student Management System
import inquirer from "inquirer";
import chalk from "chalk";
// is console se hmare terminal mein jo bhi commands opar run hu huwi hongi ye unko automatic clear kar dega jab bhi ham
// is project ko run karenge to terminal ki pehly ki commands (cls) kar ke clear karne ki zrorat nahi paregi....
console.clear();
// ye hamne OOP ki class create ki hai jisme student ka data lenge....
class Student_cl {
    name;
    id;
    course;
    fees;
    balance;
    constructor(name, id, course, fees, balance) {
        this.name = name;
        this.id = id;
        this.course = course;
        this.fees = fees;
        this.balance = balance;
    }
}
;
// <--------------------------------------------------END--------------------------------------------------------->
// Veriables or Arrays yahn Store kiyye gaye hain All Student Data ke....
// student name store hoga yahn isko declare kiyya gaya hai lekin initilize bad mein kiyy jaega
let Student_Name = "";
// student id store hogi yahn
let Student_id = 100;
// student course store hoga yahn
let Student_Course = "";
// student fee store hogi yahn ye aik union littrel hai filhal isko "unpaid" value assign ki gai hai
let Student_Fee = "unpaid";
// student balance store hoga yahn
let Student_Balance = "";
// student ki information (Student_cl) class ke andar jaegi or aik object ki shakal mein student ka data return karegi
// or wo data is veriable mein store hoga...
let class_call;
// Enroll Students ka data yahn store hoga matlab isme class_call ka object push hota hai..
let Student_data_Array = [];
// Total students ka track matlab counting is array mein store ki jati hai matlab isme (Student_data_Array) push hota hai
let Array_Get = [];
// student ki profile ka data yahn store hota hai
let Show_Full_Profile = [];
// loop ko condition assign ho rhi hai 
let condition = true;
// <--------------------------------------------------END--------------------------------------------------------->
// Asking Data from User Using Inquirer
do {
    let Student = await inquirer.prompt({
        name: "choose",
        message: chalk.bold.red("\n PLEASE CHOOSE AN OPTION ?:"),
        type: "list",
        choices: ["ENROLL", "REMOVE ENROLL STUDENTS", "CHECK STATUS", "TOTAL STUDENTS", "EXIT"]
    });
    // <--------------------------------------------------END--------------------------------------------------------->
    // Enroll Option Work Start from here
    if (Student.choose === "ENROLL") {
        let User_info = await inquirer.prompt([
            {
                name: "name1",
                message: chalk.bold.red("\n WHAT IS YOUR NAME ?:"),
                type: "input"
            },
            {
                name: "course",
                message: chalk.bold.red("\nSELECT YOUR COURSE ?:"),
                type: "list",
                choices: ["ARTIFICIAL INTELIGENCE", "AMAZON", "GRAPHICS DESIGNING"]
            }
        ]);
        // Artificial Inteligence Option Work Start from here
        if (User_info.course === "ARTIFICIAL INTELIGENCE") {
            let Confirm1 = await inquirer.prompt({
                name: "ai",
                message: chalk.bold.yellow("\n DO YOU WANT TO ENROLL (ARTIFICIAL INTELIGENCE) FOR $10000 ?:"),
                type: "confirm"
            });
            if (Confirm1.ai === true) {
                Student_Name = User_info.name1;
                ++Student_id;
                Student_Course = User_info.course;
                Student_Balance = "$10000";
                Student_Fee = "paid";
                console.log(chalk.bold.green(`\n NOTE DOWN YOUR ID CARD NUMBER ${Student_id}`));
            }
            else {
                console.log(chalk.bold.green("\n THANKS FOR COMMING"));
            }
        }
        // Amazon Option Work Start from here
        if (User_info.course === "AMAZON") {
            let Confirm2 = await inquirer.prompt({
                name: "amz",
                message: chalk.bold.yellow("\n DO YOU WANT TO ENROLL (AMAZON) FOR $5000 ?:"),
                type: "confirm"
            });
            if (Confirm2.amz === true) {
                Student_Name = User_info.name1;
                ++Student_id;
                Student_Course = User_info.course;
                Student_Balance = "$5000";
                Student_Fee = "paid";
                console.log(chalk.green.bold(`NOTE DOWN YOUR ID CARD NUMBER ${Student_id}`));
            }
            else {
                console.log(chalk("\n THANKS FOR COMMING"));
            }
        }
        // Graphics Designing Option Work Start from here
        if (User_info.course === "GRAPHICS DESIGNING") {
            let Confirm3 = await inquirer.prompt({
                name: "gd",
                message: chalk.bold.yellow("\n DO YOU WANT TO ENROLL (GRAPHICS DESIGNING) FOR $6000 ?:"),
                type: "confirm"
            });
            if (Confirm3.gd === true) {
                Student_Name = User_info.name1;
                ++Student_id;
                Student_Course = User_info.course;
                Student_Balance = "$6000";
                Student_Fee = "paid";
                console.log(chalk.green.bold(`\n NOTE DOWN YOUR ID CARD NUMBER ${Student_id}`));
            }
            else {
                console.log(chalk.green("\n THANKS FOR COMMING"));
            }
        }
        // Class object mein data push kiyya jaa rha hai wahn se jo object return hoga is information ko aik jagah combine kar ke
        // wo (class_call) ke object mein save krwaya jaa rha hai...
        class_call = new Student_cl(Student_Name, Student_id, Student_Course, Student_Fee, Student_Balance);
        // class se aya hua data (Student_data_Array) mein save kar ke phir ye (Array_Get) save krwa ja rha hai
        Array_Get = Student_data_Array.push(class_call);
    }
    // <-----------------------------------------------END--------------------------------------------------->
    // Remove Enrollment STudent Option Work Start from here
    else if (Student.choose === "REMOVE ENROLL STUDENTS") {
        let Show_names = Student_data_Array.map((item) => item.name);
        let Student_data = await inquirer.prompt({
            name: "remove",
            message: chalk.bold.yellow("\n PLEASE SELECT YOUR NAME ?:"),
            type: "list",
            choices: Show_names
        });
        // (Student_data_Array) ke andar waly names or user ne jo name select kiyya hai agr wo dono match hoty hain to
        // ye uska index return karta hai or agr match nhi hoty to -1 return karta hai....
        let index = Student_data_Array.findIndex((student) => student.name === Student_data.remove);
        if (index !== -1) {
            let removed = Student_data_Array.splice(index, 1);
            --Array_Get;
            console.log(chalk.bold.bgRed(`\n YOU REMOVED`) + ": " + chalk.bold.red(`${removed[0].name}`));
        }
    }
    // <-----------------------------------------------END--------------------------------------------------->
    // Check Status Option Work Start from here
    else if (Student.choose === "CHECK STATUS") {
        let Show_names2 = Student_data_Array.map((item) => item.name);
        let Student_Status = await inquirer.prompt({
            name: "select",
            message: chalk.bold.yellow("\n SELECT YOUR STUDENT NAME ?:"),
            type: "list",
            choices: Show_names2
        });
        if (Student_Status.select) {
            Show_Full_Profile = Student_data_Array.find((prof) => prof.name === Student_Status.select);
            console.log(chalk.bold.green(`\n\n
        NAME    : ${Show_Full_Profile.name}
        ID      : ${Show_Full_Profile.id}
        COURSE  : ${Show_Full_Profile.course}
        FEE     : ${Show_Full_Profile.fees}
        BALANCE : ${Show_Full_Profile.balance}
        `));
        }
        ;
    }
    // <-----------------------------------------------END--------------------------------------------------->
    // Total Student Option Work Start from here
    else if (Student.choose === "TOTAL STUDENTS") {
        console.log(chalk.bold(`\nTOTAL ENROLL STUDENTS ${Array_Get}`));
    }
    // <-----------------------------------------------END--------------------------------------------------->
    // Exit Option Work Start from here
    else if (Student.choose === "EXIT") {
        condition = false;
    }
} while (condition);
console.log(chalk.bold.bgGreen("\n\n......THANK YOU FOR VISIT OUR ACADEMY......"));
