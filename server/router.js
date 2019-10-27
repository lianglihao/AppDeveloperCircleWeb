const express = require('express');
const router = express.Router();
const verification = require('./api/user/verification');
const user = require('./api/user/user')

const tokenExpired = ( (token, res, func) => {
  verification.tokenExpired(token, (response) => {
    if (!response) {
      func
    } else {
      res.json(
        {
          msg: 'token过期，请重新登陆',
          code: 100,
          data: false
        }
      )
    }
  })
})

// 用户登陆
router.post('/logIn', (req, res, next) => {
  verification.landingVerification(req, res, next);
});

// 判断token是否过期
router.post('/isexpired', (req, res, next) => {
  verification.tokenExpiredOnly(req, res, next);
});

// 获取好友
router.post('/getfriends', (req, res, next) => {
  const { token } = req.body
  const func = user.getFriends(req, res, next);
  tokenExpired(token, res, func)
  // verification.tokenExpired(token, (response) => {
  //   if (!response) {
  //     user.getFriends(req, res, next);
  //   } else {
  //     res.json(
  //       {
  //         msg: 'token过期，请重新登陆',
  //         code: 100,
  //         data: false
  //       }
  //     )
  //   }
  // })
  // user.getFriends(req, res, next);
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
