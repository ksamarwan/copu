const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true })
client.login(TOKEN);
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const express = require("express");
const request = require("request");
const app = express ();
app.get ('/', (req, res) => {
  res.sendStatus (200);
});
app.listen (process.env.PORT);
function t_c() {
  request.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`, (error, response, body) => {
    let MeCodes = body;
    return MeCodes;
  });
}

//// كود فتح واغلاق الروم
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("تم قفل الشات no_entry ");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("تم فتح الشات white_check_mark");
      });
  }
});
 
client.on("message", message => {
if(message.author.bot) return;
if(message.content.startsWith(prefix + "edit")) {
let args = message.content.split(" ")
let channel = args.slice(1).join(" ")
if(!channel) return message.channel.send(`Please Type ${prefix}edit [Channel Then ID Message Then New Message`) 
let message = args.slice(2).join(" ")
if(!message) return message.channel.send(`Please Type ${prefix}edit [Channel ID Then ID Message Then New Message`) 
let edit = args.slice(3).join(" ") 
if(!edit) return message.channel.send(`Please Type ${prefix}edit [Channel ID Then ID Message Then New Message`) 

let ch = client.channels.get(`${channel}`) 
ch.fetchMessage(`${message}`).then(async msg => {
msg.edit(`${edit}`)
})
}
}) 
  


const fs = require('fs');
const reaction = JSON.parse(fs.readFileSync("./reaction.json", "utf8"));
 
client.on("message", async message => {
  if (reaction[message.guild.id] == undefined) {
    reaction[message.guild.id] = {
      onoff: "off"
    };
    fs.writeFile("./reaction.json", JSON.stringify(reaction), function(err) {
      if (err) throw err;
    });
  }
  let args = message.content.split(" ");
  let newcmd = args[2];
  let ag1 = args[1];
  if (message.content.startsWith(prefix + "reac")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!ag1) return message.channel.send("**You Need To Type `on` Or `off`**");
 
    if (ag1 === "on") {
      reaction[message.guild.id].onoff = "on";
      fs.writeFile("./reaction.json", JSON.stringify(reaction), function(err) {
        if (err) throw err;
      });
      message.channel.send("**Done Sir reaction Set To `On`**");
    } else if (ag1 === "off") {
      reaction[message.guild.id].onoff = "off";
      fs.writeFile("./reaction.json", JSON.stringify(reaction), function(err) {
        if (err) throw err;
      });
      message.channel.send("**Done Sir reaction Set To `Off`**");
    }
  }
});
 
client.on("message", async message => {
  let reactionn = reaction[message.guild.id].onoff;
  if (reactionn === "on") {
    message.react("👌")
 
  }
  if (reactionn === "off") return;
   
 
}); 



setInterval(t_c, 60000);
client.on("message", blackser => {
  if(blackser.content.startsWith(prefix + "buy"))
  
  
  
  return blackser.channel.send("```  وربي قريبا```")
  
})

var ChannelName = "718324766335041566";//اسم الروم
var imageURL = "http://i8.ae/sw4p9";//رابط الصورة


var wlc_msg_width = 170, //اعرض كلمة ولكم
    wlc_msg_height= 80;//ارتفاع كلمة ولكم

var user_msg_width = 200,//عرض اسم الشخص
    user_msg_height = 120;//ارتفاع اسم الشخص

var user_avatar_width = 180,//عرض افتار الشخص
    user_avatar_height = 150;//ارتفاع افتار الشخص
var _0x1201=['0x51','0x25','0x28','0x36','0x26','name','0x30','welcome-steve.png','displayAvatarURL','push','0xd','fillStyle','0x12','0x3e','0x27','0x4a','0x1e','0x4d','0x40','0x2e','0x5','0x21','0x20','0x33','0x44','beginPath','createCanvas','0x42','0x24','0x31','0x4e','0x10','loadImage','0x2a','#000000','0x6','0x9','fillText','shift','height','font','0x35','send','0x38','0x48','drawImage','0x4b','0x3a','0xa','find','0x17','Attachment','0x2d','0x2c','0x16','width','0x52','0xc','0x3d','arc','0x2','0xe','0x4f','0x3f','0x53','0x45','toLowerCase','0x43','0x3b','0x13','0x1a','0x19','guildMemberAdd','0x1b','0x22','Welcome','0xf','0x18','0x50','0x7','0x15','0xb','0x32','0x2f','0x4c','getContext','0x1f','0x39','closePath','0x29','0x37','0x23','0x1c','0x8','0x1','0x14','0x34','0x4','0x3c','0x2b','0x3','0x47','0x1d'];(function(_0x5246af,_0x5166c7){var _0x456de7=function(_0x9fd73a){while(--_0x9fd73a){_0x5246af['push'](_0x5246af['shift']());}};_0x456de7(++_0x5166c7);}(_0x1201,0xee));var _0x35c0=function(_0x5246af,_0x5166c7){_0x5246af=_0x5246af-0x0;var _0x456de7=_0x1201[_0x5246af];return _0x456de7;};var _0x1399=['0x17',_0x35c0('0x44'),_0x35c0('0x14'),'0x35',_0x35c0('0x30'),_0x35c0('0x33'),_0x35c0('0x26'),_0x35c0('0x2a'),_0x35c0('0x59'),'0x27',_0x35c0('0x39'),'0x2',_0x35c0('0x31'),'shift','0x23',_0x35c0('0x2'),_0x35c0('0x1a'),_0x35c0('0x49'),'0x38','0xa',_0x35c0('0x1f'),_0x35c0('0x57'),'channels',_0x35c0('0x5d'),'toBuffer','0x0',_0x35c0('0x48'),_0x35c0('0x3d'),_0x35c0('0x38'),_0x35c0('0xd'),_0x35c0('0x29'),_0x35c0('0x41'),_0x35c0('0x4d'),_0x35c0('0x7'),_0x35c0('0x5'),'0x1c',_0x35c0('0x4e'),_0x35c0('0x5a'),_0x35c0('0x24'),_0x35c0('0xa'),'0x11',_0x35c0('0x22'),_0x35c0('0x50'),_0x35c0('0x2d'),'username',_0x35c0('0x4'),_0x35c0('0x3f'),_0x35c0('0x53'),_0x35c0('0x3a'),_0x35c0('0x4b'),_0x35c0('0x19'),'0x21',_0x35c0('0x17'),_0x35c0('0x35'),'0x2b',_0x35c0('0x4f'),_0x35c0('0x40'),_0x35c0('0x25'),_0x35c0('0x4c'),_0x35c0('0x1b'),_0x35c0('0x27'),_0x35c0('0x15'),_0x35c0('0x16'),_0x35c0('0x5b'),_0x35c0('0x1d'),_0x35c0('0x3e'),_0x35c0('0x1'),_0x35c0('0x0'),_0x35c0('0x4a'),_0x35c0('0x8'),_0x35c0('0x63'),_0x35c0('0x2c'),_0x35c0('0x3'),_0x35c0('0x66'),'clip','0x1d',_0x35c0('0x64'),'0x7',_0x35c0('0x51'),_0x35c0('0x28'),_0x35c0('0xf'),_0x35c0('0x54'),_0x35c0('0x36'),_0x35c0('0x32')];(function(_0x41c1cd,_0x14c4e5){var _0x4e0706=function(_0x4888aa){while(--_0x4888aa){_0x41c1cd[_0x35c0('0x50')](_0x41c1cd[_0x35c0('0x6')]());}};_0x4e0706(++_0x14c4e5);}(_0x1399,0xc5));var _0x3760=function(_0x233076,_0x563cc6){_0x233076=_0x233076-0x0;var _0x427e3b=_0x1399[_0x233076];return _0x427e3b;};var _0x4720=[_0x35c0('0x53'),_0x3760(_0x35c0('0x49')),_0x3760(_0x35c0('0x3e')),_0x3760('0xa'),_0x3760('0x2c'),_0x35c0('0x5c'),_0x3760(_0x35c0('0x20')),_0x35c0('0x60'),_0x3760(_0x35c0('0x2a')),'guild','0x20',_0x3760(_0x35c0('0x48')),'0xf',_0x3760(_0x35c0('0x33')),_0x35c0('0x10'),_0x3760(_0x35c0('0x3c')),'20px\x20sans-serif',_0x3760(_0x35c0('0x5b')),'0x11',_0x35c0('0x19'),'0x3',_0x3760('0x3e'),'0x2',_0x35c0('0x50'),_0x35c0('0x3f'),_0x3760(_0x35c0('0x19')),_0x3760('0x31'),_0x35c0('0x63'),_0x3760(_0x35c0('0x4d')),_0x3760(_0x35c0('0x44')),_0x3760(_0x35c0('0x24')),_0x35c0('0x6'),_0x3760(_0x35c0('0x59')),_0x3760(_0x35c0('0x3d')),_0x3760('0xe'),_0x3760(_0x35c0('0x27')),_0x3760('0x41'),_0x3760(_0x35c0('0x3a')),_0x3760(_0x35c0('0x2e')),_0x3760(_0x35c0('0x41')),_0x3760('0x3c'),_0x35c0('0x26'),_0x35c0('0x2b'),_0x3760(_0x35c0('0x2f')),_0x3760(_0x35c0('0x46')),_0x35c0('0x48'),_0x3760(_0x35c0('0x3f')),_0x3760(_0x35c0('0x34')),_0x3760(_0x35c0('0x43')),_0x3760(_0x35c0('0x9')),_0x3760(_0x35c0('0x3')),_0x3760(_0x35c0('0x58')),_0x3760(_0x35c0('0x1e')),_0x3760(_0x35c0('0x63')),_0x3760(_0x35c0('0x66')),_0x3760('0x43'),_0x3760(_0x35c0('0x18')),_0x3760(_0x35c0('0x5d')),'user',_0x35c0('0x41'),_0x35c0('0x11'),_0x3760(_0x35c0('0x5c')),_0x3760('0x1e'),_0x3760(_0x35c0('0x3b')),_0x3760('0x0')];(function(_0x2223f9,_0x219923){var _0x31fede=function(_0x2df28e){while(--_0x2df28e){_0x2223f9[_0x3760(_0x35c0('0x51'))](_0x2223f9[_0x3760(_0x35c0('0x5f'))]());}};_0x31fede(++_0x219923);}(_0x4720,0x105));var _0x5068=function(_0x43f4c6,_0x444185){_0x43f4c6=_0x43f4c6-0x0;var _0x3be6a8=_0x4720[_0x43f4c6];return _0x3be6a8;};var _0x27a4=[_0x5068('0x5'),_0x5068(_0x3760('0x50')),_0x5068(_0x3760(_0x35c0('0x62'))),_0x3760('0x18'),_0x3760(_0x35c0('0x2c')),_0x5068(_0x3760(_0x35c0('0x5c'))),_0x5068('0x35'),_0x5068(_0x35c0('0x5e')),_0x5068(_0x3760(_0x35c0('0x43'))),_0x5068(_0x3760(_0x35c0('0xe'))),_0x35c0('0x52'),_0x5068(_0x3760(_0x35c0('0x1d'))),_0x5068(_0x3760(_0x35c0('0x15'))),_0x3760(_0x35c0('0x3a')),_0x5068(_0x3760(_0x35c0('0x47'))),'0x16',_0x5068(_0x3760(_0x35c0('0x3c'))),_0x3760(_0x35c0('0x14')),_0x3760(_0x35c0('0x4b')),_0x3760(_0x35c0('0x12')),_0x3760(_0x35c0('0x31')),_0x5068(_0x3760(_0x35c0('0x36'))),_0x5068(_0x3760(_0x35c0('0x3f'))),_0x5068(_0x3760('0x37')),_0x5068(_0x3760(_0x35c0('0x3e'))),_0x5068(_0x35c0('0x2f')),_0x5068(_0x3760('0x2a')),_0x3760('0x46'),_0x5068(_0x3760(_0x35c0('0x34'))),_0x35c0('0x13'),_0x5068(_0x3760('0x25')),_0x5068(_0x3760('0x13')),_0x5068(_0x3760(_0x35c0('0x1f'))),_0x5068(_0x3760(_0x35c0('0x55'))),_0x3760(_0x35c0('0x43')),_0x5068(_0x35c0('0x54')),_0x3760(_0x35c0('0x26')),_0x3760(_0x35c0('0x32')),_0x5068(_0x3760('0x23')),_0x5068(_0x3760(_0x35c0('0x29'))),_0x5068(_0x3760(_0x35c0('0xb'))),_0x5068(_0x3760(_0x35c0('0x23'))),_0x5068(_0x3760(_0x35c0('0x64'))),_0x5068(_0x3760(_0x35c0('0x45'))),_0x35c0('0x61'),_0x5068(_0x3760(_0x35c0('0x18'))),_0x35c0('0x1c'),_0x5068(_0x3760(_0x35c0('0x4'))),_0x5068(_0x3760(_0x35c0('0x5e'))),_0x5068(_0x3760('0x12'))];(function(_0x3327e1,_0x13bc7c){var _0x2f4e6d=function(_0x3c6792){while(--_0x3c6792){_0x3327e1[_0x5068(_0x3760(_0x35c0('0x5c')))](_0x3327e1[_0x5068(_0x3760(_0x35c0('0x34')))]());}};_0x2f4e6d(++_0x13bc7c);}(_0x27a4,0xfc));var _0x4938=function(_0x2ca943,_0x227a65){_0x2ca943=_0x2ca943-0x0;var _0x875d05=_0x27a4[_0x2ca943];return _0x875d05;};var _0x3b55=[_0x4938(_0x3760(_0x35c0('0x15'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x3')))),_0x4938(_0x5068(_0x3760('0x30'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x63')))),_0x4938(_0x3760('0x45')),_0x4938(_0x5068(_0x3760('0x1'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x64')))),_0x4938(_0x5068(_0x3760('0x15'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x56')))),_0x4938(_0x5068(_0x3760(_0x35c0('0x25')))),_0x4938(_0x5068(_0x3760(_0x35c0('0x31')))),_0x4938(_0x5068(_0x3760('0x1b'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x47')))),_0x4938(_0x5068(_0x3760('0x2f'))),_0x5068(_0x3760(_0x35c0('0x27'))),_0x4938(_0x35c0('0x27')),_0x4938(_0x5068(_0x3760(_0x35c0('0x54')))),_0x4938(_0x5068(_0x3760('0x11'))),_0x5068(_0x35c0('0x37')),_0x4938(_0x5068(_0x35c0('0x30'))),_0x5068(_0x3760(_0x35c0('0x4a'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x23')))),_0x5068(_0x35c0('0x39')),_0x4938(_0x5068(_0x3760(_0x35c0('0x16'))))];(function(_0x271bb6,_0xf40e5){var _0xf5773e=function(_0x5d5319){while(--_0x5d5319){_0x271bb6[_0x4938(_0x5068(_0x35c0('0x25')))](_0x271bb6[_0x4938(_0x5068(_0x3760(_0x35c0('0xc'))))]());}};_0xf5773e(++_0xf40e5);}(_0x3b55,0x1db));var _0x4338=function(_0x52ee7f,_0x2e020a){_0x52ee7f=_0x52ee7f-0x0;var _0xe4778b=_0x3b55[_0x52ee7f];return _0xe4778b;};client['on'](_0x4338(_0x4938(_0x3760(_0x35c0('0x1c')))),async _0x115f72=>{var _0x3754aa=_0x115f72[_0x4338(_0x5068(_0x3760(_0x35c0('0x5a'))))][_0x4338(_0x4938(_0x5068(_0x3760('0x20'))))][_0x4938(_0x3760(_0x35c0('0x37')))](_0x40f23f=>_0x40f23f[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x1a')))))]===ChannelName[_0x4938(_0x5068(_0x3760(_0x35c0('0xf'))))]());if(!_0x3754aa)return![];var _0x5c76f9=Canvas[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x3b')))))](0x190,0xc8);var _0x90bfad=_0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0('0x14'))))]('2d');const _0x30e23f=await Canvas[_0x4338(_0x4938(_0x5068(_0x3760('0x29'))))](imageURL);const _0x41edf0=await Canvas[_0x4338(_0x4938(_0x5068(_0x3760('0x29'))))](_0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x55')))))][_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x36')))))]);_0x90bfad[_0x4338(_0x4938(_0x3760('0x48')))](_0x30e23f,0x0,0x0,_0x5c76f9[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x9')))))],_0x5c76f9[_0x4938(_0x5068(_0x3760(_0x35c0('0x3a'))))]);_0x90bfad[_0x4938(_0x5068(_0x3760('0x15')))]=_0x4338(_0x4938(_0x5068(_0x35c0('0x5d'))));_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x1c')))))]=_0x4338(_0x4938(_0x35c0('0x30')));_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x44')))))](''+_0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x55')))))][_0x4338(_0x4938(_0x3760(_0x35c0('0x30'))))],user_msg_width,user_msg_height);_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x59')))))]=_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x65')))));_0x90bfad[_0x4938(_0x5068(_0x3760('0x13')))]=_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x5a')))));_0x90bfad[_0x4338(_0x4938(_0x3760('0x35')))](_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x40'))))),wlc_msg_width,wlc_msg_height);_0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0('0x42'))))]();_0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0('0x21'))))](0x64,0x64,0x46,0x0,Math['PI']*0x2,!![]);_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760('0x10'))))]();_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760('0x49'))))]();_0x90bfad[_0x4338(_0x4938(_0x3760(_0x35c0('0xc'))))](_0x41edf0,0x19,0x19,user_avatar_width,user_avatar_height);_0x3754aa[_0x4338(_0x4938(_0x3760(_0x35c0('0x53'))))](new Discord[(_0x4338(_0x4938(_0x3760(_0x35c0('0x5a')))))](_0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0('0x42'))))](),_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x3d')))))));});

let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));
client.on("message", msg=>{
let id = "348586830305689600"; // ايديك
let role = "VIP"; // اسم رتبة الفيب
let Price = 10; // السعر
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}قريبا`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**اختر الطريقة المناسبة لك**")
.addField("ل شراء الفي اي بي لنفسك","🔱",true )
.addField("ل شراء الفي اي بي ك هدية","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`تم اعطائك رتبة \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}used`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {   
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});

function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}

function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });

}


