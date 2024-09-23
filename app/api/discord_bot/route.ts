import { NextResponse } from 'next/server';
import { Client, GatewayIntentBits, TextChannel } from 'discord.js';

let client: Client;

async function initializeDiscordBot() {
  if (client) return;
  
  client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  });

  await client.login(process.env.DISCORD_BOT_TOKEN);
}

export async function POST(request: Request) {
  const { job } = await request.json();
  
  if (!client) {
    await initializeDiscordBot();
  }

  const channelId = process.env.DISCORD_CHANNEL_ID;
  if (!channelId) {
    throw new Error('DISCORD_CHANNEL_ID is not defined');
  }

  try {
    const channel = await client.channels.fetch(channelId);

    // 텍스트 기반 채널인지 확인
    if (channel && channel.isTextBased()) {
      const textChannel = channel as TextChannel;
      await textChannel.send(`/imagine a fantasy illustration of a ${job} in a medieval setting, detailed, vibrant colors`);
      return NextResponse.json({ message: 'Image generation started' });
    } else {
      throw new Error('Invalid channel or channel is not text-based');
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}