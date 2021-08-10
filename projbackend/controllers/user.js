const User = require("../models/user");



// works with param thats why id is here cb
exports.getUserById = (req, res, next, id)=> {
    User.findById(id).exec((err, user) =>{
        if (err || !user){
            return res.status(400).json({
                error: "no user in db"
            });
        }
        req.profile = user;
        next();
    });        

};

exports.getUser = (req, res) =>{

    //todo: get back here for password
    return res.json(req.profile)

}