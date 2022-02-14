const fs = require('fs')
const exec = require('child_process').exec

fs.writeFileSync('./test/hello.txt', 'world')

exec('git init && git add . && git commit -m "提交" && git pull && git push', { cwd: './test' }, (err, stdout, stderr) => {
  // ...
//   console.log(stdout)
})