require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import movies_routes from './src/routes/Movies';
import comments_routes from './src/routes/Comments';




const app = express();
const PORT = process.env.PORT;




mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,  { useNewUrlParser: true,useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


movies_routes(app);
comments_routes(app);




app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);