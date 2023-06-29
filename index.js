const { fetchJson, range, parseMarkdown } = require('./lib/function')
const { Telegraf, Context } = require('telegraf')
const fetch = require('node-fetch')
const help = require('./lib/help')
const tele = require('./lib/tele')
const chalk = require('chalk')
const os = require('os')
const fs = require('fs')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const cheerio = require('cheerio')
const axios = require('axios')
const { apikey, bot_token, owner, ownerLink, version, prefix , botName} = JSON.parse(fs.readFileSync(`./config.json`))
premium = require("./database/premium.json")
const nodemailer = require('nodemailer');
const { ia } = require('./lib/ia.js')
const mono = "`";
//const tess = `${lxrd.chat.id}`;
//defina
const donom = "`teddyzinofc`"; //dono
const canal = "`teddy_buscas`";
const ini = `🔍 ⚡️ 「𝑇𝑒𝑑𝑑𝑦 𝐵𝑢𝑠𝑐𝑎𝑠」 ⚡️ 🔎`;
const fim = `\n𝐷𝑜𝑛𝑜 𝑑𝑜 𝑏𝑜𝑡: ${donom}\n𝐶𝑎𝑛𝑎𝑙: ${canal}`;
//obs é oque aparece em baixo das consultas

const { exec, spawn, execSync } = require('child_process')

//const das consultas e vips

  
let entertainment = {}

if (bot_token == '') {
	return console.log('=== BOT TOKEN CANNOT BE EMPTY ===')
}

////
const TelegramBot = require('node-telegram-bot-api');
const teddyt = new TelegramBot('5648937247:AAFv0av_VmnNloU52SHvK7PoapAdn6JdVU4')
const bot = new Telegraf("5648937247:AAFv0av_VmnNloU52SHvK7PoapAdn6JdVU4")

//const das consultas e vips
const sinespApi = require('sinesp-api');
const { CNPJ } = require('cnpj-consulta')
const cep = require('cep-promise')
const ip = require('ip-promise')
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))


//Ligando o Bot caso ele consiga acessar o token 



bot.command('start', async(lxrd) => {
    user = tele.getUser(lxrd.message.from)
    await help.start(lxrd, user.full_name)
    
})
bot.command('menu', async(lxrd) => {
    user = tele.getUser(lxrd.message.from)
    await help.help(lxrd, user.full_name, lxrd.message.from.id.toString())
})

bot.on("callback_query", async(lxrd) => {
    cb_data = lxrd.callbackQuery.data.split("-")
    user_id = Number(cb_data[1])
    callback_data = cb_data[0]
    user = tele.getUser(lxrd.callbackQuery.from)
    const isGroup = lxrd.chat.type.includes("group")
    const groupName = isGroup ? lxrd.chat.title : ""
    if (!isGroup) console.log(chalk.whiteBright("├"), chalk.cyanBright("[ AÇÕES ]"), chalk.whiteBright(callback_data), chalk.greenBright("a partir de"), chalk.whiteBright(user.full_name))
    if (isGroup) console.log(chalk.whiteBright("├"), chalk.cyanBright("[ AÇÕES ]"), chalk.whiteBright(callback_data), chalk.greenBright("a partir de"), chalk.whiteBright(user.full_name), chalk.greenBright("no"), chalk.whiteBright(groupName))
    if (callback_data == "help") return await help[callback_data](lxrd, user.full_name, user_id)
    await help[callback_data](lxrd, user_id.toString())
})

