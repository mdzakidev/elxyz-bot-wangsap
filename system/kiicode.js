/*====================================================
Created By KiiCode
Instagram = @kiicodeit
Tiktok = @kiicodeproject
YouTube = @KiiCodeProject
Channel = https://whatsapp.com/channel/0029VaZSdai5Ui2TMoNsYo0J
Note: minimal follow sosmed admin dan jangan hapus cr rek
=====================================================*/
require('./settings.js')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const crypto = require('crypto')
const fs = require('fs')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const os = require('os');
const { exec } = require("child_process");
const speed = require('performance-now');
const { TelegraPH } = require("./screp/TelegraPH")
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone');
const md5 = require('md5');
//=================================================//
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, reSize, generateProfilePicture } = require('./function/myfunc')
const ms = toMs = require('ms');
const { color, bgcolor } = require('./function/color')
//=================================================//
module.exports = kiicode = async (kiicode, m, chatUpdate, store) => {
try {        
  const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'


async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: kiicode.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, kiicode.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
kiicode.ev.emit('messages.upsert', msg)
}

// =================================================//

const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const isGroup = m.key.remoteJid.endsWith('@g.us')
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const pushname = m.pushName || "No Name"
const botNumber = await kiicode.decodeJid(kiicode.user.id)
const groupMetadata = m.isGroup ? await kiicode.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
         
// ====================================== //		         
         
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/Jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const isMedia = /image|document|file|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isDocument = (type == 'documentMessage')
const isFile = (type == 'fileMessage')
		
// ====================================== //		
		
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')    
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isOwner = [`${owner}@s.whatsapp.net`] == sender ? true : [`${owner}@s.whatsapp.net`].includes(sender) ? true : false
const senderNumber = sender.split('@')[0]   
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);	  
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]    

// ====================================== //		

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]
if (isCmd) {
console.log(chalk.white.bgBlue.bold('KiiCode'), color(`[ PESAN BARU ]`, `${halalu}`), color(`DARI`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`PESAN :`, `${halala}`), color(`${body}`, `${halale}`))
}    
async function sendkiicodeMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await kiicode.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const kiibut = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `\n${global.ownername}`},
    nativeFlowMessage: {
      buttons: [{text: "KiiCode"}
           ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}})
 kiicode.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}
	
//=================================================//
switch (command) {
case 'menu':{
let { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require('@whiskeysockets/baileys')

let sections = [{
title: 'Menu Bot', 
highlight_label: 'KiiCode',
rows: [{
title: 'Omner',
description: `nomor guweh`, 
id: '.owner'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};

let msgs = generateWAMessageFromContent(m.from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Halo suki`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `${ownername}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `I N F O - M E N U`,
            subtitle: "🪅",
            hasMediaAttachment: false
          }),
            
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
              {
                "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Rest Api`s\",\"url\":\"https://api.kiicodeit.me\",\"merchant_url\":\"https://api.kiicodeit.me\"}"
              },
           ],
          })
        })
    }
  }
}, {})
 kiicode.relayMessage(m.key.remoteJid, msgs.message, {
  messageId: m.key.id
})}
break
  
case 'owner': {
let list = [{
      displayName: "KiiCode",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${ownername}\nFN:${ownername}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: kiicodeofficial@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://kiicodeofficial.my.id\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Solok, Sumatera Barat, Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      }]
   kiicode.sendMessage(m.chat, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            }
        }, { quoted: m })
}
break 
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

kiicode.elxyz = kiicode.elxyz ? kiicode.elxyz : {};
if (m.isBaileys && m.fromMe) return;
if (!m.text) return
if (!kiicode.elxyz[m.chat]) return;      
const prompt = m.text;
let sessions = {};
let aiStatus = {};
if (!prompt || prompt.startsWith('/'))
  if (!kiicode.elxyz[m.chat]) return;

  console.log(`[${moment().format('HH:mm')}] from @${pushname}: ${prompt}`);

  try {
    const now = moment().tz('Asia/Jakarta');
    const jam = now.format('HH:mm');
    const tgl = now.format('DD-MM-YYYY');
    const hari = now.format('dddd');
    let postData = {
    prompt: prompt,
    sessionId: `${m.sender}`,
    character: `Kamu adalah elxyz, kamu adalah ai yang cerdas dan baik`
};

    let response = await axios({
        url: "https://elxyz.me/api/chat",
        method: 'POST',
        data: new URLSearchParams(Object.entries(postData)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    kiibut(response.data.data.answer)
} catch (error) {
    console.error("Error during chat request:", error);
    return "An error occurred during the chat process.";
}

if (budy.startsWith('>')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
kiicode.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
kiicode.sendMessage(`${owner}@s.whatsapp.net`, { text: "Hey there is an error:" + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
} 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
