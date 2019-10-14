const sqlMap = require('../../sqlMap');
const pool = require('../api')

module.exports = {
  // 获取好友
  getFriends(req, res) {
    const { token } = req.body
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getFriends
      connection.query(sql, [token], (err, result) => {
        if (err) {
          return err
        }
        const resultArr = []
        const friendsArr = result[0].friendsid.split('$.$-')
        for (let i = 0; i < friendsArr.length; i += 1) {
          this.getPicture(friendsArr[i], (result) => {
            console.log(result)
            resultArr.push(result)
            console.log(resultArr, 2)
            // return result
          })
          if (i === friendsArr.length - 1) {
            console.log(123)
            res.json(
              {
                msg: '登陆成功',
                code: 200,
                data: {
                  resultArr
                }
              }
            )
          }
          // resultArr.push(obj)
        }
        // const resultArr = []
        // friendsArr.forEach(item => {

        //   // resultArr.push(item)
        //   let obj = {}
        //   pool.getConnection((err, connection) => {
        //     const sql = sqlMap.getPicture
        //     connection.query(sql, [item], (err, result) => {
        //       if (err) {
        //         return err
        //       }
        //       obj = result[0]
        //       console.log(obj)
        //       connection.release()
        //     })
        //   })

        //   return resultArr.push(obj)
        // })
        // console.log(resultArr)
        // console.log(friendsArr)

        connection.release();
      })
    })
  },

  // 获取好友信息（头像）
  getPicture(id, callback) {
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getPicture
      connection.query(sql, [id], (err, result) => {
        if (err) {
          return err
        }
        callback(result[0])
        connection.release()
      })
    })
  }
}
