document.addEventListener('DOMContentLoaded', function() {
    var url = "https://newsapi.org/v1/sources?language=";
    var lang = LangVal;
    var country = "&country="+CountryVal;
    var apiKey = "&apiKey=57cb74dc4c994bebb02d616d1cabd514";
    
    var localData = localStorage.getItem("sourceObject");
    var parsedLocalData = JSON.parse(localData);
    sourcesDataHTML = "";
        if(typeof parsedLocalData !== 'undefined' && parsedLocalData !== null && !location.hash){
            for (var i = 0; i < parsedLocalData.length; i++) {
                sourcesDataHTML += sourcesTemplate.replace(/{{sourceId}}/g, parsedLocalData[i].id)
                    .replace(/{{sourceName}}/g, parsedLocalData[i].name)
                    .replace(/{{sourceDescription}}/g, parsedLocalData[i].description)
                    .replace(/{{sourceUrl}}/g, parsedLocalData[i].url)
                    .replace(/{{sourceCategory}}/g, parsedLocalData[i].category)
                    .replace(/{{sourceSort}}/g, parsedLocalData[i].sortBysAvailable[0]);

                document.getElementById("source_list").innerHTML = sourcesDataHTML; 
            }
        showHideElements("source_list");
        }
        else{
            getJSONnews(url+lang+country+apiKey,
                    function(err, data) {
                        if (err !== null) {
                            console.log('Something went wrong: ' + err);
                        } 
                        else {
                            if(data.sources.length === null || data.sources.length === undefined || data.sources.length < 1){
                                document.getElementById("error-element").style.display = "block"
                            }
                            else{
                                document.getElementById("error-element").style.display = "none";
                            }
                            for (var i = 0; i < data.sources.length; i++) {
                                
                                console.log("data.sources response"+data.sources[i].name);
                                NewsApiByUserModel.setNewsSource(
                                            data.sources[i].id,
                                            data.sources[i].name,
                                            data.sources[i].description,
                                            data.sources[i].url,
                                            data.sources[i].category,
                                            data.sources[i].language,
                                            data.sources[i].country,
                                            data.sources[i].sortBysAvailable
                                );
                            }
                            var listSources = "";
                            listSources = NewsApiByUserModel.getSourceObject();  
                            for (var key in listSources){
                                sourcesDataHTML += sourcesTemplate.replace(/{{sourceId}}/g, listSources[key].id)
                                    .replace(/{{sourceName}}/g, listSources[key].name)
                                    .replace(/{{sourceDescription}}/g, listSources[key].description)
                                    .replace(/{{sourceUrl}}/g, listSources[key].url)
                                    .replace(/{{sourceCategory}}/g, listSources[key].category)
                                    .replace(/{{sourceSort}}/g, listSources[key].sortBysAvailable[0]);

                                document.getElementById("source_list").innerHTML = sourcesDataHTML; 
                            }
                            //showHideElements("source_list");
                        }
                        //showHideElements("source_list");
                    });
        }

}, false);

function getSourceCategoryResults(e){
    var dataSourceSort = e.getAttribute("data-source-sort");
    var  dataPage = e.getAttribute("data-page");
    var dataSourceId = e.getAttribute("data-source-id");

    articleBySourceCalls(dataSourceSort, dataPage, dataSourceId);
}


function articleBySourceCalls(dataSourceSort, dataPage, dataSourceId){
        var url = "https://newsapi.org/v1/articles?source=";
        var source = dataSourceId;
        var sort = "&sortBy=";
        var apiKey = "&apiKey=57cb74dc4c994bebb02d616d1cabd514";

        var localData = localStorage.getItem("articleObject");
        var parsedLocalData = JSON.parse(localData);

        if (typeof localData !== 'undefined' && localData !== null){
            
            for (var i = 0; i < parsedLocalData.length; i++) {
                articleDataHTML = "";
                if( parsedLocalData[i].source === dataSourceId ){
                    articleDataHTML += articlesTemplate.replace(/{{articleAuthor}}/g, parsedLocalData[i].author)
                    .replace(/{{articleSource}}/g, parsedLocalData[i].source)
                    .replace(/{{articleTitle}}/g, parsedLocalData[i].title)
                    .replace(/{{articleDescription}}/g, parsedLocalData[i].description)
                    .replace(/{{articleUrl}}/g, parsedLocalData[i].url)
                    .replace(/{{articleImage}}/g, parsedLocalData[i].urlToImage)
                    .replace(/{{articleSlugTitle}}/g, parsedLocalData[i].slugtitle);

                    document.getElementById("news-list").innerHTML = articleDataHTML;
                    
                }
            }
            showHideElements(dataPage);
        }
        else {
            getData(url,source,sort,dataSourceSort,apiKey, dataSourceId,dataPage);

        }
    }

function getSourceDetails(e) {
    removeOldElementsByID("news-list");
    removeOldElementsByID("news-details");

    var dataPage = e.getAttribute("data-page");
    var dataSourceId = e.getAttribute("data-source-id");

    var localData = localStorage.getItem("sourceObject");
    var parsedLocalData = JSON.parse(localData);

    sourceDetailsDataHTML = "";
    for (var i in parsedLocalData) {
        var catCheck = new RegExp(parsedLocalData[i].id);
        if (catCheck.test(dataSourceId)) {
            console.log("parsedLocalData[i].description "+parsedLocalData[i].description);
            sourceDetailsDataHTML += sourceDetailsTemplate.replace(/{{sourceId}}/g, parsedLocalData[i].id)
                .replace(/{{sourceName}}/g, parsedLocalData[i].name)
                .replace(/{{sourceDescription}}/g, parsedLocalData[i].description)
                .replace(/{{sourceUrl}}/g, parsedLocalData[i].url)
                .replace(/{{sourceCategory}}/g, parsedLocalData[i].category)
                .replace(/{{sourceSort}}/g, parsedLocalData[i].sortBysAvailable[0]);
                
            document.getElementById(dataPage).innerHTML = sourceDetailsDataHTML;
            showHideElements(dataPage);
        } else {
            //console.log("Invalid selection");
        }
    } 
}