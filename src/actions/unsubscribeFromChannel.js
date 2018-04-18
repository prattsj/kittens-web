import {unsubscribeFromChannel as socketSubscribeToChannel} from 'utils/socket'
import {UNSUBSCRIBE_FROM_CHANNEL} from 'utils/constants'

export default function unsubscribeFromChannel(channel) {
  return dispatch => {
    socketSubscribeToChannel(channel)
    dispatch({type: UNSUBSCRIBE_FROM_CHANNEL})
  }
}
