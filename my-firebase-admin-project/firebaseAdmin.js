// firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('/Users/leeluda/Desktop/my-firebase-admin-project/easylogin-3e83d-firebase-adminsdk-bcy0p-b5981cf0ed'); // 서비스 계정 키 파일의 경로

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-firebase-project.firebaseio.com', // Firebase 프로젝트의 데이터베이스 URL
});

// Firebase Admin SDK가 초기화되었습니다.

module.exports = admin; // 다른 파일에서 Firebase Admin SDK를 사용할 수 있도록 모듈로 내보냅니다.
