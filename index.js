const fs = require('fs')
const exec = require('child_process').exec

fs.writeFileSync('./test/hello.txt', '文件内容')

exec(' git add . && git commit -m "提交代码" && git pull && git push', { cwd: './' }, (err, stdout, stderr) => {
  console.log(stdout)
})

