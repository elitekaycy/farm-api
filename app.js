import express from 'express'
import sequelize from './utils/db'
import productsRoutes from './routes/productRoute'
import typesRoutes from './routes/typeRoute'
import farmersRoutes from './routes/farmerRoute'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


app.use(express.json());

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
