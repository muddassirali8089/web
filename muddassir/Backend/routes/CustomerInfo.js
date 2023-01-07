import  express  from "express";
import { getCustomerinfo, setCustomerInfo } from "../Controlers/CustomerInfo.js";

const router = express.Router();


router.get("/" , getCustomerinfo)

router.post("/" , setCustomerInfo) 

export default router;