import express from 'express';
import { login } from '../controller/controllers.admin.js';

const Route = express.Router();

Route.get('/login', login);


export default Route;