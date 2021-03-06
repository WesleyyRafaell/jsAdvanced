const Util = require("../util");
const Employee = require("./employee");


class Manager extends Employee{
  #bonuses = 2000

  get bonuses(){
    return Util.formatCurrency(this.#bonuses)
  }

  get netPay() {
    const finalValue = Util.unformatCurrency(super.netPay) + Util.unformatCurrency(this.bonuses);
    return Util.formatCurrency(finalValue);
  }
}

module.exports = Manager;