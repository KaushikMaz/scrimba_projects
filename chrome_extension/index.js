let myLeads=[];
const inputText=document.getElementById("input-el")

const inputBtn= document.getElementById("input-btn");
const ulEl=document.getElementById("ul");

const leadsFromStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromStorage){
    myLeads=leadsFromStorage
    render()
}

inputBtn.addEventListener("click",()=>{
    myLeads.push(inputText.value)
    inputText.value=" ";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))/* saving the input array into local storage*/
    render();
    
    // console.log(localStorage.getItem("myLeads"))
})

const render=()=>{
    let listItems=""
    for (let i=0; i<myLeads.length ; i++){
        // listItems+="<li><a href='"+myLeads[i]+"' target='_blank'>" + myLeads[i] + "</a></li>"
        /*Template strings*/
        listItems+=`<li>
                        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}
                        </a>
                    </li>`
        /*const li=document.createElement("li")
        li.textContent=myLeads[i]
        ulEl.append(li)*/
               
    }
    ulEl.innerHTML=listItems;

}
