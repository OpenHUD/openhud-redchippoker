const utg = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A5s',
    'KQs', 'KJs', 'KTs',
    'QJs', 'QTs',
    'JTs', 'J9s',
    'T9s',
    '98s',
    'AKo', 'AQo'
];

const utgPlus1 = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A5s',
    'KQs', 'KJs', 'KTs',
    'QJs', 'QTs',
    'JTs', 'J9s',
    'T9s',
    '98s',
    'AKo', 'AQo'
];

const utgPlus2 = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A5s', 'A4s',
    'KQs', 'KJs', 'KTs', 'K9s',
    'QJs', 'QTs', 'Q9s',
    'JTs', 'J9s',
    'T9s',
    '98s',
    'AKo', 'AQo', 'AJo'
];

const lojack = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s',
    'QJs', 'QTs', 'Q9s',
    'JTs', 'J9s',
    'T9s', 'T8s',
    '98s',
    '87s',
    '76s',
    'AKo', 'AQo', 'AJo',
    'KQo'
];

const hijack = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o', '44o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s',
    'QJs', 'QTs', 'Q9s',
    'JTs', 'J9s',
    'T9s', 'T8s',
    '98s', '97s',
    '87s',
    '76s',
    '65s',
    'AKo', 'AQo', 'AJo', 'ATo',
    'KQo', 'KJo',
    'QJo'
];

const cutoff = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o', '44o', '33o', '22o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s', 'K8s',
    'QJs', 'QTs', 'Q9s', 'Q8s',
    'JTs', 'J9s', 'J8s',
    'T9s', 'T8s',
    '98s', '97s',
    '87s', '86s',
    '76s',
    '65s',
    '54s',
    'AKo', 'AQo', 'AJo', 'ATo',
    'KQo', 'KJo', 'KTo',
    'QJo', 'QTo',
    'JTo'
];

const button = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o', '44o', '33o', '22o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s',
    'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s',
    'JTs', 'J9s', 'J8s', 'J7s', 'J6s',
    'T9s', 'T8s', 'T7s', 'T6s',
    '98s', '97s', '96s',
    '87s', '86s', '85s',
    '76s', '75s',
    '65s', '64s',
    '54s',
    '43s',
    'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o',
    'KQo', 'KJo', 'KTo', 'K9o',
    'QJo', 'QTo', 'Q9o',
    'JTo', 'J9o',
    'T9o'
];

const sb = [
    'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o', '44o', '33o', '22o',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
    'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s',
    'JTs', 'J9s', 'J8s', 'J7s', 'J6s',
    'T9s', 'T8s', 'T7s', 'T6s',
    '98s', '97s', '96s', '95s',
    '87s', '86s', '85s', '84s',
    '76s', '75s', '74s',
    '65s', '64s', '63s',
    '54s', '53s',
    '43s',
    '32s',
    'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o',
    'KQo', 'KJo', 'KTo', 'K9o', 'K8o',
    'QJo', 'QTo', 'Q9o', 'Q8o',
    'JTo', 'J9o', 'J8o',
    'T9o', 'T8o',
    '98o'
];

const tables = [utg, utgPlus1, utgPlus2, lojack, hijack, cutoff, button, sb];

//////////////////////////////////////////////////

const numericRanks = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    'T': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
};

const toHandRepresentation = hand => {
    const card1rank = hand[0][0];
    const card1suit = hand[0][1];
    const card2rank = hand[1][0];
    const card2suit = hand[1][1];

    const repSuit = (card1suit === card2suit) ? 's' : 'o';
    const ranks = [card1rank, card2rank];
    ranks.sort((a, b) => (numericRanks[b] - numericRanks[a]));

    return `${ranks.join('')}${repSuit}`;
};

const shouldRaiseImpl = (players, position, handRep) => {
    const playersBehind = players - position - 1;

    if (playersBehind === 0) {
        return false;
    } else {
        const table = tables[tables.length - playersBehind];
        return table.includes(handRep);
    }
};

const errors = {
    'https://www.openhud.io/errors/invalid-data': {
        status: 400,
        title: 'Invalid Data'
    }
};

const shouldRaise = (seats, community, bb = 4) => {
    // TODO: multiple shoves before you
    const position = seats.findIndex(seat => seat.isMe);
    if (position === -1) {
        return false;
    }

    const seat = seats[position];
    const hand = seat.cards;
    if (hand.length === 0) {
        throw {
            type: 'https://www.openhud.io/errors/invalid-data',
            detail: 'Player cards are missing'
        };
    }

    const handRep = toHandRepresentation(hand);

    return shouldRaiseImpl(seats.length, position, handRep);
};

//////////

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const { Games, Bets } = require('openhud/api');


const app = express()
app.use(cors({
    origin: true,
    maxAge: 86400
}));
app.use(bodyParser.json());


app.post('/', (request, response) => {
    try {
        const { game, bb, seats, community } = request.body;

        if (game.type !== Games.TexasHoldem || game.bet !== Bets.NoLimit) {
            response.status(200).send({ players: {} });
            return;
        }

        let instruction = 'Fold!';
        if (shouldRaise(seats, community, bb)) {
            instruction = 'Raise if no action before you!';
        }

        const result = { players: {} };
        seats.forEach(seat => {
            const { playerName, isMe, isFolded, stack, pot, cards } = seat;
            if (isMe) {
                result.players[playerName] = instruction;
            }
        });

        response.status(200).send(result);
    } catch (e) {
        const error = errors[e.type];
        const result = {
            type: e.type,
            title: error.title,
            detail: e.detail
        };
        response.status(error.status).send(result);
    }
});

const metadata = {
    title: 'Red Chip Poker',
    description: 'Red Chip Poker Preflop Ranges, Holdem (https://redchippoker.com/infographic-pre-flop-ranges/)',
    games: [{
        type: Games.TexasHoldem,
        bet: Bets.NoLimit,
        format: '*'
    }],
    author: {
        name: 'Danny Leshem',
        email: 'dleshem@gmail.com'
    }
};

app.get('/', (request, response) => {
    response.status(200).send(metadata);
});


module.exports = {
    openhud: functions.https.onRequest(app)
};