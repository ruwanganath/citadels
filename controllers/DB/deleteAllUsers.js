const usermodel = require('../../models/db/insertUser');

exports.deleteAllUsers = function (req, res) {
  userModel.deleteMany({}).exec((err, users) => {
    if (err || users == null) {
      return res.status(400).json({
        error: 'Some thing went wrong',
      });
    }
    res.json({users});
  });
};