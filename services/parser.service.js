const axios = require('axios')
const cheerio = require('cheerio')
const ApiError = require('../errors/api.error')

class parserService{

    async search(searchedPage, currentPage){// parser
        try{
            return await axios.get(currentPage)
                .then(res => res.data)
                .then(res =>{
                    let html = res,
                        $ = cheerio.load(html)
                        if($.html().indexOf(searchedPage) != -1){//searching link on page
                            return true
                        }
                        else {
                            return false
                        }
                })
                .catch(e => {
                    console.log("err")
                    return false
                })
        }catch (e){
            throw ApiError.internal(e)
        }
    }

}

module.exports = new parserService()