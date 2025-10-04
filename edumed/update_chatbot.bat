@echo off
echo Adding chatbot to all HTML files...

REM Add chatbot to each HTML file
for %%f in (*.html) do (
    echo Updating %%f...
    
    REM Check if file already has chatbot
    findstr /i "mededu-chatbot" "%%f" >nul
    if errorlevel 1 (
        REM Add Font Awesome if not present
        findstr /i "font-awesome" "%%f" >nul || (
            powershell -Command "(Get-Content '%%f') -replace '(</head>)', '    <link rel=""stylesheet"" href=""https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"">$1' | Set-Content '%%f' -Encoding UTF8"
        )
        
        REM Add chatbot container before </body>
        powershell -Command "$content = Get-Content '%%f' -Raw; $chatbotHtml = @'
    <!-- Chatbot Container -->
    <div id=""mededu-chatbot"" class=""chatbot-container"">
        <div class=""chatbot-header"">
            <h3>MedEdu Assistant</h3>
            <button class=""chatbot-close"">×</button>
        </div>
        <div class=""chatbot-messages""></div>
        <div class=""chatbot-input-container"">
            <input type=""text"" class=""chatbot-input"" placeholder=""Posez votre question..."">
            <button class=""chatbot-send"">
                <i class=""fas fa-paper-plane""></i>
            </button>
        </div>
    </div>
    <button class=""chatbot-toggle"">
        <i class=""fas fa-robot""></i>
    </button>

    <!-- Chatbot CSS and JS -->
    <link rel=""stylesheet"" href=""css/chatbot.css"">
    <script src=""js/chatbot.js""></script>
    <script>
        // Initialize chatbot when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            if (!window.medEduChatbot) {
                window.medEduChatbot = new MedEduChatbot();
            }
        });
    </script>
'@; $content -replace '(</body>)', ($chatbotHtml + "`n$1") | Set-Content '%%f' -Encoding UTF8"
        
        echo Added chatbot to %%f
    ) else (
        echo Chatbot already exists in %%f
    )
)

echo Chatbot integration complete!
pause
