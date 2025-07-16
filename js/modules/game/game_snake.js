// TODO: 贪吃蛇游戏
class SnakeGame {
    // Finish: 游戏信息
    #gameInfo = {
        vison: "0.1",
        name: "贪吃蛇",
        char: "snake",
        cover: "./images/snake_cover.png",
    };
    // Finish: 游戏数据
    #data = {
        rows: 0,            // 地图行数
        columns: 0,         // 地图列数
        gridSize: 20,       // 网格尺寸
        snake: [],          // 蛇数据
        status: 0,          // 游戏状态
        length: 8,          // 蛇长度
        score: 0,           // 成绩
        snakeElem: [],      // 蛇元素
        gameInterval: null, // 游戏计时器
        startMenu: [["开始游戏", this.start_game], ["游戏档案", this.open_game_archive], ["设置", this.open_set_up], ["游戏说明", this.open_instructions], ["退出游戏", this.quit_game]], // 开始菜单项目
        startMenuEvent: [], // 开始菜单事件
    };
    #publicStyle = {
        center: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        boxFirst: {
            border: "1px solid #222",
            backgroundColor: "transparent",
        },
        snakeNode: {
            position: "absolute",
            width: `${this.#data.gridSize}px`,
            height: `${this.#data.gridSize}px`,
            border: "2px solid #fff",
            boxSizing: "border-box",
            borderRadius: "50%",
        },
    };
    #style = {
        startInterface: {
            ...this.#publicStyle.center,
            fontWeight: "900",
            textShadow: "5px 5px 5px blue",
            // borderRadius: "180px",
            backgroundColor: "#ffffff22"
        },
        startMenu: {
            ...this.#publicStyle.center,
            width: "500px",
            height: "300px",
            border: "1px  solid #666",
            // backgroundColor: "#ffffff22",
            padding: "30px",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
        },
        startMenuItem: {
            width: "180px",
            height: "36px",
            fontSize: "18px",
            lineHeight: "36px",
            color: "#999",
            border: "1px solid #999",
            margin: "10px 0",
            padding: "0 40px",
            textAlign: "justify",
            textAlignLast: "justify",
            cursor: "pointer",
            boxSizing: "border-box",
            backgroundColor: "transparent",
        },
        startMenuItemHover: {
            backgroundColor: "#333",
            border: "1px solid #fff",
            color: "#fff",
        },
        snakeHead: {
            ...this.#publicStyle.snakeNode,
            backgroundColor: "red",
            zIndex: 10
        },
        snakeBody: {
            ...this.#publicStyle.snakeNode,
            backgroundColor: "blue",
            zIndex: 10
        },
        snakeFood: {
            ...this.#publicStyle.snakeNode,
            backgroundColor: "green",
            zIndex: 10
        },
    };
    #UI = {};

    // _ 构造函数
    constructor(gameWindowElem, gameListElem) {
        this.gameWindow = gameWindowElem;
        this.#init();
        this.#main();
    };

    // Finish: 根据样式新建div
    #fndiv(style) {
        let div = document.createElement("div");
        for (let key in style) {
            div.style[key] = style[key];
        }
        return div;
    }

    // TODO: 初始化
    #init() {
        // 开始界面
        // this.#startInterface();
        // 游戏开始菜单
        this.#startMenu();
        // 初始数据
        this.#initData();
        // 初始化界面
        this.#initUI();
    }

    // TODO: 初始化数据
    #initData() {
        console.log('初始化数据');
        this.#data.snake = [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2]];
        console.log(this.#data.snake);
    }

    // TODO: 初始化界面
    #initUI() {
        // 
    }

    // TODO: 开始界面
    #startInterface() {
        let style = this.#style.startInterface;
        let startInterfaceElem = this.#fndiv(style);
        startInterfaceElem.innerHTML = "开机画面"
        this.gameWindow.appendChild(startInterfaceElem);
        this.startInterfaceElem = startInterfaceElem;
    }

    // TODO: 开始菜单
    #startMenu() {
        let startMenuStyle = this.#style.startMenu;
        console.log(startMenuStyle)
        let startMenuItemStyle = this.#style.startMenuItem;
        let startMenuItemHover = this.#style.startMenuItemHover;
        let startMenuItemRestore = this.#style.startMenuItem;
        let startMenuElem = this.#fndiv(startMenuStyle);
        let fragment = document.createDocumentFragment();
        fragment.appendChild(startMenuElem);
        this.startMenuItem = this.#data.startMenu.map((item) => {
            let itemElem = this.#fndiv(startMenuItemStyle);
            itemElem.innerHTML = item[0]; 
            itemElem.addEventListener("mouseover", (e) => {
                for (let key in startMenuItemHover) {
                    e.target.style[key] = startMenuItemHover[key];
                }
            });
            itemElem.addEventListener("mouseout", (e) => {
                for (let key in startMenuItemRestore) {
                    e.target.style[key] = startMenuItemRestore[key];
                }
            });
            itemElem.addEventListener("click", (e) => {
                item[1]();
            });
            startMenuElem.appendChild(itemElem);
            return itemElem;
        });
        let index = this.startMenuItem.length - 1;
        this.quitElem = this.startMenuItem[index];
        this.gameWindow.appendChild(fragment);
    }


    // TODO: 开始游戏
    start_game() {
        console.log("开始游戏")
    }

    // TODO: 游戏档案
    open_game_archive() {
        console.log("打开游戏档案")
    }

    // TODO: 设置
    open_set_up() {
        console.log("打开游戏设置")
    }

    // TODO: 游戏说明
    open_instructions() {
        console.log("打开游戏说明")
    }

    // TODO: 退出游戏
    quit_game(elem) {
        console.log("退出游戏")
    }



    // TODO: 渲染蛇头
    #renderSnakeHead([x, y]) {
        let style = {
            ...this.#style.snakeHead,
            top: `${y * this.#data.gridSize}px`,
            left: `${x * this.#data.gridSize}px`,
        }
        let elem = this.#fndiv(style);
        this.mapElem.appendChild(div);
    }




    // TODO: 游戏主程序
    #main() {
        // 使用计时器循环移动
        this.#data.gameInterval = setInterval(() => {
            /* 
                流程：
                    1.检测碰撞
                    2.判断是否可以移动
                        - true: 移动
                        - false: 结束游戏
             */

        }, 100);

    }
}

export default SnakeGame;