import client from '../index.js';
import { Routes } from 'discord-api-types/v10';

export default function deployCommands() {
    console.log('Global komutlar kaydediliyor...')
    let commands = client.commands.map(x => x.slash_data)

    client.rest.put(Routes.applicationCommands(client.user.id), { body: commands })
        .then(y => {
            console.log('Global komutlar başarıyla kaydedildi!')
        })
        .catch(err => {
            console.log('Global komutlar kaydedilirken bir hata oluştu...')
            console.log(err)
        })
}