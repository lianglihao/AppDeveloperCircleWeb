const sqlMap = require('../../sqlMap');
const pool = require('../api')
const moment = require('moment')

module.exports = {
  // 用户登陆
  landingVerification(req, res) {
    const md5 = require('js-md5')
    const { uidentity, upassword } = req.body
    pool.getConnection((err, connection) => {
      if (err) {
        return err
      }
      const sql = sqlMap.landingVerification
      connection.query(sql, [uidentity], (err, result) => {
        const realResult = result[0]
        if (realResult.upassword === upassword) {
          const logintime = moment(new Date()).valueOf()
          const hash = md5.create()
          hash.update(`${realResult.uname}${realResult.uidentity}`)
          const token = hash.hex()
          const params = {
            logintime,
            token,
            uidentity
          }
          this.landingUpdate(params)
          res.json(
            {
              msg: '登陆成功',
              code: 200,
              data: {
                username: realResult.uname,
                token
              }
            }
          )
        } else {
          res.json(
            {
              msg: '账号或密码错误',
              code: 0,
              data: null
            }
          )
        }
        connection.release();
      })
    })
  },

  // 用户个人数据更新
  landingUpdate(e) {
    const {
      logintime,
      token,
      uidentity
    } = e
    pool.getConnection((err, connection) => {
      if (err) {
        return err
      }
      const sql = sqlMap.landingUpdate
      connection.query(sql, [String(logintime), token, uidentity], (err) => {
        if (err) {
          return err
        }
        connection.release()
      })
    })
  },

  // 验证token是否过期
  // tokenExpired(req, res) {
  //   const { token } = req.body
  //   const test = () => pool.getConnection((err, connection) => {
  //     const sql = sqlMap.tokenExpired
  //     connection.query(sql, token, (err, result) => {
  //       if (err) {
  //         return err
  //       }
  //       const logintime = moment(new Date()).valueOf()
  //       const timeRange = logintime - result[0].lastlogintime

  //       if (timeRange > 600000) {
  //         res.json(
  //           {
  //             msg: 'token过期，请重新登陆',
  //             code: 0,
  //             data: false
  //           }
  //         )
  //       } else {
  //         res.json(
  //           {
  //             msg: '',
  //             code: 200,
  //             data: true
  //           }
  //         )
  //       }
  //       connection.release()
  //     })
  //   })

  //   setTimeout(()=>{
  //     test()
  //   }, 2000)
  // }
  tokenExpired(token, callback) {
    const test = () => pool.getConnection((err, connection) => {
      if (err) {
        return err
      }
      const sql = sqlMap.tokenExpired
      connection.query(sql, token, (err, result) => {
        if (err) {
          return err
        }
        const logintime = moment(new Date()).valueOf()
        const timeRange = logintime - result[0].lastlogintime

        callback(timeRange > 600000)

        // if (timeRange > 600000) {
        //   res.json(
        //     {
        //       msg: 'token过期，请重新登陆',
        //       code: 0,
        //       data: false
        //     }
        //   )
        // } else {
        //   res.json(
        //     {
        //       msg: '',
        //       code: 200,
        //       data: true
        //     }
        //   )
        // }
        connection.release()
      })
    })
    test()
    // setTimeout(()=>{
    //   test()
    // }, 2000)
  }
}
