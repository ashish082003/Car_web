import express from 'express';
import {createCar,getCars,getCarById,updateCar,deleteCar} from  '../controllers/carController.js';
import  protect from '../middleware/authMiddleware.js';


const router = express.Router();

router.route('/')
  .post(protect, createCar) 
  .get(protect, getCars);   

router.route('/:id')
  .get(protect, getCarById) 
  .put(protect, updateCar)  
  .delete(protect, deleteCar); 

  export default router;
