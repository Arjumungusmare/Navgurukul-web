const apiKey = "here is my api key";

let div = document.getElementById("div");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", function() {
    const store = input.value;

    if (store === "") {
        alert("Please Enter Something");
    } else {
        para.innerText = "Loding....";

        async function chatbox() {

            const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
                {
                    method: "POST",

                    headers: {
                        "Content-type": "application/json"
                    },

                    body: JSON.stringify({
                        content: {
                            5
                        }
                    })
                }
            )
        }
    }
});