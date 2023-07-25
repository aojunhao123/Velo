import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import gitClone from './utils/gitClone.js';
import prompts from 'prompts';
import { readFile } from 'fs/promises';
// 获取package.json的url
const pkg = JSON.parse(
    await readFile(new URL('./package.json', import.meta.url))
);
//配置命令参数
const optionDefinitions = [
    { name: 'version', alias: 'v', type: Boolean },
    { name: 'help', alias: 'h', type: Boolean }
];

//帮助命令
const helpSections = [
    {
        header: 'create-velo-app',
        content: '一个快速生成组件库搭建环境的脚手架'
    },
    {
        header: 'Options',
        optionList: [
            // 获取版本号
            {
                name: 'version',
                alias: 'v',
                typeLabel: '{underline boolean}',
                description: '版本号'
            },
            // 获取帮助
            {
                name: 'help',
                alias: 'h',
                typeLabel: '{underline boolean}',
                description: '帮助'
            }
        ]
    }
];
// 交互式命令
const promptsOptions = [
    {
        type: 'text',
        name: 'name',
        message: '请输入项目名称'
    },
    {
        type: 'select', //单选
        name: 'template',
        message: '请选择一个模板',
        choices: [
            { title: 'kitty-ui', value: 1 },
            { title: 'velo', value: 2 }
        ]
    }
];
const options = commandLineArgs(optionDefinitions);
// 要拉取的模板的远程仓库地址
const remoteList = {
    1: 'https://gitee.com/geeksdidi/kittyui.git',
    2: 'https://github.com/aojunhao123/Velo'
};
const getUserInfo = async () => {
    const res = await prompts(promptsOptions);
    if (!res.name || !res.template) return;
    // Git clone
    gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
};
// 运行命令
const runOptions = () => {
    if (options.version) {
        console.log(`v${pkg.version}`);
        return;
    }
    if (options.help) {
        console.log(commandLineUsage(helpSections));
        return;
    }
    getUserInfo();
};

runOptions();
