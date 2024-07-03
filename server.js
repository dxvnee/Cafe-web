import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/route.admin.js';

const app = express();

app.use(express.json());
app.use('/', router);

app.get('/', (res, req) => {
    res.send('Backend is running!');
});

mongoose.connect("mongodb+srv://dxvnee:DTuzSPD1ip0vDr1C@creopediadb.cdylyrm.mongodb.net/?retryWrites=true&w=majority&appName=CreopediaDB")
    .then(() => {
        console.log('Connected to database!');

        const PORT = 3007;
        app.listen(PORT, () => {
            console.log('Server started at port ' + PORT);
        });
    })
    .catch((error) => {
        console.log('Connection failed!', error);
    })

export default app;