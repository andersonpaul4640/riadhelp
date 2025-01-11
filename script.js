// Replace with your Bot API Token and Chat ID
const BOT_TOKEN = "7900918160:AAFOUuw42n_hOQCJAfaiWrKjOlQBjph1JBc";  // Your Bot API Token
const CHAT_ID = "-1002298597878";  // Your Channel Chat ID

// Form submission handling
document.getElementById("telegramForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("message").value;
    const responseField = document.getElementById("response");

    // API URL
    const apiURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                responseField.textContent = "Message sent successfully!";
                responseField.style.color = "green";
            } else {
                responseField.textContent = `Error: ${data.description}`;
                responseField.style.color = "red";
            }
        })
        .catch(error => {
            responseField.textContent = `Failed to send message: ${error.message}`;
            responseField.style.color = "red";
        });

    // Clear the message field
    document.getElementById("message").value = "";
});

// Function to update iframe content with auto-refresh
const updateIframe = () => {
    const iframe = document.getElementById("iframe");
    const codeContent = `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    pre { background-color: #f4f4f4; padding: 15px; border: 1px solid #ddd; }
                </style>
            </head>
            <body>
                <h2>Code Preview:</h2>
                <pre>
                    <code>
                        &lt;html&gt;
                            &lt;head&gt;
                                &lt;style&gt;
                                    body { font-family: Arial, sans-serif; }
                                &lt;/style&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                                &lt;h2&gt;Code Display&lt;/h2&gt;
                            &lt;/body&gt;
                        &lt;/html&gt;
                    </code>
                </pre>
            </body>
        </html>`;
    iframe.srcdoc = codeContent;
}

// Auto-refresh the iframe every 5 seconds
setInterval(updateIframe, 5000);