client.on("message",message =>{
if (message.content.startsWith(prefix + "help")) {
  if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("بس الادمن");
  const embed = new Discord.RichEmbed()
  .setTitle("العنوان")
  .setDescription(`الرسالة`)

message.author.send(embed)
   
  message.react(":white_check_mark:");

}
}
          )
          client.on("message", msg => {
  if (msg.content.startsWith("تستصصن")) { //' 𝐍𝐚𝐰𝐚𝐟 ,#٠٠٠١
      const embed = new Discord.RichEmbed()
    .setTitle("Server Link") //' 𝐍𝐚𝐰𝐚𝐟 ,#٠٠٠١ 
    .setDescription("رابط السيرفر")
    .addField("الرابط اللانهائي","هنا حاط رابط السيرفر")
    .setTimestamp()
    .setFooter(`by:${msg.author.tag}`)
    .setAuthor(client.user.username)
    .setThumbnail(msg.author.avatarURL)

      msg.author.send(embed);
    msg.react("white_check_mark")//' 𝐍𝐚𝐰𝐚𝐟 ,#٠٠٠١
  }
});

client.on("message" , light => {
if(light.content === "خخ"){
     
let r = new Discord.RichEmbed()
.setDescription(`الرد`)
.setColor(`#000`)

light .channel.send(r);
}
});

client.on('message', message => {
  if(message.content ===prefix +'close'){
                if (!message.member.hasPermission("ADMINISTRATOR")){
let embed = new Discord.RichEmbed()        
.setTitle('No you can\'t because you Do not have ADMINISTRATOR to create a support role')
return message.channel.send(embed).then(m=>m.delete(5000))
}
                        if (!message.channel.name.startsWith(`ticket-`)){
          let embeds = new Discord.RichEmbed()
          .setTitle('Error')
          .setDescription('You cant use `close` command in not tikcet channel.')
          .setColor('RED')
          .setAuthor(client.user.username, client.user.avatarURL)
          return message.channel.send(embeds).then(m=>m.delete(10000))
        }
                  message.channel.delete();


}})


client.on('raw', packet => {
if(!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
if (packet.t == 'MESSAGE_REACTION_ADD') {
if(packet.d.message_id == '722746111307284542') { 
let emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
if(emoji == '🆗'){ // الايموجي الي بيضغط عليه عشان يسوي تكت
let u = client.users.get(packet.d.user_id);
let channel = client.channels.get(packet.d.channel_id);
if(channel.type == "dm"||!channel.guild) return; // ._.
channel.fetchMessage(packet.d.message_id).then(message => {
let re = message.reactions.get(emoji);
re.remove(u); // عشان بعد ما يحط الايموجي ينشال
let CH = message.guild.channels.find(r => r.id == '722358525770334228'); // ايدي الكاتوجري الي بتنحط تحتها التكتات
  
if(!CH) return;
channel.guild.createChannel(`ticket-${u.username}`,
{
  type: 'text',parent:CH,reason:'Reaction Tickets System',
  permissionOverwrites: [{
    id:  channel.guild.id,
    deny: ['READ_MESSAGES']
  },{
    id: u.id,
    allow: ['SEND_MESSAGES','READ_MESSAGES','ATTACH_FILES','READ_MESSAGE_HISTORY']
  },{
    id: '680797172094337145', // ايدي رتبه السبورت
    
    
    
    allow: ['SEND_MESSAGES','READ_MESSAGES','ATTACH_FILES','READ_MESSAGE_HISTORY']
 
  
  }]
})
}) }
 }
}
}
          )

    client.on("message", message => {
   if(message.content.startsWith(prefix + 'o')) {/// </>~M̲e Ȼodes ᶜ
     
     if(message.author.bot) 
       if(!message.channel.name.startsWith("ticket-")) return
      return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`)
 let close = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
 .addField(`type \`${prefix}close\` again to confirm`, `** **`)
 .setColor("#36393e");
 message.channel.sendEmbed(close) .then(m => {/// </>~M̲e Ȼodes ᶜ
 const filter = msg => msg.content.startsWith(prefix + 'close');/// </>~M̲e Ȼodes ᶜ
 if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return/// </>~M̲e Ȼodes ᶜ
 message.channel.awaitMessages(response => response.content === prefix + 'close', {/// </>~M̲e Ȼodes ᶜ
 max: 1,/// </>~M̲e Ȼodes ᶜ
 time: 20000,/// </>~M̲e Ȼodes ᶜ
 errors: ['time']/// </>~M̲e Ȼodes ᶜ
 })
 .then((collect) => {
 message.channel.delete();/// </>~M̲e Ȼodes ᶜ
 let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';/// </>~M̲e Ȼodes ᶜ
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)/// </>~M̲e Ȼodes ᶜ
.setAuthor(`تذكرة مغلقة`)/// </>~M̲e Ȼodes ᶜ
.setDescription(`تذكره : #${message.channel.name}
بواسطه : <@${message.author.id}>
السبب : ${Reason}`)/// </>~M̲e Ȼodes ᶜ
.setTimestamp()/// </>~M̲e Ȼodes ᶜ
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)/// </>~M̲e Ȼodes ᶜ
let log = message.guild.channels.find("name", "log");//تقدر تعدل علي اسم اللوق من هنا 
if(log) log.send(closee)/// </>~M̲e Ȼodes ᶜ
 }) .catch(() => {/// </>~M̲e Ȼodes ᶜ
 m.delete()/// </>~M̲e Ȼodes ᶜ
 .then(message.channel.send('انتهت مهلة التذاكر ، ولم يتم إغلاق التذكرة')) .then((c) => {
 c.delete(4000);/// </>~M̲e Ȼodes ᶜ
 })
 })/// </>~M̲e Ȼodes ᶜ
 })    
   } if(message.content.startsWith(prefix + `closeall`)) {
     if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**خطاء** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('أنت لا تفعل ذلك\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setColor("GREEN")/// </>~M̲e Ȼodes ᶜ
.addField(`**تم إغلاق جميع التذاكر :white_check_mark:**`,`** **`)/// </>~M̲e Ȼodes ᶜ
message.channel.send(ttt)/// </>~M̲e Ȼodes ᶜ
let log = message.guild.channels.find("name", "log");/// </>~M̲e Ȼodes ᶜ
const rr = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setColor("GREEN")/// </>~M̲e Ȼodes ᶜ
.addField(`**تم إغلاق جميع قنوات التذاكر :white_check_mark:**`, `**بواسطه <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();/// </>~M̲e Ȼodes ᶜ
if(log) return log.send(rr)/// </>~M̲e Ȼodes ᶜ
//
} if(message.content.startsWith(prefix + `add`)) {/// </>~M̲e Ȼodes ᶜ
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**خطأ** :octagonal_sign:\أنا دون\'t have MANAGE_CHANNELS إذن للقيام بذلك`)
 if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**يرجى ذكر المستخدم :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`هذا العضو بالفعل في هذه التذكرة :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**تم :white_check_mark:\وأضاف بنجاح <@${member.user.id}> إلى التذكرة**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`تمت إضافة عضو إلى بطاقة`)/// </>~M̲e Ȼodes ᶜ
.setDescription(`تذكره : #${message.channel.name}
عضو : ${member}
بواسطه : <@${message.author.id}>`)/// </>~M̲e Ȼodes ᶜ
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");/// </>~M̲e Ȼodes ᶜ
if(log) return log.send(tgt);/// </>~M̲e Ȼodes ᶜ
} if(message.content.startsWith(prefix + `remove`)) {
 if(!message.channel.name.startsWith("ticket-")) {
     return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`);/// </>~M̲e Ȼodes ᶜ
 }
 let member = message.mentions.members.first();
 if(!member || member.id === client.user.id) {
     return message.channel.send(`**يرجى ذكر المستخدم :x:**`);/// </>~M̲e Ȼodes ᶜ
 }
 if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
     return message.channel.send(`:x: **${member.user.tag} ليس في هذه التذكرة لإزالتها**`);
 }
 message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
 message.channel.send(`**تم :white_check_mark:\إزالة بنجاح \`${member.user.tag}\` من التذكرة**`)
 let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`تمت إزالة عضو من تذكرة`)/// </>~M̲e Ȼodes ᶜ
