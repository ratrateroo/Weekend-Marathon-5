const multer = require('multer');
const { v1: uuidv1 } = require('uuid/v1');
const MIME_TYPE_MAP = {
	'image/png': 'png',
	'image/jpeg': 'jpeg',
	'image/jpg': 'jpg',
};

const fileUpload = multer({
	limits: 500000,
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'uploads/images');
		},
		filename: (req, file, cb) => {
			const ext = MIME_TYPE_MAP[file.mimetype];
			cb(null, uuidv1() + '.' + ext);
		},
	}),
});

module.exports = fileUpload;
