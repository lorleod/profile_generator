const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userAnswers = [];

rl.question("What's your name? Nicknames are also acceptable :\) ", (answer) => {
  userAnswers.push(answer);

  rl.question("What's an activity you like doing? ", (answer) => {
    userAnswers.push(answer);

    rl.question("What do you listen to while doing that? ", (answer) => {
      userAnswers.push(answer);

      rl.question("Which meal is your favourite \(eg: dinner, brunch, etc.\) ", (answer) => {
        userAnswers.push(answer);

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          userAnswers.push(answer);

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            userAnswers.push(answer);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              userAnswers.push(answer);
              console.log(`${userAnswers[0]} loves ${userAnswers[1]}. They like to listen to ${userAnswers[2]} while at it. They prefer to eat ${userAnswers[4]} for ${userAnswers[3]}. ${userAnswers[5]} is their absolute fav sport. But their superpower is ${userAnswers[6]}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});