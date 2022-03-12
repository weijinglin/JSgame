const InitMap = (size,count,score)=>{
    var Map = [];
    for(var i = 0;i < size;++i){
        var b = [];
        for(var j = 0;j < size;++j){
            b[j] = null;
        }
        Map[i] = b;
    }
    for(var i = 0;i < count;++i){
        do {
            var count_loc = Math.floor(Math.random()*size);
            var x = 0;
            var y = 0;
            x = count_loc;
            count_loc = Math.floor(Math.random()*size);
            y = count_loc;
        } while (Map[x][y] != null);
        Map[x][y] = 1;
    }
    return Map;
}

function my$(id) {
    return document.getElementById(id);
}

document.querySelector('button').onclick=function(){
    game(10,10);
}

function game(map,b,man,size,count,x,y){
    let score = 0;
    let myDiv = document.getElementById('all');
    let legth = size*50;
    let attri = legth +'px';
    myDiv.style.height = '0px';
    myDiv.style.width = '0px';
    var count = 0;
    var zu = [];
    for (let index = 0; index < size; index++) {
        for(let i = 0;i < size;++i){
            const child = document.createElement('div');
            child.style.height = '50px';
            child.style.width = '50px';
            let compu = i*50;
            let com = index*50;
            let lef = compu + 'px';
            let hig = com + 'px';
            console.log(lef);
            console.log(hig);
            child.style.position = 'absolute';
            child.style.left = lef;
            child.style.top = hig;
            var cal = 'child' + i;
            cal = cal + index;
            child.id = cal;
            if(map[index][i] == 1){
                b[count].style.top = hig;
                b[count].style.left = lef;
                //document.body.append(child);
                child.appendChild(b[count]);
                zu[count] = {x:i,y:index};
                count++;
            }
            child.style.border = '1px solid rgb(15, 3, 3)';
            myDiv.append(child);
            if(x == i && y == index){
                child.appendChild(man);
            }
        }
    }
    return zu;
}

function update(map,b,man,exist,size,count,x,y,score){
    let myDiv = document.getElementById('all');
    let legth = size*50;
    let attri = legth +'px';
    myDiv.style.height = '0px';
    myDiv.style.width = '0px';
    var count = 0;
    for (let index = 0; index < size; index++) {
        for(let i = 0;i < size;++i){
            const child = document.createElement('div');
            child.style.height = '50px';
            child.style.width = '50px';
            let compu = i*50;
            let com = index*50;
            let lef = compu + 'px';
            let hig = com + 'px';
            console.log(lef);
            console.log(hig);
            child.style.position = 'absolute';
            child.style.left = lef;
            child.style.top = hig;
            var cal = 'child' + i;
            cal = cal + index;
            child.id = cal;
            if(exist[count] == true){
                count++;
            }
            if(map[index][i] == 1){
            
                b[count].style.top = hig;
                b[count].style.left = lef;
                //document.body.append(child);
                child.appendChild(b[count]);
                count++;
                
            }
            child.style.border = '1px solid rgb(15, 3, 3)';
            myDiv.append(child);
            if(x == i && y == index){
                child.appendChild(man);
            }
        }
    }
    let gameScore = document.querySelector('h2');
    let onscore = 'score:' + score;
    gameScore.textContent = onscore;
}

