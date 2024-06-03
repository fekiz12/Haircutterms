import express from "express";
import {listProduct, removeProduct} from "../controllers/productController.js"


const productRouter =express.Router();







productRouter.get("/list",listProduct)
productRouter.post("/remove",removeProduct)






export default productRouter;