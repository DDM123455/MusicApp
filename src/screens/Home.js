import NavBar from "../components/navBar";
import Music from "../components/Music";
import img from "../img/background.jpg";
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <NavBar />
      <Music />
    </div>
  );
}

export default Home;
