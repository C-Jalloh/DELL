function talk(){
    var know = {
        "who are you" : "Hello, C Jalloh's Chatbot here ",
        "how are you" : "Good :)",
        "what can I do for you":"Please give me a like on my Socials @CJalloh25 and check out my youtube channel @CTech",
        "your followers" : "I have my family of 5000 members, I don't have followers, I have a supportive Family ",
        "ok" : "Thank you so much",
        "bye" : "Okay! We'll meet soon.."
    };
    var user = document.getElementById("userBox").value.toLowerCase();
    const regex= /[!\?]+/g;
    if(regex.test(user)) user = user.replace(regex,"");
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = " Sorry, I don't understand <br>";
    }


}