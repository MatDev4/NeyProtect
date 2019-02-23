const axios = require("axios");
//require : async and axios
const args = message.content;
const search = args.slice(2).join(" "); 

await axios.get(`https://discordapp.com/api/v6/users/${search}`, {
                    headers: {
                        "User-Agent": `${client.user.username}`,
                        "Content-Type": "application/json"
                    }
                    
                })
                    .then(async(res) => {
                        if(!res.data) {
                            return message.channel.send("Une erreur s'est produite")
                        }
                          let embed = new Discord.RichEmbed()
                          .setColor(0x36393f)
                          .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL}`)
                          .addField("ID", `${res.data.id}`, false)
                          .addField("Username", `${res.data.username}#${res.data.discriminator}`, false)
                          .setImage(`https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}`)
                          .addField("Utilisateur dans la liste noire", bl[res.data.id])
                          await message.channel.send(embed);
                    })
                        .catch((err) => {
                            if(err) {
                                return message.channel.send("Une erreur s'est produite")
                            }
});