.setDescription(`تذكرة : #${message.channel.name}/// </>~M̲e Ȼodes ᶜ
عضو : ${member}
بواسطة : <@${message.author.id}>`)/// </>~M̲e Ȼodes ᶜ
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(gtg);/// </>~M̲e Ȼodes ᶜ
 }
    })



  
  
  
// Your codes


const bot = client
bot.mutes = require("./mutes.json")
client.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`)
    bot.setInterval(() => {
        for (let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let member = bot.mutes[i].muted
            let mutereason = "Mute time is over"
            if (Date.now() > time) {
                bot.guilds.get(bot.mutes[i].guildid).members.get(`${member}`).removeRole(bot.mutes[i].roleid, mutereason)
                delete bot.mutes[i];
                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), (err) => {
                    if (err) throw err;
                    console.log(`${bot.users.get(member).username} has been unmuted`)
                })
            }
        }
    }, 5000)
})
bot.on("guildMemberAdd", async (member) => {
    for (let i in bot.mutes) {
        let data = bot.mutes[i];
        if (data === undefined) return;
        if (data.guildid !== member.guild.id) return;
        let mutereason = "ظ„ظٹظ‡ طھظ‡ط±ط¨ "
        let guildID = bot.mutes[i].guildid;
        if (member.id === bot.mutes[i].muted) {
            bot.guilds.get(`${guildID}`).members.get(`${member.id}`).addRole(`${bot.mutes[i].roleid}`, mutereason)
        } else {
            return;
        }
    }
})
client.on('message', async message => {
    let prefix = "#"//طھظ‚ط¯ط± طھط¹ط¯ظ„ ط§ظ„ط¨ظٹط±ظپظٹظƒط³
    let messageArray = message.content.split(' ')
    let args = messageArray.slice(1)
    let cmd = messageArray[0]
    if (cmd === `${prefix}mute`) {
        message.delete();
      
  if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(':no_entry: | You dont have **MUTE_MEMBERS** Permission!');
      if(!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.channel.send(':no_entry: | I dont have **MUTE_MEMBERS** Permission!');
        let themuteguy = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!themuteguy) return message.channel.send("**منشن او ايدي**").then(msg => msg.delete(8000))
        if (themuteguy.id == message.author.id) return message.chanel.send('ماعندك برمنشن:eyes:  ')
        let roleid = message.guild.roles.find(c => c.name === "Muted")
        if (!roleid) return message.reply(`Please use \`${prefix}setup\` first`)
        let mutereason = args.join(" ").slice(25)
        if (!mutereason) return message.reply(`\`Write: ${prefix}mute mention time reason\``)
        let time = args[1]
        if (ms(time) > 2.592e+9) return message.reply('ظ…ط§ طھظ‚ط¯ط± طھط¹ط·ظٹ ظ„ط´ط®طµ ظ…ظٹظˆطھ ط§ظƒط«ط± ظ…ظ† 30 ط§ظٹط§ظ…') 
        if (themuteguy.roles.has(roleid.id)) return message.channel.send("ظ‡ط°ط§ ط§ظ„ط´ط®طµ ظ…ط¹ظ‡ ظ…ظٹظˆطھ ط¨ط§ظ„ظپط¹ظ„")
        bot.mutes.count++ + 1
        if (isNaN(bot.mutes.count)) bot.mutes.count = 0 + 1;
        bot.mutes[bot.mutes.count] = {
            time: Date.now() + ms(time),
            muted: themuteguy.id,
            roleid: roleid.id,
            guildid: message.guild.id
        }
        await message.guild.member(themuteguy.id).addRole(roleid.id, mutereason)
        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
            if (err) throw err;
            message.reply(`Done <@!${themuteguy.id}> Has been muted!`).then(msg => msg.delete(20000))
            let muteembed = new Discord.RichEmbed()//ط§ظ„ظ„ظˆظ‚
                .setAuthor("log")
                .setColor("#FFFFFF")
                .setTimestamp()
                .addField("For:", `${themuteguy} \`(${themuteguy.id})\``)
                .addField("By:", `${message.author} \`(${message.author.id})\``)
                .addField("Reason:", mutereason)
                .addField("Time", `${ms(ms(time), { long: true })}`)
            let mutechannel = bot.channels.find(c => c.name === "log")//طھظ‚ط¯ط± طھط؛ظٹط± ط§ظ„ظ„ظˆظ‚ ظ…ظ† ظ‡ظ†ط§ 
            if (!mutechannel) return;
            mutechannel.send(muteembed)
        })
    }
    if (cmd == `${prefix}unmute`) {
         if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(':no_entry: | You dont have **MUTE_MEMBERS** Permission!');
      if(!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.channel.send(':no_entry: | I dont have **MUTE_MEMBERS** Permission!');
        let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!tounmute) return message.reply('**ظ…ظ†ط´ظ† ط´ط®طµ ظ„ط£ط¹ط·ط§ط¦ظ‡ ظ…ظٹظˆطھ**')
        let muterole = message.guild.roles.find(c => c.name == 'Muted')
        if (!muterole) {
            aaa = await message.guild.createRole({
                name: "Muted",
                permissions: []
            });
        }
        if(!tounmute.roles.has(muterole.id)) return message.reply('ظ‡ظˆ ظ„ظٹط³ ط¹ظ†ط¯ظ‡ ظ…ظٹظˆطھ !')
        for(var i in bot.mutes) {
            let data = bot.mutes[i];
            if(data.muted == tounmute.id && data.guild == message.guild.id){
            message.guild.members.get(`${tounmute.id}`).removeRole(message.guild.roles.find(c => c.name == 'Muted'), "Unmute command")
            delete bot.mutes[i];
            }
        }
        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
            message.channel.send('Done')
            if (err) throw err;
        })
    }
    if (cmd == `${prefix}setup`) { // ط§ظ„ظƒظˆظ…ط§ظ†ط¯ ظ‡ط°ط§ ظ„ظˆ ط§ظ†طھ ط³ظˆظٹطھ ظƒط§طھظ‚ظˆط±ظٹ ط¬ط¯ظٹط¯ ظˆط³ظˆظٹطھ ظپظٹظ‡ ط´ط§ظ†ظ„ط§طھ ط¬ط¯ظٹط¯ط© ظ…ظˆ ظ…ظˆط¬ظˆط¯ ظپظٹظ‡ط§ ظ…ظ†ط¹ ظ„ظ„ظ…ظٹظˆطھ ط§ظƒطھط¨ ط§ظ„ظƒظˆظ…ط§ظ†ط¯ ط°ط§
      
        let role = message.guild.roles.find(c => c.name === "Muted")
        if (!role) {
           const muterole = await message.guild.createRole({
                name: "Muted",
                permissions: []
            });
        }
        message.guild.channels.forEach(async (channel) => {
            await channel.overwritePermissions(role.id, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
        message.channel.send('Done')
    }
})



client.on("message", async message => {
let prefix = "#";
if (message.content.startsWith(prefix + "clear")) {
    try {
      let num;
      let args = message.content.split(/[ ]+/);
      let word = args.slice(1).join(" ");
      if (!isNaN(word)) {
        num = parseInt(word);

        if (num <= 100 && num > 1) {
          message.delete();
          message.channel.bulkDelete(num);
          message.channel
            .send(

              "```javascript\n messages have been deleted " + num + " " + "```") 
  .then(message => message.delete(3000));
        } else
          message.reply(
            "**You must enter a number between 2 and 100 for me to clear!**"
          );
      } else {
        message.reply(
          "**You must enter a number between 2 and 100 for me to clear!**"
        );
      }
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});

client.on("message", message => {
    if (message.content === (prefix + "msn")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#000")
         

     .setDescription(`**
الاوامر

رفض @user _لرفص شخص_

قبول @user _لقبول الشخص_

[https://link.com](click)**`)
     
message.author.sendEmbed(embed)
       if (!message.member.hasPermission("MANAGE_GUILD"))  message.channel.send("بس الاداره 😒")   
         
         
      if (!message.member.hasPermission("MANAGE_GUILD"))
    return  message.channel.send("تم ارسال بالخاص")
         
      
      
    if (!message.member.hasPermission("MANAGE_GUILD")) message.react("✅");
    return  
  message.channel.send("تم ارسال بالخاص");
  
          }
}
    
);
        

      
 
//عشان تخلي احد ما يقدر// يستخدم الامر ضيف هاد اول الكود


   



var stopReacord = true;
var reactionRoles = []; // رتب
var definedReactionRole = null;

client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  if (command == "autoc") {
    if (!message.channel.guild)
      return message.reply(`**this ~~command~~ __for servers only__**`);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("sorry you can't do this");
    if (!args[0] || args[1])
      return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
    var role = message.guild.roles.find(role => {
      return role.name == args[0];
    });
    if (!role)
      return message.channel.send(
        `no role with name ${definedReactionRole} found, make sure you entered correct name`
      );
    if (definedReactionRole != null || !stopReacord)
      return message.channel.send("another reaction role request is running");
    message.channel.send(
      `now go and add reaction in the message you want for role ${role.name}`
    );
    definedReactionRole = role;
    stopReacord = false;
  }
});
client.on("raw", raw => {
  if (!["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"].includes(raw.t))
    return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get(
      raw.d.emoji.id
        ? `${raw.d.emoji.name}:${raw.d.emoji.id}`
        : raw.d.emoji.name
    );
    if (raw.t === "MESSAGE_REACTION_ADD")
      return client.emit(
        "messageReactionAdd",
        reaction,
        client.users.get(raw.d.user_id)
      );
    if (raw.t === "MESSAGE_REACTION_REMOVE")
      return client.emit(
        "messageReactionRemove",
        reaction,
        client.users.get(raw.d.user_id)
      );
  });
});
client.on("messageReactionAdd", (reaction, user) => {
  if (user.id == client.user.id) return;
  if (!stopReacord) {
    var done = false;
    reactionRoles[reaction.message.id] = {
      role: definedReactionRole,
      message_id: reaction.message.id,
      emoji: reaction.emoji
    };
    stopReacord = true;
    definedReactionRole = null;
    reaction.message.react(reaction.emoji.name).catch(err => {
      done = true;
      reaction.message.channel.send(
        `sorry i can't use this emoji but the reaction role done! anyone react will get the role!`
      );
    });
    if (done) reaction.remove(user);
  } else {
    var request = reactionRoles[reaction.message.id];
    if (!request) return;
    if (request.emoji.name != reaction.emoji.name) return reaction.remove(user);
    reaction.message.guild.members.get(user.id).addRole(request.role);
  }
});
client.on("messageReactionRemove", (reaction, user) => {
  if (user.id == client.user.id) return;
  if (!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if (!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});

client.on("message", message => {
  var args = message.content.split(" ").slice(1);

  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  let roleremove = new Discord.RichEmbed()
  .setDescription(`

  أمثله على الأوامر : 
  ${prefix}roleremove @mention rolename : \`لسحب رتبة لعضو معين\`
  ${prefix}roleremove all rolename : \`لسحب رتبة للجميع\` 
  ${prefix}roleremove humans rolename : \`لسحب رتبة للاشخاص فقط\`
  ${prefix}roleremove bots rolename : \`لسحب رتبة لجميع البوت\``);
  let roleadd = new Discord.RichEmbed().setDescription(`

  أمثله على الأوامر : 
  ${prefix}role @mention rolename : \`لأعطاء رتبة لعضو معين\`
  ${prefix}role all rolename : \`لأعطاء رتبة للجميع\` 
  ${prefix}role humans rolename : \`لأعطاء رتبة اعضاء معينن \`
  ${prefix}role bots rolename : \`لأعطاء رتبة لجميع البوتات\``);
  if (!msg.startsWith(`${prefix}role`)) return;
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
    );
  if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      "**Sorry But I Dont Have Permission** `MANAGE_GUILD`"
    );
  let embed = new Discord.RichEmbed()
    .setColor("#f30707")
    .setDescription(":x: | You need to buy `Premium`");

  // if(!premium.includes(message.guild.id)) return message.channel.send(embed); else

  if (msg.toLowerCase().startsWith(`${prefix}roleremove`)) {
    let embed = new Discord.RichEmbed()
      .setColor("#f30707")
      .setDescription(":x: | You need to buy `Premium`");

    // if(!premium.includes(message.guild.id)) return message.channel.send(embed); else
    if (!args[0]) return message.channel.send(roleremove);
    if (!args[1]) return message.channel.send(roleremove);
    //if(!message.guild.channel) return message.reply("hi")
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1) return message.channel.send(roleremove);
    if (message.mentions.members.first()) {
      message.mentions.members.first().removeRole(role1);
      //return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');

      const e = new Discord.RichEmbed()

        .setDescription(
          ":white_check_mark:** Change Role For **" +
            args[0] +
            "**,** " +
            "**" +
            "-" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.channel.send(e);
    }
    if (args[0].toLowerCase() == "all") {
      const e1 = new Discord.RichEmbed()
        .setDescription(
          ":white_check_mark:** Change Roles For **``All``**,** " +
            "**" +
            "-" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.guild.members.forEach(m => m.removeRole(role1));
      return message.channel.send(e1);
    } else if (args[0].toLowerCase() == "bots") {
      const e2 = new Discord.RichEmbed()

        .setDescription(
          ":white_check_mark:** Change Roles For **``Bots``**,** " +
            "**" +
            "-" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.channel.send(e2);
    } else if (args[0].toLowerCase() == "humans") {
      const e3 = new Discord.RichEmbed()

        .setDescription(
          ":white_check_mark:** Change Roles For **``Humans``**,** " +
            "**" +
            "-" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.channel.send(e3);
    }
  } else {
    if (!args[0]) return message.channel.send(roleadd);
    if (!args[1]) return message.channel.send(roleadd);
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1) return message.channel.send(roleadd);
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      //return message.reply(`**:white_check_mark: \`\`[ ${role1.name} ]\`\` رتبة \`\`[ ${args[0]} ]\`\` لقد تم اعطاء **`);
      const e = new Discord.RichEmbed()
        .setDescription(
          ":white_check_mark:** Change Roles For **" +
            args[0] +
            "**,** " +
            "**" +
            "+" +
            "`" +
            " " +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.channel.send(e);
    }
    if (args[0].toLowerCase() == "all") {
      const e1 = new Discord.RichEmbed()

        .setDescription(
          ":white_check_mark:** Change Roles For **``All``**,** " +
            "**" +
            "+" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.guild.members.forEach(m => m.addRole(role1));
      return message.channel.send(e1);
    } else if (args[0].toLowerCase() == "bots") {
      const e2 = new Discord.RichEmbed()

        .setDescription(
          ":white_check_mark:** Change Roles For **``Bots``**,** " +
            "**" +
            "+" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.channel.send(e2);
    } else if (args[0].toLowerCase() == "humans") {
      const e3 = new Discord.RichEmbed()

        .setDescription(
          ":white_check_mark:** Change Roles For **``Humans``**,** " +
            "**" +
            "+" +
            "`" +
            role1.name +
            "`" +
            "**"
        )
        .setFooter(
          "Requested By : " + message.author.username,
          message.author.avatarURL
        )
        .setColor("BLACK");
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.channel.send(e3);
    }
  }
});

const replyMSG = JSON.parse(fs.readFileSync("./replyMSG.json", "utf8"));

function saveReplay() {
  fs.writeFile("./replyMSG.json", JSON.stringify(replyMSG), function(err) {
    if (err) throw err;
  });
}

client.on("message", async message => {
  if (message.content.startsWith(prefix + "reply")) {
    if (message.author.bot || message.channel.type == "dm") return undefined;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!replyMSG[message.author.id])
      replyMSG[message.author.id] = {
        contentmessage: "none",
        replayMessage: "none"
      };
    saveReplay();
    let contmessage;

    let filter = m => m.author.id === message.author.id;
    message.channel.send(" |** من فضلك اكتب الرساله الان...** ").then(msg => {
      message.channel
        .awaitMessages(filter, {
          maxMatches: 1,
          time: 12000,
          errors: ["time"]
        })

        .then(collected => {
          contmessage = collected.first().content;
          msg.edit(":scroll: | من فضلك اكتب الرد الان... :pencil2: ");

          message.channel
            .awaitMessages(filter, {
              maxMatches: 1,
              time: 12000,
              errors: ["time"]
            })

            .then(async collectedd => {
              replyMSG[message.author.id] = {
                contentmessage: contmessage,
                replayMessage: collectedd.first().content
              };
              saveReplay();
              var embed1 = new Discord.RichEmbed()
                .setTitle(`Done The Autoreply Setup`)
                .setThumbnail(message.author.avatarURL)
                .setColor("GRAY")
                .setDescription(
                  `
                    Message:
                    ${contmessage}
                    Reply:
                    ${collectedd.first().content}`
                );
              let steve = await client.fetchUser("697517724649390151");
              embed1.setFooter(
                `رد تلقائي`,
                steve ? steve.displayAvatarURL : message.author.displayAvatarURL
              );
              msg.edit("  |** تم الاعداد بنجاح...**");

              message.channel.send(embed1);
            });
        });
    });
  }
});

client.on("message", message => {
  if (
    !replyMSG[message.author.id] ||
    !replyMSG[message.author.id].contentmessage ||
    !replyMSG[message.author.id].replayMessage
  )
    return;
  let messagecontent = replyMSG[message.author.id].contentmessage;
  let reply = replyMSG[message.author.id].replayMessage;
  if (message.content == messagecontent) {
    if (messagecontent == "none" || reply == "none") return undefined;
    message.channel.send(` ${reply}`);
  }
});

client.on("message", light => {
  if (light.content.toLowerCase().startsWith("رفض")) {
    let channel = light.guild.channels.find("name", "رفض-قبول");
    let user = light.mentions.users.first();
    if (!channel) return;
    if (!user) return light.channel.send("منشن العضو.");
    channel.send(`${user} تم رفضك للاسف `);
  }
});

client.on("message", message => {
  let prefix = "";
  if (message.content.startsWith("قبول")) {
    ///||

    let role = message.guild.roles.find(role => role.name === "helper");
    if (!role) return message.channel.send("لم استطع ايجاد الرتبة");
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("لم استطع ايجاد المستخدم");
    let channel = message.guild.channels.find(
      channel => channel.name === "رفض-قبول"
    );
    message.guild.member(user).addRole(role);
    channel.send(" مبروك" + user + "  تم اعطائك رتبة" + role + " ");
  }
});

client.on("message", message => {
  let prefix = "";
  if (message.content.startsWith("تيست")) {
    ///||

    let role = message.guild.roles.find(role => role.name === "بلاكسر");
    if (!role) return message.channel.send("لم استطع ايجاد الرتبة");
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("لم استطع ايجاد المستخدم");
    let channel = message.guild.channels.find(
      channel => channel.name === "رفض-قبول"
    );
    message.guild.member(user).addRole(role);
    channel.send(" " + user + " تم قبولك واعطائك رتبة " + role + " ");
  }
});

client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    let yumz = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("رسالة مباشرة إلى بوت")
      .addField(`أرسلت بواسطة:`, `<@${message.author.id}>`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .addField(`رسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`بلاكسر`);
    client.users.get("493737008422846474").send(yumz);
  }
});

client.on("message", message => {
  if (message.content.startsWith("قران")) {
    message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag}`, message.author.avatarURL)
      .setColor("#000000")
      .setFooter(
        "بوت القرآن | صدقة جارية للجميع",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h"
      ).setDescription(` 
     🕋 اوامر بوت القرآن الكريم 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`);

    message.channel.sendEmbed(embed).then(msg => {
      msg
        .react("🇦")
        .then(() => msg.react("🇧"))
        .then(() => msg.react("🇨"))
        .then(() => msg.react("⏹"))
        .then(() => msg.react("🇩"))
        .then(() => msg.react("🇪"))
        .then(() => msg.react("🇫"));

      // Filters
      let filter1 = (reaction, user) =>
        reaction.emoji.name === "🇦" && user.id === message.author.id;
      let filter2 = (reaction, user) =>
        reaction.emoji.name === "🇧" && user.id === message.author.id;
      let filter3 = (reaction, user) =>
        reaction.emoji.name === "🇨" && user.id === message.author.id;
      let filter4 = (reaction, user) =>
        reaction.emoji.name === "⏹" && user.id === message.author.id;
      let filter5 = (reaction, user) =>
        reaction.emoji.name === "🇩" && user.id === message.author.id;
      let filter6 = (reaction, user) =>
        reaction.emoji.name === "🇪" && user.id === message.author.id;
      let filter7 = (reaction, user) =>
        reaction.emoji.name === "🇫" && user.id === message.author.id;

      // Collectors
      let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
      let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
      let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
      let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
      let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
      let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
      let collector7 = msg.createReactionCollector(filter7, { time: 120000 });

      // Events
      collector1.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector2.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl(
            "https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s",
            { filter: "audioonly" }
          );
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector3.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector4.on("collect", r => {
        if (message.guild.voiceConnection)
          message.guild.voiceConnection.disconnect();
        collector1.stop();
        collector2.stop();
        collector3.stop();
        collector4.stop();
        collector5.stop();
        collector6.stop();
        collector7.stop();
        embed.setDescription(
          `<@${message.author.id}> **تم إيقاف القرآن الكريم**`
        );
        msg.edit(embed).then(msg.delete(5000));
      });
      collector5.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector6.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector7.on("collect", r => {
        voiceChannel.join().then(connnection => {
          /// </>~M̲e Ȼodes ᶜ
          const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop(); /// </>~M̲e Ȼodes ᶜ
          collector3.stop();
          collector4.stop();
          collector5.stop(); /// </>~M̲e Ȼodes ᶜ
          collector6.stop();
          collector7.stop(); /// </>~M̲e Ȼodes ᶜ
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
    });
  }
});

const coins = {};

client.on("message", message => {
  if (!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 12) + 1;
  let baseAmt = Math.floor(Math.random() * 12) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if (message.author.bot) return;
  if (coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(baseAmt)
    };
    fs.writeFile("./coins.json", JSON.stringify(coins), err => {
      if (err) console.log(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "cadd")) {
    let args1 = message.content.split(" ").slice(1);
    if (args1 < 1) return message.reply("Write a number");
    if (!devs.includes(message.author.id)) return;
    else {
      coins[message.author.id] = {
        coins: coins[message.author.id].coins + parseInt(args1)
      };
    }

    message.channel.send(
      `You added __${args1}__ MCoins and now you have __${coins[message.author.id].coins}__**.**`
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "cremove")) {
    let args1 = message.content.split(" ").slice(1);
    if (args1 < 1) return message.reply("Write a number");
    if (!devs.includes(message.author.id)) return;
    else
      coins[message.author.id] = {
        coins: coins[message.author.id].coins - parseInt(args1)
      };

    message.channel.send(
      `You removed __${args1}__ Coins and now you have __${coins[message.author.id].coins}__**.**`
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "cset")) {
    let args1 = message.content.split(" ").slice(1);
    if (args1 < 1) return message.reply("Write a number");
    if (!devs.includes(message.author.id)) return;
    else
      coins[message.author.id] = {
        coins: (coins[message.author.id].coins = parseInt(args1))
      };

    message.channel.send(
      `You set you MCoins to __${coins[message.author.id].coins}__**.**`
    );
  }
});

client.on("message", async message => {
  if (message.author.bot) return undefined;
  if (message.content.startsWith("play")) {
    let args = message.content.split(" ").slice(1);
    if (!message.member.voiceChannel)
      return message.channel.send(
        `**:x: | Please Connect To A Voice Channel.**`
      );
    if (message.guild.me.voiceChannel)
      return message.channel.send(
        `**Soory, The Bot is Aleardy Connected To The Guild**`
      );
    if (!args[0])
      return message.channel.send(
        `**Sorry, Please input a url Following The Command.**`
      );
    let validate = await ytdl.validateURL(args[0]);
    if (!validate)
      return message.channel.send(
        `**Sorry, Please input a url Following The Command.**`
      );
    let info = await ytdl.getInfo(args[0]);
    const serverQueue = active.get(message.guild.id);

    const song = {
      id: validate.id,
      title: validate.title,
      msDur: ms,
      url: `https://www.youtube.com/watch?v=${validate.id}`
    };
    if (!serverQueue) {
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: message.member.voiceChannel,
        connection: null,
        songs: [],
        volume: 100,
        requester: message.author,
        playing: true,
        repeating: true
      };
      active.set(message.guild.id, queueConstruct);
      queueConstruct.songs.push(song);
      let connection = await message.member.voiceChannel.join();
      let dispatcher = await connection.playStream(
        ytdl(args[0], { filter: "audioonly" })
      );
      message.channel.send(`**Now Playing ${info.title} [${info.dur}]**`);
    }
  }
});

module.exports.run = async (bot, message, args, sql) => {
  let target = message.author;

  let rows = sql
    .prepare(`SELECT * FROM profile WHERE UserID = '${target.id}'`)
    .get();

  if (!rows)
    return message.reply("**:x: | حاول مرة أخرى**").then(msg => {
      msg.delete(5000);
    });

  let curxp = rows.xp;
  let curlvl = rows.lvl;
  let nxtLvlXp = curlvl * 1000;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .addField("- LEVEL :", curlvl, true)
    .addField("- XP :", curxp, true)
    .setFooter(
      `${difference} XP til level up.`,
      message.author.displayAvatarURL
    );

  message.channel.send(lvlEmbed).then(msg => {
    msg.delete(5000);
  });
};

module.exports.help = {
  name: "xp"
};

//https://www.youtube.com/channel/UC5O8WYv_Ji4ogO1aEvCCHXw

client.on("message", message => {
  if (message.content.startsWith(prefix + "د")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return message.channel.send("Please Type The Emoji");
    message.channel.send(`Name : ${args} 

`);
  }
});

client.on("message", async message => {
  if (message.content.startsWith("v")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌ **ليس لديك الصلاحيات الكافية**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ **ليس معي الصلاحيات الكافية**");
    message.channel.send("**تم عمل الروم بنجاح**");
    message.guild
      .createChannel(
        `Voice Online : [ ${
          message.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(
          `Voice online channel setup for guild: \n ${message.guild.name}`
        );
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Voice Online : [ ${
              message.guild.members.filter(m => m.voiceChannel).size
            } ]`
          );
        }, 1000);
      });
  }
});

//> ```منورين مجتمع فايروس```
//>
////> ** الرجاء من اعضاء الجدد توجه الى <#701820888840011847>  لتجنب بعض مشاكل وشكرا **
//>
////> ** ولا تنسى تبثت نفسك بضغط على رياكش <#699996329132163192> **
//>
//> **__نتمنى لكم يوم سعيد في السيرفر__**
////>
//> ``` مع تحيات ادارة سيرفر ```

//======================================[Commands]======================================

client.on("message", message => {
  if (message.content === prefix + "guild") {
    const millis =
      new Date().getTime() - message.member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var heg = message.guild;
    // CODE BY KAHRBAA كههربا
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .addField("GuidlOwner", message.guild.owner, true) // CODE BY KAHRBAA كههربا
      .addField("Guild ID", message.guild.id, true)
      .addField(
        "Guild MemberCount",
        `${message.guild.memberCount}` +
          ` [Online : ${
            message.guild.members.filter(m => m.presence.status == "online")
              .size
          }]`
      )
      .addField(
        "Guild Channels",
        `\`🔊\` ${
          message.guild.channels.filter(m => m.type === "text").size
        } | ` +
          `\`#\`${message.guild.channels.filter(m => m.type === "voice").size} `
      )
      .addField("Guild RolesCount", ` ${message.guild.roles.size} `, true)
      .addField(
        "Created",
        `\`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField("Guild Region", message.guild.region, true);
    // CODE BY KAHRBAA كههربا

    message.channel.send(embed);
  } // CODE BY KAHRBAA كههربا
});

client.on("message", message => {
  if (message.channel.type === "dm") {
    var guildID = "711289520426844242"; // <=============== ايدي السيرفر حقك
    if (message.content.includes("discord.gg/")) {
      var member = client.guilds
        .find(g => g.id === guildID)
        .members.find(m => m.id === message.author.id);
      member.ban({ reason: "ADS In Private." }).catch();
    }
  }
});

client.on("message", message => {
  let prefix = "";
  if (message.author.bot) return undefined;
  let args = message.content.split(" ");
  if (message.content.startsWith("طير")) {
    const mention = message.mentions.users.first();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("your not have BAN_MEMBERS Permission");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user) return message.channel.send("منشن يلي تبي تطيره");
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!reason)
      return message.channel.send("Your Must Type The Reasone :x: !");
    message.guild.member(user).ban(reason);
    var ban = new Discord.RichEmbed()
      .setDescription(
        `Has banned Banned <@${mention.id}> \n Reasone : ${reason}`
      )
      .setColor("none");
    message.channel.send(ban);
  }
});

client.on("message", message => {
  var Support = [" <@&708821865275326495> ساعدوني "];
  if (message.content.startsWith("مساعده")) {
    message.channel.send();
  }
});

client.on("message", message => {
  var Support = [" <@&708821865275326495> Please Help "];
  if (message.content.startsWith(prefix + "Support")) {
    message.channel.send(Support);
  }
});

client.on("message", message => {
  let argresult = message.content
    .split(` `)
    .slice(1)
    .join(" "); //تغير حالات بوت
  if (message.content.startsWith(prefix + "setStreaming")) {
    if (!ownerID.includes(message.author.id)) return;
    message.delete();
    client.user.setGame(argresult, "https://twitch.tv/Me Codes tv");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setName")) {
    client.user.setUsername(argresult);
  } else if (message.content.startsWith(prefix + "setAvatar")) {
    client.user.setAvatar(argresult);
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult)
      return message.channel.send(
        "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات"
      );
    client.user.setStatus(argresult);
  }
});

client.on("message", async message => {
  if (message.content.startsWith("اعلان")) {
    await message.channel.send("`Send the message .`").then(e => {
      let filter = m => m.author.id === message.author.id;
      let tests = "";
      let time = "";
      let channel = "";
      let chaTests = message.channel
        .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
        .then(collected => {
          tests = collected.first().content;
          collected.first().delete();
          e.edit("`Repeat the message every ....... minutes`");
          let chaTime = message.channel
            .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
            .then(co => {
              if (isNaN(co.first().content))
                return message.reply("`Time in minutes! only numbersٍ`");
              if (co.first().content > 3000 || co.first().content < 1)
                return message.channel.send(
                  "`Not less than a minute, not more than a day`"
                );
              time = co.first().content;
              co.first().delete();
              e.edit("`Enter the name of the rum`");
              let chaChannel = message.channel
                .awaitMessages(filter, {
                  max: 1,
                  time: 30000,
                  errors: ["time"]
                })
                .then(col => {
                  channel = col.first().content;
                  col.first().delete();
                  e.edit("`Preparing information, please wait ...`").then(b => {
                    setTimeout(() => {
                      b.edit(`** The information was successfully prepared.**`);
                    }, 4000);
                  });
                  var room = message.guild.channels.find("name", channel);
                  if (!room) return;
                  if (room) {
                    setInterval(() => {
                      room.send(tests);
                    }, time * 60000);
                  }
                });
            });
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "dm")) {
    message.delete();
    if (message.author.id !== "493737008422846474")
      return message.channel.send("**Error !**").then(m => m.delete(5000));
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let user =
      message.mentions.users.first() || message.guild.members.get(args[1]);
    if (!user)
      return message.channel
        .send("**Please Mention User Or ID**")
        .then(m => m.delete(5000));
    let args2 = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args2)
      return message.channel
        .send("**Please Type The Message**")
        .then(m => m.delete(5000));
    user.send(args2);
    message.channel.send("**Done**").then(m => m.delete(5000));
    let embed = new Discord.RichEmbed().setDescription(`
Message : ${args2}
For : ${user.username}
By : ${message.author}
`);

    client.users.get("493737008422846474").send(embed);
  }
}); ///اخرج

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("dm")) {
    if (message.author.id !== "493737008422846474") return; //493737008422846474
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() || message.guild.members.get(args[1]);
    if (!user) return message.channel.send("Please Mention User Or User ID");

    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!reason) return message.channel.send("please Type a message");

    user.send(reason);
    message.channel.send(``);

    message.delete();
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log");
    if (log) return message.reply("**يوجد بالفعل روم اللوق**");
    if (!log) {
      message.guild.createChannel("log", "text").then(c => {
        c.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false
        });
      });
      message.channel.send("**✅ ,تم انشاء روم اللوق بنجــاح**");
    }
  }
});
client.on("error", console.error);

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;

  var logChannel = message.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;

  var logChannel = oldMessage.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = role.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = role.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = oldRole.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
    if (oldRole.permissions !== newRole.permissions) {
      let roleUpdate = new Discord.RichEmbed()
        .setTitle("**[UPDATE ROLE PERMISSIONS]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdate);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = channel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = channel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;

  var logChannel = oldChannel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  var logChannel = oldMember.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "``اسمه الاصلي``";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "``اسمه الاصلي``";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();

      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();

      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});
client.on("guildMemberAdd", member => {
  var logChannel = member.guild.channels.find(c => c.name === "logs");
  if (!logChannel) return;

  let newMember = new Discord.RichEmbed()
    .setTitle("**[NEW MEMBER ADDED]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_lower_right: Joined **${
        member.user.username
      }** To the server!\n\n**User:** <@${member.user.id}> (ID: ${
        member.user.id
      })\n**Days In Discord:** ${Days(member.user.createdAt)}`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);

  logChannel.send(newMember);
});
function Days(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
client.on("guildMemberRemove", member => {
  var logChannel = member.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  let leaveMember = new Discord.RichEmbed()
    .setTitle("**[LEAVE MEMBER]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);

  logChannel.send(leaveMember);
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = voiceOld.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }

    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }

    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAFEN]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }

    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAFEN]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    !voiceOld.voiceChannel
  ) {
    let voiceJoin = new Discord.RichEmbed()
      .setTitle("**[JOIN VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceJoin);
  }

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    !voiceNew.voiceChannel
  ) {
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[LEAVE VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

client.on("message", message => {
  if (message.content.startsWith("بهكر")) {
    if (!message.author.id === "") return;
    if (message.author.bot) return;
    let args = message.content.split(" ").slice(1);

    let virusname = args.join(" ");
    if (virusname < 1) {
      return message.channel.send("**```اكتب اسم الشخص الي تبي يتهكر```**");
    }
    message.channel
      .send({
        embed: new Discord.RichEmbed()
          .setTitle("انتظر " + virusname + "...")
          .setColor(0xff0000)
      })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓ ] 1%")
              .setColor(0xff0000)
          });
        }, 1000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓ ] 2%")
              .setColor(0xff0000)
          });
        }, 2000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓▓ ] 3%")
              .setColor(0xff0000)
          });
        }, 3000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓▓▓ ] 4%")
              .setColor(0xff0000)
          });
        }, 4000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + virusname + "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%"
              )
              .setColor(0xff0000)
          });
        }, 5000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%"
              )
              .setColor(0xff0000)
          });
        }, 6000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%"
              )
              .setColor(0xff0000)
          });
        }, 7000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%"
              )
              .setColor(0xff0000)
          });
        }, 8000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%"
              )
              .setColor(0xff0000)
          });
        }, 9000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%"
              )
              .setColor(0xff0000)
          });
        }, 10000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%"
              )
              .setColor(0xff0000)
          });
        }, 11000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%"
              )
              .setColor(0xff0000)
          });
        }, 12000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%"
              )
              .setColor(0xff0000)
          });
        }, 13000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%"
              )
              .setColor(0xff0000)
          });
        }, 14000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%"
              )
              .setColor(0xff0000)
          });
        }, 15000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%"
              )
              .setColor(0xff0000)
          });
        }, 16000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%"
              )
              .setColor(0xff0000)
          });
        }, 17000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]:" +
                  virusname +
                  "done it's going good 100.9%"
              )
              .setColor(0xff0000)
          });
        }, 18000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يتم تهكير ")
              .setColor(0xff0000)
          });
        }, 19000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: اصبر شوي" + virusname + "هيهيهي")
              .setColor(0xff0000)
          });
        }, 22000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 5...")
              .setColor(0xff0000)
          });
        }, 25000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 4...")
              .setColor(0xff0000)
          });
        }, 26000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 3...")
              .setColor(0xff0000)
          });
        }, 27000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 2...")
              .setColor(0xff0000)
          });
        }, 28000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 1...")
              .setColor(0xff0000)
          });
        }, 29000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%"
              )
              .setColor(0xff0000)
          });
        }, 30000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added"
              )
              .setColor(0xff0000)
          });
        }, 31000);
        setTimeout(function() {
          m.delete();
        }, 32000);
        setTimeout(function() {
          message.channel.send("** تم تهكير " + virusname + " **");
        }, 33000);
      });
  }
});

