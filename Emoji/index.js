const myEmojis= ["👨‍💻", "⛷", "🍲"];
const emojiContainer=document.getElementById("emojicontainer")

for (let i=0;i<myEmojis.length;i++){
    
    const emoji= document.createElement("span")
    emoji.textContent=myEmojis[i];
    emojiContainer.append(emoji)
}