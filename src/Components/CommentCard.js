
import React from 'react'

export default function CommentCard({ avatarUrl, nickname, content, time }) {
  return (
    <div className="grid-item" style={{ backgroundColor: '#fff' }}>
      <div className="userinfo">
        < img className="avatar" src={avatarUrl} alt="avatar" />
      </div>
      <div className="content">
        <span>{content}</span>
        <div className="nickname">- {nickname}</div>
        <div className="time">{dateFormat(time)}</div>
      </div>
    </div>
  )
}

//将时间戳标准化
function dateFormat(timestamp, formats) {
  formats = formats || 'Y-m-d'

  const zero = (value) => {
    if (value < 10) {
      return '0' + value
    }
    return value
  }

  const myDate = timestamp ? new Date(timestamp) : new Date()

  const year = myDate.getFullYear()
  const month = zero(myDate.getMonth() + 1)
  const day = zero(myDate.getDate())

  const hour = zero(myDate.getHours())
  const minite = zero(myDate.getMinutes())
  const second = zero(myDate.getSeconds())

  return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second,
    }[matches]
  })
}
