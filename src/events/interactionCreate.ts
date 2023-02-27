import { Interaction, Client } from "discord.js"
import Commands from '../utilities/interactions/commandInteraction';

export default {
    name : "interactionCreate",
    once : false,
    async execute (interaction : Interaction, client : Client , BOT_TOKEN : string, CLIENT_ID : string , GUILD_ID : string) {
        const commands = new Commands(client, interaction);

        if(!interaction.isChatInputCommand()) return;

        if(interaction.isChatInputCommand()){
            commands.handle();
        }
    }
}