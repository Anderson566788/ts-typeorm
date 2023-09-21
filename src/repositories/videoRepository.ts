import { AppDataSource } from "../data-source";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSource.getTreeRepository(Video)