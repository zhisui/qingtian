import React, { useState, useCallback}from 'react'
import { makeStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';

const useStyle  = makeStyles ( (theme) => ({
  root: {
  width: 350,
  margin: 15
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  love: {
    color: "#f44336"
  },
  avatar: {
    backgroundColor: "#bbdefb"
  },
  p: {
    marginLeft: 8,
    paddingTop: 0,
    paddingBottom: -10,
    paddingLeft: 10,
    paddingRight: 10,

  }
}))

export default function Qq({date, src, content}) {
  const classes = useStyle();
  const [count, setCount] = useState(0)
  const onClick  = useCallback( () => {
    setCount(count + 1)
  },[count])
  return (
    <Card className = {classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Cindy Baker" src="public\头像.jpg" className={classes.avatar} >
              R
          </Avatar>
        }
        title=" 寄居者"
        subheader={date}
      />
      <p className = {classes.p}> {content}</p>
      <CardMedia
        className={classes.media}
        image={src}
        title="picture"
      />
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick= {onClick}>
          <FavoriteIcon  className={classes.love}/>
          <span>{count}</span>
        </IconButton>
      </CardActions>

    </Card>
  )
}
