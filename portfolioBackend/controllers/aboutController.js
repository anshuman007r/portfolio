import mongoose from 'mongoose'; 
import education from '../models/educationModel'
import profession from '../models/professionModel'
import skill from '../models/skillModel'
let data = []
exports.getAboutData = (req, res) => {
    getEducation(res) 
    getSkill(res)
    getProfession(res)
};

async function getEducation(res){
    await education.find({}, (err, education) => {
        if (err) {
            console.log(err)
            res.send(err);
            return []
        }else{
            data.push( ...education )
        }
    });
}

async function getSkill(res){
    await skill.find({}, (err, skill) => {
        if (err) {
            res.send(err);
            return []
        }else{
            data.push( ...skill )
        }
    });
}

async function getProfession(res){
    await profession.find({}, (err, profession) => {
        if (err) {
            res.send(err);
            return []
        }else{
            data.push( ...profession )
        }

        if(data){
            res.json(data)
        }
    });
}

exports.createAboutData = (req, res) => {
    if(req.params.type === 'skill'){
        const newSkill = new skill(req.body);
        newSkill.save((err, skill) => {
            if (err) {
                res.send(err);
            }else{                    
                res.json(skill);
            }
        });
    }else if(req.params.type === 'education'){
        const newEducation = new education(req.body);
        newEducation.save((err, education) => {
            if (err) {
                res.send(err);
            }else{                    
                res.json(education);
            }
        });
    }else if(req.params.type === 'profession'){
        const newProfession = new profession(req.body);
        newProfession.save((err, profession) => {
            if (err) {
                res.send(err);
            }else{                    
                res.json(profession);
            }
        });
    }else{
        res.status(404).send(`${req.params.type} is a invalid entry`)
    }
};

exports.updateAboutData = (req, res) => {
    if(req.params.type === 'skill'){
        skill.findOneAndUpdate({
            skillId: req.body.skillId
        }, req.body,
            (err, skill) => {
                if (err) {
                    res.status(404).send(`${req.body.skillId} is a invalid skillId`)
                }else{                       
                    res.json(skill);
                }
        });

    }else if(req.params.type === 'education'){
        education.findOneAndUpdate({
            educationId: req.body.educationId
        }, req.body,
            (err, education) => {
                if (err) {
                    res.status(404).send(`${req.body.userId} is a invalid educationId`)
                }else{                       
                    res.json(education);
                }
            });
    }else if(req.params.type === 'profession'){
        profession.findOneAndUpdate({
            professionId: req.body.professionId
        }, req.body,
            (err, profession) => {
                if (err) {
                    res.status(404).send(`${req.body.professionId} is a invalid professionId`)
                }else{                       
                    res.json(profession);
                }
            });
    }else{
        res.status(404).send(`${req.params.type} is a invalid entry`)
    }
};



