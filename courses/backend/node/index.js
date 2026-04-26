import express from 'express';
import fs from 'fs';

const app = express();
const textFilePath = './Volumes/Code/hyf/test.txt';

app.get('/', (req, res) => {
    console.log('Hello');
    const fileContent = fs.readFileSync(textFilePath, 'utf-8');
    console.log(fileContent);
    res.send('jgkhkvjk');
});
app.post('/write', (req, res) => {
    fs.appendFileSync(textFilePath, "another one");
    console.log(req.query);
    res.send('Query received');
});


app.listen(3000, () => {
    console.log('ready');
});
