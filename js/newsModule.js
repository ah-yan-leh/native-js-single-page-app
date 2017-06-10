/*
 ** Custom built module for NewsInThe.Net
 ** Created by Ayanle Abdi as demo for CodeFellows.Org
 ** author: ayanle.abdi@gmail.com
 ** Version 1.0
 */

var NewsApiByUserModel = (function() {

    var userObject = [];
    var articleObject = [];
    var sourceObject = [];
    var sourceCatObject = [];

    function UserProfile(firstname, lastname, password, email, terms, loginState) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.terms = terms;
        this.loginState = loginState;
    }

    function NewsSource(id, name, description, url, category, language, country, sortBysAvailable) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country = country;
        this.sortBysAvailable = sortBysAvailable;
    }

    function NewsSourceByCategory(id, name, description, url, category, language, country, sortBysAvailable) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country = country;
        this.sortBysAvailable = sortBysAvailable;
    }

    function NewsArticle(source, author, title, description, url, urlToImage, publishedAt) {
        this.source = source;
        this.author = author;
        this.title = title;
        this.slugtitle = Slug(title);
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
    }

    function Slug(originalString){
        var search = /\W/g;
        var replace = "-";
        var newString = originalString.split(search).join(replace);
        return newString;
    }

    // setters

    var newsModObject = {};

    // set news source object
    newsModObject.setNewsSource = function(id, name, description, url, category, language, country, sortBysAvailable) {
        for (var i in sourceObject) {
            if (sourceObject[i].name === name) {
                sourceObject.id = id;
                sourceObject.name = name;
                sourceObject.description = description;
                sourceObject.url = url;
                sourceObject.category = category;
                sourceObject.language = language;
                sourceObject.country = country;
                sourceObject.sortBysAvailable = sortBysAvailable;
                return;
            }
        }
        var sourceItem = new NewsSource(id, name, description, url, category, language, country, sortBysAvailable);
        sourceObject.push(sourceItem);
        localStorage.setItem('sourceObject',JSON.stringify(sourceObject));
    };

    // set news articles object
    newsModObject.setNewsArticle = function(source, author, title, description, url, urlToImage, publishedAt) {
        for (var i in articleObject) {
            if (articleObject[i].title === title) {
                articleObject.source = source;
                articleObject.author = author;
                articleObject.title = title;
                articleObject.description = description;
                articleObject.url = url;
                articleObject.urlToImage = urlToImage;
                articleObject.publishedAt = publishedAt;
                return;
            }
        }
        
        var articleItem = new NewsArticle(source,author, title, description, url, urlToImage, publishedAt);
        articleObject.push(articleItem);
        localStorage.setItem('articleObject',JSON.stringify(articleObject));
    };

    // set users object
    newsModObject.setUser = function(firstname, lastname, password, email, terms, loginState) {
        for (var i in userObject) {
            if (userObject[i].email === email) {
                userObject[i].firstname = firstname;
                userObject[i].lastname = lastname;
                userObject[i].password = password;
                userObject[i].email = email;
                userObject[i].terms = terms;
                userObject[i].loginState = loginState;
                return;
            }
        }
        var userItem = new UserProfile(firstname, lastname, password, email, terms, loginState);
        userObject.push(userItem);
        localStorage.setItem('userObject',JSON.stringify(userObject));
    };

    // get users object
    newsModObject.getUserObject = function() {
        var userObjectCopy = [];
        for (var i in userObject) {
            var userItem = userObject[i];
            var userItemCopy = {};
            for (var p in userItem) {
                userItemCopy[p] = userItem[p];
            }
            userObjectCopy.push(userItemCopy);
        }
        return userObjectCopy;
    };

    // get articles object
    newsModObject.getArticleObject = function() {
        var articleObjectCopy = [];
        for (var i in articleObject) {
            var articleItem = articleObject[i];
            var articleItemCopy = {};
            for (var p in articleItem) {
                articleItemCopy[p] = articleItem[p];
            }
            articleObjectCopy.push(articleItemCopy);
        }
        return articleObjectCopy;
    };

    // get news source object
    newsModObject.getSourceObject = function() {
        var sourceObjectCopy = [];
        for (var i in sourceObject) {
            var sourceItem = sourceObject[i];
            var sourceItemCopy = {};
            for (var p in sourceItem) {
                sourceItemCopy[p] = sourceItem[p];
            }
            sourceObjectCopy.push(sourceItemCopy);
        }
        return sourceObjectCopy;
    };

    return newsModObject;
})();
