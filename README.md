# 2022-sapient-react-node-graphql

# Start Date 15-Jun-2022


- Day 1 - Debugging Chrome, es6 
- Day 2, 3 - MongoDB 
- Day 4 - Node JS
- Day 5 - Express JS 
- Day 6 - Express JS + MongoDB - to create Micro Service Application 
- Day 7 - GraphQL, Auth (JWT) 
- Day 8 - TDD, external tools winston,multer 
- Day 9-14 - React js + Redux, Hooks, Saga 
- Day 15 - React, Deployment 


- Ankit - 5 years exp, works with java script, jquery, looking for sso with google, like firebase would be good, FCM. 

- Ayush - working since 2019, working xt core training, want to learn libraries

- Brahmanand - 4 years exp, 1 year worked in java-spring, currently working with angular, 2.5 years on angular 

- Dhananjay - 2 Years exp, UI Developer, working on angular, like to work with reactjs 

- Harsh Kumar - joined sapient 2021, xt core, like to work with reactjs 
Hemanth 

- Himanshu - 9 years exp, worked on PHP, working with angular + react, get more on react, mongodb 

- Hitesh - 1.5 years exp, XT core, willing to learn new things 
Irshad - 5 years, working with angular, know more about react, undersand 
mongodb, nodejs 

- Kumkumbala - 4 years exp, in front end, basic knowledge of reactJS 

- Manav - been 1 year with  PS , to become fullstack developer 

- Prit Ranjan - 3.4 years exp, front end developer, have worked with react know more about nodejs and graphql 

- RaviVarma - 5 years exp, fullstack developer, like to work on react 

- Rohit - from 2016 as front end developer, aug 2021 in sapient, working in angular, will to look for fullstack exp. 

- Sailesh - 2 years exp, working with angular, known basics of react, likes to know how things work behind the screen

- Santosh - 3.5 years exp, working on angular 2.5 years, willing to learn new things + node js 

- Sourabh - 5 years exp, had worked in devops now in angular, worked in ionic, looking for reactjs 

- Varki Sebi - 1.5 years exp, recently with PS, had worked with react, to become front end to full stack developer 

- Vikas Verma - 12 years exp, knows angular, worked on ionic, 



+ micro front end 






# Day 1 Contents 
Disadvantages of using console API
Overview of the Chrome Developer Tools
Debugging JS using the Chrome Developer Tools
Developer Tools in other browsers

Single-threaded nature of JavaScript
The Event Loop and event handling
Synchronous (blocking) and Asynchronous (non-blocking) methods


Block-level scoping and the use of let, const
    - const  
    - let 
    - var 
    - nothing 

    ```
        const myvar = "hello; 
        let myvar = "hello; 
        var myvar = "hello; 
        myvar = "hello; -> window.myvar = "hello; 
    ```
Template strings
Default Parameters
Object and Array Destructuring	
Rest and spread operators (includes object spread), making immutable changes, deep and shallow copies of objects
Arrow Functions
Classes, Class Inheritance
Modules
Promises
async…await



Kafka & how esb is used 

Cloud 
    - aws azure 
Containarization
    - docker 



- prefer not using log 
- instead we can use debugger 
    - browers (chrome)
    - code 




```

function doSomething() {
    console.log("One");
    console.log("two");

    fetch(
            "http://yoursite.com/application/uri/resource",
        (data) => {document.getElementById("mydiv").innerHTML = data})

    console.log("Four");
}
```


- es6 content 

```
    function myfunction(val) {this.val = val}
    // this is anonymous function + this cannot hold the referece of this 
    let myfunction = (val) => {this.val this does not work (x)}
```

- a function inside a function is called closure 

```
    -- named closured 
    function one() {
        // variables which are declared here are accessable to two () + 
        // since its a function its only loaded 
        function two() {}

        two(); 
    }
    let oneRef = one();


    -- 


    function one(val1) {
        return function(val2) {
            return val1 + val2; 
        }
    }
```


- callback 
- promise 
- error first approach 



# Day 2 

- Generators 
```
    let arr = [32,5,6,8,9,02,1]; 

    for(let i=0;i< arr.length; i++) {
        console.log(i)
    }

    --- 
    arr.forEach((val) => console.log(val)); 
    -- fibonacci series 
    let val = yeild currVal; 
    [currVal, nextVal] = [nextVal, nextVal + currVal]; 
```




- Topics 

- MongoDB basics
- RDBMS vs NoSql DBs
- Types of NoSQL DBs
- Pros and Cons of RDBMS and NoSQL DBs
- Document data model
- When to use a document database
- Introduction to MongoDB
- Features of MongoDB
- Installation and getting started
- Using Compass and Robo 3T
- Databases, collections, and documents
- Schema design in MongoDB
- Modelling relationships among collections
- Basic queries
- Introduction to the Mongo Shell
- MongoDB’s query language
- CRUD operations – Inserts, queries, updates, deletes
- Query Criteria and Selectors
- Query options
- Introduction to document updates
- Modify by replacement
- Modify by operator





export PATH=$PATH:$HOME/.local/bin:$PATH:YourMongoPath

- SQL -> DBMS, RDBMS, Normalization, Keys ....  - 800 Different databases - A C I D 
- NoSQL -> DB, un-Normalization, 

```
| Empid (pk) | empName | salary | designation| 
| 101 |    Himanshu | 11000 | SE | 
```

```
{
    _id:12 byte information 
    
}
```

- by default 
    - /data/db - linux, mac, 
    - c:\data\db - win 
- create a folder in desktop -> sapient-db 
- 27017 

> mongod --dbpath . 

> mongod --dbpath . --port 27017

> show dbs 

> use sap_db;  (if the db is not created the it will create)

> let emp={empName:'hitesh', empsal:1234}
> db.emps.insert(emp); 


 
> db.emps.insert({empName:'hitesh', empsal:1234}); 

> db.emps.insert({empName:'Rohit', empsal:2233}); 

> db.emps.insert({empName:'Madhulata', empsal:2233, email:"madhulatha@gmail.com"}); 

> show collections; -- to show all the collections in the DB 


> db.emps.find({});  - select * from emps; 

>  db.emps.find({selector , projection - 1 or 0 });

> db.emps.find({empName:'hitesh'})


> db.emps.find({empsal:{$gt:2000}})

>  mongoimport --host localhost --db sap_db --collection emps --file ./emps.json 

>  mongoexport --db sap_db --host localhost --collection emps --out=exp-emps.json

> db.emps.find({email:{$exists:false}})

-- find people who salary is more than 2000 and should not have email 

> db.emps.find(
        {
            empsal:{$gt:2000}, 
            email:{$exists:false}
        }, 
        {
            _id:0, empName:1, empsal:1 
        }
    ); 

