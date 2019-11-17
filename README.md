# Distributed-Online-Radio
Love sharing music with your peers? Try this out!

## To run project
- Open [Streaming music](https://github.com/starkblaze01/Distributed-Online-Radio/tree/master/Streaming%20Music) folder.
- Run command:
    - `npm i`
## In `app.js` file
- `app.get('/stream', (req, res) => res.download('{song_path}'))`
- `app.get('/img', (req, res) => res.download('{image_path}'))`
- `app.get('/name', (req, res) => res.send('{Name you want to display}'))`  replace {Name you want to display}, {image_path}, and {song_path} accordingly.
- Run command:
    - `node app.js`
- Now open [Listining Music/js/data.json](https://github.com/starkblaze01/Distributed-Online-Radio/blob/master/Listining%20Music/js/data.json) file and add json object(sample object has been added) in soundtracks array {`link`: `http://localhost:3000/stream`, `name`: `http://localhost:3000/name`, `img`:`http://localhost:3000/img`}
- Now open [index.html](https://github.com/starkblaze01/Distributed-Online-Radio/blob/master/Listining%20Music/index.html) file in the Browser. You can now see your radio playing the song you added and with background image you had given in `app.js` file.

## To run it in a distributed manner on multiple devices
- Follow the same steps as above with a small change, here instead of `http://localhost:3000` we need to add the url which can be accessed from different machines.
#### So how can we do that?
- [ngrok](https://ngrok.com/) to the rescue!! ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on. After going through the installation of ngrok, run app.js file and just enter command `ngrok http 3000`. It will give an url which could be accessed from any machine. You can use free subscription of ngrok. There are other tools like `servo.net` too, but I found `ngrok` most suitable.
- Replace `http://localhost:3000` with url you get from following above steps.
- Still wondering how it is distributed? Well you can run the application on multiple machines and every user can give audio file of there own choice saved on their local machine. Simply add all the three params(link, name, and img) of any system you want in `soundtracks` array and :tada:. You can now listen to any of the songs which your peers are streaming.

## Team Members
- [Avdhesh Yadav](https://github.com/avi-spc)
- [Anshuman Verma](https://github.com/anshumanv)
- ,and [Me](https://github.com/starkblaze01/) 😎

P.S. This is repository is extended version of [onganku](https://github.com/anshumanv/ongaku).

## Found bug or have any queries? Make an issue [here](https://github.com/starkblaze01/Distributed-Online-Radio/issues/new)
