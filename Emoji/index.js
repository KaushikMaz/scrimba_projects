const myEmojis= ["👨‍💻", "⛷", "🍲"];
const emojiContainer=document.getElementById("emojicontainer")
const button= document.getElementById("push-btn")
const emojiInput=document.getElementById("emojiInput")

for (let i=0;i<myEmojis.length;i++){
    
    const emoji= document.createElement("span")
    emoji.textContent=myEmojis[i];
    emojiContainer.append(emoji)
}

button.addEventListener("click", function(){
    console.log(emojiInput.value)

})