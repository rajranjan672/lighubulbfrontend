import Profile from "./components/profile";
import Project from "./components/Project";
import Card from "./components/newCard";

export default function App() {
  Username = "FoxyRoxy";
  Bio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus enim vitae eget facilisis eget dignissim congue. Ac dolor cras arcu duis dictum. Nam venenatis diam et consequat pellentesque gravida dolor bibendum. Vehicula in bibendum quis justo.";
  return (
    <div className="App" style={{
        fontFamily: sans-serif,
        textAlign: center
      
      }}>
      <Profile picture={myIcon} username={Username} bio={Bio} />
      <Project />
      <Card />
    </div>
  );
}
