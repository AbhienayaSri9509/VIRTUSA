export {};

abstract class Employee {
    constructor(public name: string) {}

    abstract calculateSalary(): number;

    displayName(): void {
        console.log("Employee Name: " + this.name);
    }
}

class Developer extends Employee {
    constructor(
        name: string,
        private monthlySalary: number
    ) {
        super(name);
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

const developer = new Developer(
    "Abhienaya",
    50000
);

developer.displayName();

console.log(
    "Monthly Salary: ₹" +
    developer.calculateSalary()
);