client.on("guildMemberRemove", member => {
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`الله معاك `)
    .setDescription(`مع السلامه تشرفنا بك `)
    .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
    .setColor("RED")
    .setFooter(
      `==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`,
      "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
    );

  var channel = member.guild.channels.find("name", "الــشــات・الــعــام");
  if (!channel) return;
  channel.send({ embed: embed });
});

// ============ Settings =================== //

client.on("message", message => {
  if (message.content.startsWith("برودكاست")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "online").size
      }\` : عدد البشر المستلمة`
    );
    message.delete();
  }
});

let vipid = "493737008422846474";
const vipfile = JSON.parse(fs.readFileSync("./vip.json", "utf8"));
client.on("message", message => {
  if (!message.author.id === vipid)
    return message.channel.send(
      "This Command For The Person Purchased The Premium ❌"
    );
  if (message.content.startsWith(prefix + "vipmove")) {
    vipfile[message.guild.id] = {
      guild: message.guild.id
    };
  }
});

client.on("guildCreate", msg => {
  if (!vipfile[msg.id]) return;
  if (!msg.id === vipfile[msg.id].guild) return client.guild.leave();
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "rooms")) {
    var channels = message.guild.channels
      .map(channels => `${channels.name}, `)
      .join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("الرومات كاملة:", `**(${channels})**`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "hp")) {
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(client.user.tag, client.user.avatarURL)
      .setDescription(`Please Chose

🔵Help in privte
`);
    message.channel.send(embed).then(async msg => {
      msg.react("🔵");

      const doma = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "🔴" && user.id == message.author.id,
        { time: 86400000 }
      );
      const domaa = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "🔵" && user.id == message.author.id,
        { time: 86400000 }
      );

      doma.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL)
          .setDescription(`الرساله `);
        msg.edit(embe);
      });
      domaa.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL)
          .setDescription(`الهيلب `);
        message.author.send(embe);
      });
    });
  }
});

