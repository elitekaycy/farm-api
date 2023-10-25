import { Order, User } from "../models";
import createReport from "../service/report.service";

class UserRepository {
    static async createUser(user) {
        try {
            return await User.create(user)
        }
        catch(err) {
            throw err
        }
    }


    static async FindUser(email) {
        try {
            // find user by email
            const user = await User.findOne({
                where: {
                  email: email,
                },
              });
              return user;

        }catch(err) {
            throw err
        }
    }


    async placeBatchOfOrders(user, ordersData) {

      // user - { id , username , email}
        const placedOrders = [];
        const errors = [];
    
        // Loop through the array of order data
        for (const orderData of ordersData) {
          try {
            const order = await Order.create(orderData);
            
            
            createReport({
              userId: user?.id,
              reportedId: order?.id,
              reportType: 'ORDER_CREATED',
              description: `${user?.username} at ${user?.email} placed a new order ${order?.id} at ${order?.createdAt}`
          })

            placedOrders.push(order);
          } catch (error) {
            errors.push({ error, orderData });
          }
        }
    
        return { placedOrders, errors };
      }


}

export default UserRepository