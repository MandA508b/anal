const ApiError = require('../errors/api.error')
const parserService = require("../services/parser.service");
const serpService = require("../services/serp.service");
const User = require('../models/user.model')

class searchController{
    async search(req, res, next){
        try{
            const {searchedPage, pageList, userId} = req.body
            if(!searchedPage || !pageList || !userId){
                return next(ApiError.badRequest('Не введено userId, searchedPage або pageList'))
            }

            const user = await User.findById(userId)
            if(!userId){
                return next(ApiError.badRequest('Користувача з таким userId не знайдено'))
            }
            const maxRequestForUserToday = user.pageLimit - user.numberOfRequestsToday

            if(pageList.length > maxRequestForUserToday){
                return next(ApiError.badRequest('Денний ліміт буде переповнений, зменшіть кількість запитів!'))
            }
            //********   searchService   ********\\

            let CronJob = require('cron').CronJob,
                iteration = 0,
                arr = []
            let job = new CronJob(// cron options + func
                '0 */1 * * * *',//TODO: minutes
                async function() {//func to search every page from page list

                    const flag = await parserService.search(searchedPage, pageList[iteration])//search link on page//TODO: міняється?
                    let arrValue = {//data format
                        url: pageList[iteration],
                        onSite: flag,
                        isSearched: false,
                        position: -1
                    }
                    if(flag){//search number of page in google
                        const pagePosition = await serpService  .search(pageList[iteration])// func to search
                        if(pagePosition.isSearched){//data format
                            arrValue.isSearched = pagePosition.isSearched
                            arrValue.position = pagePosition.position
                        }
                    }
                    arr.push(arrValue)
                    iteration++
                    if(iteration >= pageList.length){// check end of pages
                        user.numberOfRequestsToday = Number(pageList.length) + Number(user.numberOfRequestsToday)
                        user.numberOfRequestsAllTime = Number(pageList.length) + Number(user.numberOfRequestsAllTime)
                        user.save()
                        job.stop()
                        arr.push({date: new Date})// add date of searching
                        res.json(arr)
                    }
                },
                null,
                true
            )

            //********   End of searchService   ********\\

            return

        }   catch (e) {
            next(e)
        }
    }
}

module.exports = new searchController()