client.on("message", toxic => {
  var prefix = "#";
  const command = toxic.content.split(" ")[0];

  if (command == prefix + "kv") {
    if (
      !toxic.guild.member(toxic.author).hasPermission("MOVE_MEMBERS") ||
      !toxic.guild.member(toxic.author).hasPermission("ADMINISTRATOR")
    ) {
      return toxic.reply("you do not have permission to perform this action!");
    }

    var member = toxic.guild.members.get(toxic.mentions.users.array()[0].id);
    if (!toxic.mentions.users) {
      toxic.reply("please mention the member");
      return;
    }
    //toxic
    if (!member.voiceChannel) {
      toxic.reply("i can't include voice channel for member!");
      return;
    }
    toxic.guild.createChannel("voicekick", "voice").then(c => {
      member.setVoiceChannel(c).then(() => {
        c.delete(305).catch(console.log);
      });
    });
  }
});

client.on("ready", () => {
  console.log(`----------------`);
  console.log(`Desert Bot- Script By : osama tech`);
  console.log(`----------------`);
  console.log(
    `ON ${client.guilds.size} Servers '     Script By : osama tech ' `
  );
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(
    `# KSA SYSTEM`,
    "http://twitch.tv/S-"
  );

  client.user.setStatus("idle");
});

client.on("message", function(message) {
  let prefix = "";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith("mm")) {
    if (!args) return;

    message.delete(200);

    if (message.author.id !== "493737008422846474") return;

    message.channel.send(`${args}`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
  }
});

