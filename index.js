'use strict';

/* eslint-disable global-require */
const allRules = {
  'display-name': require('./lib/rules/display-name'),
};
/* eslint-enable */

module.exports = {
  rules: allRules,
  configs: {},
};
