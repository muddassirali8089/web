import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import ResturantCustomer from './routes/ResturantCustomer.js';
import CustomerInfo from "./routes/CustomerInfo.js"
import  MenuItem  from "./routes/MenuItem.js";



const app = express();

mongoose.set('strictQuery', true);

const url = "mongodb+srv://muddassir:123@cluster0.qzjx0fk.mongodb.net/?retryWrites=true&w=majority";





mongoose.connect(url)
.then(() => console.log("connected."))
.catch(() => console.log("not... connected"))
 console.log("after....")


app.listen(5000);

app.use(cors ());
app.use(bodyParser.json( {extended: true}));
app.use(bodyParser.urlencoded ({extended: true}));

app.use("/Signinform" , ResturantCustomer);
app.use("/signup" , CustomerInfo);
app.use("/viewcustomers" , CustomerInfo);
app.use("/Admin"  , MenuItem );
app.use("/Menu" ,  MenuItem )

