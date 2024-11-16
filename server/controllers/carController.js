import Car from '../models/Car.js';

export const createCar=async(req,res)=>{
    const { title, description, tags, images } = req.body;

    try {
      const car = await Car.create({
        title,
        description,
        tags,
        images,
        user: req.user.id, 
      });
  
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const getCars = async (req, res) => {
    try {
      const cars = await Car.find({ user: req.user.id });
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getCarById = async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
  
      if (!car || car.user.toString() !== req.user.id) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      res.status(200).json(car);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const updateCar = async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
  
      if (!car || car.user.toString() !== req.user.id) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      
      const { title, description, tags, images } = req.body;
      car.title = title || car.title;
      car.description = description || car.description;
      car.tags = tags || car.tags;
      car.images = images || car.images;
  
      const updatedCar = await car.save();
      res.status(200).json(updatedCar);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const deleteCar = async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
  
      if (!car || car.user.toString() !== req.user.id) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      await car.remove();
      res.status(200).json({ message: 'Car removed successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };