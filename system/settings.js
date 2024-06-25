global.chalk = require("chalk")
global.fs = require("fs")

global.owner = '6289604363344' 
global.botNumber = '6289604363344'
global.gambar = 'https://telegra.ph/file/5625f1e35bbc08a500155.jpg'
global.author = 'KiiCode Official'
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