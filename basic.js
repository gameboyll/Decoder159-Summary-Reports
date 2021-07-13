let axios = require('axios'),
cheerio = require('cheerio');

axios.get('http://www.google.com/').then(function (html) {

    let $ = cheerio.load(html.data);

    // loop all links
    $('a').each(function (i, span) {

        let href = $(this).attr('href'),
        text = $(this).text();

        // log the inner text, and the href of the link
        console.log(text + ' : ' + href);

    })

}).catch (function (e) {

    console.log(e);

});
