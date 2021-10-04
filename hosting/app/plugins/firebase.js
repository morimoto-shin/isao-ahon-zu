import firebase from 'app/firebase'
import 'firebase/analytics'

if (!firebase.apps.length) {
  let config = {}
  if (location.hostname === 'localhost') {
    console.log('🐸 ローカル開発環境')
    config = {
      apiKey: 'AIzaSyBlLtgZZCoA6rtDyFdGLg1RvfUjHGaFIQU',
      authDomain: 'isao-ahon-zu.firebaseapp.com',
      projectId: 'isao-ahon-zu',
      storageBucket: 'isao-ahon-zu.appspot.com',
      messagingSenderId: '981225755552',
      appId: '1:981225755552:web:66bfc6cc85a5fb1f3b0ac5',
      measurementId: 'G-3PNFB0LQWL',
    }
  } else {
    console.log('🔥 Firebase ホスティング環境')
  }
  firebase.initializeApp(config)
  firebase.analytics()
}

export default firebase
