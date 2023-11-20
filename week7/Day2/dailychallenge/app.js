const express = require('express');
const app = express();
let emojiNames = [];
app.use(express.json());
const lodash = require('lodash')
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '📚', name: 'Book' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🌺', name: 'Flower' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🎨', name: 'Art Palette' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🏖️', name: 'Beach' },
    { emoji: '🎮', name: 'Video Game' },
    { emoji: '☕', name: 'Coffee' }
];
const random = lodash.random(0, emojis.length - 1)
const emoji = emojis[random].emoji;
const trueName = emojis[random].name;
emojiNames.push(trueName)
for (let i = 0; i < 3; i++) {
    const random2 = lodash.random(0, emojis.length)
    const emojinames = emojis[random2].name;
    emojiNames.push(emojinames)

}




app.listen(3005, () => {
    console.log(emojiNames, emoji);
})