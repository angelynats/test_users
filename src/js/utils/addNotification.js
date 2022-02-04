import { store } from 'react-notifications-component';

export default function addNotification({
  type = 'success',
  title = '',
  message = '',
}) {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 4000,
    },
    slidingEnter: {
      duration: 800,
      timingFunction: 'ease-out',
      delay: 0,
    },
    slidingExit: {
      duration: 800,
      timingFunction: 'ease-out',
      delay: 0,
    },
  });
}
