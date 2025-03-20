```javascript
 (Rejected due cloud questions)

Here’s how you can achieve this in JavaScript using Array methods (reduce, map, and filter):

const employees = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "IT", salary: 70000 },
    { name: "Charlie", department: "IT", salary: 80000 },
    { name: "David", department: "Finance", salary: 60000 },
    { name: "Eve", department: "Finance", salary: 75000 },
    { name: "Frank", department: "HR", salary: 55000 },
    { name: "Grace", department: "Marketing", salary: 72000 },
    { name: "Hannah", department: "IT", salary: 90000 }
];

// Find the highest salary employee in each department
const highestSalaryPerDept = Object.values(
    employees.reduce((acc, emp) => {
        // If department is not added or the current employee has a higher salary, update the entry
        if (!acc[emp.department] || emp.salary > acc[emp.department].salary) {
            acc[emp.department] = emp;
        }
        return acc;
    }, {})
);

console.log(highestSalaryPerDept);

=> How can javascript errors in functional compo and navigate to fallback
=> faced any issues in your carrer and how can you overcome it.
=> React features(hooks)
=> redux vs context which better one 

=> lot of aws and cloud related questions
