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
  width: "37rem",
  fontSize: "1.6rem"
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  love: {
    color: "#f44336",
    fontSize: '2rem'
  },
  avatar: {
    backgroundColor: "#bbdefb",
    fontSize: '23px'
  },
  p: {
    marginLeft: 8,
    marginTop:'-1rem',
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: "3rem"
  },
  span: {
    fontSize: '2rem'
  },

}))

export default function Qq({date, src, content,keyvalue}) {
  const classes = useStyle();
  const [count, setCount] = useState(parseInt(localStorage.getItem(`${keyvalue}`)) || 0)

  const onClick  = useCallback( () => {
    setCount(count => {
      count = count + 1
      localStorage.setItem(`${keyvalue}`,count.toString())
      return count
    })
  },[keyvalue])
  return (
    <Card className = {classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Cindy Baker" src="public\头像.jpg" className={classes.avatar} >
              R
          </Avatar>
        }
        title =" 寄居者"
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
          <span className={classes.span}>{count}</span>
        </IconButton>
      </CardActions>

    </Card>
  )
}
