const data = [
    {
        id: "game-001",
        name: "贪吃蛇",
        char: "snake",
        cover: "./images/snake_cover.png",
        modulesUrl: "./modules/game/game_snake.js",
    },
];


class AppUI {
    #rootElem = document.getElementById('root');
    gameListElem;
    gameWindowElem;
    #itemSize = {
        margin: 10,
        width: 180,
        height: 136,
    };
    constructor() {
        // 监听窗口的resize事件
        window.addEventListener('resize', () => {
            this.#automaticSetupGameListElemSize();
        });
    }

    // TODO: 计算当前页面尺寸
    #getWindowSize(elem) {
        let w = elem.clientWidth;
        let h = elem.clientHeight;
        return {w, h};
    }
    

    // Finish: 渲染游戏列表
    #renderGameListElem(){
        let fragment = document.createDocumentFragment();
        let gameListElem = document.createElement('div');
        gameListElem.classList.add('game-list');
        fragment.appendChild(gameListElem);
        let itemElem = data.map((item, index) => {
            let elem = document.createElement('div');
            elem.classList.add('item');
            elem.style.width = this.#itemSize.width + 'px';
            elem.style.height = this.#itemSize.height + 'px';
            elem.style.margin = this.#itemSize.margin + 'px';
            let coverElem = document.createElement('img');
            coverElem.src = item.cover;
            let titleElem = document.createElement('div');
            titleElem.classList.add('title');
            titleElem.innerHTML = item.name;
            elem.onclick = () => {
                import(item.modulesUrl).then((module) => {
                    console.log("打开贪吃蛇游戏！");
                    this.gameWindow('open');
                    const Game = module.default;
                    this.gameList('close');
                    let game = new Game(this.gameWindowElem, this.gameListElem);
                    game.quitElem.addEventListener('click', () => {
                        this.gameWindow('close');
                        game = null;
                        this.gameList('open');
                    });
                }).catch(err => {
                    console.error('Module loading failed:', err);
                });

            };
            elem.appendChild(coverElem);
            elem.appendChild(titleElem);
            gameListElem.appendChild(elem);
            return elem;
        });
        this.gameListElem = gameListElem;
        return fragment;
    }

    // Finish: 游戏列表界面尺寸
    #automaticSetupGameListElemSize() {
        let width = this.#rootElem.clientWidth;
        let height = this.#rootElem.clientHeight;
        // console.log(width, this.#itemSize.margin*2 + this.#itemSize.width);
        const scrollbarWidth = this.gameListElem.offsetWidth - this.gameListElem.clientWidth;
        // console.log(scrollbarWidth);
        // 获取当前窗口的宽度和高度
        let gameListElemWidth = width - (width % (this.#itemSize.margin + this.#itemSize.width));
        let gameListElemPadding = (width % (this.#itemSize.margin*2 + this.#itemSize.width) - scrollbarWidth) / 2;
        if (gameListElemPadding < this.#itemSize.margin) {
            gameListElemPadding += (this.#itemSize.margin*2 + this.#itemSize.width) / 2;
        }
        // console.log(gameListElemPadding);
        this.gameListElem.style.paddingTop = '20px';
        this.gameListElem.style.paddingBottom = '20px';
        this.gameListElem.style.paddingLeft = (gameListElemPadding) + 'px';
        // this.#gameListElem.style.paddingRight = (gameListElemPadding - this.#itemSize.margin) + 'px';
    }

    // Finish: gameListElem 开关
    gameList(signal) {
        if (signal == 'open') {
            this.#renderGameListElem();
            this.#rootElem.appendChild(this.gameListElem);
            this.#automaticSetupGameListElemSize(); 
        } else if (signal == 'close') {
            this.gameListElem.remove();
        }
    }

    // Finish: 渲染游戏窗口
    #renderGameWindow() {
        let elem = document.createElement('div');
        elem.classList.add('game-window');
        return elem;
    }

    // Finish: 游戏窗口开关
    gameWindow(signal) {
        if (signal == 'open') {
            this.gameWindowElem = this.#renderGameWindow();
            this.#rootElem.appendChild(this.gameWindowElem);
        } else if (signal == 'close') {
            this.gameWindowElem.remove();
        }
    }

}


class App {
    #UI = new AppUI();
    
    constructor() {
        this.openGameList();
    }

    openGameList() {
        // console.log("打开游戏列表！");
        this.#UI.gameList('open');
    }

}

new App();