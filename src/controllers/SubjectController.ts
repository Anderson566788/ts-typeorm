import { Request, Response } from "express";
import { subjectReposiory } from "../repositories/SubjectRepository";

export class SubjectController {
    async create(req: Request, res: Response){
        //criar disciplina
        const {name} = req.body

        if(!name){
            return res.status(400).json({ message: 'O nome é obrigatório'})
        }

        try {
            const newSubject = subjectReposiory.create({ name })

            await subjectReposiory.save(newSubject)

            return res.status(201).json(newSubject)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Interal server ERROR'})
        }
    }
}