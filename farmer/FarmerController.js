import FarmerRepository from './farmerRepo.js';

class FarmerController {
  static async createFarmer(req, res) {
    try {
      const farmerData = req.body
      const farmer = await FarmerRepository.createFarmer(farmerData);
      return res.status(201).json(farmer);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create farmer' });
    }
  }

  static async getAllFarms(req, res){
    try {
      const farmers = await FarmerRepository.getAllFarmers()
      return res.status(200).json(farmers)
    }
    catch(err) {
      return res.status(500).json({ error: "Failed to get all farmers"})
    }
  }

  static async getFarmerById(req, res) {
    const { id } = req.params;
    try {
      const farmer = await FarmerRepository.getFarmerById(id)
      if (!farmer) {
        return res.status(404).json({ error: 'Farmer not found' });
      }
      return res.json(farmer);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve farmer' });
    }
  }


  static async deleteFarmer(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await FarmerRepository.deleteFarmer(id);
      if (!isDeleted) {
        return res.status(404).json({ error: 'Farmer not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete farmer' });
    }
  }
}

export default FarmerController