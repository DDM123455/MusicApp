import { Link } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import SongList from "../data";
function SongCard() {
  const handleClick = (song) => {
    console.log(song);
  };
  return (
    <div
      style={{
        flexFlow: "wrap",
        justifyContent: "space-around",
      }}
    >
      {SongList.map((song, index) => (
        <div style={{ marginTop: 20 + "px" }} key={index}>
          <div
            className="card"
            style={{
              marginBottom: 20 + "px",
            }}
            onClick={() => {
              handleClick(song);
            }}
          >
            <div className="card-header">{song.name}</div>
            <div className="card-body">
              <h5 className="card-title">{song.author}</h5>
              <AudioPlayer
                autoPlay
                src={song.url}
                onPlay={(e) => console.log("onPlay")}
                // other props here
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongCard;
