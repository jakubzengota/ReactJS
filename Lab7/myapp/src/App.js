import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Music from './Music';
import Socials from './Socials';
import Photos from './Photos';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#2a2e29"
  
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ictmarketexperts.com/wp-content/uploads/2020/10/cyberpunk-city-lights.jpg')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //kolor napisu na zdj
    color: "#fff",
    fontSize: "4rem",
  },
  blogsContainer:{
    paddingTop: theme.spacing(3),
    
  },
  blogTitle: {
     fontWeight:800,
     paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media:{
    heigt: 240
  },
  music: {
    width: 200,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <Router>
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Jakub Zengota
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React + MUI</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Podstrony
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://zdnet1.cbsistatic.com/hub/i/r/2020/05/11/703e8b53-6149-47dd-9969-f7de6b044b3e/resize/1200xauto/311e6c882043a19e7b68cef0de73456f/apple-music.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/1" style={{ textDecoration: 'none', color: 'black'}}>Music</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Zmiana głośności
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://d.wpimg.pl/736425757-1939806294/avatar.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/2" style={{ textDecoration: 'none', color: 'black'}}>Avatars</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Zobacz profile
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://skolwheels.com/wp-content/uploads/2020/02/matte-black-bmw-m3-f80.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/3" style={{ textDecoration: 'none', color: 'black'}}>Car images</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    BMW
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
            </Grid>
          </Grid>
      </Container>
      <Switch>
          <Route path="/1">
            <Music />
          </Route>
          <Route path="/2">
            <Socials />
          </Route>
          <Route path="/3">
            <Photos />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}



export default App;