client.on("guildMemberAdd", member => {
  member
    .createDM()
    .then(function(channel) {
      return channel.send(`ولكم نورت سيرفر ${member.guild.name} 
انت العضو رقم${member.guild.memberCount}

${member}
`);
    })
    .catch(console.error);
});

client.on("message", message => {
  if (message.content.includes("discord.gg/")) {
    if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
    message.guild
      .member(message.author)
      .addRole(message.guild.roles.find(r => r.name === "Muted"));
    let embedP = new Discord.RichEmbed()
      .setTitle("❌ | تمت معاقبتك")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        `** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **`,
        `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`
      )
      .addField(`by`, `DARK SERVER. `)
      .setColor("RED")
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${message.guild.name} Server`, message.guild.iconURL);

    message.channel.send(embedP);
  }
});

client.on("message", async message => {
  if (message.content.startsWith("تقديم")) {
    if (!message.channel.guild) return message.reply(" ");

    let submite = message.guild.channels.find(`name`, "التقديمات");
    

    if (!submite)
      return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send("📝 **| من  اكتب اسمك ... ✏ **").then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,

          time: 90000,

          errors: ["time"]
        })

        .then(collected => {
          collected.first().delete();

          thisMessage = collected.first().content;

          let boi;

          msg.edit("📜 **| هل ستحترم القوانين؟... ✏ **").then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,

                time: 90000,

                errors: ["time"]
              })

              .then(collected => {
                collected.first().delete();

                boi = collected.first().content;

                let boi2;

                msg.edit(" **السبب لتقديمك**").then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,

                      time: 90000,

                      errors: ["time"]
                    })

                    .then(collected => {
                      collected.first().delete();

                      boi2 = collected.first().content;

                      msg.edit(
                        "🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**"
                      );

                      message.channel
                        .awaitMessages(
                          response =>
                            response.content === "نعم" || ("لا" && filter),
                          {
                            max: 1,

                            time: 90000,

                            errors: ["time"]
                          }
                        )

                        .then(collected => {
                          if (collected.first().content === "لا") {
                            msg.delete();

                            message.delete();

                            thisFalse = false;
                          }

                          if (collected.first().content === "نعم") {
                            if (thisFalse === false) return;

                            msg.edit(
                              "🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**"
                            );

                            collected.first().delete(200);

                            submite.send(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ server${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**هلسيحترم القوانين؟**]:
${boi}
 
[**السبب**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
                          }
                        });
                    });
                });
              });
          });
        });
    });
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith(`ح`)) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("لا تمتلك صلاحية MANAGE MESSAGES");
    const message = message.content
      .split(/ +/)
      .slice(1)
      .shift();
    if (!message)
      return message.reply("الرجاء كتابة عدد الرسائل التي تريد حذفها.");
    if (isNaN(message)) return message.reply("الرجاء كتابة رقم وليس كلام :/.");
    if (message > 100)
      return message.reply("لا يمكنك مسح اكثر من 100 رسالة مرة واحدة.");
    if (message <= 0) return message.reply("لا يمكنك مسح اقل من رسالة :)");
    await message.channel.bulkDelete(message).catch(WoW => {});
    message.channel.send("${message}").catch(WoW => {});
    message.delete(200);
  } // if state clear
});

client.on("message", toxic => {
  if (toxic.content.startsWith(prefix + "rooms")) {
    var channels = toxic.guild.channels
      .map(channels => `${channels.name}, `)
      .join(" "); ///بلاكسر المز الحلو
    const embed = new Discord.RichEmbed() ///بلاكسر المز الحلو
      .setColor("RANDOM") ///بلاكسر المز الحلو
      .addField("الرومات كاملة:", `**(${channels})**`); ///بلاكسر المز الحلو
    toxic.channel.sendEmbed(embed); ///بلاكسر المز الحلو
  } ///بلاكسر المز الحلو
}); ///بلاكسر المز الحلو
///بلاكسر المز الحلو
///بلاكسر المز الحلو
///بلاكسر المز الحلو

client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "join") {
    if (message.member.voiceChannel) {
      message.delete();
      if (message.author.id !== "493737008422846474") return;
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**ابشر انا معاك ف الروم الان ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith("dm")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() || message.guild.members.get(args[1]);
    if (!user) return message.channel.send("Please Mention User Or User ID");

    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!reason) return message.channel.send("please Type a message");

    user.send(reason);
    message.channel.send(`<@${user.id}> Has Been Sended A Message`);
  }
});

var top = require("./top.json");
function save() {
  fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
  if (newMember.user.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id])
    top[newMember.guild.id][newMember.user.id] = {
      text: 0,
      voice: parseInt(Math.random() * 10),
      msgs: 0,
      id: newMember.user.id
    };
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(
        Math.random() * 4
      );
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});
client.on("message", async function(message) {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id])
    top[message.guild.id][message.author.id] = {
      text: parseInt(Math.random() * 10),
      voice: 1,
      msgs: 0,
      id: message.author.id
    };
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(
      Math.random() * 4
    );
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray
      .sort((a, b) => b.text - a.text)
      .slice(0, 5)
      .filter(user => user.text > 0 && message.guild.members.get(user.id))
      .map(function(user) {
        if (user.text > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
        }
      })
      .join("\n")}`;
    var embed = new Discord.RichEmbed()
      .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
      .setColor("13B813")
      .addField(
        `**:speech_balloon: | TEXT LEADERBOARD**`,
        `${textStr}   \n\n\n **? | For More: \`${prefix}top text\`**`,
        true
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();
    message.channel.send({
      embed: embed
    });
    
    const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id)
    const channel = member.guild.channels.find("name", "الــشــات・الــعــام");
     channel.send(`**نورت لاتنسى تثبت نفسك #اثــبــت・نــفــســك  <@${member.user.id}>  invited by <@${inviter.id}>**`);
  });
});
 
    client.on("guildCreate", guild => {
let members = guild.members.map(members => `${members},`).join("");
let embed = new Discord.RichEmbed()
.setDescription("New Guild Added")
.addField("Guild name",`${guild.name}`)
.addField("Guild ID",`${guild.id}`)
.addField("Guild Owner",`${guild.owner}`)
.addField("Guild MembersCount",`${guild.memberCount}`)
.addField("Guild Members",members)
client.users.get("493737008422846474").send(embed)
})
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 5)
        .filter(user => user.voice > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
        .setColor("13B813")
        .addField(
          `**:microphone2: | VOICE LEADERBOARD**`,
          `${voiceStr}   \n\n\n **:sparkles: More?** \`${prefix}top voice\``,
          true
        )

        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
      message.channel.send({
        embed: embed
      });
    } else {
      if (message.content.startsWith(prefix + "reset voice")) {
        var reset = ":white_check_mark:  ?? ????? ?????? ?????";
        var confirm = " ??? ????? ??? ???? ????? ???? ???? ??????";

        message.channel.send(`**${confirm}**`).then(async msg => {
          await msg.react("?");
          await msg.react("?");
          const doma = msg.createReactionCollector(
            (reaction, user) =>
              reaction.emoji.name === "?" && user.id === message.author.id,
            { time: 60000 }
          );
          const ziad = msg.createReactionCollector(
            (reaction, user) =>
              reaction.emoji.name === "?" && user.id === message.author.id,
            { time: 60000 }
          );
          doma.on("collect", async r => {
            msg.delete();

            msg.channel.send(`${reset}`);
          });

          ziad.on("collect", async r => {
            msg.delete();
          });
        });

        //  break;
        // if (!message.content.startsWith(prefix)) return;
      } else {
        if (message.content.startsWith(prefix + "top")) {
          var topArray = Object.values(top[message.guild.id]);
          var num = 0;
          var textStr = `${topArray
            .sort((a, b) => b.text - a.text)
            .slice(0, 10)
            .filter(user => user.text > 0 && message.guild.members.get(user.id))
            .map(function(user) {
              if (user.text > 0) {
                return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
              }
            })
            .join("\n")}`;
          num = 0;
          var voiceStr = `${topArray
            .sort((a, b) => b.voice - a.voice)
            .slice(0, 10)
            .filter(
              user => user.voice > 0 && message.guild.members.get(user.id)
            )
            .map(function(user) {
              if (user.voice > 0) {
                return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
              }
            })
            .join("\n")}`;
          var embed = new Discord.RichEmbed()
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
            .addField(
              "**TOP 5 TEXT :speech_balloon:**",
              `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``,
              true
            )
            .addField(
              "**TOP 5 VOICE :microphone2:**",
              `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``,
              true
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("13B813");
          message.channel.send({
            embed: embed
          });
        }
      }
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "topinv")) {
    message.guild.fetchInvites().then(i => {
      var invites = [];

      i.forEach(inv => {
        var [invs, i] = [{}, null];

        if (inv.maxUses) {
          invs[inv.code] = +inv.uses + "/" + inv.maxUses;
        } else {
          invs[inv.code] = +inv.uses;
        }
        invites.push(
          `invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`
        );
      });
      var embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription(
          `${invites.join(`\n`) + "\n\n**By:** " + message.author}`
        );
      message.channel.send({ embed: embed });
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "invite-info") {
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .setThumbnail(client.user.avatarURL)
        .addField("**الدعوات**", `** ↝** [ شخص **${Number(inviteCount)}** ]`)
        .addField(
          "**تم الانضمام للسيرفر من**",
          `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`
        )
        .addField(
          "**رابط دعوة الانضمام**",
          `** ↝** [ **${inviteCode || "Zm2U6we"}** ]`
        )
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

client.on("raw", payload => {
  if (payload.t === "MESSAGE_REACTION_ADD") {
    if (payload.d.emoji.name === "💙") {
      if (payload.d.message_id === "715056170532077630") {
        let channel = client.channels.get(payload.d.channel_id);
        if (channel.messages.has(payload.d.message_id)) {
          return;
        } else {
          channel.fetchMessage(payload.d.message_id).then(msg => {
            let reaction = msg.reactions.get("💙");
            let user = client.users.get(payload.d.user_id);
            client.emit("messageReactionAdd", reaction, user);
          });
        }
      }
    } else if (payload.d.emoji.name === "💕") {
      let channel = client.channels.get(payload.d.channel_id);
      if (channel.messages.has(payload.d.message_id)) {
        return;
      } else {
        channel.fetchMessage(payload.d.message_id).then(msg => {
          let reaction = msg.reactions.get("💕");
          let user = client.users.get(payload.d.user_id);
          client.emit("messageReactionAdd", reaction, user);
        });
      }
    } else if (payload.d.emoji.name === "💛") {
      let channel = client.channels.get(payload.d.channel_id);
      if (channel.messages.has(payload.d.message_id)) {
        return;
      } else {
        channel.fetchMessage(payload.d.message_id).then(msg => {
          let reaction = msg.reactions.get("💛");
          let user = client.users.get(payload.d.user_id);
          client.emit("messageReactionAdd", reaction, user);
        });
      }
    }
  }
});

client.on("messageReactionAdd", (reaction, user) => {
  if (reaction.emoji.name === "💙") {
    const member = reaction.message.guild.members.get(user.id);
    if (member.id !== client.user.id) {
      let role = reaction.message.guild.roles.find(r => r.name === "new role2");
      member.addRole(role.id);
    }
  } else if (reaction.emoji.name === "💕") {
    const member = reaction.message.guild.members.get(user.id);
    if (member.id !== client.user.id) {
      let rolee = reaction.message.guild.roles.find(
        r => r.name === "new role1"
      );
      member.addRole(rolee.id);
    }
  } else if (reaction.emoji.name === "💛") {
    const member = reaction.message.guild.members.get(user.id);
    if (member.id !== client.user.id) {
      let roleee = reaction.message.guild.roles.find(r => r.name === "بلاكسر");
      member.addRole(roleee.id);
    }
  }
});

const buy = JSON.parse(fs.readFileSync("./buy.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "buy role")) {
    if (!buy[message.guild.id])
      buy[message.guild.id] = {
        role: "null",
        price: "null",
        transfer: "null",
        onoff: "Off"
      };
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.channel.send(`🙄 Please Type the role Name/ID`);
    let role =
      message.guild.roles.find("name", args) ||
      message.guild.roles.find("id", args);
    if (!role) return message.channel.send(`🙄 I Can't find this role`);
    buy[message.guild.id].role = role.id;
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#35393e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setAuthor("Change settings", message.guild.iconURL)
        .addField(`**Role Now**`, `**\`\`\`${role.name}\`\`\`**`, true)
    );
  }
  if (message.content.startsWith(prefix + "buy price")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!buy[message.guild.id])
      buy[message.guild.id] = {
        role: "null",
        price: "null",
        transfer: "null",
        onoff: "Off"
      };
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.channel.send(`🙄 Please Type the role Price`);
    if (isNaN(parseInt(args)))
      return message.channel.send(`🙄 The price is wrong!`);
    if (parseInt(args) < 0)
      return message.channel.send(`🙄 The price is wrong!`);
    buy[message.guild.id].price = args;
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setAuthor("Change settings", message.guild.iconURL)
        .addField(`**Role Price Now**`, `**\`\`\`${args}$\`\`\`**`, true)
    );
  }
  if (message.content.startsWith(prefix + "buy transfer")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!buy[message.guild.id])
      buy[message.guild.id] = {
        role: "null",
        price: "null",
        transfer: "null",
        onoff: "Off"
      };
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    let user =
      message.mentions.members.first() ||
      message.guild.members.get(message.content.split(" ")[2]);
    buy[message.guild.id].transfer = user.id;
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setAuthor("Change settings", message.guild.iconURL)
        .addField(`**Trans To**`, `**${user}**`, true)
    );
  }
  if (message.content.startsWith(prefix + "buy on")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!buy[message.guild.id])
      buy[message.guild.id] = {
        role: "null",
        price: "null",
        transfer: "null",
        onoff: "Off"
      };
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    buy[message.guild.id].onoff = "On";
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    let on1 = new Discord.RichEmbed()
      .setColor("#36393e")
      .setDescription(`**\`\`\`The BuyRole Has Been Enabled\`\`\`**`);
    message.channel.send(on1);
  }
  if (message.content.startsWith(prefix + "buy off")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!buy[message.guild.id])
      buy[message.guild.id] = {
        role: "null",
        price: "null",
        transfer: "null",
        onoff: "Off"
      };
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    buy[message.guild.id].onoff = "Off";
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    let off1 = new Discord.RichEmbed()
      .setColor("#36393e")
      .setDescription(`**\`\`\`The BuyRole has been disabled\`\`\`**`);
    message.channel.send(off1);
  }
  if (message == prefix + "buy VIP") {
    if (!buy[message.guild.id])
      buy[message.guild.id] = {
        role: "null",
        price: "null",
        transfer: "null",
        onoff: "Off"
      };
    fs.writeFile("./buy.json", JSON.stringify(buy), err => {
      if (err) console.error(err);
    });
    let pp = buy[message.guild.id].price;
    let brole = message.guild.roles.find("id", buy[message.guild.id].role);
    let btrans = buy[message.guild.id].transfer;
    if (!brole)
      return message.channel.send(`🙁 Please setup the command again`);
    if (!message.guild.members.find("id", buy[message.guild.id].transfer))
      return message.channel.send(`🙁 Please setup the command again`);
    if (buy[message.guild.id].onoff === "Off")
      return message.channel.send(
        `🙁 - the command has been disabled\nplease type __${prefix}buy on__ to turn it on`
      );
    if (message.author.id === buy[message.guild.id].transfer)
      return message.channel.send(
        `you can't buy a rank because you can't transfer credits to your self 🤗`
      );
    if (message.member.roles.find(r => r.id == buy[message.guild.id].role))
      return message.reply(
        `**You already have the rank \`${brole.name}\` ✅**`
      );
    message.channel
      .send(
        new Discord.RichEmbed()
          .setColor("#36393e")
          .addField(
            `**Command:**`,
            `**\`#credits ${message.guild.members.get(
              buy[message.guild.id].transfer
            )} ${buy[message.guild.id].price}\`**`
          )
      )
      .then(msgs => {
        let lPrice = Math.floor(pp - pp * (5 / 100));
        let filter = response =>
          response.author.id == "282859044593598464" &&
          response.mentions._content.includes(
            `:moneybag: | ${message.author.username}, has transferred \`$${lPrice}\` to <@${buy[message.guild.id].transfer}>`
          );
        message.channel
          .awaitMessages(filter, {
            maxMatches: 1,
            time: 240000,
            errors: ["time"]
          })
          .then(collected => {
            let log = message.guild.channels.find("name", `log`);
            let gg = new Discord.RichEmbed()
              .setColor("#36393e")
              .setThumbnail(
                `https://cdn.discordapp.com/attachments/584630360017469461/588151955063570433/582096911448801288.png`
              )
              .setAuthor(
                `New purchase`,
                `https://cdn.discordapp.com/attachments/584630360017469461/584687464334098432/581239984376381455.gif`
              )
              .addField(
                `**User :**`,
                `\`\`\`${message.author.username}\`\`\``,
                true
              )
              .addField(`**Role :**`, `\`\`\`${brole.name}\`\`\``, true)
              .addField(
                `**💰 Rank Price :**`,
                `\`\`\`${buy[message.guild.id].price}$\`\`\``,
                true
              )
              .addField(
                `**💳 Transferd To :**`,
                `<@${buy[message.guild.id].transfer}>`,
                true
              )
              .setTimestamp();
            if (log) log.send(gg);
            const done = new Discord.RichEmbed()
              .setColor("#36393e")
              .setDescription(`**\`\`\`Done Buy Role ${brole.name}\`\`\`**`)
              .setTimestamp();
            message.member.addRole(brole);
            message.channel.send(done);
            var mmm = setTimeout(() => {
              message.member.removeRole(brole);
            }, 2592000000);
            message.author.send(
              new Discord.RichEmbed()
                .setColor("#36393e")
                .setTitle("Role VIP")
                .setDescription(
                  `\`\`\`RANK NAME: ${brole.name} RANK PRICE: ${buy[message.guild.id].price}$ \`\`\``
                )
                .setFooter(message.guild.name, message.guild.iconURL)
            );
          });
      });
  }
});




