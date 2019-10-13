const express = require('express');
const router = express.Router();
const user = require('./api/user/verification');

// 用户登陆
router.post('/logIn', (req, res, next) => {
  user.landingVerification(req, res, next);
});

// 判断token是否过期
router.post('/isexpired', (req, res, next) => {
  user.tokenExpired(req, res, next);
});

// router.post('/setUpdate', (req, res, next) => {
//   api.setUpdate(req, res, next);
// });

// router.get('/getContentAll', (req, res, next) => {
//   api.getContentAll(req, res, next);
// });

// router.get('/getUsers', (req, res, next) => {
//   api.getUsers(req, res, next);
// });

// router.get('/getContentAllforKind', (req, res, next) => {
//   api.getContentAllforKind(req, res, next);
// });

// router.post('/addValue', (req, res, next) => {
//   api.addValue(req, res, next);
// });

// router.get('/getKind', (req, res, next) => {
//   api.getKind(req, res, next);
// });

// router.post('/deleteValue', (req, res, next) => {
//   api.deleteValue(req, res, next);
// });

// router.get('/getDeveloperBlog', (req, res, next) => {
//   api.getDeveloperBlog(req, res, next);
// });

// router.post('/addUsers', (req, res, next) => {
//   api.addUsers(req, res, next);
// });

// router.post('/register', (req, res, next) => {
//   api.addUsers(req, res, next);
// });

// router.get('/selectClassification', (req, res, next) => {
//   api.selectClassification(req, res, next);
// });

// router.post('/addClassification', (req, res, next) => {
//   api.addClassification(req, res, next);
// });

// router.get('/getContentforKind', (req, res, next) => {
//   api.getContentforKind(req, res, next);
// });

// router.post('/isStar', (req, res, next) => {
//   api.isStar(req, res, next);
// });

// // 测试api
// router.get('/jsonpTest', (req, res, next) => {
//   api.jsonpTest(req, res, next);
// });

module.exports = router;
