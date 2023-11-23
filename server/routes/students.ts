import express from "express";
import {getCourse, getStudent} from "../dataGen/generator";

export const studentsRouter = express.Router();


/*studentsRouter.get('/:id',(req,res) => {
    res.send(getStudent(req.params.id));
}).get(':id/schedule', (req,res) => {
    res.send(getCourse(req.params.id));
});*/

studentsRouter.get<{id:string},string,null,{from: string, to: string}>('/:id',(req,res) => {
    // #swagger.tags = ['Students']
     /* #swagger.responses[200] = {
            description: "Some description...",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/Student"
                    }
                }           
            }
        }   
    */
    /*client.GetStudent({studentId: "1"},(err, response) => {
        if ( err !== null){
            console.error(err);
        }
    })
    res.send(response)*/
})

