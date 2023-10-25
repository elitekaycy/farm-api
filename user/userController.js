import createReport from '../service/report.service';
import UserRepository from './userRepo'

class UserController {
    static async createUser(req, res) {
        try {
            const fileLink = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            const userData = {...req.body, image: fileLink}
            const user = await UserRepository.createUser(userData)

            createReport({
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
        try {
            const email = req.body.email
            const getUser = await UserRepository.FindUser(email)

            
            createReport({
                userId: user?.id,
                reportedId: user?.id,
                reportType: 'USER_LOGIN',
                description: `User ${getUser?.username} ${getUser?.email} logged in`
            })
            
            return res.status(200).json({ user: getUser, isUser: true})
            
        }
        catch(err) {
            return res.status(500).json({ error: err})
        }
    }

    static async placeBatchOrder(req, res) {
        try {
            const orders = req.body.orders
            const allOrders = await UserRepository.placeBatchOrder(user, orders)
            return res.status(201).json(allOrders)

        }
        catch(err) {
            return res.status(500).json({ error: err })
        }
    }
}

export default UserController