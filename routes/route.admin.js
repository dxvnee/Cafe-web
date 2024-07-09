import express from 'express';
import { createAdmin, getAllAdmin, login, deleteAdmin } from '../controller/controllers.admin.js';

const Route = express.Router();

Route.get('/login', login);
Route.get('/admin', getAllAdmin);
Route.post('/admin', createAdmin);
Route.delete('/admin/:id', deleteAdmin);

export default Route;