import express from 'express'
import sequelize from './utils/db.js'
import productsRoutes from './routes/productRoute.js'
import typesRoutes from './routes/typeRoute.js'
import farmersRoutes from './routes/farmerRoute.js'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"));


app.use('/api', productsRoutes);
app.use('/api', typesRoutes);
app.use('/api', farmersRoutes);


async function init() {
    try {
      await sequelize.sync();
      console.log('Database synchronized');
    } catch (error) {
      console.error('Database synchronization error:', error);
    }
  }
  
init();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
