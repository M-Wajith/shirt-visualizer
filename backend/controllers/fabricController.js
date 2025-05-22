const Fabric = require('../models/fabricModel');

// Utility function to capitalize first letter of each word and remove extra spaces
const formatText = (text) => {
    return text
      .trim() // remove leading/trailing whitespace
      .replace(/\s+/g, ' ') // convert multiple spaces to a single space
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize first letter
      .join(' ');
  };

//01. create New Fabric
exports.createFabric = async (req, res) => {
  try {
    // Find all fabric_ids
    const fabrics = await Fabric.find({}, 'fabric_id');

    // Extract the numeric part of the fabric_id and find the highest number
    let maxNum = 0;
    fabrics.forEach(fabric => {
      const num = parseInt(fabric.fabric_id.replace('F', ''), 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    });

    // Generate the next fabric_id
    const newIdNum = maxNum + 1;
    const nextId = 'F' + newIdNum.toString().padStart(3, '0'); // Correct padding

    // Create the new fabric document with formatted values
const fabric = new Fabric({
    fabric_id: nextId,
    fabric_name: formatText(req.body.fabric_name),
    fabric_color: formatText(req.body.fabric_color),
    fabric_pattern: formatText(req.body.fabric_pattern),
    fabric_material: formatText(req.body.fabric_material),
    fabric_category: formatText(req.body.fabric_category),
    fabric_image: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    }
  });
  
    // Save the fabric to the database
    await fabric.save();
    res.status(201).json({ message: 'Fabric added successfully', fabric });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create fabric' });
  }
};


//02. get all the fabrics for front-end
exports.getAllFabrics = async (req, res) => {
    try{
        //fetch all the fabric data from database
        const fabrics = await Fabric.find();

        //Format the response data 
        const fabricData = fabrics.map(fabric =>({
            fabric_id: fabric.fabric_id,
            fabric_name: fabric.fabric_name,
            fabric_color: fabric.fabric_color,
            fabric_pattern: fabric.fabric_pattern,
            fabric_material: fabric.fabric_material,
            fabric_category: fabric.fabric_category,
            fabric_image: `data:${fabric.fabric_image.contentType};base64,${fabric.fabric_image.data.toString('base64')}`
        }));

        res.status(200).json(fabricData);
        console.log(fabrics)
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Failed to retrive Fabrics"})
    }
}

//03. display all Fabric Images

exports.getAllFabricsImages = async (req, res) => {
  try {
      const fabrics = await Fabric.find();

      if (!fabrics || fabrics.length === 0) {
          return res.status(404).send('No images found');
      }

      const images = fabrics.map(fabric => {
          const base64Data = (fabric.fabric_image.data instanceof Buffer)
              ? fabric.fabric_image.data.toString('base64')
              : Buffer.from(fabric.fabric_image.data, 'base64').toString('base64');

          return {
              fabric_id: fabric.fabric_id,
              image: `data:${fabric.fabric_image.contentType};base64,${base64Data}`
          };
      });

      res.status(200).json(images);
  } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving images");
  }
};

//07 Get one fabric Image
exports.getFabricImage = async (req, res) => {
    try {
      const fabric = await Fabric.findOne({ fabric_id: req.params.id });
      if (!fabric || !fabric.fabric_image || !fabric.fabric_image.data) {
        return res.status(404).send('Image not found');
      }
  
      res.contentType(fabric.fabric_image.contentType);
      res.send(fabric.fabric_image.data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving image');
    }
  };
  
