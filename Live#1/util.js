class Util {
  static #defaultFormat = Intl.NumberFormat("pt-br", {
    currency: 'BRL',
    style: 'currency'
  })

  static formatCurrency(value) {
    return this.#defaultFormat.format(value)
  }

  static unformatCurrency(value) {
    //value = $ 4000,5
    return Number(value.replace(/\D/g, '')) / 100
  }
}

module.exports = Util;