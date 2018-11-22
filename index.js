#! /usr/bin/env node

const fs = require('fs');
const child_process = require('child_process');
const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');
const path = require('path');
const defaultLibPath = 'src/component';
const defaultSource = 'shengKevin/react-mui-template';
// const defaultEgPath = 'example/page';

function downloadSource(source, target, name, spinner) {
  let Uname = name.slice(0,1).toLocaleUpperCase() + name.slice(1);
  download(source, target, err => {
    if (err) {
      spinner.fail();
      console.log(chalk.red(err));
      return ;
    } else {
      spinner.succeed();
      fs.readdirSync(target).forEach(file => {
        fs.readFileSync(path.join(target, file));
      })
      fs.rename(path.join(target, 'Tag.jsx'), path.join(target, `${Uname}.jsx`), function(err) {
        if (err) throw Error(err);
        fs.readdirSync(target).forEach(file => {
          let content = fs.readFileSync(path.join(target, file)).toString();
          fs.writeFileSync(path.join(target, file), content.replace(/tag/ig, Uname));
        });
        console.log(chalk.green(`${name} 已生成, 请查看`));
      });
    }
  });
}

program
  .version('1.0.0', '-v, --version')
  .command('lib <name>')
  .action(name => {
    const target = path.join(defaultLibPath, name);
    const spinner = ora(`create ${name} template...`);
    if (fs.existsSync(target)) {
      inquirer.prompt([{
        name: 'exists',
        message: `${name} 已经存在, 是否替换(y/n)`,
      }]).then(({exists}) => {
        if (exists === 'y') {
          child_process.exec(`rm -rf ${target}`,err => {
            if(err) throw Error(err);
            downloadSource(defaultSource, target, name, spinner);
          });
        } else {
          console.log(chalk.blue(`已取消创建${name}文件`));
        }
      })
    } else {
      spinner.start();
      downloadSource(defaultSource, target, name, spinner);
    }
  })

program.parse(process.argv);