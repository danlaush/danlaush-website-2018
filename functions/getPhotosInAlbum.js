const data = require('../data/data.json')

exports.handler = async event => {
  console.log('load photos', data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}