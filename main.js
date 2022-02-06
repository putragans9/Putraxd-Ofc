const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./PutraXd.js')
nocache('../PutraXd.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (PutraXd = new WAConnection()) => {
	PutraXd.logger.level = 'warn'
	console.log(color(figlet.textSync('PutraXd Ofc', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SOURCE CODE INI DIJAGA DAN DI LINDUNGI OLEH PUTRAXD OFC]\n\n', 'orange'), color('\n======TERIMKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•NINO\n•IKYADS\n•PutraXd\n•SEMUA PATNER SAYA\n•DZBOTZ\n•PENYEDIA APIKEY\n•DHANI BOTZ\n•MY TEAM\n•ZAK BOTZ\n•AKIRA\n•FAUZANBOTZ\n•VIZZBOTZ\n•RAFATABOTZ\n•SEMUA SUBSCRIBER', 'yellow'))
	
	PutraXd.browserDescription = ["PutraXd BOTZ", "FireFox", "3.0.0"];

	// Menunggu QR
	PutraXd.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN SEKARANG BRO JAN LAMA-LAMA'))
	})

	// Menghubungkan
	fs.existsSync(`./PutraXd.json`) && PutraXd.loadAuthInfo(`./PutraXd.json`)
	PutraXd.on('connecting', () => {
		console.log(color('[ PutraXd BOTZ ]', 'orange'), color('PROSES PENYAMBUNGAN'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "P",
    "Pu",
    "Put",
    "Putra",
    "PutraXd",
    "PutraXd G",
    "PutraXd GA",
    "PutraXd GAN",
    "PutraXd GANT",
    "PutraXd GANTE",
    "PutraXd GANTEN",
    "PutraXd GANTENG",
    "PutraXd GANTENG B",
    "PutraXd GANTENG BA",
    "PutraXd GANTENG BAN",
    "PutraXd GANTENG BANG",
    "PutraXd GANTENG BANGE",
    "PutraXd GANTENG BANGET",
    "PutraXd GANTENG BANGET",
    "PutraXd GANTENG BANGET B",
    "PutraXd GANTENG BANGET BT",
    "PutraXd GANTENG BANGET BTW",
    "PutraXd GANTENG BANGET BTW J",
    "PutraXd GANTENG BANGET BTW JA",
    "PutraXd GANTENG BANGET BTW JAN",
    "PutraXd GANTENG BANGET BTW JANG",
    "PutraXd GANTENG BANGET BTW JANGA",
    "PutraXd GANTENG BANGET BTW JANGAN",
    "PutraXd GANTENG BANGET BTW JANGAN L",
    "PutraXd GANTENG BANGET BTW JANGAN LU",
    "PutraXd GANTENG BANGET BTW JANGAN LUP",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA S",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SU",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUB",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBS",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSC",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCR",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCRI",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCRIB",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE.",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE..",
    "PutraXd GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE..."
  ]}

	//connect
	PutraXd.on('open', () => {
		console.log(color('[ PutraXd BOTZ ]', 'orange'), color('BOT SUDAH AKTIF SELAMAT MENGGUNAKAN:)'));
	})

	// session
	await PutraXd.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./PutraXd.json`, JSON.stringify(PutraXd.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	PutraXd.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	PutraXd.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	PutraXd.on('group-participants-update', async (anu) => {
		await welcome(PutraXd, anu)
	})

	PutraXd.on('chat-update', async (message) => {
		require('./PutraXd.js')(PutraXd, message)
	})
}

starts()