const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

url = 'https://generalassemb.ly/education/software-engineering-immersive/los-angeles'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const instanceDatesLA = []

        $('.ga-courses-course-instance--dates', html).each(function() {
           const dates = $(this).text()
            instanceDatesLA.push({
                dates,
    
            })
        })
        console.log(instanceDatesLA)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`))