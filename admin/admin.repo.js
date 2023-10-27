import { Product, User, Order, Report } from "../models";

const USER_LOGIN = "USER_LOGIN"
const USER_CREATED = 'USER_CREATED'
const ORDER_CREATED= 'ORDER_CREATED'


class AdminRepository {

   static async getUserActivityReports(reportType) {
      try {
         return await Report.findAll({ 
            where: {
               reportType: reportType
            }
         })
      }
      catch(err) {
         throw new Error(err)
      }
   }

   static async verifyOrderPurchase(user, orderId) {
      try {
         const [updatedRowsCount] = await Order.update({
          ["status"]: true 
         }, {
            where: { id: orderId },
          });
    
          if (updatedRowsCount === 0) {
            throw new Error('Order not found');
          }

          createReport({
            userId: user?.id,
            reportedId: orderId,
            reportType: 'ORDER_PURCHASED',
            description: `new order purchased by ${user?.email} ${orderId}`
        })
    
          return { success: true, message: 'purchased' };

      }
      catch(err) {
         throw new Error(err)
      }
   }
   // get user activity reports
   // get purchase activity reports
   // verify order status and get reports
   // get reports by their types
   
}

export default AdminRepository