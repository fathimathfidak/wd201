const express = require('express');
const app = express();
const minimist = require('minimist');
const path = require('path');

const args = minimist(process.argv.slice(2));
const port = args.port || 3000; 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
