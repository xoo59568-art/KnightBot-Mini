/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names 
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaNkRIypiAEFRXFFEJ/ohgUSTfUkoocN/78Dqqq6HmZ6at9zi3HPPuSd/gDTDFVqiFkx+gLzEDSSoX5I2R2AClDoIUAmGwIcEggmoNcM7Ogrv4KPWxutcHLlq7OXTJJyvp/P5feToB74Q4q1uvIDHEOS1G2PvD4BHm6HaaRKbhTlKLxYtdysBp4xu5rv74kq7qnQ/4+i4qJ3VC3j0iBCXOL1q+Q0lqITxErVbiMuv0Ze1jVcduc7p5vKsY6TjXGcvVb1Yb82zkp4CZFdX2OrL2cn7Gn1+L6Z3Kx6tiTsoAmHjJZFyoCxL7pCjY98+tmeKztTo3Blv9Ct8TZFv+CglmLRf1l1d22dbX86VKEmrhT9vR2iMQzphd6/r4jBjdrYiW/tTGzrXrxFfXRwjFcLYVPRxUazmNxEO7td5CLsQmhkl5QNbSRosO5b8mfi2fJ+V6P/oPlgUCyJ7B5a9MFUTswvapTKLfb3b0nl8gW5MZtart2Jt5/w1+vNFMNbkjirgQTsVUDwd9jfVuvisb1JRsZ1NzamCz7qw0T/Rh6Qu/8QyOLU8nIWiN43QXEfKsXCV6YJumsHM2d1SSFuBLs0GVhAtjhzfeEmUFdb6ZrIDW9jTebMvV0WKoEqHTrNVZ5btGHEovzw7ilBr+GBCP4agRFdckRISnKX9GS8NAfQbC3klIk91gT0Y1wftQiv6bbk2z+O1yjGJrIVSFl4G1IDnWdbcZRimOHsBQ5CXmYeqCvlzXJGsbFeoquAVVWDy9/chSNGdvPnWV2PpIQhwWZFjWudxBv13U98voedldUqsNvXUfoFKMKF+HyNCcHqtehnrFJbeDTdIvUFSgUkA4wp9NIhK5IMJKWv0EVo183vdOc1kVsxeAUOQPP3APpgAiZbGIkePxxzFTnjpr+rbaw8L8/xbiggYgvj5jGEknqMEimYZUaTE/mV/8fhg2AP6iEAcV31wzK7iWG+X8aMZJZ/PU0uWl7Lcq/be0ftkvEmvXTlzpXI3JoH36W3Hs3rTROPB+uRYUisIZl3vdqOsmx/C8z+BgAkwziqMLaNjd21RqNA1Vom/ySOtuUOyErZbLC3bG5/sNS9jrlRzWTLXpbgW4qZbDwxdrDMNinvFbQrT5Y9Jwm1dtJ6+vvTVfNRgD30uhsLwRkvI29QX6thSzMG9DcyGs2NRu7/KrM93I1eFBtHCUFlMoxOX77kwVQqmxAnmKWTZQUcJbupze4be0At5zE7x7m1mn5mJf/1V+DlOvVf9NsDoGf0U9g7+t3dvxPsRox7DTxi/PpN/CaSyNzZqJ9eGnyfVjjtu/Lsr8tttaMdU49U1FstI2wqrO8Ux4PH4PgR5DEmQlQmYAJj6ZYZ9MARlVvcza6RB9qcvVjYMZXe1+s5jWBH5dw4OOEEVgUkOJrQoSjzLi2Ph8RNgcKxCPAcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
