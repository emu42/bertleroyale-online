// Game.ts
import type {Game, Move} from "boardgame.io";

export interface BertleRoyaleState {
    players: Array<BertleRoyalePlayer>;
    deck: Array<BertleRoyaleCard>,
    discardPile: Array<BertleRoyaleCard>,
}

export interface BertleRoyalePlayer {
    name: string,
    handCards: Array<BertleRoyaleCard>,
    passiveCards: Array<BertleRoyaleCard>,
    coins: number,
    eliminated: boolean
}

export interface BertleRoyaleCard {
    cardType: string,
    counters: number
}

export enum BertleRoyaleCardTypes {
    BIGBRAINBERT,
    SHARKBERT,
    BERTXODIA,
    PIXELBERT,
    HACKERBERT,
    BERTENDER,
    GAMEBERT,
    SNEAKYBERT,
    BILLBERT,
    MINEBERT,
    ANGRYBERT,
    FROGBERT,
    TBERT,
    SCAMBERT,
    DRAGONBERT,
    EVILBERT,
    PLUMBERT,
    LEECHBERT,
    HOTBERTATO,
    DAGOBERT,
    SUSBERT,
    STONKSBERT,
    BIRTHDAYBERT,
    BOSSBERT,
    SANTABERT,
    SPLASHBERT,
    SADBERT,
    MARXBERT,
    LOVEBERT
}

interface BertleRoyaleCardTypeProperties {
    name: string,
    description: string,
    art: string,
    rarity: BertleRoyaleCardRarity,
    copies: number
    passive: boolean
}

enum BertleRoyaleCardRarity {
    SPECIAL = 0,
    COMMON = 1,
    UNCOMMON = 2,
    RARE = 3,
    EPIC = 4,
    LEGENDARY = 5,
}

//<BertleRoyaleCardTypeProperties> ({
//       name: 'Big Brain Bert',
//       description: 'Pick a number from 0 to 5. Reveal the top card of the deck. If it has the same cost, keep it.',
//       art:'bbbert.png',
//       rarity:BertleRoyaleCardRarity.COMMON,
//       copies: 8,
//       passive:false})

