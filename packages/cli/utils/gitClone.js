import download from 'download-git-repo';
import chalk from 'chalk';
import ora from 'ora';

export default (remote, name, option) => {
    // 下载时的动画效果
    const downSpinner = ora('正在下载模板...').start();
    return new Promise((resolve, reject) => {
        download(remote, name, option, (err) => {
            // 下载失败
            if (err) {
                downSpinner.fail();
                console.log('err', chalk.red(err));
                reject(err);
                return;
            }
            downSpinner.succeed(chalk.green('模板下载成功！'));
            // 切换到下载成功后的目录
            console.log(chalk.green(`cd ${name}\r\n`));
            console.log(chalk.blue('pnpm install\r\n'));
            console.log('pnpm run build:velo\r\n');
            console.log('pnpm run velo:dev\r\n');
            resolve();
        });
    });
};
