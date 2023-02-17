import SongCard from "./song";
import { SearchContext } from "./navBar";
import SongList from "../data";

import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import { useContext, useState } from "react";
import Add from "./Add";

function Music() {
  const [songindex, setSong] = useState({});
  const [isrepeat, setRepeat] = useState(false);
  const [isplay, setPlay] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = (song) => {
    setSong(song);
  };
  const loop = {
    name: "Sing me to sleep",
    author: "Alan Walker",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
    id: 0,
    links: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
  };
  const last = SongList.filter((song) => song.id === SongList.length - 1);

  const handleRepeat = () => {
    if (isrepeat === true) {
      setRepeat(false);

      if (songindex.id === SongList.length - 1) {
        // console.log(newid, "new");
        // console.log(songindex.id, "old");

        setSong(last);
      }
    } else {
      setRepeat(true);
    }
  };

  const handleNext = () => {
    const newid = songindex.id + 1;
    // console.log(newid, "new");
    // console.log(songindex.id, "old");

    const find = SongList.filter((song) => song.id === newid);
    setSong(find[0]);
  };
  const handleBack = () => {
    const newid = songindex.id - 1;
    // console.log(newid, "new");
    // console.log(songindex.id, "old");

    const find = SongList.filter((song) => song.id === newid);
    console.log(find, "find");
    setSong(find[0]);
  };
  console.log(search);
  return (
    <div className="container-fluid">
      <input
        value={search || ""}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="form-control rounded"
        aria-label="Search"
        aria-describedby="search-addon"
        style={{
          display: "flex",
          margin: " 0 auto",
        }}
      />{" "}
      <div className="row">
        {/* <div
          className="col-4"
          style={{
            fontSize: 50 + "px",
            color: "red",
            height: 676 + "px",
            backgroundColor: "black",
            marginLeft: 100 + "px",
            position: "fix",
          }}
        >
          Mạnh
        </div> */}
        <div className="col-1"></div>

        <div
          className="col-sm-12 col-lg-4 "
          style={{
            backgroundColor: "transparent",
            height: 671 + "px",
          }}
        >
          {songindex.links ? (
            <img
              src={songindex.links}
              alt="manh"
              id="playsong"
              style={{
                height: 300 + "px",
                display: "flex",
                margin: "0 auto",
                borderRadius: 50 + "%",

                marginTop: 18 + "%",
                marginBottom: 28 + "%",
              }}
            />
          ) : (
            <img
              src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
              alt="manh"
              id="playsong"
              style={{
                height: 300 + "px",
                display: "flex",
                margin: "0 auto",
                borderRadius: 50 + "%",

                marginTop: 18 + "%",
                marginBottom: 28 + "%",
              }}
            />
          )}

          <div>
            <i
              className="fa-solid fa-backward-fast"
              style={{
                position: "absolute",
                zIndex: 999,
                paddingTop: 10 + "%",
                paddingLeft: 14 + "%",
                cursor: "pointer",
              }}
              onClick={() => {
                handleBack();
              }}
            ></i>
            <i
              className="fa-solid fa-repeat"
              style={{
                position: "absolute",
                zIndex: 999,
                paddingTop: 10 + "%",
                paddingLeft: 25 + "%",
                cursor: "pointer",
                color: isrepeat ? "red" : "black",
              }}
              onClick={handleRepeat}
            ></i>
            <div>
              <AudioPlayer
                src={songindex.url}
                onPlay={(e) => setPlay(true)}
                // other props here
                onEnded={() =>
                  songindex.id === SongList.length - 1 && isrepeat
                    ? setSong(loop)
                    : handleNext
                }
                style={{
                  backgroundColor: "transparent",
                  position: "relative",
                }}
              />
            </div>
            <i
              className="fa-solid fa-forward-fast"
              style={{
                position: "absolute",
                marginTop: -7.1 + "%",
                marginLeft: 64 + "%",
                cursor: "pointer",
              }}
              onClick={handleNext}
            ></i>
          </div>
        </div>

        <div
          className="col-sm-12 col-lg-6 "
          style={{
            backgroundColor: "transparent",
            overflow: "scroll",
            height: 671 + "px",
          }}
        >
          {SongList.filter((song) => song.name.includes(search)).map(
            (song, index) => (
              <div
                style={{
                  marginTop: 20 + "px",
                  opacity: 0.8,
                }}
                key={index}
              >
                <div
                  className="card "
                  style={{
                    marginBottom: 20 + "px",
                    backgroundColor:
                      songindex.id === song.id ? "#94d1fe" : "white",
                    borderRadius: 20 + "px",
                  }}
                  onClick={() => {
                    handleClick(song);
                  }}
                >
                  <div className="song1">
                    <div className="card-header">
                      <h4>{song.name}</h4>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{song.author}</h5>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="col-1"></div>
      </div>
      {/* <Add /> */}
    </div>
  );
}

export default Music;
