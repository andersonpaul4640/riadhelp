// Replace with your Bot API Token and Chat ID
const BOT_TOKEN = "7900918160:AAFOUuw42n_hOQCJAfaiWrKjOlQBjph1JBc";
const CHAT_ID = "-1002298597878";

// Form submission handling
document.getElementById("telegramForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("message").value;
    const responseField = document.getElementById("response");

    // API URL
    const apiURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Fetch API to send message
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