bot.on("message", async(lxrd) => {
    try {
        const body = lxrd.message.text || lxrd.message.caption || lxrd.from.id || ""
        comm = body.trim().split(" ").shift().toLowerCase()
        cmd = false
        if (prefix != "" && body.startsWith(prefix)) {
            cmd = true
            comm = body.slice(1).trim().split(" ").shift().toLowerCase()
        }
        user_id = lxrd.from.id
        const command = comm
        const args = await tele.getArgs(lxrd)
        const user = tele.getUser(lxrd.message.from)
        
        

        const reply = async(text) => {
            for (var x of range(0, text.length, 4096)) {
                return await lxrd.replyWithMarkdown(text.substr(x, 4096), { disable_web_page_preview: true })
            }
        }
        
        
        
        
       
        
        ///const de vip 
        const sender = lxrd.from.id || lxrd.chat.id
        const tess = lxrd.chat.id
        const lx = "```"
        const tesk = args.join(" ")
		const isCmd = cmd
		const ownerID = [`${setting.ownerID}`]
		const isOwner = ownerID[0].includes(sender)
		const isGroup = lxrd.chat.type.includes('group')
		const groupName = isGroup ? lxrd.chat.title : ''
        
        //const mek = lxrd.menssage[0]
        const mek = lxrd
		const isImage = lxrd.message.hasOwnProperty('photo')
		const isVideo = lxrd.message.hasOwnProperty('video')
		const isAudio = lxrd.message.hasOwnProperty('audio')
		const isSticker = lxrd.message.hasOwnProperty('sticker')
		const isContact = lxrd.message.hasOwnProperty('contact')
		const isLocation = lxrd.message.hasOwnProperty('location')
		const isDocument = lxrd.message.hasOwnProperty('document')
		const isAnimation = lxrd.message.hasOwnProperty('animation')
		const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation

		const quotedMessage = lxrd.message.reply_to_message || {}
		const isQuotedImage = quotedMessage.hasOwnProperty('photo')
		const isQuotedVideo = quotedMessage.hasOwnProperty('video')
		const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
		const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
		const isQuotedContact = quotedMessage.hasOwnProperty('contact')
		const isQuotedLocation = quotedMessage.hasOwnProperty('location')
		const isQuotedDocument = quotedMessage.hasOwnProperty('document')
		const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
		const isQuoted = lxrd.message.hasOwnProperty('reply_to_message')

		var typeMessage = body.substr(0, 50).replace(/\n/g, '')
		if (isImage) typeMessage = 'Image'
		else if (isVideo) typeMessage = 'Video'
		else if (isAudio) typeMessage = 'Audio'
		else if (isSticker) typeMessage = 'Sticker'
		else if (isContact) typeMessage = 'Contact'
		else if (isLocation) typeMessage = 'Location'
		else if (isDocument) typeMessage = 'Document'
		else if (isAnimation) typeMessage = 'Animation'

		if (!isGroup && !isCmd) console.log(chalk.whiteBright('├'), chalk.cyanBright('[ PRIVADO ]'), chalk.whiteBright(typeMessage), chalk.greenBright('de'), chalk.whiteBright(user.full_name))
		if (isGroup && !isCmd) console.log(chalk.whiteBright('├'), chalk.cyanBright('[  GRUPO  ]'), chalk.whiteBright(typeMessage), chalk.greenBright('de'), chalk.whiteBright(user.full_name), chalk.greenBright('No grupo'), chalk.whiteBright(groupName))
		if (!isGroup && isCmd) console.log(chalk.whiteBright('├'), chalk.cyanBright('[ COMANDO ]'), chalk.whiteBright(typeMessage), chalk.greenBright('de'), chalk.whiteBright(user.full_name))
		if (isGroup && isCmd) console.log(chalk.whiteBright('├'), chalk.cyanBright('[ COMANDO ]'), chalk.whiteBright(typeMessage), chalk.greenBright('de'), chalk.whiteBright(user.full_name), chalk.greenBright('No grupo'), chalk.whiteBright(groupName))

		var file_id = ''
		if (isQuoted) {
			file_id = isQuotedImage
? lxrd.message.reply_to_message.photo[lxrd.message.reply_to_message.photo.length - 1].file_id
: isQuotedVideo
? lxrd.message.reply_to_message.video.file_id
: isQuotedAudio
? lxrd.message.reply_to_message.audio.file_id
: isQuotedDocument
? lxrd.message.reply_to_message.document.file_id
: isQuotedAnimation
? lxrd.message.reply_to_message.animation.file_id
: ''
		}
		var mediaLink = file_id != '' ? await tele.getLink(file_id) : ''
         const q = args.join(' ') 

        dono = ["5436323543"]
        const isDono= dono.includes(`${lxrd.chat.id}`)
        //premium = JSON.parse(fs.readFileSync(`./lib/premium.json`))
        //const isPremium = premium.includes(`${lxrd.chat.id}`)
 
 //database
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}

//salvar database depois de 1 minuto 
setInterval(() => {
 fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

//Premium infinito 
global.limitawal = {
    premium: "Infinito",
    free: 80
}

global.prem = require("./premium")
const isPremium = isOwner || isOwner || prem.checkPremiumUser(tess, premium);
prem.expiredCheck(bot, premium);


    try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 let user = global.db.users[user_id]
 if (typeof user !== 'object') global.db.users[user_id] = {}
 if (user) {
   if (!isNumber(user.afkTime)) user.afkTime = -1
   if (!('afkReason' in user)) user.afkReason = ''
   if (!isNumber(user.limit)) user.limit = limitUser
 } else global.db.users[user_id] = {
   afkTime: -1,
   afkReason: '',
   limit: limitUser,
 }
 let chats = global.db.chats[tess]
   if (typeof chats !== 'object') global.db.chats[tess] = {}
   if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('chatbot' in chats)) chats.chatbot = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antilinkyt' in chats)) chats.antilinkyt = false
  if (!('autoblock' in chats)) chats.autoblock = false
  if (!('isWelcome' in chats)) chats.isWelcome = false
  if (!('antilinkall' in chats)) chats.antilinkall = false
  if (!('antiytchannel' in chats)) chats.antiytchannel = false
  if (!('antitiktok' in chats)) chats.antitiktok = false
  if (!('antitelegram' in chats)) chats.antitelegram = false
  if (!('antiinstagram' in chats)) chats.antiinstagram = false
  if (!('antifb' in chats)) chats.antifb = false
  if (!('antibule' in chats)) chats.antibule = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('wame' in chats)) chats.wame = false
  if (!('antitwitter' in chats)) chats.antitwitter = false
  if (!('antivn' in chats)) chats.antivn = false
  if (!('antiphoto' in chats)) chats.antiphoto = false
  if (!('antisticker' in chats)) chats.antisticker = false
  if (!('antivideo' in chats)) chats.antivideo = false
} else global.db.chats[tess] = {
   mute: false,
   chatbot: false,
   wame: false,
   antilink: false,
   antilinkyt: false,
   isWelcome: false,
   antilinkall: false,
   antiytchannel: false,
   antitiktok: false,
   antitelegram: false,
   antiinstagram: false,
   antifb: false,
   antibule: false,
   antiwame: false,
   antitwitter: false,
   antisticker: false,
   antiphoto: false,
   antivn: false,
   antivideo: false,
 }
 let setting = global.db.settings[isDono]
 if (typeof setting !== 'object') global.db.settings[isDono] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateLocation' in setting)) setting.templateLocation = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateList' in setting)) setting.templateList = false
