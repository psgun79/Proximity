import './App.css';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="1280"
      height="720"
      src={`https://www.youtube.com/embed/kTJczUoc26U`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Proximity"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App-Proximity">
      <div className="App-Title">
        Proximity
      </div>
      <div className="App-Youtube">
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
      <p className="App-Description">
        DESCRIPTIONS HERE
      </p>
    </div>
  );
}

export default App;
