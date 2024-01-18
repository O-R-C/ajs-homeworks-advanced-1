import orderByProps from "./orderByProps";

const character = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

console.log(orderByProps(character, ["name", "level"]));
console.log(orderByProps(character));
