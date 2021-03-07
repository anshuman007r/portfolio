import mongoose from 'mongoose'; 
import project from '../models/projectModel';

exports.getAllProjects = (req, res) => {
    project.find({}, (err, project) => {
        if (err) {
            res.send(err);
        }

        res.json(project);
    });
};

exports.createProject = (req, res) => {
    const newProject = new project(req.body);

    newProject.save((err, project) => {
        if (err) {
            res.send(err);
        }

        res.json(project);
    });
};

exports.updateProject = (req, res) => {
    project.findOneAndUpdate({
        userId: req.body.userId
    }, req.body,
        (err, project) => {
            if (err) {
                res.send(err);
            }

            res.json(project);
        });
};

exports.deleteProject = (req, res) => {
    project.deleteOne({
        projectId: req.params.projectId
    }, (err) => {
        if(err){
            res.status(400).send(`there is no project with id ${req.params.projectId}`)
        }else{
            res.json({
                message: `project with id ${req.params.projectId} successfully deleted`
            })
        }

    })
};
