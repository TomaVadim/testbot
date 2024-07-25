import { Bot, Context, InlineKeyboard, webhookCallback } from "grammy/web";
import { Env } from "./env/env-schema";


export const onRequest: PagesFunction<Env> = async (context) => {

    if (context.request.headers.get('x-telegram-bot-api-secret-token') === context.env.TELEGRAM_BOT_SECRET_TOKEN) {

        const bot = new Bot(context.env.BOT_TOKEN, { botInfo: JSON.parse(context.env.BOT_INFO) });


        // handle bot update ligic TODO: move in different file(service?)
        const inlineKeyboard = new InlineKeyboard().webApp("Start test", "https://testbot-7ed.pages.dev/");

        bot.command("start", async (ctx: Context) => {
            await ctx.reply('Click the button below to open the web app', {
                reply_markup: inlineKeyboard
            });
        });

        return webhookCallback(bot, 'cloudflare-mod', { secretToken: context.env.TELEGRAM_BOT_SECRET_TOKEN })(context.request);
    }

    return new Response(null, { status: 403 });
}