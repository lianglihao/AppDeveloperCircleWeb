const sqlMap = require('../../sqlMap');
const pool = require('../api')

function asyncRandom(id) {
  return new Promise((resolve, reject) => {
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
    if (err) {
      return err
    }
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

function getAllFriends(arr, resultArr) {
  const promises = []
  const handleNumber = n => resultArr.push(n)

  for (let i = 0; i < arr.length; i += 1) {
    promises.push(asyncRandom(arr[i]).then(handleNumber).catch(err => {throw new Error(err)}))
  }

  return promises;
}

module.exports = {
  // 获取好友
  getFriends(req, res) {
    const { token, count } = req.body
    console.log(count)
    pool.getConnection((err, connection) => {
      if (err) {
        return err
      }
      const sql = sqlMap.getFriends
      connection.query(sql, [token], (err, result) => {
        if (err) {
          return err
        }
        const friendsArr = result[0].friendsid.split('$.$-')
        const resultArr = []
        Promise.all(getAllFriends(friendsArr, resultArr)).then(() => {
          res.json({
            msg: '获取好友成功',
            code: 200,
            data: resultArr
          })
        }).catch(err=>{
          return new Error(err)
        })
        connection.release();
      })
    })
  }
}
