const args = message.content;
const type = args.slice(1, 2).join(" ");
const search = args.slice(2).join(" ");
const er = message.channel.send;
if(search) return er("Utilisation : n.base64 <decode ou code> <texte>")
if(type.includes("code")) {
module.exports = { Base64: require("./commands.base64/encode/encoding.js" }
}else if(type.includes("decode")) {
module.exports = { Base64: require("./commands.base64/decoding/decoding.js" }
}else{ 
er("Utilisation : n.base64 <decode ou code> <texte>")

}
