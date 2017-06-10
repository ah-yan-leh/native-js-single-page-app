function getCategory(e) {
    setActiveClass();
    removeOldElementsByID("news-list");
    removeOldElementsByID("news-details");
    e.setAttribute("class","active");
    var dataSidebarName = e.getAttribute("data-sidebar-name");
    var dataPage = e.getAttribute("data-page");
    var localData = localStorage.getItem("sourceObject");
    var parsedLocalData = JSON.parse(localData);

    sourcesByCatDataHTML = "";
    for (var i in parsedLocalData) {
        var catCheck = new RegExp(parsedLocalData[i].category);
        if (catCheck.test(dataSidebarName)) {
            sourcesByCatDataHTML += sourcesByCatTemplate.replace(/{{sourceId}}/g, parsedLocalData[i].id)
                .replace(/{{sourceName}}/g, parsedLocalData[i].name)
                .replace(/{{sourceDescription}}/g, parsedLocalData[i].description)
                .replace(/{{sourceUrl}}/g, parsedLocalData[i].url)
                .replace(/{{sourceCategory}}/g, parsedLocalData[i].category)
                .replace(/{{sourceSort}}/g, parsedLocalData[i].sortBysAvailable[0]);
                
            removeOldElementsByQuery();
            document.getElementById(dataPage).innerHTML = sourcesByCatDataHTML;
            showHideElements(dataPage);
        } else {
            //console.log("Invalid selection");
        }
    } 
}
function setActiveClass() {
    var childs = document.querySelectorAll('a[data-sidebar-name]');
    for (var i =0; i < childs.length; i++){
            childs[i].removeAttribute("class");
    }
}
function removeOldElementsByQuery() {
    var childs = document.querySelectorAll("#source-list-item");
    for (var i =0; i < childs.length; i++){
        childs[i].outerHTML="";
    }
}