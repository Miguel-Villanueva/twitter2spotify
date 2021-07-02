module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");

  return {
    data: _.times(10, function (n) {
      return {
        author_id: faker.internet.userName(),
        created_at: faker.date.past(),
        id: faker.datatype.number(10000000000000, 99999999999999),
        text: faker.commerce.productDescription(),
      };
    }),
  };
};
