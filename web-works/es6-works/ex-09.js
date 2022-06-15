// a function is treated as class in javascript 

function employee(name, eid) {
    this.name = name; 
    this.eid = eid; 
}

employee.prototype.display = function() {
    console.log("Name : ", this.name);
    console.log("Eid : ", this.eid);
}


let harsh = new employee('harsh', 123); 
harsh.display();

//class 

class Employee{
    constructor(name, eid) {
        this.name = name; 
        this.eid = eid; 
    }
    display() {
        console.log("Name : ", this.name); 
        console.log("Eid : ", this.eid);
    }
}

class TeamLeader extends Employee {
    constructor(name, eid, project) {
        super(name, eid); 
        this.project = project; 
    }
    display() {
      super.display(); 
      console.log("Project Name ", this.project);
    }
}


let ram  = new Employee('Ram', 321); 
console.log(typeof(ram.display()));

let prit = new TeamLeader('Prit', 101, 'Finance');
prit.display();