if (!('templateDoc' in setting)) setting.templateDoc = false
    } else global.db.settings[isDono] = {
status: 0,
autobio: true,
templateImage: false,
templateLocation: false,
templateGif: false,
templateMsg: false,
templateList: false,
templateDoc: false,
    }
} catch (err) {
 console.error(err)
}

// resetar limite com uma hora
let cron = require('node-cron')
cron.schedule('00 1 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Limite resetado')
}, {
scheduled: true,
timezone: "America/Sao_Paulo"
})


const buttonApagar = async (texts) => {
lxrd.reply({
                    text: texts
                },{
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                    text: '[  🗑️  ] Apagar [  🗑️  ]',
                                    callback_data: 'delete-' + user_id
                                },

                            ]
                        ]
                    }
                })


  }

const buttonValidar = async (texts) => {
lxrd.reply({
                    text: texts
                },{
                    parse_mode: 'MARKDOWN',
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                    text: '[  🌀️  ] Atualizar [  🌀️  ]',
                                    callback_data: 'meupauegrande-' + user_id
                                },

                            ]
                        ]
                    }
                })


  }
  
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
		switch (command) {
case'start':
case 'help':
case 'menu':
await help.help(lxrd, user.full_name, lxrd.message.from.id.toString())
break

case "idgp":
reply(`${lxrd.chat.id}`)
break

case "id":
reply(`${lxrd.from.id}`)
break

//CONSULTAS🔥 
case 'cnpj2': 
        
        if (!isGroup) return reply(`Só usuários Premiums pode usar esse comando se você ainda não comprou fale com o @teddyzinofc`)
        reply(`*CONSULTANDO CNPJ: ${tesk} 🔍*`)
vnc = await fetchJson(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${tesk}`)
reply(`
🔍 ⚡️ 「𝑇𝑒𝑑𝑑𝑦 𝐵𝑢𝑠𝑐𝑎𝑠」 ⚡️ 🔎

*🔍 Consulta de CNPJ 🔎*\n\n
NOME FANTASIA: ${mono}${vnc["NOME FANTASIA"]}${mono}
RAZAO SOCIAL: ${mono}${vnc["RAZAO SOCIAL"]}${mono}
CNPJ: ${mono}${vnc.CNPJ}${mono}
STATUS: ${mono}${vnc.STATUS}${mono}
SETOR: ${mono}${vnc.SETOR}${mono}
CEP: ${mono}${vnc.CEP}${mono}
DATA ABERTURA: ${mono}${vnc["DATA ABERTURA"]}${mono}
DDD: ${mono}${vnc.DDD}${mono}
TELEFONE: ${mono}${vnc.TELEFONE}${mono}
EMAIL: ${mono}${vnc.EMAIL}${mono}
TIPO LOGRADOURO: ${mono}${vnc["TIPO LOGRADOURO"]}${mono}
LOGRADOURO: ${mono}${vnc.LOGRADOURO}${mono}
NUMERO: ${mono}${vnc.NUMERO}${mono}
COMPLEMENTO: ${mono}${vnc.COMPLEMENTO}${mono}
BAIRRO: ${mono}${vnc.BAIRRO}${mono}
MUNICIPIO: ${mono}${vnc.MUNICIPIO}${mono}
UF: ${mono}${vnc.UF}${mono}
CNAE PRINCIPAL DESCRICAO: ${mono}${vnc["CNAE PRINCIPAL DESCRICAO"]}${mono}
CNAE PRINCIPAL CODIGO: ${mono}${vnc["CNAE PRINCIPAL CODIGO"]}${mono}

𝐷𝑜𝑛𝑜 𝑑𝑜 𝑏𝑜𝑡: ${donom}
𝐶𝑎𝑛𝑎𝑙: ${canal}
`) //SE TIRAR OS CREDITOS É GAY
break


case 'bin2':
if (!tesk) return reply(`Use assim: ${prefix}${command} 45717360`)
try {
reply(`*CONSULTANDO BIN: ${tesk} 🔍*`)
havity = await fetchJson(`https://lookup.binlist.net/${tesk}`)
reply(`
🔍 ⚡️ 「𝑇𝑒𝑑𝑑𝑦 𝐵𝑢𝑠𝑐𝑎𝑠」 ⚡️ 🔎

*INFOS GENERICAS 🔒* 
❱ LENGTH: ${mono}${havity.number.length}${mono}
❱ LUHN: ${mono}${havity.number.luhn}${mono}\n\n
*INFOS CARD 💳*
❱ BANDEIRA: ${mono}${havity["scheme"]}${mono}
❱ TIPO: ${mono}${havity["type"]}${mono}
❱ BRAND: ${mono}${havity["brand"]}${mono}
❱ PREPAID: ${mono}${havity["prepaid"]}${mono}\n\n
*INFOS BANK 🏦*
❱ BANK NAME: ${mono}${havity.bank["name"]}${mono}
❱ BANK URL: ${mono}${havity.bank["url"]}${mono}
❱ BANK PHONE: ${mono}${havity.bank["phone"]}${mono}
❱ BANK CITY: ${mono}${havity.bank["city"]}${mono}\n\n
*INFOS LOC 📍*
❱ NUMERIC: ${mono}${havity.country["numeric"]}${mono}
❱ ALPHA2: ${mono}${havity.country["alpha2"]}${mono}
❱ NAME: ${mono}${havity.country["name"]}${mono}
❱ CURRENCY: ${mono}${havity.country["currency"]}${mono}
❱ LATITUDE: ${mono}${havity.country["latitude"]}${mono}
❱ LONGITUDE: ${mono}${havity.country["longitude"]}${mono}

𝐷𝑜𝑛𝑜 𝑑𝑜 𝑏𝑜𝑡: ${donom}
𝐶𝑎𝑛𝑎𝑙: ${canal}
`)
} catch {
return reply(`*Bin invalida*`)
}
break

case'banco': 
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 33`)
try {
reply(`*CONSULTANDO BANCO: ${tesk} 🔍*`)	
vnc = await fetchJson(`https://bryan-api.bryan00066.repl.co/api/search/bank?bank=${tesk}&apikey=bryan23`)
vnc = vnc.resultado
vn = ` 🔍 ⚡️ 「𝑇𝑒𝑑𝑑𝑦 𝐵𝑢𝑠𝑐𝑎𝑠」 ⚡️ 🔎\n
PREFIXO: ${mono}${vnc.bank_query}${mono} 
NOME: ${mono}${vnc.nome}
NOME COMPLETO: ${mono}${vnc.nome_completo}${mono}
ISPB: ${mono}${vnc.ispb}${mono}\n\n${fim}
`
reply(vn)
} catch (e) { 
reply('*BANCO NÃO ENCONTRADO 🔍*')
}
break
            


