const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Atiqkhan332211/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_49_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA5MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia3hpdzJOd1ZvWFA2dldpM0hHZERWL2p5Zmo3bGV5VFJacEYvaXNSLzZQQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOU5Qb0JHYmJRODZMeVgxVW9DaHBBd1wiLFxuICBcInBob25lSWRcIjogXCI5Mjg5NzkzOC05MDEzLTQ1MGItYTY4ZC0wZTJkMTVlZjNiZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgOTMsXG4gICAgICAzLFxuICAgICAgOTAsXG4gICAgICA1NCxcbiAgICAgIDE2OCxcbiAgICAgIDE2MCxcbiAgICAgIDExOSxcbiAgICAgIDU1LFxuICAgICAgOTUsXG4gICAgICA1OSxcbiAgICAgIDg3LFxuICAgICAgMTUwLFxuICAgICAgODAsXG4gICAgICAxMTYsXG4gICAgICAxNDksXG4gICAgICAxMzIsXG4gICAgICAxMzAsXG4gICAgICAxNDAsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTY2LFxuICAgICAgMjQ2LFxuICAgICAgNCxcbiAgICAgIDEyNCxcbiAgICAgIDExOCxcbiAgICAgIDEyNCxcbiAgICAgIDIwLFxuICAgICAgNzMsXG4gICAgICAyMjcsXG4gICAgICAyNyxcbiAgICAgIDY5LFxuICAgICAgMTYsXG4gICAgICA3NixcbiAgICAgIDQ0LFxuICAgICAgMjExLFxuICAgICAgMTQyLFxuICAgICAgMjM0LFxuICAgICAgMTM3LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRBSFhKWFlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDkwNjg3NTc6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYp9io2YYg2LPZiNin2KrbjFwiLFxuICAgIFwibGlkXCI6IFwiMzc1MzgwNjQ1MTkxNzk6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2JGNjhJR0VQdXR1TGtHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6ZEJtWE1kU2R0V1U5M1RnZ2tKR2h1aUFqSkhPWnJuZU51MXlFWm1NNkhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5NM0F1SXhJNUpUT25xdmRyYUJVU1ZtMTlHbUtYSlNyTlFkMkFwdjFKOTZVMkgzZ0RaM20yazVzcnhXeFZmc3JBS0hmM25FYU1NSG42TmlYWDFyY0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImY5Z1phcmdRdHhDanJueHV2cVViMVljdkJQdHkyY21HUEhYYmZ1MG1HQ0djNlRaZlFCSTNnQzNURWducXJaVTRvWTlyUllkc2NmSmpHV1VCamJoa2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwOTA2ODc1NzozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTA3Mzc5MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-1e1c86aa-c402-410c-a426-68a6a9175e65",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "atiqkhanswati",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
