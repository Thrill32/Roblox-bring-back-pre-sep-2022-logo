//https://1000logos.net/wp-content/uploads/2021/04/Roblox-logo.png

function init(){
   
   var iconlogoclass = document.getElementsByClassName('icon-logo')[0];
    if (iconlogoclass != null) {
      
        
        const style = window.getComputedStyle(iconlogoclass);
        console.log(style["background-image"]);
        
        iconlogoclass.style.backgroundImage = "url(https://download851.mediafire.com/wwwqnwf6fyng/3vpq1noghlhq409/old+roblox+logo+1.png)"
        
    } else {
        console.log("thrill fatal error :sob:");
    }
    
}
window.onload = init();

