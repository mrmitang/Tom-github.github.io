function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
      return "";
  }
  function findAgreedCat(obj,site,country,category) {
    for (var website in obj) {
      if (website == site) {
        for (var country_code in obj[website]){
          if(country_code == country){
            return obj[site][country].indexOf(category);
          }
        }
      }
    }
    return -1;
  }
  var agreedCategories = getCookie("cookie-agreed-categories");
  var catCheck = -1;
  if(agreedCategories != ""){
    catCheck = findAgreedCat(JSON.parse(agreedCategories),visit_site,geo_country_code,"pc");
  }
  if (agreedCategories != "" && catCheck != -1) {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];var j=d.createElement(s);var dl=l!='dataLayer'?'&l='+l:'';j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_auth=HXIyUjbBQ2YEwuP0sRZY7g&gtm_preview=env-2&gtm_cookies_win=x';j.async=true;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M84H4M7');}