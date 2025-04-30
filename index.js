require('dotenv').config()
const express = require('express')

const app = express()

const port = 4141
const githubData = {
    "login": "adityagupta0251",
    "id": 166922118,
    "node_id": "U_kgDOCfMHhg",
    "avatar_url": "https://avatars.githubusercontent.com/u/166922118?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/adityagupta0251",
    "html_url": "https://github.com/adityagupta0251",
    "followers_url": "https://api.github.com/users/adityagupta0251/followers",
    "following_url": "https://api.github.com/users/adityagupta0251/following{/other_user}",
    "gists_url": "https://api.github.com/users/adityagupta0251/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/adityagupta0251/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/adityagupta0251/subscriptions",
    "organizations_url": "https://api.github.com/users/adityagupta0251/orgs",
    "repos_url": "https://api.github.com/users/adityagupta0251/repos",
    "events_url": "https://api.github.com/users/adityagupta0251/events{/privacy}",
    "received_events_url": "https://api.github.com/users/adityagupta0251/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "X.Adi0251",
    "company": null,
    "blog": "https://adik0.nextgendev.space/",
    "location": "Pakur , Jharkhand",
    "email": null,
    "hireable": null,
    "bio": "✨ **Aditya Kr | 16**  \r\n> *Full Stack Developer | Indie Coder*  \r\n\r\n🔧 Firebase, real-time & Firestore wizardry  \r\n🚀 Cybersecurity & space science explorer >_<",
    "twitter_username": "AdiK0_dev",
    "public_repos": 13,
    "public_gists": 0,
    "followers": 3,
    "following": 6,
    "created_at": "2024-04-13T12:42:52Z",
    "updated_at": "2025-04-30T15:02:43Z"
}


// Request in Javascript :
app.get('/', (req, res) => {
    res.send('Hello world!')

})

app.get('/twitter', (req, res) => {
    res.send('Adik0.dev')

})
app.get('/githubData', (req, res) => {
    res.json(githubData)

})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Adik0.dev</h1>')
})




app.get('/youtube', (req, res) => {
    res.send("<h2>NextGen Dev</h2>")
})


app.listen(process.env.PORT, () => {
    console.log(`Example app is listenning on port ${port}`)
})