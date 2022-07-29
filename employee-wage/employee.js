console.log("Welcome to Employee Program");

const ABSENT = 0;
const FULL_TIME = 1;
const PART_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getEmployeeHours(empCheck) {
    switch (empCheck) {
        case FULL_TIME:
            return FULL_TIME_HOURS;
        case PART_TIME:
            return PART_TIME_HOURS;
        default:
            return ABSENT;
    }
}
let empCheck = Math.floor(Math.random() * 10) % 3;

let employeeWage = getEmployeeHours(empCheck) * WAGE_PER_HOUR;
console.log("Employee Wage is : " + employeeWage);