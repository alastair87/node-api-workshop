const express = require("express");
const app = express();

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];

app.get("/albums", (req, res) => {
  res.send(albumsData);
});

app.get("/albums/:albumId", (req, res) => {
  console.log(req.params.albumId);
  res.send(
    albumsData.find(albumData => albumData.albumId === req.params.albumId)
  );
});

// notice .post (not .get)
app.post("/albums", function(req, res) {
  console.log("POST /albums route");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
