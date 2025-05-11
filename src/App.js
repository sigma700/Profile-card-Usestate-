import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Allan Muriithi",
        bio: "A passionate software developer with 7 months of experience in React and Node.js.",
        imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Senior Frontend Developer",
      },
      shows: false,
      mountTime: new Date(),
      timeSinceMount: "0 seconds",
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      const diffInSeconds = Math.floor((now - this.state.mountTime) / 1000);

      const minutes = Math.floor(diffInSeconds / 60);
      const seconds = diffInSeconds % 60;

      this.setState({
        timeSinceMount: `${
          minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""} and ` : ""
        }${seconds} second${seconds !== 1 ? "s" : ""}`,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {person, shows, timeSinceMount} = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <div className="time-display">
          Component mounted {timeSinceMount} ago
        </div>

        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <h3>{person.profession}</h3>
            <p>{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}
// Before (incorrect)
useEffect(() => {
  fetchUserData();
}, []);

// After (correct)
useEffect(() => {
  const fetchData = async () => {
    const data = await fetchUserData();
    setUser(data);
  };
  fetchData();
}, [fetchUserData]);
const MemoizedPost = React.memo(PostItem);
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default App;