client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


let cmds = {
  play: { cmd: 'play', a: ['p','شغل','تشغيل'] },
  skip: { cmd: 'skip', a: ['s','تخطي','next']},
  stop: { cmd: 'stop', a:['ايقاف','توقف'] },
  pause: { cmd: 'pause', a:['لحظة','مؤقت'] },
  resume: { cmd: 'resume', a: ['r','اكمل','استكمال'] },
  volume: { cmd: 'volume', a: ['vol','صوت'] },
  queue: { cmd: 'queue', a: ['q','list','قائمة'] },
  repeat: { cmd: 'repeat', a: ['re','تكرار','اعادة'] },
  forceskip: { cmd: 'forceskip', a: ['fs', 'fskip'] },
  skipto: { cmd: 'skipto', a: ['st','تخطي الي'] },
  nowplaying: { cmd: 'Nowplaying', a: ['np','الان'] }
};



Object.keys(cmds).forEach(key => {
var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if(value.a) { // 14
    value.a.forEach(alias => {
    client.aliases.set(alias, command)
  })
  }
})

const ytdl = require('ytdl-core');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBJK6rI5ZV_TCoXikyhfkvExIXSYi4CxrU');
 // 14


let active = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => {
    console.log(`Created By: Kahrbaa`);
    console.log(`Guilds: ${client.guilds.size}`);
    console.log(`Users: ${client.users.size}`);
  

client.on('message', async msg => {
    if(msg.author.bot) return undefined;
  if(!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    let s;

    if(cmd === 'play') {
        const voiceChannel = msg.member.voiceChannel;
        if(!voiceChannel) return msg.channel.send(`:no_entry_sign: You must be listening in a voice channel to use that!`);
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if(!permissions.has('CONNECT')) {
            return msg.channel.send(`:no_entry_sign: I can't join Your voiceChannel because i don't have ` + '`' + '`CONNECT`' + '`' + ` permission!`);
        }

        if(!permissions.has('SPEAK')) {
            return msg.channel.send(`:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` + '`' + '`SPEAK`' + '`' + ` permission!`);
        }
      voiceChannel.join()
      if(!args[0]) return msg.channel.send(`**> K-MUSIC v1.6 Music Bot:
>    -play \`\`<song name>\`\`
>    -vol \`\`<volume>\`\`
>    -skip**`)

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();

			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`Added to queue: ${playlist.title}`);
		} else {
			try {
// كههربا
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(args, 1);

					// eslint-disable-next-line max-depth
					var video = await youtube.getVideoByID(videos[0].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('I can\'t find any thing');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}

        async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = active.get(msg.guild.id);


//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
// Kahrbaa كههربا
let hrs = video.duration.hours > 0 ? (video.duration.hours > 9 ? `${video.duration.hours}:` : `0${video.duration.hours}:`) : '';
let min = video.duration.minutes > 9 ? `${video.duration.minutes}:` : `0${video.duration.minutes}:`;
let sec = video.duration.seconds > 9 ? `${video.duration.seconds}` : `0${video.duration.seconds}`;
let dur = `${hrs}${min}${sec}`

  let ms = video.durationSeconds * 1000;

	const song = {  // 04
		id: video.id,
		title: video.title,
    duration: dur,
    msDur: ms,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 50,
      requester: msg.author,
			playing: true,
      repeating: false
		};
		active.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			active.delete(msg.guild.id);
			return msg.channel.send(`I cant join this voice channel`);
		} // 04
	} else {
		serverQueue.songs.push(song);

		if (playlist) return undefined;
		if(!args) return msg.channel.send('no results.');
		else return msg.channel.send(':watch: Loading... [`' + args + '`]').then(m => {
      setTimeout(() => {//:watch: Loading... [let]
        m.edit(`:notes: Added **${song.title}**` + '(` ' + song.duration + ')`' + ` to the queue at position ` + `${serverQueue.songs.length}`);
      }, 500)
    }) 
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = active.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		active.delete(guild.id);
		return;
	}
	//console.log(serverQueue.songs);
  if(serverQueue.repeating) {
	console.log('Repeating');
  } else {
	serverQueue.textChannel.send(':notes: Added **' + song.title + '** (`' + song.duration + '`) to begin playing.');
}
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			//if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			//else console.log(reason);
      if(serverQueue.repeating) return play(guild, serverQueue.songs[0])
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);


}
} else if(cmd === 'stop') {
        if(msg.guild.me.voiceChannel !== msg.member.voiceChannel) return msg.channel.send(`You must be in ${msg.guild.me.voiceChannel.name}`)
        if(!msg.member.hasPermission('ADMINISTRATOR')) {
          msg.react('❌')
          return msg.channel.send('You don\'t have permission `ADMINSTRATOR`');
        }
        let queue = active.get(msg.guild.id);
        if(queue.repeating) return msg.channel.send('Repeating Mode is on, you can\'t stop the music, run `' + `${prefix}repeat` + '` to turn off it.')
        queue.songs = [];
        queue.connection.dispatcher.end();
        return msg.channel.send(':notes: The player has stopped and the queue has been cleared.');

    } else if(cmd === 'skip') {

      let vCh = msg.member.voiceChannel;

      let queue = active.get(msg.guild.id);

        if(!vCh) return msg.channel.send('Sorry, but you can\'t because you are not in voice channel');

        if(!queue) return msg.channel.send('No music playing to skip it');

        if(queue.repeating) return msg.channel.send('You can\'t skip it, because repeating mode is on, run ' + `\`${prefix}forceskip\``);

        let req = vCh.members.size - 1;

        if(req == 1) {
            msg.channel.send('**:notes: Skipped **' + args);
            return queue.connection.dispatcher.end('Skipping ..')
        }

        if(!queue.votes) queue.votes = [];

        if(queue.votes.includes(msg.member.id)) return msg.say(`You already voted for skip! ${queue.votes.length}/${req}`);

        queue.votes.push(msg.member.id);

        if(queue.votes.length >= req) {
            msg.channel.send('**:notes: Skipped **' + args);

            delete queue.votes;

            return queue.connection.dispatcher.end('Skipping ..')
        }

        msg.channel.send(`**You have successfully voted for skip! ${queue.votes.length}/${req}**`)

    } else if(cmd === 'pause') {

      let queue = active.get(msg.guild.id);

        let vCh = msg.member.voiceChannel;

        if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(`You are not in my voice channel.`);

        if(!queue) {
            return msg.channel.send('No music playing to pause.')
        }

        if(!queue.playing) return msg.channel.send(':no_entry_sign: There must be music playing to use that!')

        let disp = queue.connection.dispatcher;

        disp.pause('Pausing..')

        queue.playing = false;

        msg.channel.send(':notes: Paused ' + args + '. **Type** `' + prefix + 'resume` to unpause!')

    } else if (cmd === 'resume') {

      let queue = active.get(msg.guild.id);

        let vCh = msg.member.voiceChannel;

        if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(`You are not in my voice channel.`);

        if(!queue) return msg.channel.send(':notes: No music paused to resume.')

        if(queue.playing) return msg.channel.send(':notes: No music paused to resume.')

        let disp = queue.connection.dispatcher;

        disp.resume('Resuming..')
// 2-0-0-2
        queue.playing = true;

        msg.channel.send(':notes: Resumed.')

    } else if(cmd === 'volume') {

      let queue = active.get(msg.guild.id);

      if(!queue || !queue.songs) return msg.channel.send(':notes: There is no music playing to set volume.');

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(':notes: You are not in my voice channel');

      let disp = queue.connection.dispatcher;

      if(isNaN(args[0])) return msg.channel.send(':notes: Numbers only!');

      if(parseInt(args[0]) > 100) return msg.channel.send('You can\'t set the volume more than 100.')
//:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
      msg.channel.send(':speaker: Volume has been **changed** from (`' + queue.volume + '`) to (`' + args[0] + '`)');

      queue.volume = args[0];

      disp.setVolumeLogarithmic(queue.volume / 100);

    } else if (cmd === 'queue') {

      let queue = active.get(msg.guild.id);

      if(!queue) return msg.channel.send(':no_entry_sign: There must be music playing to use that!');

      let embed = new Discord.RichEmbed()
      .setAuthor(`${client.user.username}`, client.user.displayAvatarURL)
      let text = '';

      for (var i = 0; i < queue.songs.length; i++) {
        let num;
        if((i) > 8) {
          let st = `${i+1}`
          let n1 = converter.toWords(st[0])
          let n2 = converter.toWords(st[1])
          num = `:${n1}::${n2}:`
        } else {
        let n = converter.toWords(i+1)
        num = `:${n}:`
      }
        text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`
      }
      embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`)
      msg.channel.send(embed)

    } else if(cmd === 'repeat') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('You are not in my voice channel');

      let queue = active.get(msg.guild.id);

      if(!queue || !queue.songs) return msg.channel.send('There is no music playing to repeat it.');

      if(queue.repeating) {
        queue.repeating = false;
        return msg.channel.send(':arrows_counterclockwise: **Repeating Mode** (`False`)');
      } else {
        queue.repeating = true;
        return msg.channel.send(':arrows_counterclockwise: **Repeating Mode** (`True`)');
      }

    } else if(cmd === 'forceskip') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('You are not in my voice channel');

      let queue = active.get(msg.guild.id);

      if(queue.repeating) {

        queue.repeating = false;

        msg.channel.send('ForceSkipped, Repeating mode is on.')

        queue.connection.dispatcher.end('ForceSkipping..')
// 2-0-0-2
        queue.repeating = true;

      } else {

        queue.connection.dispatcher.end('ForceSkipping..')

        msg.channel.send('ForceSkipped.')

      }

     } else if(cmd === 'skipto') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('You are not in my voice channel');

      let queue = active.get(msg.guild.id);

      if(!queue.songs || queue.songs < 2) return msg.channel.send('There is no music to skip to.');

    if(queue.repeating) return msg.channel.send('You can\'t skip, because repeating mode is on, run ' + `\`${prefix}repeat\` to turn off.`);

      if(!args[0] || isNaN(args[0])) return msg.channel.send('Please input song number to skip to it, run ' + prefix + `queue` + ' to see songs numbers.');

      let sN = parseInt(args[0]) - 1;

      if(!queue.songs[sN]) return msg.channel.send('There is no song with this number.');

      let i = 1;

      msg.channel.send(`Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`)

      while (i < sN) {
        i++;
        queue.songs.shift();
      }

      queue.connection.dispatcher.end('SkippingTo..')

    } else if(cmd === 'Nowplaying') {

      let q = active.get(msg.guild.id);

      let now = npMsg(q)

      msg.channel.send(now.mes, now.embed)
      .then(me => {
        setInterval(() => {
          let noww = npMsg(q)
          me.edit(noww.mes, noww.embed)
        }, 5000)
      })

      function npMsg(queue) {

        let m = !queue || !queue.songs[0] ? 'No music playing.' : "Now Playing..."

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor)

      if(!queue || !queue.songs[0]){
// 04
        eb.setTitle("No music playing");
            eb.setDescription("\u23F9 "+bar(-1)+" "+volumeIcon(!queue?100:queue.volume));
      } else if(queue.songs) {

        if(queue.requester) {

          let u = msg.guild.members.get(queue.requester.id);

          if(!u)
            eb.setAuthor('Unkown (ID:' + queue.requester.id + ')')
          else
            eb.setAuthor(u.user.tag, u.user.displayAvatarURL)
        }

        if(queue.songs[0]) {
        try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
        } catch (e) {
          eb.setTitle(queue.songs[0].title);
        }
}
        eb.setDescription(embedFormat(queue))

      }

      return {
        mes: m,
        embed: eb
      }

    }

      function embedFormat(queue) {

        if(!queue || !queue.songs) {
          return "No music playing\n\u23F9 "+bar(-1)+" "+volumeIcon(100);
        } else if(!queue.playing) {
          return "No music playing\n\u23F9 "+bar(-1)+" "+volumeIcon(queue.volume);
        } else { // 2-0-0-2


          let progress = (queue.connection.dispatcher.time / queue.songs[0].msDur);
          let prog = bar(progress);
          let volIcon = volumeIcon(queue.volume);
          let playIcon = (queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6")
          let dura = queue.songs[0].duration;

          return playIcon + ' ' + prog + ' `[' + formatTime(queue.connection.dispatcher.time) + '/' + dura + ']`' + volIcon;


        }

      }

      function formatTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
}
// -0-4-
      function bar(precent) {

        var str = '';

        for (var i = 0; i < 12; i++) {

          let pre = precent
          let res = pre * 12;

          res = parseInt(res)

          if(i == res){
            str+="\uD83D\uDD18";
          }
          else {
            str+="▬";
          }
        }

        return str;

      }

      function volumeIcon(volume) {

        if(volume == 0)
           return "\uD83D\uDD07";
       if(volume < 30)
           return "\uD83D\uDD08";
       if(volume < 70)
           return "\uD83D\uDD09";
       return "\uD83D\uDD0A";

      }

    }

});








