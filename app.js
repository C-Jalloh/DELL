function talk(){
    var know = {
        "Who are you" : "Hello, C Jalloh's Chatbot here ",
        "How are you" : "Good :)",
        "What can I do for you":"Please give me a like on my Socials @CJalloh25 and check out my youtube channel @CTech",
        "Your followers" : "I have my family of 5000 members, I don't have followers, I have a supportive Family ",
        "Ok" : "Thank you so much",
        "Bye" : "Okay! We'll meet soon.."
    };
    var user = document.getElementById("userBox").value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = " Sorry, I don't understand <br>";
    }


}