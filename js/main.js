const main = $(".project-grid")

$.ajax({
    url : "https://api.github.com/users/Nothing00980/repos",
    method : "GET"
}).then(results => {
    console.log(results)
    for (let i=0;i<results.length;i++){
        if(results[i].stargazers_count != 0 && results[i].visibility == 'public'){
            if(results[i].homepage == ""){

                let article =  "<div class=project-card>" +
               " <div class=project-details> " +
                 " <h3>" + results[i].name + "</h3>" +
                 " <p>" + results[i].description + 
                  "</p>" +
                  " <a href=" + results[i].html_url + " target=_blank>View Project</a>" +
                "</div></div>" 
                main.append(article);

            }
            else{
                let article =  "<div class=project-card>" +
                " <div class=project-details> " +
                  " <h3>" + results[i].name + "</h3>" +
                  " <p>" + results[i].description + 
                   "</p>" +
                   " <a href=" + results[i].html_url + " target=_blank>View Project</a>" +
                       " <a href=" + results[i].homepage + " target=_blank>Demo</a>" +
                 "</div></div>" 

                 main.append(article);
            }
          
        }
        // let article = 
    }
   


})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementById("floatfan");
  var section1 = document.getElementById("about");
  var section1Top = section1.getBoundingClientRect().top;
  console.log(currentScrollPos);
  
  // Scroll only when near the header section
//   if (section1Top <= header.offsetHeight  ) {
    if (prevScrollpos > currentScrollPos && currentScrollPos <= 1) {
      section1.style.top = "100vh";
      console.log(true);
    } else {
      section1.style.top = "10vh";
    }
    prevScrollpos = currentScrollPos;
//   }
}