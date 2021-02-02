class Game{

    constructor(){

    }

    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{

            gameState = data.val();

        });
    }

    update(state){

        database.ref('/').update({

            gameState:state

        })
    }

    async start(){

        if(gameState === 0){

            khiladi = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');

            if(playerCountRef.exists()){

                playerCount = playerCountRef.val();
                khiladi.getCount();

            }
            form = new Form();
            form.display();

        }

        ani_images();

        
        khiladi.posX = 1000;
        khiladi.posY = 0;


    }

    play(){

        form.hide();

        Player.getPlayerInfo();


        if(allPlayers !== undefined){

            var index = 0;

            camera.position.x = invisibleObject.x+width/2-600;
            camera.position.y = invisibleObject.y;
        
            
            sound();

            khiladi.getk1();
            khiladi.getk2();
            khiladi.getk3();
            khiladi.getk4();

            player1.mummy();
            player2.mummy();
            player3.mummy();
            player4.mummy();

            killing();

           // console.log()
      
            
            for(var plr in allPlayers){
              console.log(plr1k+":"+plr2k+":"+plr3k+":"+plr4k);
                index = index+1;
                //console.log(allPlayers[plr].kills+":"+player1.kills);
                
                if(allPlayers[plr].posX!== undefined&&allPlayers[plr].posY!==undefined){

                  var yy = allPlayers[plr].posY;
                  var xx = allPlayers[plr].posX
                khiladies[index-1].body.x = xx;
                khiladies[index-1].body.y = yy;
                }

                khiladies[index-1].mousy = allPlayers[plr].mousy;
                khiladies[index-1].direction = allPlayers[plr].direction;
                khiladies[index-1].fireState = allPlayers[plr].firingState;
                khiladies[index-1].health = allPlayers[plr].health;
                khiladies[index-1].name = allPlayers[plr].name;
                khiladies[index-1].state = allPlayers[plr].state;

               // console.log(index+":"+plr);

            };

         push();

         fill("skyblue");
         textSize(40);
         text(player1.name+":"+plr1,player1.body.x,player1.body.y+90);
         text(player2.name+":"+plr2,player2.body.x,player2.body.y+90);
         text(player3.name+":"+plr3,player3.body.x,player3.body.y+90);
         text(player4.name+":"+plr4,player4.body.x,player4.body.y+90);

         rectMode(CORNER);
         rect(player1.body.x-170,player1.body.y,player1.health,20);
         rect(player2.body.x-170,player2.body.y,player2.health,20);
         rect(player3.body.x-170,player3.body.y,player3.health,20);
         rect(player4.body.x-170,player4.body.y,player4.health,20);

         pop();

         

         if(khiladi.state==="dead"){

          if (frameCount % 60 == 0 && timer > 0) { 
            timer --;
          }

          if(timer===0){
            khiladi.state = "alive";
            khiladi.health = 200;
            khiladi.update();
          }
         }

         if(khiladi.state==="alive"){

           timer = 8;
           updatation();

         }

         textSize(40);
         fill("brown");
         stroke("skyblue");
         strokeWeight(7);
         text("This is the timer:"+timer+" This is state:"+khiladi.state,invisibleObject.x,invisibleObject.y-70);


        }

          invisibleObject.collide(spritesGroup);
          
    }
}