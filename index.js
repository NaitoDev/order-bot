const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
let orole = '829756125775003709'//ايدي الرول
client.on('ready', () => {
	console.log(client.user.username + ' ready to go');
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'order')) {
	  var args = message.content.split(" ").slice(1).join(" ")
	  if (!args) return message.channel.send("nothing aprove 🙃")
		  let orderChannel = message.guild.channels.cache.find(c => c.name == '');//اسم روم الطلبات
		orderChannel.send(`<@&${orole}> New Order!`)
		const embed = new Discord.MessageEmbed()
			.setAuthor('orderd bye' + message.author.username)
			.setDescription(`new order`)
			.setTimestamp()
			.setFooter("order code bye NaitoDev")
			.addFields({ name: 'order is:', value: args });
		orderChannel.send(embed);
	}
});


client.on("message", message => {
  if (message.content === prefix + 'help order') {
    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`${prefix}order [ure order]`)
    message.channel.send(embed)
  }
})
client.login(process.env.naito);

/////البوت اخذ مني ٥ دقايق فا اذا تبي تشيل الحقوق مبروك عليك :3
