const sqlMap = require('../../sqlMap');
const pool = require('../api')

const resultArr = []

function asyncRandom(id) {
  return new Promise(function(resolve, reject) {
    // setTimeout(resolve, 100, Math.floor(Math.random() * 100) + 1);
    try {
      getPicture(id, (result) => {
        resolve(result)
      })
    } catch(err) {
      reject(err)
    }
  });
}

const getPicture = (id, callback) => {
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

function getAllFriends(arr) {
  const promises = [];
  const handleNumber = n => resultArr.push(n);
  for (let i = 0; i < arr.length; i += 1) {
    promises.push(asyncRandom(arr[i]).then(handleNumber));
  }

  return promises;
}

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
        // const resultArr = []
        const friendsArr = result[0].friendsid.split('$.$-')
        Promise.all(getAllFriends(friendsArr)).then(() => {
          res.json({
            msg: '获取好友成功',
            code: 200,
            data: resultArr
          })
        })
        // for (let i = 0; i < friendsArr.length; i += 1) {
        //   // this.getPicture(friendsArr[i], (result) => {
        //   //   console.log(result)
        //   // })
        //   // if (i === friendsArr.length - 1) {
        //   //   console.log(123)
        //   //   res.json(
        //   //     {
        //   //       msg: '登陆成功',
        //   //       code: 200,
        //   //       data: {
        //   //         resultArr
        //   //       }
        //   //     }
        //   //   )
        //   // }
        //   // resultArr.push(obj)
        // }
        // res.json({
        //   msg: '获取好友成功',
        //   code: 200,
        //   data: {

        //   }
        // })
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
  // getPicture(id, callback) {
  //   pool.getConnection((err, connection) => {
  //     const sql = sqlMap.getPicture
  //     connection.query(sql, [id], (err, result) => {
  //       if (err) {
  //         return err
  //       }
  //       callback(result[0])
  //       connection.release()
  //     })
  //   })
  // }
}
