	//Solve by Hoang Cong Son @lelouchlamperouge18(github) 
	var red_path = [[0,0],[1,1],[3,2],[5,6],[7,7]];
	var blue_path = [[0,5],[2,4],[5,3],[6,2]];
	ArraySize = function(obj) {
    	var size = 0, key;
    	for (key in obj) {
        	if (obj.hasOwnProperty(key)) size++;
    	}
    	return size;
	};
	//Tim 2 cap diem chua su giao nhau
	var m=-1;
	var n=-1;
	for (var i=0;i<ArraySize(red_path)-1;i++){
		for (var j=0;j<ArraySize(blue_path)-1;j++){
			if (((red_path[i][1]-blue_path[j][1])*(red_path[i+1][1]-blue_path[j+1][1])<0)&&(red_path[i][0]<blue_path[j+1][0])){
				m=i;
				n=j;
				break;
			}
		}
	} 
	//Tim diem giao nhau
	Intersect = function(a,b,c,d,m,n){
		if (m===-1) return "NULL";
    	var a1 = (a[1]-b[1])/(a[0]-b[0]);
    	var a2 = (c[1]-d[1])/(c[0]-d[0]);
    	var x = (a1*a[0] - a2*c[0] - a[1] + c[1])/(a1-a2);
    	var y = a1*(x-a[0])+a[1];
    	return [x,y];
	}
	console.log(Intersect(red_path[m],red_path[m+1],blue_path[n],blue_path[n+1],m,n));
