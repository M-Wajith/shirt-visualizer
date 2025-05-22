const express = require('express');
const router = express.Router();
const fabricController = require('../controllers/fabricController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.post('/add', upload.single('fabric_image'), fabricController.createFabric);
router.get('/', fabricController.getAllFabrics);
router.get('/images', fabricController.getAllFabricsImages);
router.get('/fabric_image/:id', fabricController.getFabricImage); // For texture loading


module.exports = router;