import { Type } from "../models/index.js";


class TypeRepository {

    static async createType(type) {
        try {
            return await Type.create(type)
        }
        catch(err) {
            throw err
        }
    }

    static async getAllTypes() {
        try {
            return await Type.findAll()
        }
        catch(err) {
            throw err
        }
    }
}

export default TypeRepository