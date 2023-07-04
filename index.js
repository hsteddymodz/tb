const { Telegraf } = require('telegraf')

const bot = new Telegraf("5648937247:AAFv0av_VmnNloU52SHvK7PoapAdn6JdVU4")

const { fetchJson, range, parseMarkdown } = require('./lib/function')
const help = require('./lib/help')
const tele = require('./lib/tele')
const fs = require('fs')
const mono = "`";
const { 
  exec
} = require('child_process')
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const donom = "`teddyzinofc`"; //dono
const canal = "`teddy_buscas`";
const ini = `🔍 ⚡️ 「𝑇𝑒𝑑𝑑𝑦 𝐵𝑢𝑠𝑐𝑎𝑠」 ⚡️ 🔎\n\n`;
const fim = `\n𝐷𝑜𝑛𝑜 𝑑𝑜 𝑏𝑜𝑡: ${donom}\n𝐶𝑎𝑛𝑎𝑙: ${canal}`;

//const das consultas e vips
const sinespApi = require('sinesp-api');
const { CNPJ } = require('cnpj-consulta');
const cep = require('cep-promise');
const ip = require('ip-promise');
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ownerID = [`${setting.ownerID}`]

const grupvipID = [`${setting.grupvipID}`]
ifindApikey = setting.ifindApikey

