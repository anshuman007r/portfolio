import mongoose from 'mongoose'; 
import home from '../models/homeModel';


exports.getHomeData = (req, res) => {
    home.find({}, (err, home) => {
        if (err) {
            res.send(err);
        }

        res.json(home);
    });
};

exports.createHomeData = (req, res) => {
    const newHome = new home(req.body);

    newHome.save((err, home) => {
        if (err) {
            res.send(err);
        }

        res.json(home);
    });
};

exports.updateHomeData = (req, res) => {
    home.findOneAndUpdate({
        userId: req.body.userId
    }, req.body,
        (err, home) => {
            if (err) {
                res.send(err);
            }
            if(home){
                res.json(home);
            }else{
                res.status(400).send(`no user is present with this user id ${req.body.userId}`);
            }
        });
};

