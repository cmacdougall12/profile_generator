const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (mealTime) => {
        rl.question("What's your favourite thing to eat for that meal? ", (toEat) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {

            //return paragraph to console.log
            console.log(`Hi my name is ${name}! I love to ${activity} and listen to ${listen} while doing this activity. My favorite meal time is ${mealTime}, and my favorite meal is ${toEat}. I love watching and playing ${sport}!!`);

            rl.close();
          })
        })
      })
    })
  })
});




