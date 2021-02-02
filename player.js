class Player {
    constructor(){

        this.index = null;
        this.name = null;
        this.posX = null;
        this.posY = null;
        this.mousy = null;
        this.direction = null;
        this.firingState = null;
        this.health = 200;
        this.state = "alive";

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){

        database.ref("/").update({
            playerCount: count
        });

    }



    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            index:this.index,
            posX:this.posX,
            posY:this.posY,
            mousy:this.mousy,
            direction:this.direction,
            firingState:this.firingState,
            health:this.health,
            state:this.state
            
        });
    }

    static getPlayerInfo(){

        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }

    getk1(){
        var kRef = database.ref("plr1k");
        kRef.on("value",(data)=>{
            plr1 = data.val();
        });
    }

    updateK1(){

        database.ref("/").update({
            plr1k:plr1
        });
    }

    getk2(){
        var kRef = database.ref("plr2k");
        kRef.on("value",(data)=>{
            plr2 = data.val();
        });
    }

    updateK2(){

        database.ref("/").update({
            plr2k:plr2
        });
    }

    getk3(){
        var kRef = database.ref("plr3k");
        kRef.on("value",(data)=>{
            plr3 = data.val();
        });
    }

    updateK3(){

        database.ref("/").update({
            plr3k:plr3
        });
    }

    getk4(){
        var kRef = database.ref("plr4k");
        kRef.on("value",(data)=>{
            plr4 = data.val();
        });
    }

    updateK4(){

        database.ref("/").update({
            plr4k:plr4
        });
    }



}