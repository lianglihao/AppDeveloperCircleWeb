const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const lastid = 2;

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
});

module.exports = {
  getValue(req, res) {
    const id = req.query.id;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  setUpdate(req, res) {
    console.log(req.body);
    const title = req.body.title, detailed = req.body.detailed, id = req.body.id;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.setUpdate;
      connection.query(sql, [title, detailed, id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  getContentAll(req, res) {
    const userid = req.query.userid
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getContentAll;
      connection.query(sql, [userid], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  getDeveloperBlog(req, res) {
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getDeveloperBlog;
      connection.query(sql, (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  getUsers(req, res) { // 新旧共用api
    const id = req.query.Jm;
    const end = parseInt(id.replace(/[^0-9]/ig, ''))
    if( end === lastid ) {
      console.log('不要想通过地址栏查看我数据库哦！')
    }else if( end % 97588396 == 0 ) {
      pool.getConnection((err, connection) => {
        const sql = sqlMap.getUsers;
        connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
        })
      })
    }
  },
  getContentAllforKind(req, res) {
    const kind = req.query.kind;
    const userid = req.query.userid;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getContentAllforKind;
      connection.query(sql, [kind, userid], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  getKind(req, res) {
    const id = req.query.id;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getKind;
      connection.query(sql, [id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  addValue(req, res) {
    const title = req.body.title,
      detailed = req.body.detailed,
      time = req.body.time,
      kind = req.body.kind,
      dateTim = req.body.dateTim,
      userid = req.body.userid
    pool.getConnection((err, connection) => {
      const sql = sqlMap.addValue;
      connection.query(sql, [title, detailed, time, kind, dateTim, userid], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  deleteValue(req, res) {
    const id = req.body.id;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.deleteValue;
      connection.query(sql, [id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  addUsers(req, res) {
    const username = req.body.username,
      AccountNumber = req.body.AccountNumber,
      password = req.body.password,
      sudo = req.body.sudo;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.addUsers;
      connection.query(sql, [username, AccountNumber, password, sudo], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  register(req, res) {
    const username = req.body.username,
      AccountNumber = req.body.AccountNumber,
      password = req.body.password
    pool.getConnection((err, connection) => {
      const sql = sqlMap.register;
      connection.query(sql, [username, AccountNumber, password], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  selectClassification(req, res) {
    const username = req.query.username;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.selectClassification;
      connection.query(sql, [username], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  addClassification(req, res) {
    const username = req.body.username,
      classification = req.body.classification;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.addClassification;
      connection.query(sql, [classification, username], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  getContentforKind(req, res) {
    const kind = req.query.kind, uname = req.query.uname;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getContentforKind;
      connection.query(sql, [kind, uname], (err, result) => {
        setTimeout(()=>{
          res.json(result);
          connection.release();
        }, 1000)
        // res.json(result);
        // connection.release();
      })
    })
  },
  isStar(req, res) {
    const star = req.body.star,
      praiseUsers = req.body.praiseUsers,
      id = req.body.id;
    console.log(star, praiseUsers, id);
    pool.getConnection((err, connection) => {
      const sql = sqlMap.isStar;
      connection.query(sql, [star, praiseUsers, id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  // 测试api
  // jsonp
  jsonpTest(req, res) {
    const callback = req.query
    console.log(callback)
    pool.getConnection((err, connection) => {
      const sql = sqlMap.jsonpTest;
      connection.query(sql, (err, result) => {
        if(callback.fun) {
          res.type('text/javascript');
          res.send(callback.fun + '(' + JSON.stringify(result) + ')');
        } else {
          res.json(result);
          connection.release();
        }
      })
    })
  }
}
