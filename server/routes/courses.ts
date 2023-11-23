import express from "express";
import {getCourse, getStudent} from "../dataGen/generator";
import {Course, Student} from "../../types/index";

export const coursesRouter = express.Router();


coursesRouter.get<{id:number},Student,null>('/:id',(req,res) => {
    // #swagger.tags = ['Courses']
    res.send(getStudent(req.params.id));
}).get<{id:number},Course,null>(':id/schedule', (req,res) => {
     // #swagger.tags = ['Schedule']
    res.send(getCourse(req.params.id));
});