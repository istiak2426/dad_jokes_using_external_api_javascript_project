 const jokeEl = document.getElementById("joke");
 const button = document.getElementById("btn");

button.addEventListener("click", generateJoke)

 generateJoke()

 function generateJoke()  
    {


    const config = {

        headers: {
            'Accept': 'application/json' 
        },
        
    }

    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })

    }