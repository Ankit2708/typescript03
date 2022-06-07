// import express from 'express';
// import bodyParser from 'body-parser';
const express=require('express')
const bodyParser=require('body-parser')

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(3000);
