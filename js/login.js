function userState(){
    var userInfo = localStorage.getItem("userObject");
    var userParsed = JSON.parse(userInfo);
    if (typeof userInfo !== 'undefined' && userInfo !== null && userParsed[0].loginState == true){
        document.getElementById("registerHref").innerHTML = '';
        document.getElementById("loginNav").innerHTML = logoutNavTemplate;
    }
    else {
        document.getElementById("registerHref").innerHTML = 'Sign Up';
        document.getElementById("loginNav").innerHTML = loginNavTemplate;
    }
}
function login(e) {
    var dataPage = e.getAttribute("data-page");
    showHideElements(dataPage);
    var userInfo = localStorage.getItem("userObject");
    var userParsed = JSON.parse(userInfo);
    if(userParsed !== null){
        userParsed[0].loginState = true;
        NewsApiByUserModel.setUser(userParsed[0].firstname, userParsed[0].lastname, userParsed[0].password, userParsed[0].email, userParsed[0].terms, userParsed[0].loginState);
    }
}
function logout(e) {
    var dataPage = e.getAttribute("data-page");
    document.getElementById("registerHref").innerHTML = 'Sign Up';
    document.getElementById("loginNav").innerHTML = loginNavTemplate;

    var userInfo = localStorage.getItem("userObject");
    var userParsed = JSON.parse(userInfo);
    userParsed[0].loginState = false;
    console.log("userInfo[0].loginState ="+userParsed[0].loginState);

    NewsApiByUserModel.setUser(userParsed[0].firstname, userParsed[0].lastname, userParsed[0].password, userParsed[0].email, userParsed[0].terms, userParsed[0].loginState);
}
function getRegister(e) {
    var dataPage = e.getAttribute("data-page");
    showHideElements(dataPage);
}


function loginForm() {
    var firstname = document.forms["loginform"]["firstnameLogin"].value;
    var lastname = document.forms["loginform"]["lastnameLogin"].value;
    var email = document.forms["loginform"]["emailLogin"].value;
    var password = document.forms["loginform"]["passwordLogin"].value;

    var userInfo = localStorage.getItem("userObject");
    var userParsed = JSON.parse(userInfo);
    
    if (userParsed[0].firstname !== firstname){ 
        document.getElementById("firstnameError").innerHTML = "incorrect";
        document.forms["loginform"]["firstnameLogin"].addEventListener('focus', function() {
        document.getElementById("firstnameError").innerHTML = "";
        });
        return false;
    }
    if (userParsed[0].lastname !== lastname){ 
        document.getElementById("lastnameError").innerHTML = "incorrect";
        document.forms["loginform"]["lastnameLogin"].addEventListener('focus', function() {
        document.getElementById("lastnameError").innerHTML = "";
        });
        return false;
    }
    if (userParsed[0].email !== email){ 
        document.getElementById("emailError").innerHTML = "incorrect";
        document.forms["loginform"]["emailLogin"].addEventListener('focus', function() {
        document.getElementById("emailError").innerHTML = "";
        });
        return false;
    }  
    if (userParsed[0].password !== password){ 
        document.getElementById("passwordError").innerHTML = "incorrect";
        document.forms["loginform"]["passwordLogin"].addEventListener('focus', function() {
        document.getElementById("passwordError").innerHTML = "";
        });
        return false;
    }
    history.pushState(null, null, '#/you-are-logged-in');
    showHideElements('source-list');
}
function registrationForm() {
    document.getElementById("register-section").style.display = "none";
    var firstname = document.forms["registerform"]["firstnameRegister"].value;
    var lastname = document.forms["registerform"]["lastnameRegister"].value;
    var email = document.forms["registerform"]["emailRegister"].value;
    var password = document.forms["registerform"]["passwordRegister"].value;
    var terms = document.forms["registerform"]["termsRegister"].value;
    var loginState = true;

    NewsApiByUserModel.setUser(firstname, lastname, password, email, terms, loginState);
    history.pushState(null, null, '#/login');
    
} 