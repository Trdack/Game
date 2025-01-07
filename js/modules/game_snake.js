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
    #UI = {

    };
    constructor() {
        console.log('SnakeGame');
        this.#init();
        this.#main();
    }

    // TODO: 初始化
    #init() {
        // 初始数据
        // 初始化界面
    }

    #initData() {
        
    }


    #main() {

    }
}

export default SnakeGame;