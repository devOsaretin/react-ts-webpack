import "./styles.css";
import Logo from "./foodlogo.png";

export const App = () => {
	return (
		<>
			<h1>React Typescript Webpack</h1>
			<img src={Logo} alt="Food Logo" width={300} height={200} />
		</>
	);
};
