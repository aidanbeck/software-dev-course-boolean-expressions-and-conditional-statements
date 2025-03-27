/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasCoat = true;
const hasTorch = true;
const hasMap = true;
const hasKey = true;
let score = 0;

console.log("You see multiple paths: one leads to the mountains, another to the village, a third to an old house, and a fourth into a cave.");
const choice = readline.question("Do you go to the 'mountains', 'village', 'house', or 'cave'?");

if (choice === "mountains" && hasCoat) {
  console.log("You safely navigate through the dark mountains, the biting frost kept at bay by your warm coat.");
  score += 20;
} else if (choice === "mountains" && !hasCoat) {
  console.log("The cold wind pierces through your thin clothes until you numb. It doesn't hurt anymore, but you feel very tired. Maybe you'll sit down in the snow, just for a little while...");
} else if (choice === "village" && hasMap) {
  console.log("You find your way to the village.");
  score += 10;
} else if (choice === "village" && !hasMap) {
  console.log("You get lost and wander aimlessly.");
} else if (choice === "house" && hasKey) {
  console.log("You unlock the front door and enter the house. There is plenty of food here to last a while.");
  score += 15;
} else if (choice == "house" && !hasKey) {
  console.log("The door is locked. You cannot proceed.");
} else if (choice == "cave" && hasTorch) {
  console.log("With the torch lighting you way, you delve into the cave. In a dark passage, you find a chest of long lost treasure!");
  score += 100;
} else {
  console.log("Without a torch, you get lost and cannot find your way back.");
}

if (score > 0) {
  console.log("You win! Your score is: " + score + ".");
} else {
  console.log("You have died. Sorry!");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/