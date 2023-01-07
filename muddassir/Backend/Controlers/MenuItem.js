 
 import MenuItemmodel from "../models/MenuItem.js";
 export const setMenuItem = async (req , res) => {
console.log("hit");




const catogory = req.body.category;
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const Image = req.body.Image;
  console.log(catogory);
  console.log(id);
  console.log(name);
  console.log(price);
  console.log(Image);



  const newMenuItemInfo = MenuItemmodel(
    {

      // column name must be same as model


      catogory : catogory,
    id : id,
    name  : name,
    price : price,
    image : Image
    

    }
  );


  try {
    await newMenuItemInfo.save();
  res.json(newMenuItemInfo);
} catch (error) {
    console.log("not saved");
    
}

  
 }

 export const getMenuItem = async (req , res) => {


    try {
    
        const MenuItem =   await MenuItemmodel.find();
        res.json( MenuItem);
     } catch (error) {
       console.log("notfound any data");
     }

 }