import  express  from "express";
import { getMenuItem, setMenuItem } from "../Controlers/MenuItem.js";


const router = express.Router();


router.get("/" , getMenuItem)

router.post("/" , setMenuItem) 

export default router;