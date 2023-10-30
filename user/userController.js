import Order from '../models/order.model.js';
import createReport from '../service/reportService.js';
import UserRepository from './userRepo.js'
import Report from '../models/report.model.js';
import User from '../models/user.model.js';
import Product from '../models/product.model.js';

class UserController {
    static async createUser(req, res) {
        try {
            // const fileLink = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            // const userData = {...req.body, image: fileLink}
            console.log("user req body ", req.body)
            const user = await UserRepository.createUser(req.body)

            await createReport({
                userId: user?.id,
                reportedId: user?.id,
                reportType: 'USER_CREATED',
                description: `new User Created ${user?.username} ${user?.email}`
            })

            return res.status(201).json(user)

        }
        catch(err) {
            return res.status(500).json({ error: 'Failed to create user' });
        }
    }

    static async login(req, res) {
        console.log("login ", req.body)
        try {
            const email = req.body.email;
            const password = req.body.password;
    
            const user = await UserRepository.FindUser(email);
    
            if (user) {
                // Check if the provided password matches the user's password
                if (password === user.password) {

                    await createReport({
                        userId: user.id,
                        reportedId: user.id,
                        reportType: 'USER_LOGIN',
                        description: `User ${user.username} (${user.email}) logged in`
                    });
    
                    return res.status(200).json(user);
                } else {
                    // Password does not match
                    return res.status(401).json({ error: "Invalid password" });
                }
            } else {
                // User not found
                return res.status(404).json({ error: "User not found" });
            }
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
    

    static async placeBatchOrder(req, res) {
        try {
            const orders = req.body.orders
            const placedOrdes = []
            const user = req.body.user

            for (const order of orders) {
                console.log("orded", order)
                
                const placeOrder = await Order.create(order)
                console.log("placed order ", placeOrder)
                if(!placeOrder) return res.status(500).json({ error: "unable to place order"})
                
                await createReport({
                    userId: user.id,
                    reportedId: placeOrder.id,
                    reportType: 'ORDER_CREATED',
                    description: `User ${user.username} (${user.email}) placed order ${placeOrder.id} ${placeOrder.status}`
                });

                placedOrdes.push(placeOrder)
            }

            return res.status(201).json({ placedOrders: placedOrdes })

        }
        catch(err) {
            return res.status(500).json({ error: err })
        }
    }

    static async viewOrderHistory(req, res) {
        try {
            const orders = await Order.findAll({
                where: {
                    userId: Number(req.params.id)
                }
            })

            if(orders) return res.status(200).json(orders)
            else return res.status(500).json({ error: "unable to find orders"})

        }
        catch(err) {
            return res.status(500).json({error: err})
        }
    }




    // orders
    static async viewOrders(req, res) {
        const reportType = req.params.type
        console.log("report type ", reportType)
        try {

            const order = await Report.findAll({
                where: {
                    reportType: String(reportType)
                }
            })

            if(order) return res.status(200).json(order)
            else return res.status(500).json({ error: "unable to get order"})
            
        }catch(err) {
            return res.status(500).json({ error: err})
        }
    }

    static async viewAllOrders(req, res) {
        try {
            const orders = await Order.findAll({
                include: [{ model: User, as: 'user' }, { model: Product, as: 'product' }],
            })

            if(orders) return res.status(200).json(orders)
            else return res.status(500).json({ error: "unable to find orders"})

        }
        catch(err) {
            return res.status(500).json({error: err})
        }
    }

    static async ordStatus(req, res) {
        console.log("req bodu ", req.body)
        try {
            const order = await Order.findByPk(req.body.id)

            console.log("order ", order)

            order['status'] = req.body.status
            order.save()
            return order 
        }
        catch(err) {
            return res.status(500).json({ error: "unable to change status"})
        }
    }


    static async createUserReport(req, res) {
        console.log("user req ", req.body)

        try {

            await createReport({
                userId: req.body.id,
                reportedId: req.body.productId,
                reportType: 'USER_REPORT',
                description: req.body.description,
            });

            return res.status(201).json({ report: true})

        }
        catch(err) {
            return res.status(500).json({ error: err})
        }

    }

    static async getAllUsers(req, res) {

        const users = await User.findAll()
        if(users) return res.status(200).json(users)
    }

    static async getAllReports(req, res) {

        const reports = await Report.findAll()
        if(reports) return res.status(200).json(reports)
    }

}

export default UserController