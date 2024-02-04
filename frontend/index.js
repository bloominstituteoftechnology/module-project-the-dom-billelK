function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section div")
  widgets.forEach( widget => widget.classList.add("widget"))
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quoteOfTheDayWidget = document.querySelector(".quoteoftheday")
  const quoteIndex = Math.floor(Math.random() * 10);
  const quoteDiv = document.createElement('div')
  const authorAndDateDiv = document.createElement('div')
  quoteDiv.textContent = quotes[quoteIndex]["quote"]
  if (quotes[quoteIndex]["date"] !== null) {
    authorAndDateDiv.textContent = `${quotes[quoteIndex]["author"]} in ${quotes[quoteIndex]["date"]}`
  } else {
    authorAndDateDiv.textContent = `${quotes[quoteIndex]["author"]} in an unknown date`
  }
  quoteOfTheDayWidget.appendChild(quoteDiv)
  quoteOfTheDayWidget.appendChild(authorAndDateDiv)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const index = Math.floor(Math.random() * verbs.length);
  const corporateSpeakWidget = document.querySelector(".corporatespeak")
  let corporateP = document.createElement("p")
  corporateP.textContent = ` We need to ${verbs[quoteIndex]} our ${nouns[quoteIndex]} ${adverbs[quoteIndex]} in order to ${verbs[index]} our ${nouns[index]} ${adverbs[index]}.`
  corporateSpeakWidget.appendChild(corporateP)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown")
  const liftOffP = document.createElement("p")
  liftOffP.textContent = "T-minus 5..."
  countdownWidget.appendChild(liftOffP)
  for (let i = 4; i >= 0; i--) {
    setTimeout(() => {
      if (i !== 0) {
        liftOffP.textContent = `T-minus ${i}...`;
      } else {
        liftOffP.textContent = "Liftoff! 🚀";
      }
    }, (5 - i) * 1000);
  }

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friendsWidget = document.querySelector(".friends")
  const randomePersonIdx = Math.floor(Math.random() * people.length);
  const friendsPel = document.createElement("p")
  friendsPel.textContent = `${people[randomePersonIdx]["fname"]} ${people[randomePersonIdx]["lname"]} was born in ${people[randomePersonIdx]["dateOfBirth"].slice(0,4)} `
    if (people[randomePersonIdx]["friends"].length === 0){
      friendsPel.textContent += `and has no friends.`
    } else if (people[randomePersonIdx]["friends"].length === 1) {
      let singleFriend = people.find(person => people[randomePersonIdx]["friends"][0] === person.id)
      friendsPel.textContent += `and is friends with ${singleFriend["fname"]} ${singleFriend["lname"]}.`
    } else {
      friendsPel.textContent += `and is friends with `
        for (let i=0; i < people[randomePersonIdx]["friends"].length; i++) {
          people.forEach(person => {
            if (people[randomePersonIdx]["friends"][i] === person.id) {
              if (i===0) {
                friendsPel.textContent += `${person["fname"]} ${person["lname"]}`
              } else if (i === people[randomePersonIdx]["friends"].length-1) {
                friendsPel.textContent += ` and ${person["fname"]} ${person["lname"]}.`
              } else {
                friendsPel.textContent += `, ${person["fname"]} ${person["lname"]}`
              }
           }
          })
        }
    }
  friendsWidget.appendChild(friendsPel)
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  widgets.forEach( (widget, wigIdx) => widget.setAttribute("tabindex", wigIdx + 1))  
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
