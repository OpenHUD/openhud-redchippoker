// Based on https://redchippoker.com/infographic-pre-flop-ranges/
const Button = {
    Tight: {
        ThreeBet: new Set([
            'AA', 'KK',
            'A5s'
        ]),
        CallRaise: new Set([
            'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            'T9s',
            '98s',
            '87s',
            '76s',
            'AKo',
        ]),
        Open: new Set([
            'A9s', 'A8s', 'A7s', 'A6s', 'A4s', 'A3s', 'A2s',
            'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
            'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s',
            'J9s', 'J8s', 'J7s',
            'T8s', 'T7s',
            '97s', '96s',
            '86s',
            '75s',
            '65s', '64s',
            '54s', '53s',
            '43s',
            'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o',
            'KQo', 'KJo', 'KTo', 'K9o',
            'QJo', 'QTo',
            'JTo'
        ])
    },
    Loose: {
        ThreeBet: new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99',
            'AKs', 'AQs', 'AJs', 'ATs', 'A5s', 'A4s', 'A3s', 'A2s',
            'KQs', 'KJs',
            'QJs',
            'JTs',
            '97s',
            '75s',
            'AKo', 'AQo'
        ]),
        CallRaise: new Set([
            '88', '77', '66', '55', '44', '33', '22',
            'A9s', 'A8s', 'A7s', 'A6s',
            'KTs', 'K9s',
            'QTs', 'Q9s',
            'J9s', 'J8s',
            'T9s', 'T8s', 'T7s',
            '98s',
            '87s', '86s',
            '76s',
            '65s', '64s',
            '54s', '53s',
            '43s',
            'AJo', 'ATo',
            'KQo', 'KJo'
        ]),
        Open: new Set([
            'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
            'Q8s', 'Q7s', 'Q6s', 'Q5s',
            'J7s',
            '96s',
            'A9o', 'A8o', 'A7o',
            'KTo', 'K9o',
            'QJo', 'QTo',
            'JTo'
        ])
    }
};


const Cutoff = {
    Tight: {
        ThreeBet: new Set([
            'AA', 'KK',
            'A5s'
        ]),
        CallRaise: new Set([
            'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            'T9s',
            '98s',
            '87s',
            '76s',
            'AKo',
        ]),
        Open: new Set([
            'A9s', 'A8s', 'A7s', 'A6s', 'A4s', 'A3s', 'A2s',
            'K9s', 'K8s', 'K7s',
            'Q9s',
            'J9s',
            'T8s',
            '97s',
            '86s',
            '75s',
            '65s', '64s',
            '54s', '53s',
            '43s',
            'AQo', 'AJo', 'ATo',
            'KQo', 'KJo'
        ])
    },
    Loose: {
        ThreeBet: new Set([
            'AA', 'KK', 'QQ', 'JJ',
            'AKs', 'A7s', 'A5s', 'A4s', 'A3s', 'A2s',
            'T9s',
            '87s',
            '54s',
            'AKo'
        ]),
        CallRaise: new Set([
            'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A6s',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            '98s',
            '76s',
            'AQo'
        ]),
        Open: new Set([
            'K9s', 'K8s', 'K7s',
            'Q9s',
            'J9s',
            'T8s',
            '97s',
            '86s',
            '75s',
            '65s', '64s',
            '53s',
            '43s',
            'AJo', 'ATo',
            'KQo', 'KJo'
        ])
    }
};

const Early = {
    Tight: {
        ThreeBet: new Set([
            'AA', 'KK',
            'A5s'
        ]),
        CallRaise: new Set([
            'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            'T9s',
            '98s',
            '87s',
            '76s',
            'AKo',
        ]),
        Open: new Set([
            'A9s', 'A8s', 'A7s', 'A6s', 'A4s', 'A3s', 'A2s',
            'AQo'
        ])
    },
    Loose: {
        ThreeBet: new Set([
            'AA', 'KK', 'QQ',
            'AKs', 'A5s', 'A4s', 'A3s', 'A2s',
            'T9s',
            '87s',
            'Ako'
        ]),
        CallRaise: new Set([
            'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            '98s',
            '76s',
            'AQo'
        ]),
        Open: new Set([
        ])
    }
};

//////////////////////////////////////////////////

const { Games, Bets } = require('@openhud/api');
const { represent } = require('@openhud/helpers');

const getAction = (table, handRep) => {
    if (table.ThreeBet.has(handRep)) {
        return 'open-raise';
    } else if (table.CallRaise.has(handRep)) {
        return 'open-call';
    } else if (table.Open.has(handRep)) {
        return 'open-fold';
    } else {
        return 'fold';
    }
};

const generateTip = (game, bb, seats, community) => {
    const tip = { players: {} };

    if (game.type === Games.TexasHoldem && game.bet === Bets.NoLimit) {
        const players = seats.length;
        const mySeatId = seats.findIndex(seat => seat.isMe);
        const btnSeatId = seats.findIndex(seat => seat.isButton);
    
        if (players >= 4 && mySeatId !== -1) {
            const mySeat = seats[mySeatId];
            const myHand = mySeat.cards;
            if (myHand.length === 0) {
                throw {
                    type: 'https://www.openhud.io/errors/invalid-data',
                    detail: 'Hero cards are missing'
                };
            }
            const myHandRep = represent({ hand: myHand });

            const index = (mySeatId - (btnSeatId + 1) + players) % players;

            if (index === players - 1) { // Button
                const tightAction = getAction(Button.Tight, myHandRep);
                const looseAction = getAction(Button.Loose, myHandRep);

                if (tightAction === looseAction) {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${tightAction} on button.`;
                } else {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${tightAction} (tight) or ${looseAction} (loose) on button.`;
                }
            } else if (index === players - 2) { // Cutoff
                const tightAction = getAction(Cutoff.Tight, myHandRep);
                const looseAction = getAction(Cutoff.Loose, myHandRep);

                if (tightAction === looseAction) {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${tightAction} on cutoff.`;
                } else {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${tightAction} (tight) or ${looseAction} (loose) on cutoff.`;
                }
            } else if (index > 1) { // Early positions
                const tightAction = getAction(Early.Tight, myHandRep);
                const looseAction = getAction(Early.Loose, myHandRep);

                if (tightAction === looseAction) {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${tightAction} on early positions.`;
                } else {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${tightAction} (tight) or ${looseAction} (loose) on early positions.`;
                }
            }
        }
    }

    return tip;
};

//////////

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');


const app = express()
app.use(cors({
    origin: true,
    maxAge: 86400
}));
app.use(bodyParser.json());


const errors = {
    'https://www.openhud.io/errors/invalid-data': {
        status: 400,
        title: 'Invalid Data'
    }
};


app.post('/', (request, response) => {
    try {
        const { game, bb, seats, community } = request.body;

        const tip = generateTip(game, bb, seats, community);

        response.status(200).send(tip);
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