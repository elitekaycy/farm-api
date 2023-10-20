import TypeRepository from './typeRepo.js'

class TypeController {
    static async createType(req, res) {
        try {
            const typeData = req.body
            const type = await TypeRepository.createType(typeData)
            return res.status(201).json(type)

        }catch(err) {
            return res.status(500).json({ "error": String(err)})
        }
    }

    static async getAllTypes(req, res) {
        try {
            const types = await TypeRepository.getAllTypes()
            return res.status(200).json(types)
        }
        catch(err) {
            return res.status(500).json({ "error": String(err)})
        }
    }
}

export default TypeController