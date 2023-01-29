import Event from '../structures/Event.js';
import client from '../index.js';
import deployCommands from '../utils/deployCommands.js'

export default new Event({
    name: 'ready',
    async execute() {
        console.log(`${client.user.tag} Bot Aktif!`)
        client.user.setActivity(`🚀 Sponsor: RasByte.net`)
        deployCommands()
    }
});