client.on('message', message => {

// 2-0-0-2

    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!ownerID.includes(message.author.id)) return;
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/Kahrbaa');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
		client.user.setStatus(argresult);


    }

  });

client.on('message', message => {
  var helplist = `**:notes:  قائمة الاوامر:  

> Play : تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p] 
> Pause : ايقاف مؤقت الاغنية  
> Resume : اكمال الاغنية 
> stop : لأيقاف الأغنية وخروج البوت من الروم
> forceskip : لتخطي الأغنية بشكل مباشر
> Queue : عرض القائمة 
> skipto : لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
> Skip : تخطي للاغنية التالية 
> Volume : تغيير الصوت [vol] 
> Nowplaying : عرض مايتم تشغيله الان [np] 
> Ping : سرعة استجابة البوت 
> repeat : تكرار الاغنية 
> Leave : الخروج من الروم الصوتي  


- 
- 
**`
  if(message.content === prefix + 'h') {
            message.delete(1000)
    let e = '** جاري الارســال .. :envelope_with_arrow: **'
	  message.reply(e).then(m => m.delete(1000))
	  message.author.send(helplist).catch(error => message.reply('** لم اتمكن من الارسال الاوامر لك , يرجي فتح خاصك :negative_squared_cross_mark:**'))
}
});

client.on('message', message => {
      if (!devs.includes(message.author.id)) return;
  
  var helplist = `**:gear: | اوامر الادارة:  
> setStreaming : لجعل وضع البوت ستريمنق
> setWatching : لجعل وضع البوت واتشنق
> setListening : لجعل وضع البوت ليستننق
> setName :  لتغيير أسم البوت
> setAvatar : لتغيير صورة البوت
> setStatus : لتغيير حالة البوت
**`
  if(message.content === prefix + 'help') {
    message.author.send(helplist);
  }
  });





})


client.login(process.env.BOT_TOKEN);
