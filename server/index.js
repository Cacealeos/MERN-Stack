import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import EnemyList from './routes/bestiaryRoute.js';

const App = express();
App.use(express.json());
App.use(cors());

App.use('/Bestiary', EnemyList);
//PW = rRfj1UJQ1PMDbfe3
//DB = TestPyDB
const DATABASE_URL = 'mongodb+srv://Admin:rRfj1UJQ1PMDbfe3@pycluster.ctt6i.mongodb.net/TestPyDB?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;


mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => App.listen(PORT, () => console.log(`server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message) );


mongoose.set('useFindAndModify', false);


