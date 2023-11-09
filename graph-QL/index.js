import express from "express";
import cors from "cors";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import {studentsRouter} from "../server/routes/students.js";

const typeDefs = `#graphql
    type Student{
        id: Int
        name: String
        surname: String
        email: String
    }
    type Course{
        id: Int
        name: String
        department: String
        lecturer: String
        room: Int
        date: String
        duration: String
    }
    type Group{
        id: Int
        course: Int
        lecturer: Int
        room: Int
        students:[Int]
    }
    type Lecturer{
        id: Int
        name: String
        surname: String
        email: String
        course:Int
    }
    type Room{
        id: Int
        course:Int
    }
    type Query{
        students: [Student]
        student(id: Int): Student
    }
    `;

const resolvers = {
    Query:{
        students: () => students,
        student:(parent, arqs) => students.find(s => s.id === args.id) 
    }
};

const server = new ApolloServer({typeDefs,resolvers});
await server.start();

export const app = express();

app.use('/graphql',cors(), express.json(),expressMiddleware(server));



app.use(cors({
    origin:'*'
}));

app.listen(8989,()=>{
    console.log(`Started on port: ${8989}!`)});

