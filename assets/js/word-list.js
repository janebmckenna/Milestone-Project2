// ----- List of words for the hangman game -----
const wordList = [
    {
        word: 'penguin',
        hint: 'A loveable bird from the Antarctic'
    },
    {
        word: 'treaty',
        hint: 'A pact between states'
    },
    {
        word: 'banana',
        hint: 'A yellow fruit'
    },
    {
        word: 'history',
        hint: 'A study of the past'
    },
    {
        word: 'keyboard',
        hint: 'The buttons used to type'
    },
    {
        word: 'monkey',
        hint: 'A loveable primate'
    },
    {
        word: 'painting',
        hint: 'A work of art created with a brush'
    },
    {
        word: 'internet',
        hint: 'Keeping the world connected '
    },
    {
        word: 'laptop',
        hint: 'A portable computer'
    },
    {
        word: 'computer',
        hint: 'An electronic device'
    },
    {
        word: 'crossbar',
        hint: 'You may strike it playing football'
    },
    {
        word: 'bandaged',
        hint: 'you may leave the hospital....'
    },
    {
        word: 'practice',
        hint: 'makes perfect'
    },
    {
        word: 'embezzling',
        hint: 'what are you doing with that money?'
    },
    {
        word: 'jackhammer',
        hint: 'maybe you can dig up the footpath?'
    },
    {
        word: 'quizmaster',
        hint: 'Asks all the questions'
    },
    {
        word: 'hijack',
        hint: 'unlawfully seize'
    },
    {
        word: 'quizzical',
        hint: 'very curious'
    },
    {
        word: 'fizziness',
        hint: 'caused by CO2 in a soft drink'
    },
    {
        word: 'squeeze',
        hint: 'press firmly'
    },
    {
        word: 'pizzeria',
        hint: 'A spot to grab your favourite round meal'
    },
    {
        word: 'bubble',
        hint: 'a thin sphere'
    },
    {
        word: 'objectify',
        hint: 'inappropriate behaviour to do someone but good poetry can do it to your feelings'
    },
    {
        word: 'workspace',
        hint: 'a place to get stuff done'
    },
    {
        word: 'adventure',
        hint: 'an exciting or daring experience'
    },
    {
        word: 'sunset',
        hint: 'a big ball of light disappears below the horizon'
    },
    {
        word: 'elephant',
        hint: 'a big grey animal'
    },
    {
        word: 'microwave',
        hint: 'ping the food is ready'
    },
    {
        word: 'television',
        hint: 'the box'
    },
    {
        word: 'unicorn',
        hint: 'a mythical creature'
    },
    {
        word: 'crab',
        hint: 'might be found under a rock on the beach'
    },
    {
        word: 'butterfly',
        hint: 'caterpillar to a ...'
    },
    {
        word: 'caterpillar',
        hint: 'before I was a butterfly'
    },
    {
        word: 'potato',
        hint: 'Irelands favourite root vegetable'
    },
    {
        word: 'octopus',
        hint: 'eight long tentacles'
    },
    {
        word: 'handbag',
        hint: 'used to carry personal belongings'
    },
    {
        word: 'umbrella',
        hint: 'stay out of the rain'
    },
    {
        word: 'robot',
        hint: 'AI may help them rise up'
    },
    {
        word: 'pencil',
        hint: 'a writing implement'
    },
    {
        word: 'stapler',
        hint: 'used to fasten paper'
    },
    {
        word: 'notebook',
        hint: 'a place to write it all down'
    },
    {
        word: 'bathroom',
        hint: 'you may pop to the loo'
    },
    {
        word: 'kitchen',
        hint: 'the heart of the home'
    },
    {
        word: 'clown',
        hint: 'seen at the circus'
    },
    {
        word: 'circus',
        hint: 'clowns, a bigtop, loads of fun'
    },
    {
        word: 'acrobat',
        hint: 'performs on the highwire'
    },
    {
        word: 'blizzard',
        hint: 'a snow storm'
    },
    {
        word: 'bagpipes',
        hint: 'traditional Scottish instrument'
    },
    {
        word: 'instrument',
        hint: 'plays music'
    },
    {
        word: 'bandwagon',
        hint: 'hop on the ...'
    },
    {
        word: 'daiquiri',
        hint: 'a cocktail'
    },
    {
        word: 'dwarves',
        hint: 'the seven ...'
    },
    {
        word: 'exodus',
        hint: 'a mass ....'
    },
    {
        word: 'galaxy',
        hint: 'a .... of stars'
    },
    {
        word: 'universe',
        hint: 'the whole cosmos'
    },
    {
        word: 'glowworm',
        hint: 'an insect with luminescent organs'
    },
    {
        word: 'luminescent',
        hint: 'glow'
    },
    {
        word: 'transcript',
        hint: 'a factual documentation'
    },
    {
        word: 'jackpot',
        hint: 'you have hit the ...'
    },
    {
        word: 'jockey',
        hint: 'rides a horse'
    },
    {
        word: 'jukebox',
        hint: 'chose your song'
    },
    {
        word: 'kiosk',
        hint: 'buy your ticket here'
    },
    {
        word: 'zodiac',
        hint: 'signs of the ...'
    },
    {
        word: 'hotel',
        hint: 'a place to stay overnight'
    },
    {
        word: 'overnight',
        hint: 'between one day and the next'
    },
    {
        word: 'poster',
        hint: 'an advert on the wall'
    },
    {
        word: 'mirror',
        hint: 'a reflection'
    },
    {
        word: 'reflection',
        hint: 'you will see it in the mirror'
    },
    {
        word: 'chocolate',
        hint: 'a sweet milky treat'
    },
    {
        word: 'investment',
        hint: 'a way to grow your money'
    },
    {
        word: 'dictionary',
        hint: 'all the words'
    },
    {
        word: 'statue',
        hint: 'still as a ....'
    },
    {
        word: 'candle',
        hint: 'a waxed flame'
    },
    {
        word: 'keycard',
        hint: 'unlock the door'
    },
    {
        word: 'curtain',
        hint: 'block light from a window'
    },
    {
        word: 'breadroll',
        hint: 'served with soup'
    },
    {
        word: 'hangman',
        hint: 'oh the irony'
    },
    {
        word: 'socket',
        hint: 'plug in to extract electricity'
    },
    {
        word: 'fridge',
        hint: 'keep food cold'
    },
    {
        word: 'couch',
        hint: 'comfortable seat for multiple people'
    },
    {
        word: 'plant',
        hint: 'living but not an animal'
    },
    {
        word: 'ornament',
        hint: 'an accessory to make the place beautiful'
    },
    {
        word: 'skyline',
        hint: 'outline on the horizon'
    },
    {
        word: 'cushion',
        hint: 'a soft stuffed pocket of material'
    },
    {
        word: 'director',
        hint: 'a person in charge'
    },
    {
        word: 'manager',
        hint: 'a person in charge'
    },
    {
        word: 'mouse',
        hint: 'a small rodent'
    },
    {
        word: 'hoodie',
        hint: 'an article of clothing'
    },
    {
        word: 'zebra',
        hint: 'a stripped animal'
    },
    {
        word: 'crocodile',
        hint: 'reptile that lives in water'
    },
    {
        word: 'teabag',
        hint: 'ingredient in a hot drink'
    },
];