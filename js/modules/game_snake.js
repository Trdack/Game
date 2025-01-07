const data = {
    gameInfo: {
        vison: "0.1",
        name: "贪吃蛇",
        char: "snake",
        cover: "./images/snake_cover.png",
    },

};

class SnakeData {
    #rows = 0;          // 地图行数
    #columns = 0;       // 地图列数
    #snake = [];        // 蛇数据
    #status = 0;        // 游戏状态
}


class SnakeUI {
    
}




class SnakeGame {
    #data = new SnakeData();
    #UI = new SnakeUI();
    constructor() {
        console.log('SnakeGame');

    }

}

export default SnakeGame;