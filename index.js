/*
 * sequelize-json-type
 * Copyright (c) 2019 YourSoft.run (https://github.com/YourSoftRun/sequelize-json-type)
 * MIT Licensed
 */
'use strict'

const Sequelize = require('sequelize')

module.exports = {
  type: Sequelize.TEXT('long'),
  get(field) {
    return typeof this.getDataValue(field) === 'string' ? JSON.parse(this.getDataValue(field)) : this.getDataValue(field)
  },
  set(field, key) {
    typeof field === 'object' ? this.setDataValue(key, JSON.stringify(field)) : this.setDataValue(key, field)
  }
}
