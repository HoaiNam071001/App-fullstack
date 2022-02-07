const obj = require('../models/home');

exports.home = (req, res,next)=>{
    res.set('Content-Type', 'application/json');
    res.send(obj);
}