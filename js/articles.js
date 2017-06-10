function getArticleDetails(e){
    removeOldElementsByID("news-list");
    removeOldElementsByID("news-details");

    var dataArticleId = e.getAttribute("data-article-id");
    getArticleDetailsState(dataArticleId);

}

function articleBySourceCalls(dataSourceSort, dataPage, dataSourceId){
        var url = "https://newsapi.org/v1/articles?source=";
        var source = dataSourceId;
        var sort = "&sortBy=";
        var apiKey = "&apiKey=57cb74dc4c994bebb02d616d1cabd514";

        var localData = localStorage.getItem("articleObject");
        var parsedLocalData = JSON.parse(localData);
        var j = 0;
        var k = 0;

        if (typeof localData !== 'undefined' && localData !== null){
            for (var i = 0; i < parsedLocalData.length; i++) {
                
                articleDataHTML = "";
                if( parsedLocalData[i].source === dataSourceId ){
                    getSourceArticleResultsState(dataSourceId);
                    break;
                }
                else {
                    j += 1;
                    if(j <= 1 ){
                        getData(url,source,sort,dataSourceSort,apiKey, dataSourceId,dataPage);
                        break;
                    }

                }
            }
            showHideElements(dataPage);
        }
        else {
            k += 1;
            if(k <= 1){
                getData(url,source,sort,dataSourceSort,apiKey, dataSourceId,dataPage);
            }

        }
    }
