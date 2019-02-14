const http = require('http');
// const chalk = require('chalk');
const conf = require('./config/defaultConfig.js');
// const fs = require('fs');
const path = require('path');
// const promisify = require('util').promisify;
// const stat = promisify(fs.stat);
// const readdir = promisify(fs.readdir); 
const route = require('./helper/route');
const openUrl = require('./helper/openUrl.js')

// const server = http.createServer((req, res) => {
//     // ------------------------------写入网页内容-----------------------------
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/html');
//     // res.write('<html>');
//     // res.write('<body>');
//     // res.write('hello http');
//     // res.write('</body>');
//     // res.end('</html>'); 
//     // ------------------------------查询文件和文件夹 普通异步方法-----------------------------
//     // const filePath = path.join(conf.root, req.url);
//     // fs.stat(filePath, (err, stats) => {
//     // 	// 没有
//     // 	if(err){
//     // 		res.statusCode = 404;
//     // 		res.setHeader('Content-Type', 'text/plain');
//     // 		res.end(`${filePath} is not a directory or file`);
//     // 		return;
//     // 	}
//     //     // 文件或文件夹
//     // 	if(stats.isFile()){
//     // 		res.statusCode = 200;
//     // 		res.setHeader('Content-Type', 'text/plain');
//     // 		fs.createReadStream(filePath).pipe(res);
//     // 	}else if(stats.isDirectory()) {
//     // 		fs.readdir(filePath, (err, files) => {
//     // 			res.statusCode = 200;
//     // 			res.setHeader('Content-Type', 'text/plain');
//     // 			res.end(files.join(','));
//     // 		});
//     // 	}
//     // })
//     // ------------------------------查询文件和文件夹 promisify同步写法-----------------------------
//     const filePath = path.join(conf.root, req.url);
//     route(req, res, filePath);
    
// });

//  server.listen(conf.port, conf.hostname, () => {
//       const addr = `http://${conf.hostname}:${conf.port}`;
//       console.info(`Server started at ${chalk.green(addr)}`);
//  });


class Server {
  constructor(config) {
    this.conf = Object.assign({}, conf, config);
  }

  start() {
    const server = http.createServer((req, res) => {
      const filePath = path.join(this.conf.root, req.url);
      route(req, res, filePath, this.conf);
    });

    server.listen(this.conf.port, this.conf.hostname, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`;
      // console.log(`Server started at ${chalk.green(addr)}`);
      openUrl(addr);
    });
  }
}

module.exports = Server;