abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = []
 
    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        // this.id = id;
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}


class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins
    }
    describe() {
        console.log("IT Department - ID : " + this.id)
    }
}

const it = new ITDepartment("d1", ['Dan']);



it.addEmployee('Daniel')
it.addEmployee('Asia')

// it.employees[2] = 'Anna'

it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation()

const employee1 = Department.createEmployee("Danielek")
console.log(employee1, Department.fiscalYear)


console.log(it)

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get getLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.')
    }


    set setLastReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value')
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "ACCOUNTING")
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance
    } 

    describe() {
        console.log("Accounting Department - ID:" + this.id)
    }
    addEmployee(name: string) {
        if (name === "Daniel") {
            return
        }
        this.employees.push(name)
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text
    }
    printReports() {
        console.log(this.reports);
    }
}

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.addReport('Blablabla...')
accounting.setLastReport = "Sialalalala"
console.log(accounting.getLastReport)

accounting.addEmployee("Daniel")
accounting.addEmployee("Gimbal")

// accounting.printReports()
// accounting.printEmployeeInformation()

accounting.describe()

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()