import express from "express";
import { getCustomerRecord, setCustomerRecord } from "../Controlers/ResturantCustomer.js";

const router = express.Router();

router.post("/" , setCustomerRecord)

router.get("/" , getCustomerRecord)



export default router;