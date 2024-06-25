global.chalk = require("chalk")
global.fs = require("fs")

global.ownername = "ᴋɪɪᴄᴏᴅᴇ ᴘʀᴏᴊᴇᴄᴛꜱ"
global.botname = "ᴇʟxʏᴢ"
global.botNumber = '6285974563066'
global.gambar = 'https://telegra.ph/file/b0eb229c895d9e8df4967.jpg'
global.author = 'ᴋɪɪᴄᴏᴅᴇ ᴘʀᴏᴊᴇᴄᴛꜱ'
global.mess = {
    wait: 'Loading...',
    succes: 'Sip, Berhasil',
    admin: 'Gagal, Khusus Admin Group',
    botAdmin: 'Gagal, Bot Belum Admin',
    owner: 'Gagal, Khusus Developer',
    group: 'Gagal, Fitur Untuk Grup',
    private: 'Gagal, Fitur Untuk Chat Pribadi',
    bot: 'Gagal, Bot Number User Special Features!!!',
    error: 'Eror...',    
    text: 'Gagal, Text Nya Mana?',
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
