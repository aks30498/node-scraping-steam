const request = require('request');
const cheerio = require('cheerio');

request('https://store.steampowered.com/specials#p=0&tab=TopSellers', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const topSellingTable = $('#TopSellersRows');
        const items = topSellingTable.children('.tab_item');
        // console.log(topSellingTable.html());
        for(let i=0; i<items.length; i++){
            console.log(`Game: ${$(items[i]).find('.tab_item_name').text()} | `)
            console.log(`Discount Percentage: ${$(items[i]).find('.discount_pct').text()} | `)
            console.log(`Original Price: ${$(items[i]).find('.discount_original_price').text()} | `)
            console.log(`Final Price: ${$(items[i]).find('.discount_final_price').text()}`)
            console.log('---------------------------------')
        }
    }
})