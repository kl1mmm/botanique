const express = require('express');
const path = require('path')
const morgan = require('morgan')

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('public'));
app.set('view engine', 'ejs');

const PORT = 8080;
const createPath = (page) => path.resolve(__dirname, 'public/ejs-views', `${page}.ejs`);

const equipmentData = [
    {
        id: 1,
        name: 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220',
        img: '../images/equip/pH.svg',
        status: 'Свободен'
    },
    {
        id: 2,
        name: ' Спектрофотометр Varian, Inc Cary 50 Bio',
        img: '../images/equip/spectr.svg',
        status: 'Свободен'
    },
    {
        id: 3,
        name: 'Титратор',
        img: '../images/equip/titrator.svg',
        status: 'Свободен'
    },
    {
        id: 4,
        name: 'Коагулометр Tcoag, KC 4 Delta',
        img: '../images/equip/coag.svg',
        status: 'Свободен'
    }]

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    const equip = equipmentData;
    res.render(createPath('main'), {equip})
})

app.get('/analytics/:id', (req, res) => {
    const equip = equipmentData[req.params.id];
    res.render(createPath('analytics'), {equip})
})

app.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'))
})