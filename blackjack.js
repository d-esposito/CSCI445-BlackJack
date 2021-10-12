let deck = [];

const valueMap = new Map();
valueMap.set("2", 2);
valueMap.set("3", 3);
valueMap.set("4", 4);
valueMap.set("5", 5);
valueMap.set("6", 6);
valueMap.set("7", 7);
valueMap.set("8", 8);
valueMap.set("9", 9);
valueMap.set("10", 10);
valueMap.set("Jack", 10);
valueMap.set("Queen", 10);
valueMap.set("King", 10);
valueMap.set("Ace", 11);

class Card {
        constructor(value, suit) {
                this.value = value;     // STRING (conversions with the map)
                this.suit = suit;       // STRING
        }
}

class Player {
        constructor(choice, hand) {
                this.choice = choice;   // STRING
                this.hand = hand;       // LIST
        }
}

function generateNewDeck() {
        deck = [new Card("2", "heart"), new Card("3", "heart"), new Card("4", "heart"), new Card("5", "heart"), new Card("6", "heart"), new Card("7", "heart"),
        new Card("8", "heart"), new Card("9", "heart"), new Card("10", "heart"), new Card("Jack", "heart"), new Card("Qeen", "heart"), new Card("King", "heart"),
        new Card("Ace", "heart"), new Card("2", "diamond"), new Card("3", "diamond"), new Card("4", "diamond"), new Card("5", "diamond"), new Card("6", "diamond"), new Card("7", "diamond"),
        new Card("8", "diamond"), new Card("9", "diamond"), new Card("10", "diamond"), new Card("Jack", "diamond"), new Card("Qeen", "diamond"), new Card("King", "diamond"),
        new Card("Ace", "diamond"), new Card("2", "club"), new Card("3", "club"), new Card("4", "club"), new Card("5", "club"), new Card("6", "club"), new Card("7", "club"),
        new Card("8", "club"), new Card("9", "club"), new Card("10", "club"), new Card("Jack", "club"), new Card("Qeen", "club"), new Card("King", "club"),
        new Card("Ace", "club"), new Card("2", "spade"), new Card("3", "spade"), new Card("4", "spade"), new Card("5", "spade"), new Card("6", "spade"), new Card("7", "spade"),
        new Card("8", "spade"), new Card("9", "spade"), new Card("10", "spade"), new Card("Jack", "spade"), new Card("Qeen", "spade"), new Card("King", "spade"),
        new Card("Ace", "spade")];
}