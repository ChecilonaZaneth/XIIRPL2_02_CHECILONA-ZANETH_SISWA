const Student = require('../models/student');

module.exports = {
  // Menampilkan semua data siswa
  index: async (req, res) => {
    try {
      const students = await Student.find();
      if (students.length > 0) {
        res.status(200).json({
          status: true,
          data: students,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: 'Data masih kosong',
        });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  // Menampilkan data siswa berdasarkan ID
  show: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (student) {
        res.json({
          status: true,
          data: student,
          method: req.method,
          url: req.url,
          message: 'Data berhasil didapat',
        });
      } else {
        res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },

  // Menambahkan data siswa
  store: async (req, res) => {
    try {
      const student = await Student.create(req.body);
      res.status(201).json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: 'Data berhasil ditambahkan',
      });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Bad Request' });
    }
  },

  // Mengubah data siswa berdasarkan ID
  update: async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (student) {
        res.json({
          status: true,
          data: student,
          method: req.method,
          url: req.url,
          message: 'Data berhasil diubah',
        });
      } else {
        res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
      }
    } catch (error) {
      res.status(400).json({ success: false, message: 'Bad Request' });
    }
  },

  // Menghapus data siswa berdasarkan ID
  delete: async (req, res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      if (deletedStudent) {
        res.json({
          status: true,
          method: req.method,
          url: req.url,
          message: 'Data berhasil dihapus',
        });
      } else {
        res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
      }
    } catch (error) {
      res.status(400).json({ success: false, message: 'Bad Request' });
    }
  },
};
