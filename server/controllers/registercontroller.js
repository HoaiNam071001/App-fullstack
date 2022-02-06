const obj = require('../models/home');

exports.index = (req, res,next)=>{
    console.log(req.body);
    res.send(req.body);
}
