const router = require('express').Router();
const {
  Location,
  Traveller,
  Trip
} = require('../models')


// 
router.get('/api/travellers', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({});
    if (!travellerData) {
      res.status(404).json({
        message: 'No Travellers found!'
      });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 
router.post('/api/travellers', async (req, res) => {
   try {
     const travellerData = await Traveller.create(req.body);
     if (!travellerData) {
       res.status(404).json({
         message: 'Traveller was not created.'
       });
       return;
     }
     res.status(200).json(travellerData);
   } catch (err) {
     res.status(400).json(err);
   }
   });

// 
router.get('/api/travellers/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{
        model: Location, 
        through:{
          attributes: []
        }
      }]
    });
    if (!travellerData) {
      res.status(404).json({
        message: 'No Traveller found with this id.'
      });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
  });

// 
router.delete('/api/travellers/:id', async (req, res) => {
 try {
   const travellerData = await Traveller.destroy({
     where: {
       id: req.params.id
     }
   })
   if (!travellerData) {
     res.status(404).json({
       message: 'No Traveller found with this id.'
     });
     return;
   }
   res.status(200).json(travellerData);
 } catch (err) {
   res.status(500).json(err);
 }
 });;

router.get('/api/locations', async (req, res) => {
   try {
     const locationData = await Location.findAll({
      //  include: [{
      //    model: Product
      //  }],
     });
     if (!locationData) {
       res.status(404).json({
         message: 'No locations found!'
       });
       return;
     }
     res.status(200).json(locationData);
   } catch (err) {
     res.status(500).json(err);
   }
   });

// 
router.post('/api/locations/', async (req, res) => {
try {
  const locationData = await Location.create(req.body);
  if (!locationData) {
    res.status(404).json({
      message: 'Location was not created.'
    });
    return;
  }
  res.status(200).json(locationData);
} catch (err) {
  res.status(400).json(err);
}
});




router.get('/api/locations/:id', async (req, res) => {
  try {
    // finds by the primary key
    const locationData = await Location.findByPk(req.params.id, {
      include: [{
        model: Traveller, 
        through: {
          attributes: []
        }
      }]
    });
    if (!locationData) {
      res.status(404).json({
        message: 'No Location found with this id.'
      });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
  });

router.delete('/api/locations/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!locationData) {
      res.status(404).json({
        message: 'No Location found with this id.'
      });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
  });;

router.get('/api/trips', async (req, res) => {
  try {
    const tripData = await Trip.findAll({});
    if (!tripData) {
      res.status(404).json({
        message: 'No trips found!'
      });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/api/trips', async (req, res) => {
try {
  const tripsData = await Trip.create(req.body);
  if (!tripsData) {
    res.status(404).json({
      message: 'Trip was not created.'
    });
    return;
  }
  res.status(200).json(tripsData);
} catch (err) {
  res.status(400).json(err);
}
});

router.delete('/api/trips/:id', async (req, res) => {
  try {
    const tripsData = await Trip.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!tripsData) {
      res.status(404).json({
        message: 'No Trip found with this id.'
      });
      return;
    }
    res.status(200).json(tripsData);
  } catch (err) {
    res.status(500).json(err);
  }
  });
module.exports = router;