case "cep": //@teddyzinofc | @teddydo7
if (args.length < 1) return reply(`exemplo /cep 54520015`)
reply(`*CONSULTANDO CEP: ${tesk} 🔍*`)
tedd = await fetchJson(`https://bryan-api.bryan00066.repl.co/api/search/cep?cep=${tesk}&apikey=bryan23`)
teddy = tedd.resultado
resultcep = `${ini}\n\n
CEP: ${mono}${teddy.cep_query}${mono}
ESTADO: ${mono}${teddy.estado}${mono}
DDD: ${mono}${teddy.ddd}${mono}
CIDADE: ${mono}${teddy.cidade}${mono}
IBGE: ${mono}${teddy.cidade_ibge}${mono}
ENDEREÇO: ${mono}${teddy.address}${mono}
NOME DO ENDEREÇO: ${mono}${teddy.address_name}${mono}
ENDEREÇO TIPO: ${mono}${teddy.address_type}${mono}
BAIRRO: ${mono}${teddy.distrito}${mono}
LATITUDE: ${mono}${teddy.latitude}${mono}
LONGITUDE: ${mono}${teddy.longitude}\n\n${mono}
𝐷𝑜𝑛𝑜 𝑑𝑜 𝑏𝑜𝑡: ${donom}\n𝐶𝑎𝑛𝑎𝑙: ${canal}`   
reply(resultcep)
break

