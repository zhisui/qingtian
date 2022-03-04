import React, {useEffect} from 'react'
import Qq from '../Components/Qq'
import data from '../data'
import Bricks from 'bricks.js'
export  default function QqMoudle (){

  useEffect(() => {
    const sizeOpt = [
      { columns: 1, gutter: 10 },
      { mq: '768px', columns: 1, gutter: 10},
      { mq: '1024px', columns: 3, gutter: 10},
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
