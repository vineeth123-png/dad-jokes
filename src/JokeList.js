import react, { Component } from "react";
import axios from "axios";
class JokeList extends Component {
	static defaultProps = {
		numJokesToGet: 10
	};
	constructor(props) {
		super(props);
		this.state = {
			jokes: []
		};
	}
	async componentDidMount() {
		// Load Jokes
		let jokes = [];
		while (jokes.length < this.props.numJokesToGet) {
			let res = await axios.get("https://icanhazdadjoke.com/", {
				headers: { Accept: "application/json" }
			});
			//console.log(res.data.joke);
			jokes.push(res.data.joke);
		}
		//console.log(jokes);
		this.setState({ jokes });
	}
	render() {
		return (
			<div className="JokeList">
				<h1>Dad Jokes</h1>
				<div className="JokeList-jokes">
					{this.state.jokes.map((j) => (
						<div>{j}</div>
					))}
				</div>
			</div>
		);
	}
}

export default JokeList;
