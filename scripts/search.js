// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from"../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

let data1=JSON.parse(localStorage.getItem("search"));
console.log(data1)

append(data1.articles)

function append(data)
{
    document.getElementById("results").innerHTML=null;

    data.forEach(function(ele)
    {
        let div=document.createElement("div");
        div.setAttribute("class","news")
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.urlToImage;
        div.append(image);


        let div2=document.createElement("div");
        let title=document.createElement("h3");
        title.innerText=ele.title;
        let description=document.createElement("p");
        description.innerText=ele.description;
        div2.append(title,description)
        div.append(div1,div2);
        document.getElementById("results").append(div);


        div2.addEventListener("click",function()
        {
            window.location.href="news.html"
            newspage(ele)
        })

    })

}


function newspage(ele)
{
    localStorage.setItem("news",JSON.stringify(ele))
}