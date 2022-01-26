class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        return this.name;
    };

    getId(id) {
        return this.id;
    };

    getEmail(email) {
        return this.email;
    };

    getRole(role) {
        return "Employee";
    };
}

module.exports = Employee;

// get name/id/email accept value
//role is selected
//role is added to employee constructer as a value
//getrole method is called now that role exists
//getrole method makes the variable role equal to the constructer role