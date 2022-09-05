//Thrill32#0001

function init(){
    var iconlogoclass = document.getElementsByClassName('icon-logo')[0];
    if (iconlogoclass != null) {
        const style = window.getComputedStyle(iconlogoclass);
        var Sstyle = JSON.stringify(style["background-image"]);
        console.log(Sstyle); 
        if (Sstyle.search("Light")) {
            iconlogoclass.style.backgroundImage = "url(https://download1487.mediafire.com/7gsan07ip3tg/ga897nsw7lz8cuj/light+logo.png)"
        } else if (Sstyle.search("Dark")) {
            iconlogoclass.style.backgroundImage = "url(https://download1491.mediafire.com/04a7mtzg9zdg/ntvkajywkfp6d4u/dark+logo.png)"
        } else {
            console.log("thrill fatal error 2 :sob:")
            iconlogoclass.style.backgroundImage = "url(https://download851.mediafire.com/wwwqnwf6fyng/3vpq1noghlhq409/old+roblox+logo+1.png)" //border logo 
        };   
    } else {
       console.log("thrill fatal error :sob:");
    } 
}
window.onload = init();

