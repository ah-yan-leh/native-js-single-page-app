var getJSONnews = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status !== 'success') {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function getData(url,source,sort,dataSourceSort,apiKey,dataSourceId, dataPage){
    getJSONnews(url+source+sort+dataSourceSort+apiKey,
            function(err, data) {
                if (err !== null) {
                    alert('Something went wrong: ' + err);
                } else {
                    var apimsg = data.articles;
                    var source = data.source;
                    console.log("data.source ="+data.source);
                    for (var key in apimsg) { 
                        NewsApiByUserModel.setNewsArticle(
                            source, 
                            apimsg[key].author, 
                            apimsg[key].title, 
                            apimsg[key].description, 
                            apimsg[key].url, 
                            apimsg[key].urlToImage, 
                            apimsg[key].publishedAt
                        );
                    }
                    var listArticles = "";
                    listArticles = NewsApiByUserModel.getArticleObject(); 
                    for(var i in listArticles){
                        if( listArticles[i].source === dataSourceId ){
                            articleDataHTML += articlesTemplate.replace(/{{articleAuthor}}/g, listArticles[i].author)
                            .replace(/{{articleSource}}/g, listArticles[i].source)
                            .replace(/{{articleTitle}}/g, listArticles[i].title)
                            .replace(/{{articleDescription}}/g, listArticles[i].description)
                            .replace(/{{articleUrl}}/g, listArticles[i].url)
                            .replace(/{{articleImage}}/g, listArticles[i].urlToImage)
                            .replace(/{{articleSlugTitle}}/g, listArticles[i].slugtitle);

                            document.getElementById("news-list").innerHTML = articleDataHTML;
                            
                        }
                    }
                    showHideElements(dataPage);
                }
            });
}