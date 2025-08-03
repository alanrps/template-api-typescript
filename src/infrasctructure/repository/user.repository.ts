import { dataSource } from "../../config/database"
import { User } from "../../domain/entities/user";
import { IUser } from "../../domain/interfaces/user";

export class UserRepository {
    async getUser(where: IUser){
        const person = await dataSource.manager.findOneBy(User, where);

        return person;
    }
}