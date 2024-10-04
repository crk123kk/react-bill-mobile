# 初始化项目

# 配置路径

    路径解析配置webpack：把 @/ 解析为 src/

        craco 插件：CRA本身将webpack的配置包装到了黑盒里无法直接修改，需要借助插件

            或者项目一开始初始化的时候，可以通过npm eject（CRA 创建之后的提示指令)来命令来帮助获取webpack插件

            使用craco的操作：

                1、安装 craco：npm install -D @craco/craco

                2、项目根目录创建配置文件 craco.config.js

                3、配置文件

                4、对 script 中的指令进行修改


    路径联想配置vscode：vscode在输入 @ 的时候，自动联想出对应的路径

        jsconfig.json

        vscode的联想配置，需要我们在项目目录下添加 jsconfig.json 文件，加入配置之后 vscode 会自动读取配置帮助我们自动联想提示

# Mock 数据

    json-server 工具

        json-server 是一个 node 包，可以在 30秒内获得一个零编码的完整的 Mock 服务

        安装 json-server：npm install -D json-server

        转变 json 文件：在项目根目录下创建 server/data.json 文件（最终在执行命令的时候指定到这里就可以），在里面书写 json 数据

        添加启动命令："server": "json-server ./server/data.json --port 8888"

        访问接口进行测试

# 初始化路由系统

    确定项目路由，确定项目目录

        一级路由：

            new：新建账单

            layout：账单详情

                二级路由：

                    month：月度账单(默认)

                    year：年度账单

# ant-mobile 主题定制

    全局定制：

        整个应用范围内都生效（切记：当前的css文件要在index.js引入才可以生效）

            :root:root{
                --adm-color-primary: #222;
            }

    局部定制：

        只在某些元素内部的组件生效

            在需要的组件内引入：
                <div class="purple-theme"> xxx xx <Button /></div>

                .purple-theme {
                    --adm-color-primary: #222;
                }
