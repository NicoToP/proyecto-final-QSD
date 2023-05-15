import {config} from 'dotenv';
config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/final-project';
export const PORT = process.env.PORT || 4000;
