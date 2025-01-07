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
    };
    #style = {
        center: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
    };
    #UI = {};
    constructor(gameWindow) {
        this.#UI.gameWindow = gameWindow;
        console.log(this.#UI.gameWindow)
        this.#init();
        this.#main();
    }

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
        this.#startInterface();
        // 游戏开始菜单
        // 初始数据
        this.#initData();
        // 初始化界面
    }

    // TODO: 初始化数据
    #initData() {
        console.log('初始化数据');
        this.#data.snake = [[1, 2],[2, 2],[3, 2],[4, 2],[5, 2],[6, 2],[7, 2]];
        console.log(this.#data.snake);
    }

    // TODO: 开始界面
    #startInterface() {
        let style = {
            ...this.#style.center,
            width: "900px",
            height: "500px",
            border: "1px solid #222",
            color: "#bad",
            fontSize: "108px",
            textAlign: "center",
            lineHeight: "180px",
            fontWeight: "900",
            textShadow: "5px 5px 5px blue",
            // borderRadius: "180px",
        };
        let elem = this.#fndiv(style);
        this.#UI.gameWindow.appendChild(elem);
        this.#UI.startInterfaceElem = elem;
    }





    // TODO: 游戏主程序
    #main() {
    }
}

export default SnakeGame;