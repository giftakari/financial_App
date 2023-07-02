/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  'new': function (req, res) {
    return res.json({
      name: "Akaris",
      age: 46
    })
  }

};

