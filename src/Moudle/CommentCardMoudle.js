import CommentCard from '../Components/CommentCard'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import Button from '@material-ui/core/Button';
import Bricks from 'bricks.js'
import Axios from 'axios'



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
function CommentCardMoudle() {

  const [hotComments, setHotComments] = useState([])
  const [comments, setComments] = useState([])
  const loading = useRef(false)
  const [page, setPage] = useState(1)

  const loadMore = useCallback(() => {
    if (loading.current) return void 0
    loading.current = true
    getData(45, 2017167 - page * 50)
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
      { mq: '768px', columns: 2, gutter: 10 },
      { mq: '1024px', columns: 4, gutter: 10 }
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

  return(

    <>
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

    <Button variant="contained" color="primary" style={{fontSize: '25px', marginBottom: '20px',marginLeft: '-250px', backgroundColor : "#990066"}} disableElevation onClick={loadMore}>
    {loading.current ? '...' : '敢不敢点我一下ʕʘ̅͜ʘ̅ʔ '}
     </Button>
  </div>
  </>
  )
}

export default  CommentCardMoudle
