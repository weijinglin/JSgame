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
    let attri = length +'px';
    myDiv.style.height = attri;
    myDiv.style.width = attri;
    var count = 0;
    // man.style.position = 'absolute';
    // var xc = x*50;
    // var yc = y*50;
    // var xx = xc + 'px';
    // var yy = yc +'px';
    // man.style.top = xx;
    // man.style.left = yy;
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
            document.body.append(child);
            if(x == i && y == index){
                child.appendChild(man);
            }
        }
    }
    return zu;
}

 function delet(map){
    // for (let i = 0; i < 10; i++) {
    //     for (let j = 0; j < 10; j++) {
    //         if(map[i][j] == 1){
    //             var fid = 'child' + i;
    //             fid = fid + j;
    //             var b = document.getElementById(fid);
    //             b.removeChild(); 
    //         }
    //     }
        
    // }
    // var b = document.getElementById('prize');
    // b.remove;
    for (let index = 0; index < 10; index++) {
        var c = b[0];
        c.remove();
        
    }

}
