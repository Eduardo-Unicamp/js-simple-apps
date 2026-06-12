myTitle = document.getElementById("my_title");


colors = ["purple","green","blue","yellow"];
sizes = ["2rem","1rem","3rem"];
let i = -1;
setInterval(
    ()=>{
        i++;

        myTitle.style.color=colors[i%colors.length];
        myTitle.style.fontSize=sizes[i%sizes.length];
    },
    1000
)




let myDivs = document.getElementsByClassName("text");
for(let div of myDivs){
    div.style.fontSize="3rem";
    div.textContent = div.outerHTML;
}

const divElements = document.getElementsByTagName("div");

