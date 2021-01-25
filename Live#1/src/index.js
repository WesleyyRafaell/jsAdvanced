const assert = require('assert');
const Util = require('../util');
const Employee = require('./employee');

const GENDER = {
  male: 'male',
  famale: 'female'
}

{
  const employee = new Employee({
    name: 'xuxa da silva',
    gender: GENDER.famale
  })

  assert.throws(() => employee.birthYear, { message: 'you must define age first!'})
}

const CURRENT_YEAR = 2022;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
  const employee = new Employee({
    name: 'Joazinho',
    age: 20,
    gender: GENDER.male
  })

  assert.deepStrictEqual(employee.name, 'Mr. Joazinho')
  assert.deepStrictEqual(employee.age, undefined)
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

  const expectedBirthYear = 2001
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);
}