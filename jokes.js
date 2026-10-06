const jokeList = [
  {
    "setup": "Why don't eggs tell jokes?",
    "punchline": "They might crack each other up."
  },
  {
    "setup": "What do you call cheese that isn't yours?",
    "punchline": "Nacho cheese."
  },
  {
    "setup": "Why did the scarecrow win an award?",
    "punchline": "Because he was outstanding in his field."
  },
  {
    "setup": "What do you call a fish wearing a bow tie?",
    "punchline": "Sofishticated."
  },
  {
    "setup": "Why did the bicycle fall over?",
    "punchline": "It was two-tired."
  },
  {
    "setup": "What did one wall say to the other wall?",
    "punchline": "I'll meet you at the corner."
  },
  {
    "setup": "Why can't your nose be 12 inches long?",
    "punchline": "Because then it would be a foot."
  },
  {
    "setup": "What kind of music do mummies like?",
    "punchline": "Wrap music."
  },
  {
    "setup": "Why did the golfer bring two pairs of pants?",
    "punchline": "In case he got a hole in one."
  },
  {
    "setup": "What do you call a bear with no teeth?",
    "punchline": "A gummy bear."
  }
]

document.getElementById("getJokeButton").addEventListener("click",displayJoke);

// navigates type of structure used to show joke(s)
function displayJoke(){
    const numJokes = parseInt(document.getElementById("numIn").value) // get number of jokes
    if (numJokes === 1) { // no table
        const joke = jokeList[Math.floor(Math.random() * jokeList.length)]

        document.getElementById("jokeSetup").textContent = joke.setup
        document.getElementById("jokePunchline").textContent = joke.punchline

        document.getElementById("jokeTable").replaceChildren() // delete table from changing number
    }
    else if (numJokes <= jokeList.length && numJokes > 1) { // in table
        createTable(numJokes)
        document.getElementById("jokeSetup").replaceChildren()
        document.getElementById("jokePunchline").replaceChildren()
    }
    return   
}

function createTable(numJokes) {
  const pageTable = document.getElementById("jokeTable")
  pageTable.replaceChildren() // delete existing content

  const table = document.createElement('table')

  const tHead = document.createElement('thead')
  const tBody = document.createElement('tbody')
  
  // create headers for each column
  const headerRow = document.createElement('tr'); 
  ['Setup', 'Punchline'].forEach(text => {
    const th = document.createElement('th')
    th.textContent = text
    headerRow.appendChild(th)
  })

  tHead.appendChild(headerRow) // header created

  // create unique table (no repeats)
  const inTableIndexes = []
  while (inTableIndexes.length < numJokes) {
    randomNum = Math.floor(Math.random() * jokeList.length)
    flag = false
    inTableIndexes.forEach(index => {
        if (randomNum === index) {
            flag = true
        }
    })
    if (flag !== true) {
        inTableIndexes.push(randomNum)
    }
  }

  for (let i = 0; i < numJokes; i++) {
    const row = document.createElement('tr')

    const setup = document.createElement('td')
    setup.textContent = jokeList[inTableIndexes[i]].setup;

    const punchline = document.createElement('td')
    punchline.textContent = jokeList[inTableIndexes[i]].punchline;

    row.append(setup, punchline) // make the row
    tBody.append(row)
  }
  
  table.append(tHead, tBody)  // finalise internal table
  pageTable.append(table)   // update page table
  
}