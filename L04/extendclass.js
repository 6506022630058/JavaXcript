class media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong.name);