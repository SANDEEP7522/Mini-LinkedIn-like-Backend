import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'mini-linkedIn-like',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage });

export default upload;

