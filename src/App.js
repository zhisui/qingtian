
import './App.css'
import QqMoudle from './Moudle/QqMoudle'
import CommentCardMoudle from './Moudle/CommentCardMoudle'


function App() {
  return (
    <div className="App">
      <h1 className="title">专属于小姐姐的晴天哟 つ♡⊂ ~</h1>
      <h3 className="title h3">tips: 一定要边播放视频边往下翻哦 ~</h3>
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
      <div className = 'comment-card'>
      <CommentCardMoudle/>
      </div>

      <h2 className="subtitle">那些年的说说</h2>
      <div className = 'qq'>
      <QqMoudle/>
      </div>
      <h2  className = "say">本来是想给你放个视频的，但我发现那视频下载不下来，好奇的话可以来问我是啥视频，嘿嘿。记得你以前给我的留言是：“ 努力的意义是今后的日子里有喜欢的人和事，还有最重要的就是开心。”这句话我一直记得， 我希望你以后的日子里不仅有你喜欢的人和事，还有喜欢你的人，不恐惧不害怕，勇敢面对。因为你，因为你们，让我变得勇敢，即使会伤心，会受伤我也不会害怕，并且全力以赴。</h2>
      <h2  className = "say">谢谢你，谢谢你们陪我长大，24岁生日快乐！！！！！</h2>
    </div>

  )
}


export default App
