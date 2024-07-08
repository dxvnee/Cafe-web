import express from 'express';
import { createAdmin, getAllAdmin, login } from '../controller/controllers.admin.js';

const Route = express.Router();

Route.get('/login', login);
Route.get('/admin', getAllAdmin);
Route.post('/admin', createAdmin);

export default Route;