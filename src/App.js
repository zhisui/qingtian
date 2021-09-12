import React, { useEffect, useState, useCallback, useRef } from 'react'
import Axios from 'axios'
import Bricks from 'bricks.js'
import './App.css'
import CommentCard from './Components/CommentCard'
import QqMoudle from './Moudle/QqMoudle'
import Button from '@material-ui/core/Button';


function getData(limit, offset) {
  return Axios.get('https://api.imjad.cn/cloudmusic/?type=comments', {
    params: {
      id: 186016,
      limit,
      offset, // 倒叙
    },
  }).then((res) => res.data)
}


let hotCommentInst
let commentInst
function App() {
  const [hotComments, setHotComments] = useState([])
  const [comments, setComments] = useState([])
  const loading = useRef(false)
  const [page, setPage] = useState(1)

  const loadMore = useCallback(() => {
    if (loading.current) return void 0
    loading.current = true
    getData(25, 2017167 - page * 50)
      // getData(20)
      .then((data) => {
        setComments(comments.concat(data.comments))
        page === 1 ? commentInst.pack() : commentInst.update()
        setPage(page => page + 1)
      })
      .finally(() => {
        loading.current = false
      })
      loading.current = false
  }, [comments, page])

  // useEffect(() => {
  //   loadMore()
  // }, [loadMore])

  useEffect(() => {
    getData(20).then((data) => {
      setHotComments(data.hotComments)
      hotCommentInst.pack()
    })

    const sizeOpt = [
      { columns: 2, gutter: 10 },
      { mq: '600px', columns: 3, gutter: 10 },
      { mq: '800px', columns: 4, gutter: 10 },
      { mq: '1000px', columns: 3, gutter: 12 },
      { mq: '1130px', columns: 4, gutter: 10},
    ]

    //Bricks是一个瀑布流插件
    hotCommentInst = Bricks({
      container: '#hot-comment-list',
      packed: 'data-packed',
      sizes: sizeOpt,
    })
    commentInst = Bricks({
      container: '#comment-list',
      packed: 'data-packed',
      sizes: sizeOpt,
    })
  }, [])

  return (
    <div className="App">
      <h1 className="title">专属于你的晴天哟 つ♡⊂ ~</h1>
      <h3 className="title h3">tips: 建议边播放视频边往下翻 ~</h3>

      {/* 视频评论 */}
      <div style={{ textAlign: 'center' }}>
        <iframe
        title="晴天"
          src="//player.bilibili.com/player.html?aid=328746951&bvid=BV1VA411e7PM&cid=208118542&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          style={{ width: 800, height: 500 }}
        />
      </div>
      {/* 评论开始 */}
      {/* 热评 */}
      <h2 className="subtitle">热评 TOP15</h2>
      <div id="hot-comment-list">
        {hotComments.map(({ user, content, commentId, time }) => (
          <CommentCard
            key={commentId}
            avatarUrl={user.avatarUrl}
            nickname={user.nickname}
            content={content}
            time={time}
          />
        ))}
      </div>
      {/* 评论回忆 */}
      <h2 className="subtitle">评论回忆</h2>
      <div id="comment-list">
        {comments.map(({ user, content, commentId, time }) => (
          <CommentCard
            key={commentId}
            avatarUrl={user.avatarUrl}
            nickname={user.nickname}
            content={content}
            time={time}
          />
        ))}
      </div>

      {/* 加载更多按钮 */}
      <div className="load-more">

        <Button variant="contained" color="primary" style={{fontSize: 18, backgroundColor : "#990066"}} disableElevation onClick={loadMore}>
        {loading.current ? '...' : '点我一下试试ʕʘ̅͜ʘ̅ʔ '}
         </Button>
      </div>
      <h2 className="subtitle">那些年的说说</h2>
      <QqMoudle/>
      <h2  className = "say">本来是想给你放个视频的，但我发现那视频下载不下来，好奇的话可以来问我是啥视频，嘿嘿。记得你以前给我的留言是：“ 努力的意义是今后的日子里有喜欢的人和事，还有最重要的就是开心。”这句话我一直记得， 我希望你以后的日子里不仅有你喜欢的人和事，还有喜欢你的人，不恐惧不害怕，勇敢面对。因为你，因为你们，让我变得勇敢，即使会伤心，会受伤我也不会害怕，并且全力以赴。</h2>

      <h2  className = "say">谢谢你，谢谢你们陪我长大，24岁生日快乐！！！！！</h2>
    </div>

  )
}


export default App
