const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    },
    email: {
        type: String,
        required: [true, 'Silahkan isikan email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Silahkan isikan email valid!',
        ],
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
    },
    umur: {
        type: Number,
        required: [true, 'Silahkan isikan umur'],
        min: [0, 'Umur tidak boleh kurang dari 0'],
    },
    gender: {
        type: String,
        required: [
            true,
            'Silahkan isikan gender dengan Laki-laki, Perempuan, atau Lainnya',
        ],
    },
}, {
    versionKey: false,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
