import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles({
	home: {
		height: "100vh",
		// width: "100vw",
		position: "absolute",
		backgroundColor: "#00001C",
		boxSizing: "border-box",
		top: "-1px",
		left: "-1px",
	},
	container: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	header: {
		color: "gold",
	},
	imageHolder: {
		width: "10vw",
		height: "10vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	imageHolderMain: {
		width: "40vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},

	image: {
		width: "80%",
		borderRadius: "800px",
	},
	imageWork: {
		margin: "60px",
		width: "80%",
		borderRadius: "800px",
	},
	imagePlay: {
		margin: "60px",
		width: "80%",
		borderRadius: "800px",
	},
	centerText: {
		width: "100%",
		textAlign: "center",
	},
	test: {
		border: "4px solid gold",
	},
});
