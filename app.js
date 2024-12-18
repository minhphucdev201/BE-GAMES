const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config()

app.use('/api/user', require('./src/routes/userRoutes'))
app.use('/api/admin', require('./src/routes/adminRoutes'))
app.use('/api/games', require('./src/routes/gamesRoutes'))
app.use('/api/score', require('./src/routes/scoreRoutes'))
// connect db
const connection = require('./src/config/index');
const port  = process.env.PORT || 5000;
connection.query('SELECT 1').then(()=>{
    console.log('connect db success')
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
      });
}).catch(err=>{
    console.log('connect db failed', err)
})


