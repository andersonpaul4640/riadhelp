
document.getElementById("sendButton").addEventListener("click", async function () {
  const htmlCode = document.getElementById("htmlCode").value;
  const botToken = "7900918160:AAFOUuw42n_hOQCJAfaiWrKjOlQBjph1JBc"; // Replace with your Bot Token
  const chatId = "@freenettipsinfo"; // Replace with your Channel Username or Chat ID

  if (!htmlCode.trim()) {
    document.getElementById("status").textContent = "Please enter some HTML code.";
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `<b>HTML Output:</b>\n<pre>${htmlCode}</pre>`,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      document.getElementById("status").textContent = "Message sent to Telegram channel successfully!";
    } else {
      document.getElementById("status").textContent = "Failed to send message. Please check your Bot Token and Chat ID.";
    }
  } catch (error) {
    document.getElementById("status").textContent = "An error occurred. Please try again.";
  }
});
