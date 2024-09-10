import React, {memo} from 'react'

function Message({numberOfMessates}) {

    console.log("from message", numberOfMessates);
  return (
    <div>
      <p>send {numberOfMessates} message</p>
    </div>
  )
}

export default memo(Message);
