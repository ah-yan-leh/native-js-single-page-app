function staticContent(name){

    var partials = {
        privacy: "<h3>Privacy</h3><p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> ",
        about: "<h3>About</h3><p>Lorem tut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> ",
        terms: "<h3>Terms</h3><p>Liste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> ",
        newsApi: "<h3>NewsAPI.org</h3><p>News API provides us the simplest data feed from 70 plus news sources around the world. We then use this data to make it easy and simple for our visitors to find top headlines by news source, category or topic.</p> <br> <p><a href='https://newsapi.org/'>Visit NewsAPI.org</a></p>",
    };
    return partials[name];
}
function getContent(e){
    var dataPage = e.getAttribute("data-page");
    
    switch(dataPage) {
        case 'about':
            document.getElementById("about-section").innerHTML  = staticContent(dataPage);
            showHideElements("about-section");
            break;
        case 'privacy':
            document.getElementById("privacy-section").innerHTML = staticContent(dataPage);
            showHideElements("privacy-section");
            break;
        case 'terms':
            document.getElementById("terms-section").innerHTML  = staticContent(dataPage);
            showHideElements("terms-section");
            break;
        case 'newsApi':
            document.getElementById("newsApi-section").innerHTML  = staticContent(dataPage);
            showHideElements("newsApi-section");
            break;
    }
}

function getStaticContent(dataPage){
    switch(dataPage) {
        case 'about':
            document.getElementById("about-section").innerHTML  = staticContent(dataPage);
            showHideElements("about-section");
            break;
        case 'privacy':
            document.getElementById("privacy-section").innerHTML = staticContent(dataPage);
            showHideElements("privacy-section");
            break;
        case 'terms':
            document.getElementById("terms-section").innerHTML  = staticContent(dataPage);
            showHideElements("terms-section");
            break;
        case 'newsApi':
            document.getElementById("newsApi-section").innerHTML  = staticContent(dataPage);
            showHideElements("newsApi-section");
            break;
    }
}