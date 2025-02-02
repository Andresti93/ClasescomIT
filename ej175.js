const json = `{
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

const objetoJs = JSON.parse(json);

const name = objetoJs.character.name;
const clase = objetoJs.character.class;
const level = objetoJs.character.level;
console.log(name, clase, level);



