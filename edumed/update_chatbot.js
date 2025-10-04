const fs = require('fs');
const path = require('path');

// Directory containing HTML files
const htmlDir = __dirname;

// Chatbot include code
const chatbotInclude = `
    <!-- Chatbot Include -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/chatbot.css">
    <script src="js/chatbot.js"></script>
    <script>
        // Initialize chatbot when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            if (window.medEduChatbot) return;
            window.medEduChatbot = new MedEduChatbot();
        });
    </script>
`;

// Function to update a single HTML file
function updateHtmlFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Skip if already contains chatbot
        if (content.includes('mededu-chatbot')) {
            console.log(`Skipping ${filePath} - already has chatbot`);
            return;
        }
        
        // Add Font Awesome if not present
        if (!content.includes('font-awesome') && !content.includes('fontawesome')) {
            const fontAwesomeLink = '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n';
            const headEnd = content.indexOf('</head>');
            if (headEnd !== -1) {
                content = content.slice(0, headEnd) + fontAwesomeLink + content.slice(headEnd);
            }
        }
        
        // Add chatbot container before </body>
        const bodyEnd = content.lastIndexOf('</body>');
        if (bodyEnd !== -1) {
            const chatbotHtml = `
    <!-- Chatbot Container -->
    <div id="mededu-chatbot" class="chatbot-container">
        <div class="chatbot-header">
            <h3>MedEdu Assistant</h3>
            <button class="chatbot-close">×</button>
        </div>
        <div class="chatbot-messages"></div>
        <div class="chatbot-input-container">
            <input type="text" class="chatbot-input" placeholder="Posez votre question...">
            <button class="chatbot-send">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>
    <button class="chatbot-toggle">
        <i class="fas fa-robot"></i>
    </button>

    <!-- Chatbot JS -->
    <script src="js/chatbot.js"></script>
    <script>
        // Initialize chatbot when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            if (!window.medEduChatbot) {
                window.medEduChatbot = new MedEduChatbot();
            }
        });
    </script>
`;
            content = content.slice(0, bodyEnd) + chatbotHtml + '\n' + content.slice(bodyEnd);
            
            // Add chatbot CSS in head
            const headEnd = content.indexOf('</head>');
            if (headEnd !== -1) {
                const chatbotCss = '    <link rel="stylesheet" href="css/chatbot.css">\n';
                content = content.slice(0, headEnd) + chatbotCss + content.slice(headEnd);
            }
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`Skipping ${filePath} - no </body> tag found`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Process all HTML files in the directory
function processHtmlFiles() {
    const files = fs.readdirSync(htmlDir);
    
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(htmlDir, file);
            updateHtmlFile(filePath);
        }
    });
    
    console.log('Chatbot integration complete!');
}

// Run the script
processHtmlFiles();
