const obj = require('../models/home');

exports.home = (req, res,next)=>{
    res.send(obj);
}