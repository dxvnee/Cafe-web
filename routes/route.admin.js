import express from 'express';
import { createAdmin, getAllAdmin, login, deleteAdmin, editAdmin, getAdminById } from '../controller/controllers.admin.js';

const Route = express.Router();

Route.get('/login', login);
Route.get('/admin', getAllAdmin);
Route.get('/admin/:id', getAdminById);
Route.post('/admin', createAdmin);
Route.put('/admin/:id', editAdmin)
Route.delete('/admin/:id', deleteAdmin);

export default Route;