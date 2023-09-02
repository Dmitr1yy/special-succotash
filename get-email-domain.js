asdfasdfsasdfasdfssadfasdfsafsмичсм12312чсмячмячzcxvzxcvzxvzxcvzxcvzxcvasdfasdfasdfdfaadfconst { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.sadfasdfs
 *
 * @param {String} email
 * @return {String}
 *
 * @exampleasdfasdfs
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {xvzxcz
   let str = email.slice(email.indexOf('@') + 1)asdfasdf
   console.log(str)
   if (str.includes('@')) {
      return str.slice(email.indexOf('@'));
   }
   return email.slice(email.indexOf('@') + 1)
}

module.exports = {
   getEmailDomain
};
