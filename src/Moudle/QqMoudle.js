import React, {useEffect} from 'react'
import Qq from '../Components/Qq'
import data from '../data'
import Bricks from 'bricks.js'
export  default function QqMoudle (){

  useEffect(() => {
    const sizeOpt = [
      { columns: 1, gutter: 10 },
      { mq: '150', columns: 1, gutter: 10},
      { mq: '600px', columns: 3, gutter: 15},
      { mq: '750px', columns: 3, gutter: 15},
      { mq: '1250px', columns: 3, gutter: 15},
    ]

    //Bricks是一个瀑布流插件
    const  qq = Bricks({
      container: '#qq-item',
      packed: 'data-packed',
      sizes: sizeOpt,
    })
    qq.pack()

  },[])
  return (
  <div id = "qq-item">
    {
      data.map(({ src, content, date, id}) => (
        <Qq
        key = {id}
        keyvalue= {id}
        src={src}
        content = {content}
        date = {date}
        />
      ))
    }
  </div>
  )
}
