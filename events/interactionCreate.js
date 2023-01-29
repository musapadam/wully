import Event from '../structures/Event.js';
import client from '../index.js';

export default new Event({
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.inCachedGuild()) return;

        if (interaction.isChatInputCommand()) {
            let commandName = interaction.commandName
            let args = interaction.options
            let command = client.commands.get(commandName)

            command.data.execute({ client, interaction, args })
            console.log(`${interaction.user.tag} >> ${interaction.guild.name} adlı sunucuda /${commandName} kullandı`)
        }
    }
});