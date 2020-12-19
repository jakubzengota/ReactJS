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


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#2a2e29",
    color: "#2a2e29"
  
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ictmarketexperts.com/wp-content/uploads/2020/10/cyberpunk-city-lights.jpg')`,
    height: "500px",
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
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://i.iplsc.com/bmw-m5-edition-35-years/00083HLKIGP95XAN-C125-F4.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Autka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    jazdajazda
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
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://i.iplsc.com/bmw-m5-edition-35-years/00083HLKIGP95XAN-C125-F4.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Autka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    jazdajazda
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
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://i.iplsc.com/bmw-m5-edition-35-years/00083HLKIGP95XAN-C125-F4.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Autka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    jazdajazda
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
            </Grid>
          </Grid>
      </Container>
      
    </div>
  );
}

export default App;
