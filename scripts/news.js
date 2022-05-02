// Ude Import export (MANDATORY)
import navbar from"../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()


let data1=JSON.parse(localStorage.getItem("news"));
console.log(data1);

append(data1)




function append(data)
{
    console.log(data)
    document.body.innerHTML=null;

        let div=document.createElement("div");
        div.setAttribute("id","detailed_news")
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.src=data.urlToImage;
        div.append(image);


        let div2=document.createElement("div");
        let title=document.createElement("h3");
        title.innerText=data.title;
        let description=document.createElement("p");
        description.innerText=data.description;
        div2.append(title,description)
        div.append(div1,div2);
        document.body.append(div);

}