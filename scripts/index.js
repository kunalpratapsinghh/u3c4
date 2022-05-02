// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from"../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

document.querySelector("#in").addEventListener('click',myfunction);
document.querySelector("#us").addEventListener('click',myfunction);
document.querySelector("#ch").addEventListener('click',myfunction);
document.querySelector("#uk").addEventListener('click',myfunction);
document.querySelector("#nz").addEventListener('click',myfunction);


async function myfunction(id)
{
    let value=this.value;
    let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
    let data=await res.json();
    append(data.articles)

}




async function myfun()
{
    let value="in";
    let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
    let data=await res.json();
    append(data.articles)

}

myfun()


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



let value=document.getElementById("search_input").addEventListener("keyup",function(event)
{
    if(event.key==="Enter")
    {
        search();
        window.location.href="search.html"
    }
});


async function search()
{
    
    let query=document.getElementById("search_input").value;
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

    let data=await res.json();

    localStorage.setItem("search",JSON.stringify(data))

    append(data.articles);
   
}



function newspage(ele)
{
    localStorage.setItem("news",JSON.stringify(ele))
}