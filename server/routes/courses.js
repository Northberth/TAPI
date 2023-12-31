import express from "express";
import {getCourse, getStudent} from "../dataGen/generator.js";

export const coursesRouter = express.Router();


coursesRouter.get('/:id',(req,res) => {
    // #swagger.tags = ['Courses']
    res.send(getStudent(req.params.id));
}).get(':id/schedule', (req,res) => {
     // #swagger.tags = ['Schedule']
    res.send(getCourse(req.params.id));
});