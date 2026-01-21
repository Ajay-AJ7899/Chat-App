//also called app.js
// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';


dotenv.config();
const app = express();
const __dirname = path.resolve();

const port = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

//make deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html')));
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//router is in rotuer page here it is linked using import and then app.use 