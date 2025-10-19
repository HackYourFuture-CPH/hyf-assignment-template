const moreInfo = document.getElementsByClassName("more-info")[0];
// create a link element
const moreInfolink = document.createElement("a");
moreInfolink.href = "https://www.mywanderlust.pl/category/czech-republic/";
moreInfolink.target = "_blank";
moreInfolink.textContent = "Read more about Czech Republic";
moreInfo.appendChild(moreInfolink);