const chalk = require('chalk')
const os = require('os')
const { apikey, bot_token, owner, ownerLink, version, prefix} = JSON.parse(fs.readFileSync(`./src/config.json`))


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
    if (lxrd.callbackQuery.from.id != user_id) return lxrd.answerCbQuery("COMPRE ACESSO VIP PRA ACESSAR O BOTÃO", { show_alert: true })
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
        
        
        
        
        
        const isCmd = cmd
        const isGroup = lxrd.chat.type.includes("group")
        const groupName = isGroup ? lxrd.chat.title : ""
        
        ///const de vip 
        const sender = lxrd.from.id || lxrd.chat.id
        const lx = "```"
        const tesk = args.join(" ")
       
      const isPrem = premium.includes(sender)
        
        const isOwner = ownerID[0].includes(sender)
        var fome = [5067459024]
        const isImage = lxrd.message.hasOwnProperty("photo")
        const isVideo = lxrd.message.hasOwnProperty("video")
        const isAudio = lxrd.message.hasOwnProperty("audio")
        const isSticker = lxrd.message.hasOwnProperty("sticker")
        const isContact = lxrd.message.hasOwnProperty("contact")
        const isLocation = lxrd.message.hasOwnProperty("location")
        const isDocument = lxrd.message.hasOwnProperty("document")
        const isAnimation = lxrd.message.hasOwnProperty("animation")
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation

        const quotedMessage = lxrd.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty("photo")
        const isQuotedVideo = quotedMessage.hasOwnProperty("video")
        const isQuotedAudio = quotedMessage.hasOwnProperty("audio")
        const isQuotedSticker = quotedMessage.hasOwnProperty("sticker")
        const isQuotedContact = quotedMessage.hasOwnProperty("contact")
        const isQuotedLocation = quotedMessage.hasOwnProperty("location")
        const isQuotedDocument = quotedMessage.hasOwnProperty("document")
        const isQuotedAnimation = quotedMessage.hasOwnProperty("animation")
        const isQuoted = lxrd.message.hasOwnProperty("reply_to_message")

        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
        else if (isDocument) typeMessage = "Document"
        else if (isAnimation) typeMessage = "Animation"

        if (!isGroup && !isCmd) console.log(chalk.whiteBright("├"), chalk.cyanBright("[ PRIVADO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("a partir de"), chalk.whiteBright(user.full_name))
        if (isGroup && !isCmd) console.log(chalk.whiteBright("├"), chalk.cyanBright("[  GRUPO  ]"), chalk.whiteBright(typeMessage), chalk.greenBright("a partir de"), chalk.whiteBright(user.full_name), chalk.greenBright("no"), chalk.whiteBright(groupName))
        if (!isGroup && isCmd) console.log(chalk.whiteBright("├"), chalk.cyanBright("[ COMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("a partir de"), chalk.whiteBright(user.full_name))
        if (isGroup && isCmd) console.log(chalk.whiteBright("├"), chalk.cyanBright("[ COMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("a partir de"), chalk.whiteBright(user.full_name), chalk.greenBright("no"), chalk.whiteBright(groupName))

        var file_id = ""
        if (isQuoted) {
            file_id = isQuotedImage ? lxrd.message.reply_to_message.photo[lxrd.message.reply_to_message.photo.length - 1].file_id :
                isQuotedVideo ? lxrd.message.reply_to_message.video.file_id :
                isQuotedAudio ? lxrd.message.reply_to_message.audio.file_id :
                isQuotedDocument ? lxrd.message.reply_to_message.document.file_id :
                isQuotedAnimation ? lxrd.message.reply_to_message.animation.file_id : ""
        }
        var mediaLink = file_id != "" ? await tele.getLink(file_id) : ""

        switch (command) {

            case 'menu':
            case 'help':
                await help.help(lxrd, user.full_name, lxrd.message.from.id.toString())
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

case "bin":
reply(`*CONSULTANDO ${command}: ${tesk} 🔍*`)
tedd = await fetchJson(`https://apis-xanax.vncs.repl.co/outros/consultas/bin?bin=${tesk}&apikey=x-devs30`)
resultbin = tedd.resultado
reply(`${ini}
${mono}${resultbin}${mono}
${fim}`)
break

            case "nome":
            case "email":
            case "cpf":
            case "cpf1":
            case "cpf2":
            case "cpf3":
            case "tel":
            case "tel1":
            case "tel2":
            case "cnpj":
            case "placa":
            case "placa1":
            case "site":
            case "score":
            case "cns":
            case "cep":
            case "chk":
            case "rg":
            case "ip":
            if (!isGroup) return reply(`*apenas usuários premiums pode usar se não tem o premium fale com o teddyzinofc*`)
            try {
            reply(`*CONSULTANDO ${command}: ${tesk}*`)
            tedd = await fetchJson(`https://teddy-puxadas.onrender.com/${command}/${tesk}?apiKey=tpteddy`)
            teddy = tedd.resultado.str
            reply(`${ini}${mono}${teddy}${mono}${fim}`)
            } catch {
            reply(`Não Encontrado Ou Teve algum erro ao pegar o resultado`)
            }
            break

            case 'id':
            
            await reply(`${lxrd.message.from.id}`)
            break
            case 'grupid':
           
            
            await reply(`${groupID}`)
            break
default:

if (body.startsWith('$')){
if (!isOwner) return 
var konsol = body.slice(1)
exec(konsol, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
} 

            
        }//cases e defaut
        
        
        
        
  } catch (e) {
        console.log(chalk.whiteBright("├"), chalk.cyanBright("[  E R R O  4 0 4  ]"), chalk.redBright(e))
  }
}); 
bot.launch()
bot.telegram.getMe().then((getme) => {
    itsPrefix = (prefix != "") ? prefix : "Sem prefixo"
    console.log(chalk.greenBright(' ===================================================='))
    console.log(chalk.greenBright(" │ + Proprietário    : " + owner || ""))
    console.log(chalk.greenBright(" │ + Nome do bot : " + getme.first_name || ""))
    console.log(chalk.greenBright(" │ + Versão  : " + version || ""))
    console.log(chalk.greenBright(" │ + Host     : " + os.hostname() || ""))
    console.log(chalk.greenBright(" │ + Plataforma : " + os.platform() || ""))
    console.log(chalk.greenBright(" │ + Prefix   : " + itsPrefix))
    console.log(chalk.greenBright(' ===================================================='))
    console.log(chalk.whiteBright('╭─── [ REGISTROS ]'))
})
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))