import express from 'express';
const app = express();

app.use(express.static('dist'))


// app.get('/', (req, res) => {
//     res.send('Server is ready');

// });




const port = process.env.PORT || 3000;


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            question: "Why did the JSON object break up with the key?",
            answer: "Because it couldn't find the value!"
        },
        {
            id: 2,
            question: "Why do JSON objects love nested structures?",
            answer: "Because they love to get deep in relationships!"
        },
        {
            id: 3,
            question: "Why can't JSON make friends?",
            answer: "Because it always has syntax issues!"
        },
        {
            id: 4,
            question: "Why did the array feel lonely?",
            answer: "Because it was always indexed, but never had a true connection!"
        },
        {
            id: 5,
            question: "Why did the string feel nervous?",
            answer: "Because it was always being quoted!"
        }
    ];
    res.send(jokes);

});


app.listen(port, () => {
    console.log(`Port is serving at http://localhost:${port}`);


});