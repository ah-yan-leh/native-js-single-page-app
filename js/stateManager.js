function hashNavigation(){

    var oldhashString = "";
    var arrayVar = [];

    if(!location.hash){
        getSourceListState();
    }
    else{
        oldhashString = location.hash;
        var newhashString = oldhashString.split('/');

        for(var i = 0; i < newhashString.length; i++){
            arrayVar[i] = newhashString[i];
        }

        if(arrayVar.length !== null && arrayVar.length !== undefined){
            if(arrayVar.length > 3){
                getArticleDetailsState(arrayVar[4]);
            }
            else if(arrayVar.length === 3){
                getSourceArticleResultsState(arrayVar[2]);
            }
            else{
                switch(arrayVar[1]) {
                    case 'signup':
                        registerState();
                        break;
                    case 'login':
                        loginState();
                        break;
                    case 'about':
                        getStaticContent(arrayVar[1]);
                        break;
                    case 'terms':
                        getStaticContent(arrayVar[1]);
                        break;
                    case 'newsApi':
                        getStaticContent(arrayVar[1]);
                        break;
                    case 'privacy':
                        getStaticContent(arrayVar[1]);
                        break;
                    default:
                        getSourceByCategoryState(arrayVar[1]);
                }
            }
        }
    }
}
function getSourceArticleResultsState(dataSourceId){
    var localData = localStorage.getItem("articleObject");
    var parsedLocalData = JSON.parse(localData);
    for(var i in parsedLocalData){
        console.log("parsedLocalData "+parsedLocalData[i].author);
        if( parsedLocalData[i].source === dataSourceId ){
            console.log("parsedLocalData[i].source === dataSourceId "+(parsedLocalData[i].source === dataSourceId));
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
    showHideElements("news-list");
}

function getSourceByCategoryState(category) {
    var localData = localStorage.getItem("sourceObject");
    var parsedLocalData = JSON.parse(localData);

    sourcesByCatDataHTML = "";
    sourceDetailsDataHTML = "";
    for (var i in parsedLocalData) {
        // matches based on source category
        var catCheck = new RegExp(parsedLocalData[i].category);
        if (catCheck.test(category)) {
            console.log(parsedLocalData[i].id  +"  "+ parsedLocalData[i].category +" "+ parsedLocalData[i].sortBysAvailable[0]);
            sourcesByCatDataHTML += sourcesByCatTemplate.replace(/{{sourceId}}/g, parsedLocalData[i].id)
                .replace(/{{sourceName}}/g, parsedLocalData[i].name)
                .replace(/{{sourceDescription}}/g, parsedLocalData[i].description)
                .replace(/{{sourceUrl}}/g, parsedLocalData[i].url)
                .replace(/{{sourceCategory}}/g, parsedLocalData[i].category)
                .replace(/{{sourceSort}}/g, parsedLocalData[i].sortBysAvailable[0]);
                
            removeOldElementsByQuery();
            document.getElementById("news-list").innerHTML = sourcesByCatDataHTML;
            showHideElements("news-list");
        } 
        // matches based on source name
        var sourceCheck = new RegExp(parsedLocalData[i].id);
        if (sourceCheck.test(category)) {
            console.log(parsedLocalData[i].id  +"  "+ parsedLocalData[i].category +" "+ parsedLocalData[i].sortBysAvailable[0]);
            sourceDetailsDataHTML += sourceDetailsTemplate.replace(/{{sourceId}}/g, parsedLocalData[i].id)
                .replace(/{{sourceName}}/g, parsedLocalData[i].name)
                .replace(/{{sourceDescription}}/g, parsedLocalData[i].description)
                .replace(/{{sourceUrl}}/g, parsedLocalData[i].url)
                .replace(/{{sourceCategory}}/g, parsedLocalData[i].category)
                .replace(/{{sourceSort}}/g, parsedLocalData[i].sortBysAvailable[0]);

            document.getElementById("news-list").innerHTML = sourceDetailsDataHTML;
            showHideElements("news-list");
        }
    } 
}
function getArticleDetailsState(title){ 
    var localArticleData = localStorage.getItem("articleObject");
    var parsedArticleData = JSON.parse(localArticleData);
    for (var i in parsedArticleData) {
        if (title === parsedArticleData[i].slugtitle) {
                    articleDetailsDataHTML = "";
                    articleDetailsDataHTML += articleDetailsTemplate.replace(/{{articleDetailsSource}}/g, parsedArticleData[i].source)
                        .replace(/{{articleDetailsAuthor}}/g, parsedArticleData[i].author)
                        .replace(/{{articleDetailsTile}}/g, parsedArticleData[i].title)
                        .replace(/{{articleDetailsDescription}}/g, parsedArticleData[i].description)
                        .replace(/{{articleDetailsUrl}}/g, parsedArticleData[i].url)
                        .replace(/{{articleDetailsUrlToImage}}/g, parsedArticleData[i].urlToImage);

                        document.getElementById("news-details").innerHTML = articleDetailsDataHTML;
                    
                showHideElements("news-details");

        } else {
            //console.log("Invalid");
        }
    } 
}

function getSourceListState(){ 
    var localArticleData = localStorage.getItem("sourceObject");
    var parsedArticleData = JSON.parse(localArticleData);
    sourcesDataHTML = "";
    for (var key in parsedArticleData){
        sourcesDataHTML += sourcesTemplate.replace(/{{sourceId}}/g, parsedArticleData[key].id)
            .replace(/{{sourceName}}/g, parsedArticleData[key].name)
            .replace(/{{sourceDescription}}/g, parsedArticleData[key].description)
            .replace(/{{sourceUrl}}/g, parsedArticleData[key].url)
            .replace(/{{sourceCategory}}/g, parsedArticleData[key].category)
            .replace(/{{sourceSort}}/g, parsedArticleData[key].sortBysAvailable[0]);

        document.getElementById("source_list").innerHTML = sourcesDataHTML; 
    }
    showHideElements("source_list"); 
}

function loginState() {
    showHideElements("login-section");
}
function registerState() {
    showHideElements("register-section");
}