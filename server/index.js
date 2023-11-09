import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import {faker} from "@faker-js/faker";
//import {io} from "./websocket/socket.js";
import {studentsRouter} from "./routes/students.js";
import {coursesRouter} from "./routes/courses.js";

const PORT = 3000;
export const app = express();
export const server = createServer(app);

app.use(cors({'Origin':'*'}))
app.use('/students',studentsRouter);
app.use('/courses',coursesRouter);
app.get('hello/:id',(req, res) => {
    faker.internet.email();
    const id = req.params.id;
    res.send('world');
})

function generateSchedule(){

    const schedule = {
        day: faker.date.weekday(),
        group: faker.person.firstName(),
        time: faker.date.future().toLocaleDateString,
        course: faker.word.noun(),
        location: faker.location.city(),
    };
    return schedule
}
    
/*
 student ID ?od &do=
 /grupa/ NAZWA
 /Wykładowca/: ID
 /SALA/NR
 /PLAN
*/

server.listen(PORT,() => {
    //io.listen(server,)
    console.log(`Started on port: ${PORT}!`)});