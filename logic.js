import {config} from "dotenv"
config()
import {Configuration, OpenAIApi} from "openai"

const openai = new OpenAIApi(
    new Configuration({
        apiKey: process.env.OPEN_AI_KEY
    })
)

const userInterface = document.getElementById("user-input").innerText
 
document.getElementById("submit").onclick = function(){
    async input =>{
    const res = await openai
    .createChatCompletion({
        model:"gpt-3.5-turbo",
        messages: [{role:"user",content:userInterface}],
    })
    document.getElementById("answer").innerTxt = res.data.choices[0].messages.content;
}}
