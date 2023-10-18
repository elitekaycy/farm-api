import {Farmer} from "../models";

class FarmerRepository {

    static async createFarmer(user) {
        try {
            return await Farmer.create(user)
        } catch (err) {
            throw err
        }
    }

    static async getAllFarmers() {
        try {
            return await Farmer.findAll()
        } catch (err) {
            throw err
        }
    }

    static async deleteFarmer(id) {
        try {
            const farmer = await Farmer.findByPk(id)
            if (farmer) {
                await farmer.destroy()
                return true
            }
        } catch (err) {
            throw err
        }
    }

    static async getFarmerById(id) {
        return await Farmer.findByPk(id)
    }
}


module.exports = FarmerRepository
