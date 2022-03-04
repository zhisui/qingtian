
import './App.css'
import QqMoudle from './Moudle/QqMoudle'
import CommentCardMoudle from './Moudle/CommentCardMoudle'



function App() {
  return (
    <div className="App">
      <h1 className="title">专属于小姐姐的晴天哟 つ♡⊂ ~</h1>
      <h2 className="h2">tip: 戴上耳机，播放视频，然后就开始往下翻吧~~~</h2>
      <div  className="iframe" style={{ textAlign: 'center' }}>
        <iframe
        title="晴天"
          src="//player.bilibili.com/player.html?aid=328746951&bvid=BV1VA411e7PM&cid=208118542&page=1"
          scrolling="no"
          border="0"
          frameBorder="no"
          frameSpacing="0"
          allowFullScreen="true"
          style={{ width: '75rem', height: '45rem' }}
        />
      </div>
      <CommentCardMoudle/>
      <h2 className="subtitle">那些年的说说</h2>
      <QqMoudle/>
       <div className="say">
      <p >本来在这里是想给你放个视频的，但那视频我下载不下来，也不想去剪了，好奇的话可以来问我是啥视频，嘿嘿。记得以前你跟我说过：“努力的意义是今后的日子里有喜欢的人和事，还有最重要的就是开心。”，这句话我一直记得， 愿你以后的日子里不仅有你喜欢的人和事，还有喜欢你的人，当然我肯定算一个啦！在你们身上总能看到不一样的东西，好像所以的一切都可以治愈，不管遇到什么事情，即使会伤心，会受伤，也不会害怕，并且全力以赴。要等着我来找你带我去看海哟~</p>
      <p >谢谢你，谢谢你们陪我长大，24岁生日快乐！！！！！借一句话：祝我们最后都能长成柔软和坚硬的大人。
        不管是晴天还是雨天，最重要的是开心每一天！！</p>
      </div>
    </div>

  )
}


export default App
