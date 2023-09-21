import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

export const subjectReposiory = AppDataSource.getRepository(Subject)
