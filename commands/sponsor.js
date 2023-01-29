import Discord from 'discord.js';
import getDate from '../utils/getDate.js'

export const data = {
    name: 'sponsor',
    description: 'Sponsor bilgilerini verir',
    async execute({ client, interaction, args }) {

        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel('Destek Sunucum')
                    .setURL('https://discord.gg/xspxZeh58x')
                    .setEmoji('1011307210594336828')
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel('Botu Davet Et!')
                    .setURL('https://discord.com/oauth2/authorize?client_id=967069819763585044&permissions=534723950656&scope=bot%20applications.commands')
                    .setEmoji('1009825915125108796')
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel('Oy Ver')
                    .setURL('https://top.gg/bot/967069819763585044/vote')
                    .setEmoji('1011305517496418315')
                    .setStyle(Discord.ButtonStyle.Link),
            );

        let tarih = getDate();

     const embed = new Discord.EmbedBuilder()
    .setColor("#0068fc")
     .setAuthor({ name: "RasByte - En iyi Almanya lokasyon sunucu sağlayıcısı!", iconURL: "https://rasbyte.net/assets/images/theme/favicon.png", url: "https://discord.rasbyte.net" })
    .setDescription("Hey! Sende RasByte'a katılarak ücretsiz olarak **Discord Bot**, **Website** Projelerinizi 7/24 aktif halde tutabilirsiniz. RasByte 2 Yıldır hizmet vermektedir ve sunucuları Almanya lokasyonda yerleşiyor. Zaman kaybetme [bize katıl](https://discord.rasbyte.net)!")
    .setThumbnail("https://rasbyte.net/assets/images/theme/favicon.png")
    .setFooter({ text: "Venüs RasByte'ın yüksek performanslı sunucularında yer alıyor", iconURL: "https://rasbyte.net/assets/images/theme/favicon.png" })
        interaction.reply({ embeds: [embed], components: [row] })
    }
}

export const slash_data = new Discord.SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)