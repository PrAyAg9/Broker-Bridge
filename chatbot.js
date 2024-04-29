function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
  
    // Display user message
    var userMsg = document.createElement("div");
    userMsg.classList.add("chat-msg", "user-msg");
    userMsg.textContent = userInput;
    chatBox.appendChild(userMsg);
  
    // Simulate bot response (You can replace this with actual bot logic)
    var botMsg = document.createElement("div");
    botMsg.classList.add("chat-msg", "bot-msg");
    botMsg.textContent = "I'm a real estate chatbot. How can I assist you further?";
    chatBox.appendChild(botMsg);
  
    // Clear user input
    document.getElementById("user-input").value = "";
  
    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  