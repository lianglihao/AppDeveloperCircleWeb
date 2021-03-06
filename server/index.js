const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const uploadheadimg = require('./utils/uploadheadimg');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(bodyParser.json());
// 后端api路由
app.use('/api', routerApi);

// 设置静态资源
app.use(express.static('./img'));

app.use('/api/uploadheadimg', uploadheadimg);

// app.get("/",(req,res) => {
//   // res.write(`<link href="favicon.ico" rel="shortcut icon"></link>`)
//   res.send("INDES");
// })

// app.get('/api/getArticle', (req, res, next) => {
//   res.json({
//       data: '后台返回结果 getArticle'
//     });
// })

io.on('connection', function(socket) {
  socket.on('login', username => {
    // console.log(username)
    io.emit('test', username)
  })
  socket.on('disconnect', () => {
    // console.log('lost one person')
  })
})

// 配置允许跨域请求；
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})

// 监听端口
const port = 5000;

http.listen(port, () => {
  console.log(`Server started on 。。 ${port}`);
})
