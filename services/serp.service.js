const serp = require('serp')

class serpService{
    async search(currentPage){
        try{
            let options = {//serp options
                host : "google.fr",
                qs : {
                    q : currentPage,
                    filter : 0,
                    pws : 0
                },
                num : 51, // 12 - 9 - 10 - 10 - 10 : 5pages
                delay : 10000, //timeout 10s between pages
                retry : 5
            }
            const links = await serp.search(options)
            const pageNumber = await this.findCurrentPage(links, currentPage)

            if(pageNumber){//format of  returning
                return {isSearched: true, position: "nofollow/follow/sponsored/UGC"}// page position  = pageNumber
            }else
            {
                return {isSearched: false, position: "nofollow/follow/sponsored/UGC"}
            }
        }catch (e) {
            // console.log({serpError: e})
            return {isSearched: false, position: "nofollow/follow/sponsored/UGC"}
        }

    }

    async findCurrentPage(links, currentPage){// func to find current page in list
        for (let linksKey in links) {
            if(links[linksKey].url == currentPage){
                return Number(linksKey) + Number(1) // TODO: ?
            }
        }
        return 0
    }

}

module.exports = new serpService()