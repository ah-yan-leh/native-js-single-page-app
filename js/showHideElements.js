function showHideElements(targetElement) {
    var childs = document.getElementById("mainContainer").children;
    for (var i =0; i < childs.length; i++){
        childs[i].style.display = "none";
    }
    console.log("targetElement = "+ targetElement);
    if(targetElement === "source_list" || targetElement === "news-list"){
        document.getElementById(targetElement).style.display = "inline-flex";
    }
    else{
        document.getElementById(targetElement).style.display = "block";
        
    }
}