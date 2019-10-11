const sqlMap = require('../../sqlMap');
const pool = require('../api')

module.exports = {
  landingVerification(req, res) {
    const md5 = require('js-md5')
    const moment = require('moment')
    const { uidentity, upassword } = req.body
    pool.getConnection((err, connection) => {
      const sql = sqlMap.landingVerification
      connection.query(sql, [uidentity], (err, result) => {
        // res.json({result});
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
        }
        connection.release();
      })
    })
  },
  landingUpdate(e) {
    const {
      logintime,
      token,
      uidentity
    } = e
    console.log(logintime, token, uidentity)
    pool.getConnection((err, connection) => {
      const sql = sqlMap.landingUpdate
      connection.query(sql, [String(logintime), token, uidentity], (err) => {
        console.log(123)
        if (err) {
          console.log(err)

          return err
        }
        connection.release()
      })
    })
  }
}

// pool.getConnection((err, connection) => {
//   //     const sql = sqlMap.setUpdate;
//   //     connection.query(sql, [title, detailed, id], (err, result) => {
//   //       res.json(result);
//   //       connection.release();
//   //     })
//   //   })
