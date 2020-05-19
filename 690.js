/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

// BFS and DFS approaches are different by one command, as commented below
var GetImportance = function(employees, id) {
    const map = {}
    employees.forEach(e => map[e.id] = e)
    
    const queue = [id]
    let sum = 0
    
    while(queue.length) {
        // BFS: use shift(), DFS: use pop()
        const currId = queue.shift()
        const employee = map[currId]
        sum += employee.importance
        employee.subordinates.forEach(s => queue.push(s))
    }
    return sum
};
