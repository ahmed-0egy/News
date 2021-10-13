const path = require('path');
const hbs = require('hbs');
const exp = require('express');
const { networkInterfaces } = require('os');
const app = exp();
const port = 3000;

const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partials = path.join(__dirname, '../templates/partials')

app.use(exp.static(publicDirectory));

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partials);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index HBS',
        value: 1
    });
});

app.get('/egnews', (req, res) => {
    const request = require('request');
    let url = 'https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=3ee3b09d716e4f4cba4885ff308decbf'
    request({ url, json: true }, (error, response) => {
        if (error)
            returnValue = 0; // console.log('Wrong domain name or no internet connection');
        else if (response.body.totalResults == undefined)
            returnValue = 1; // console.log('The url you are looking for is not existed on this site');
        else if (response.body.totalResults == 0)
            returnValue = 2; // console.log('No such data is existed on this website');
        else
            returnValue = response.body.articles; // console.log(response.body.articles);
        res.render('news', {
            returnValue,
        });

    });
});

app.get('/about', (req, res) => {
    res.render('about', {

    });
});

app.get('/allnews', (req, res) => {
    res.render('addnews', {

    });
});

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404error Not found',
        content: 'This url you are looking for is not found on this server'
    });
});

app.listen(port, () => {
    console.log('Server is running');
});

/* 702e9ad75b684b2ba13de7a0b5cf6ba3 */