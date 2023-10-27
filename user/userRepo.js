import {Order, User} from "../models/index.js";
import createReport from "../service/reportService.js";

class UserRepository {
    static async createUser(user) {
        try {
            return await User.create(user)
        } catch (err) {
            throw err
        }
    }


    static async FindUser(email) {
        try { // find user by email
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            return user;

        } catch (err) {
            throw err
        }
    }


    static async placeBatchOfOrders(orderData) {
      console.log("order data ", orderData)

        try {
            return await Order.create(orderData)
        } catch (err) {
            throw err
        }
    }


}

export default UserRepository
