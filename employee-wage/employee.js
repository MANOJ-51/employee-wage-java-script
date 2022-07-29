console.log("Welcome to Employee Program");

const FULL_TIME = 1;
const PART_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHours = 0;
empCheck = Math.floor(Math.random()*10) % 3;
switch(empCheck){
    case FULL_TIME:
        employeeHours = FULL_TIME_HOURS;
        break;
    case PART_TIME:
        employeeHours = PART_TIME_HOURS;
       break;
    default:
        employeeHours = 0;
}
let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Employee Wage is : "+employeeWage);