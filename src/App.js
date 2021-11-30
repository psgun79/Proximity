import './App.css';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="1280"
      height="720"
      src={`https://www.youtube.com/embed/_CKm801V9ls`}
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
        {"There are things you can see only when you look closer.\n\nChocolate giants have promised to end child labor in the industry for the past 15 years. However, 2.1 million children in western Africa are still suffering from dangerous and physically demanding cocoa cultivation work. They have been forcibly caught and abused for years regardless of their will. They are mobilized for unpaid labor by their own families, and are often asked for dangerous tasks such as harvesting with a machete or transferring about 45kg of fruit bags. Most of them can’t even dream of going to school.\n"}<a href="https://www.sedaily.com/NewsVIew/1KWD1KG8BF">Reference</a>
      </p>
    </div>
  );
}

export default App;