/*case 'nome':
case 'parentes':
case 'beneficios':
case 'tel1':
case 'tel2':
case 'tel3':
case 'cpf':
case 'cpf2':
case 'cpf3':
case 'cpf4':
case 'placa1':
case 'cnpj':
case 'score':
case 'cpfscore':
case 'vizinhos':
case 'site':
case 'ip':
case 'cep':
case 'bin':
case 'email':
try {
if (!isGroup) return reply(`este comando é só para usuários premiums se você não é premium fale com o @teddyzinofc`)
reply(`*CONSULTANDO ${command}: ${tesk} 🔍*`)
consulta = await fetchJson(`http://japa-busca.xyz/${command}/${q}`);
fs.writeFileSync(`./arquivos/database/${tesk}.txt`, consulta.resultado.str);
teddyt.sendDocument(lxrd.chat.id, `./arquivos/database/${tesk}.txt`)
} catch (e) {
console.log(e)
reply(`Apis caíram ou teve algum erro`)}
break
*/

case 'nome':
case 'parentes':
case 'beneficios':
case 'cpf2':
case 'cpf3':
case 'placa':
case 'cnpj':
case 'score':
case 'cpfscore':
case 'vizinhos':
case 'site':
case 'ip':
case 'cep':
case 'email':
try {
if (!isGroup) return reply(`este comando é só para usuários premiums se você não é premium fale com o @teddyzinofc`)
reply(`*CONSULTANDO ${command}: ${tesk} 🔍*`)
consulta = await fetchJson(`http://br3.bronxyshost.com:3048/${command}/${tesk}/teste8`);
fs.writeFileSync(`./arquivos/database/${command}/${tesk}.txt`, consulta.resultado)
teddyt.sendDocument(lxrd.chat.id, `./arquivos/database/${command}/${tesk}.txt`)
reply(`${ini}\n\n${consulta.resultado}${fim}`)
} catch (e) {
console.log(e)
reply(`Apis caíram ou teve algum erro`)}
break

case "tel":
if (!isGroup) return reply(`este comando é só para usuários premiums se você não é premium fale com o @teddyzinofc`)
reply(`*CONSULTANDO ${command}: ${tesk} 🔍*`)
tedd = await fetchJson(`https://apis-xanax.vncs.repl.co/outros/consultas/tel1?q=${tesk}&apikey=x-devs30`)
resulttel = tedd.resultado
fs.writeFileSync(`./arquivos/database/tel/${tesk}.txt`, resulttel)
teddyt.sendDocument(lxrd.chat.id, `./arquivos/database/tel/${tesk}.txt`)
reply(`${ini}
${mono}${resulttel}${mono}
${fim}`)
} catch (e) {
console.log(e)
reply(`Apis caíram ou teve algum erro`)}
break

case "bin"
reply(`*CONSULTANDO ${command}: ${tesk} 🔍*`)
tedd = await fetchJson(`https://apis-xanax.vncs.repl.co/outros/consultas/bin?bin=${tesk}&apikey=x-devs30`)
resultbin = tedd.resultado
reply(`${ini}
${mono}${resultbin}${mono}
${fim}`)
break


// FIM DAS CONSULTAS

//VIP

