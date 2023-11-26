const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students');

router.get('/students', studentController.index);
router.get('/student/:id', studentController.show);
router.post('/student/add', studentController.store);
router.put('/student/update/:id', studentController.update);
router.delete('/student/delete/:id', studentController.delete);

module.exports = router;
