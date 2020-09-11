import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Styles/Styles";
import Typography from "@material-ui/core/Typography";
import home from "./Assets/home.png";
import QCR from "./Assets/QCR.png";
import Quizboys from "./Assets/Quizboys.png";

function App() {

  const display = () => {
setPlayDisplay(true)
setWorkDisplay(false)
  }
   const displayNone = () => {
			setPlayDisplay(false);
			setWorkDisplay(false);
		};

  const [workDisplay, setWorkDisplay] = useState(false)
    const [playDisplay, setPlayDisplay] = useState(false);
	const classes = useStyles();
	return workDisplay ? (
		<Grid container className={classes.home}>
			<Grid container className={classes.container}>
				<Grid item className={classes.imageHolder}>
					<Button onClick={display} variant="contained">
						PLAY
					</Button>
				</Grid>
				<Grid item className={classes.imageHolderMain}>
					<Typography className={classes.header}>
						Quiet Calm Records Online Music Store
					</Typography>
					<a href="https://www.quietcalmrecords.com/">
						<img className={classes.imageWork} src={QCR} alt="" />
					</a>
				</Grid>
				<Grid item className={classes.imageHolder}>
					<Button onClick={displayNone} variant="contained">
						HOME
					</Button>
				</Grid>
			</Grid>
		</Grid>
	) : playDisplay ? (
		<Grid container className={classes.home}>
			<Grid container className={classes.container}>
				<Grid item className={classes.imageHolder}>
					<Button onClick={() => setWorkDisplay(true)} variant="contained">
						WORK
					</Button>
				</Grid>
				<Grid item className={classes.imageHolderMain}>
					<Typography className={classes.header}>
						Quizboys Trivia App
					</Typography>
					<a href="https://quizboys.vercel.app/">
						<img className={classes.imageWork} src={Quizboys} alt="" />
					</a>
				</Grid>
				<Grid item className={classes.imageHolder}>
					<Button onClick={() => setPlayDisplay(false)} variant="contained">
						HOME
					</Button>
				</Grid>
			</Grid>
		</Grid>
	) : (
		<Grid container className={classes.home}>
			<Grid container className={classes.container}>
				<Grid item className={classes.imageHolder}>
					<Button onClick={() => setWorkDisplay(true)} variant="contained">
						WORK
					</Button>
				</Grid>
				<Grid item className={classes.imageHolderMain}>
					<Typography className={classes.header}>
						Rob Lark Full Stack Web Developer
					</Typography>
					<img className={classes.image} src={home} alt="" />
				</Grid>
				<Grid item className={classes.imageHolder}>
					<Button onClick={() => setPlayDisplay(true)} variant="contained">
						PLAY
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
