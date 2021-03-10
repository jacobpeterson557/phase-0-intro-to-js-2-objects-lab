const employee = {
    name: 'Sam',
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
  
    return obj;
  } 

  function deleteFromEmployeeByKey(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;
    return obj;
  }




const updateEmployeeClone = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

const updateEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

const newEmployee = deleteFromEmployeeByKey(employee, 'name', 'John');

const newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, 'name', 'Jimmy' );