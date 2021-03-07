import mongoose from 'mongoose'; 
import contact from '../models/contactModel';

exports.getContactData = (req, res) => {
    contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }

        res.json(contact);
    });
};

exports.createContactData = (req, res) => {
    const newContact = new contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }

        res.json(contact);
    });
};

exports.updateContactData = (req, res) => {
    contact.findOneAndUpdate({
        userId: req.body.userId
    }, req.body,
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            if(contact){
                res.json(`data updated successfully`)
            }else{
                res.status(400).send(`no user is present with this user id ${req.body.userId}`);
            }
        });
};