case "chatype":
reply(lxrd.chat.type)
break
case 'addprem':
if (!isOwner) return reply('Só pra gente foda')
prem.addPremiumUser(args[0], args[1], premium);
reply('Premium adicionado com sucesso mestre 🔥')
const chatType = lxrd.chat.type;

  if (chatType === 'private') {
    bot.telegram.sendMessage(args[0], `Olá, seu Premium de ${args[1]}, acabou de ser validado, aproveite o máximo os recursos do bot!\n\nAlém das puxadas, aqui você encontra vantagens que outros bots não tem, como logos, Downloads, Inteligencias artificiais (simi, ChatGPT), brincadeiras, geradores entre outros, tudo em apenas um bot!\n\nConsultas disponíveis abaixo:\n\n🔎 TELEFONE\n🔎 CPF 1\n🔎 CPF 2\n🔎 CPF 3\n🔎 CPF 4\n🔎 CNPJ 1 \n🔎 CNPJ 2\n🔎 BIN\n🔎 IP\n🔎 PLACA\n🔎 SCORE\n🔎 BANCO\n🔎 CEP \n🔎 NOME\n🔎 DDD`);
  } else {
        bot.telegram.sendMessage(args[0], `Olá, seu premium/desse grupo de ${args[1]} acabou de ser validado, aproveite o máximo os recursos do bot!\n\nAlém das puxadas, aqui você encontra vantagens que outros bots não tem, como logos, Downloads, Inteligencias artificiais (simi, ChatGPT), brincadeiras, geradores entre outros, tudo em apenas um bot!\n\nConsultas disponíveis abaixo:\n\n🔎 TELEFONE\n🔎 CPF 1\n🔎 CPF 2\n🔎 CPF 3\n🔎 CPF 4\n🔎 CNPJ 1 \n🔎 CNPJ 2\n🔎 BIN\n🔎 IP\n🔎 PLACA\n🔎 SCORE\n🔎 BANCO\n🔎 CEP \n🔎 NOME\n🔎 DDD`);
  }
break

case "tmgp":
try {
bot.telegram.sendMessage(-1001648980149, `♨️Trasmissão♨️\n\n${tesk}`)
reply(`Enviado com sucesso`)
} catch {
reply(`Não foi possível enviar sua mensagem`)
}
break

case "tmc":
bot.telegram.sendMessage(-1001905480767, `${tesk}`)
break

case "tm":
try {
bot.telegram.sendMessage(-1001905480767, `${tesk}`)
reply(`Enviado com sucesso`)
} catch {
reply(`Não foi possível enviar sua mensagem`)
}
break

//FIM
case "traduzir": //@teddyzinofc | @teddydo7
if (args.length < 1) return reply(`exemplo /traduzir hello`)
fetch(encodeURI(`https://bryan-api.bryan00066.repl.co/api/tools/translate?text=${tesk}&lang=pt&apikey=bryan23`))
.then(response => response.json())
      .then(resultado => {
        reply(`
🔍 ⚡️ 「𝑇𝑒𝑑𝑑𝑦 𝐵𝑢𝑠𝑐𝑎𝑠」 ⚡️ 🔎

${mono}${resultado.resultado}${mono}

𝐷𝑜𝑛𝑜 𝑑𝑜 𝑏𝑜𝑡: ${donom}
𝐶𝑎𝑛𝑎𝑙: ${canal}
        `)
        })
break
//FIM CONSULTAS 🧸

		}
		


	} catch (e) {
		console.log(chalk.whiteBright('├'), chalk.cyanBright('[  ERROR  ]'), chalk.redBright(e))
	}
})


bot.launch({
	dropPendingUpdates: true,
})
bot.telegram.getMe().then((getme) => {
	itsPrefix = prefix != '' ? prefix : 'No Prefix'
	console.log(chalk.greenBright(' ╭==================================================='))
	console.log(chalk.greenBright(' │ + Dono    : ' + owner || ''))
	console.log(chalk.greenBright(' │ + Nome do bot : ' + getme.first_name || ''))
	console.log(chalk.greenBright(' │ + Versão  : ' + version || ''))
	console.log(chalk.greenBright(' │ + Hospedagem     : ' + os.hostname() || ''))
	console.log(chalk.greenBright(' │ + Plataforma : ' + os.platform() || ''))
	console.log(chalk.greenBright(' │ + Prefix   : ' + itsPrefix))
	console.log(chalk.greenBright(' ╰==================================================='))
	console.log(chalk.whiteBright('╭─── [ REGISTROS ]'))
})
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
