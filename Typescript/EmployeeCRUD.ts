export {};

interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

class EmployeeService {
    private employees: Employee[] = [];

    create(employee: Employee): void {
        this.employees.push(employee);
        console.log("Employee created successfully.");
    }

    read(): void {
        console.log("Employee Records:");
        console.log(this.employees);
    }

    update(
        id: number,
        name: string,
        department: string,
        salary: number
    ): void {
        const employee = this.employees.find(
            emp => emp.id === id
        );

        if (employee) {
            employee.name = name;
            employee.department = department;
            employee.salary = salary;

            console.log("Employee updated successfully.");
        } else {
            console.log("Employee not found.");
        }
    }

    delete(id: number): void {
        const index = this.employees.findIndex(
            emp => emp.id === id
        );

        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log("Employee deleted successfully.");
        } else {
            console.log("Employee not found.");
        }
    }
}

const employeeService = new EmployeeService();

employeeService.create({
    id: 1,
    name: "Abhienaya",
    department: "CSE",
    salary: 50000
});

employeeService.create({
    id: 2,
    name: "Rahul",
    department: "IT",
    salary: 45000
});

console.log("\nAfter CREATE:");
employeeService.read();

employeeService.update(
    1,
    "Abhienaya Sri",
    "Computer Science",
    60000
);

console.log("\nAfter UPDATE:");
employeeService.read();

employeeService.delete(2);

console.log("\nAfter DELETE:");
employeeService.read();