const CardTypeProperies = new Map([
    [BertleRoyaleCardTypes.BIGBRAINBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Big Brain Bert',
            description: 'Pick a number from 0 to 5. Reveal the top card of the deck. If it has the same cost, keep it.',
            art: 'bbbert.png',
            rarity: BertleRoyaleCardRarity.COMMON,
            copies: 8,
            passive: false
        })
    ],
    [BertleRoyaleCardTypes.SHARKBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Sharkbert',
            description: 'Pick a player! They have to either discard one random card or lose 2 coins.',
            art: 'sharkbert.png',
            rarity: BertleRoyaleCardRarity.COMMON,
            copies: 8,
            passive: false
        })],
    [BertleRoyaleCardTypes.BERTXODIA,
        <BertleRoyaleCardTypeProperties>({
            name: 'Bertxodia',
            description: 'This card has no effect on its own. If you have 4 other Bertxodia cards when player, you win the game!',
            art: 'bertxodia.png',
            rarity: BertleRoyaleCardRarity.COMMON,
            copies: 8,
            passive: false
        })],
    [BertleRoyaleCardTypes.PIXELBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Pixelbert',
            description: 'Remove a card from the shop, then refill it.',
            art: 'pixelbert.png',
            rarity: BertleRoyaleCardRarity.COMMON,
            copies: 8,
            passive: false
        })],
    [BertleRoyaleCardTypes.HACKERBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Hackerbert',
            description: 'Remove up to 3 cards from the shop, then refill it.',
            art: 'hackerbert.png',
            rarity: BertleRoyaleCardRarity.UNCOMMON,
            copies: 6,
            passive: false
        })],
    [BertleRoyaleCardTypes.BERTENDER,
        <BertleRoyaleCardTypeProperties>({
            name: 'Bertender',
            description: 'Reveal and immediatly play the top card of the deck 2 times in a row..',
            art: 'bertender.png',
            rarity: BertleRoyaleCardRarity.UNCOMMON,
            copies: 6,
            passive: false
        })],
    [BertleRoyaleCardTypes.GAMEBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Gamebert',
            description: 'Draw 1 card from the deck.',
            art: 'gamebert.png',
            rarity: BertleRoyaleCardRarity.UNCOMMON,
            copies: 6,
            passive: false
        })],
    [BertleRoyaleCardTypes.SNEAKYBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Sneakybert',
            description: 'Take 1 random card from another player\'s hand.',
            art: 'sneakybert.png',
            rarity: BertleRoyaleCardRarity.UNCOMMON,
            copies: 6,
            passive: false
        })],
    [BertleRoyaleCardTypes.BILLBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Billbert',
            description: 'Gain +2 coins. You can also discard any cards in your hand and receive 2 gold for each card.',
            art: 'billbert.png',
            rarity: BertleRoyaleCardRarity.UNCOMMON,
            copies: 6,
            passive: false
        })],
    [BertleRoyaleCardTypes.MINEBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Minebert',
            description: 'Place 5 coins on the card. At the start of your turn take 1 coin from Minebert, discard when there are no more coins on it.',
            art: 'minebert.png',
            rarity: BertleRoyaleCardRarity.UNCOMMON,
            copies: 6,
            passive: true
        })],
    [BertleRoyaleCardTypes.ANGRYBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Angrybert',
            description: 'Discard 1 passive card in play. Gain half its cost (rounded up).',
            art: 'angrybert.png',
            rarity: BertleRoyaleCardRarity.RARE,
            copies: 3,
            passive: false
        })],
    [BertleRoyaleCardTypes.SCAMBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Scambert',
            description: 'Take 2 coins from another player.',
            art: 'scambert.png',
            rarity: BertleRoyaleCardRarity.RARE,
            copies: 3,
            passive: false
        })],
    [BertleRoyaleCardTypes.FROGBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Frogbert',
            description: 'Pick a player to place this card in front of. At the start of your turn, skip turn and discard this card..',
            art: 'frogbert.png',
            rarity: BertleRoyaleCardRarity.RARE,
            copies: 3,
            passive: true
        })],
    [BertleRoyaleCardTypes.PLUMBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Plumbert',
            description: 'Search the discard pile for 1 card, add it to your hand and pay half its cost (rounded up)..',
            art: 'plumbert.png',
            rarity: BertleRoyaleCardRarity.RARE,
            copies: 3,
            passive: false
        })],
    [BertleRoyaleCardTypes.TBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'T-Bert',
            description: 'Take a passive card ain front of a player of your choice. Place it in front of yourself',
            art: 'tbert.png',
            rarity: BertleRoyaleCardRarity.RARE,
            copies: 3,
            passive: false
        })],
    [BertleRoyaleCardTypes.DRAGONBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Dragonbert',
            description: 'Choose a player! They have to either discard 2 random cards or lose 4 coins.',
            art: 'dragonbert.png',
            rarity: BertleRoyaleCardRarity.EPIC,
            copies: 2,
            passive: false
        })],
    [BertleRoyaleCardTypes.EVILBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Evilbert',
            description: 'Discard all passive cards. Gain 1 coni for each of the discarded cards.',
            art: 'evilbert.png',
            rarity: BertleRoyaleCardRarity.EPIC,
            copies: 2,
            passive: false
        })],
    [BertleRoyaleCardTypes.BIRTHDAYBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Birthdaybert',
            description: 'Take a random card from each player, keep 1 and discard the rest.',
            art: 'bdaybert.png',
            rarity: BertleRoyaleCardRarity.EPIC,
            copies: 2,
            passive: false
        })],
    [BertleRoyaleCardTypes.BOSSBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Bossbert',
            description: 'At the end of your turn choose a player, give them 1 coin and draw a random card from their hand.',
            art: 'bossbert.png',
            rarity: BertleRoyaleCardRarity.EPIC,
            copies: 2,
            passive: true
        })],
    [BertleRoyaleCardTypes.LEECHBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Leechbert',
            description: 'Any time other players buy a card, you get 1 coin.',
            art: 'leechbert.png',
            rarity: BertleRoyaleCardRarity.LEGENDARY,
            copies: 1,
            passive: true
        })],
    [BertleRoyaleCardTypes.DAGOBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Dagobert',
            description: 'If you have at least 20 coins while this card is in front of you, the game ends and you win!',
            art: 'dagobert.png',
            rarity: BertleRoyaleCardRarity.LEGENDARY,
            copies: 1,
            passive: true
        })],
    [BertleRoyaleCardTypes.SUSBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Susbert',
            description: 'If you are eliminated while this card is in front of you, the game ends instantly and you win!',
            art: 'susbert.png',
            rarity: BertleRoyaleCardRarity.LEGENDARY,
            copies: 1,
            passive: true
        })],
    [BertleRoyaleCardTypes.STONKSBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Stonksbert',
            description: 'At the start of your turn either add 1 coin to this card, or gain coins equals to the amount of coins on Stonksbert. Starts with 1 coin.',
            art: 'stonksbert.png',
            rarity: BertleRoyaleCardRarity.LEGENDARY,
            copies: 1,
            passive: true
        })],
    [BertleRoyaleCardTypes.HOTBERTATO,
        <BertleRoyaleCardTypeProperties>({
            name: 'Hot Bert-ato',
            description: 'At the end of your turn lose 1 coin and discard the top card of the deck, if cast was 0 tehn discard Hot Bert-ato and lose 5 coins else move this card to another player.',
            art: 'hotbertato.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 1,
            passive: true
        })],
    [BertleRoyaleCardTypes.SANTABERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Santabert',
            description: 'Draw as many card as there are players. Keep 1, distribute the rest.',
            art: 'santabert.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 1,
            passive: false
        })],
    [BertleRoyaleCardTypes.SPLASHBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Splashbert',
            description: 'Gamebert used his secret special attack... but nothing happened.',
            art: 'splashbert.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 5,
            passive: false
        })],
    [BertleRoyaleCardTypes.SADBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Sadbert',
            description: 'Gamebert has to pay rent. Lose 2 coins.',
            art: 'sadbert.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 5,
            passive: false
        })],
    [BertleRoyaleCardTypes.SPLASHBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Splashbert',
            description: 'Gamebert used his secret special attack... but nothing happened.',
            art: 'splashbert.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 1,
            passive: false
        })],
    [BertleRoyaleCardTypes.MARXBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Marxbert',
            description: 'If you are below 3 coins, gain 3 coins. Otherwise lose 3 coins.',
            art: 'marxbert.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 3,
            passive: false
        })],
    [BertleRoyaleCardTypes.LOVEBERT,
        <BertleRoyaleCardTypeProperties>({
            name: 'Lovebert',
            description: 'If both lovebirds are the last players standing, they win together!',
            art: 'lovebert.png',
            rarity: BertleRoyaleCardRarity.SPECIAL,
            copies: 2,
            passive: false
        })],
]);

export const BertleRoyale: Game<BertleRoyaleState> = {
    setup: () => ({
        players: [
            {
                name: "Jane",
                handCards: [],
                passiveCards: [],
                coins: 15,
                eliminated: false,
            },
            {
                name: "Joe",
                handCards: [],
                passiveCards: [],
                coins: 15,
                eliminated: false,
            },
        ],
        deck: [],
        discardPile: []
    }),

    moves: {
        playCard: ({G, playerID}, card) => {
            return G;
        },
    },
}
