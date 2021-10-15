"use strict";
// 严格模式的定义不允许使用未定义的变量

var gl;
var points;

window.onload = function init(){
	var canvas = document.getElementById("triangle-canvas");
	// WebGLUtils.setupWebGL()函数，用以打包创建WbeGL上下文
	gl = WebGLUtils.setupWebGL(canvas);
	if(!gl){
	// 固定格式，判定WebGL是否能够使用
		alert("WebGL isn't available.");
	}
    var n = 64;
    var vertices = new Float32Array(n*6+41*2);
    var angle = 0;
    var r = 0.14;
    var r2=0.05;
    var stepAngle = 360/n*(Math.PI/180);

var vertices = [
		 0.0,  -0.2,     //0 身体
		 0.5,  -0.2,
         0.5,  0.6,
		 0.0,  0.6,

         0.175,0.6,     //4 脖子
         0.325,0.6,
         0.25,0.73,

         -0.4, 0.4,     //7 左臂
         0.0,  0.4,
         0.0,  0.5,
         -0.4, 0.5,

         0.5, 0.4,      //11 右臂
         0.9, 0.4,
         0.9, 0.5,
         0.5, 0.5,

         0.05,-0.8,     //15 左腿
         0.15,-0.8,
         0.15,0.0,
         0.05,0.0,
        

         0.36,-0.8,      //19 右腿
         0.46,-0.8,
         0.46,0.0,
         0.36,0.0,

         0.045,-0.8,//23 左脚
         0.155,-0.8,
         0.2,-0.925,
         0.045,-0.8,//26 左脚
         0.2,-0.925,
         0.1,-1.0,
         0.045,-0.8,//29 左脚
         0.1,-1.0,
         0.0,-0.925,

         0.355,-0.8,//32 右脚
         0.465,-0.8,
         0.51,-0.925,
         0.355,-0.8,//35 右脚
         0.51,-0.925,
         0.41,-1.0,
         0.355,-0.8,//38 右脚
         0.41,-1.0,
         0.31,-0.925,
	];

    for (var i = 82;i<n*2+41*2;i+=2){
        vertices[i] = r * Math.cos(angle)+0.25;
        vertices[i+1] = r * Math.sin(angle)+0.86;
        angle+=stepAngle; 
    }
    for (var i = 210;i<n*4+41*2;i+=2){
        vertices[i] = r2 * Math.cos(angle)-0.4;
        vertices[i+1] = r2 * Math.sin(angle)+0.45;
        angle+=stepAngle; 
    }
    for (var i = 338;i<n*6+41*2;i+=2){
        vertices[i] = r2 * Math.cos(angle)+0.88;
        vertices[i+1] = r2 * Math.sin(angle)+0.45;
        angle+=stepAngle; 
    }

    // Configure WebGL
	gl.viewport(0, 0, canvas.width, canvas.height);
	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	
	// Load shaders and initialize attribute buffers
	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);
	
	//Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	
	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	

	render();
}



function render(){
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 4, 3);//画三角（脖子）

	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);//画矩形(身体)

    gl.drawArrays(gl.TRIANGLE_FAN, 7, 4);//画矩形（左臂）
    gl.drawArrays(gl.TRIANGLE_FAN, 11, 4);//画矩形（右臂）

    gl.drawArrays(gl.TRIANGLE_FAN, 15, 4);//画矩形（左腿）
    gl.drawArrays(gl.TRIANGLE_FAN, 19, 4);//画矩形（右腿）

    gl.drawArrays(gl.TRIANGLE_FAN, 23, 3);//画矩形（左脚）
    gl.drawArrays(gl.TRIANGLE_FAN, 26, 3);
    gl.drawArrays(gl.TRIANGLE_FAN, 29, 3);

    gl.drawArrays(gl.TRIANGLE_FAN, 32, 3);//画矩形（右脚）
    gl.drawArrays(gl.TRIANGLE_FAN, 35, 3);
    gl.drawArrays(gl.TRIANGLE_FAN, 38, 3);

    gl.drawArrays(gl.TRIANGLE_FAN,41,64);//头
    gl.drawArrays(gl.TRIANGLE_FAN,105,64);//左手
    gl.drawArrays(gl.TRIANGLE_FAN,169,64);//右手
}
























/////////////////////////////////

// "use strict";
// // 严格模式的定义不允许使用未定义的变量

// var gl;
// var points;

// window.onload = function init(){
// 	var canvas = document.getElementById("triangle-canvas");
// 	// WebGLUtils.setupWebGL()函数，用以打包创建WbeGL上下文
// 	gl = WebGLUtils.setupWebGL(canvas);
// 	if(!gl){
// 	// 固定格式，判定WebGL是否能够使用
// 		alert("WebGL isn't available.");
// 	}
//     var n = 64;
//     var vertices = new Float32Array(n*2+41*2);
//     var angle = 0;
//     var r = 0.15;
//     var stepAngle = 360/n*(Math.PI/180);

// var vertices = [
// 		 0.0,  -0.2,     //0 身体
// 		 0.5,  -0.2,
//          0.5,  0.6,
// 		 0.0,  0.6,

//          0.175,0.6,     //4 脖子
//          0.325,0.6,
//          0.25,0.73,

//          -0.4, 0.4,     //7 左臂
//          0.0,  0.4,
//          0.0,  0.5,
//          -0.4, 0.5,

//          0.5, 0.4,      //11 右臂
//          0.9, 0.4,
//          0.9, 0.5,
//          0.5, 0.5,

//          0.05,-0.8,     //15 左腿
//          0.15,-0.8,
//          0.15,0.0,
//          0.05,0.0,
        

//          0.36,-0.8,      //19 右腿
//          0.46,-0.8,
//          0.46,0.0,
//          0.36,0.0,

//          0.045,-0.8,//23 左脚
//          0.155,-0.8,
//          0.2,-0.925,
//          0.045,-0.8,//26 左脚
//          0.2,-0.925,
//          0.1,-1.0,
//          0.045,-0.8,//29 左脚
//          0.1,-1.0,
//          0.0,-0.925,

//          0.355,-0.8,//32 右脚
//          0.465,-0.8,
//          0.51,-0.925,
//          0.355,-0.8,//35 右脚
//          0.51,-0.925,
//          0.41,-1.0,
//          0.355,-0.8,//38 右脚
//          0.41,-1.0,
//          0.31,-0.925,
// 	];

//     for (var i = 82;i<n*2+41*2;i+=2){
//         vertices[i] = r * Math.cos(angle)+0.25;
//         vertices[i+1] = r * Math.sin(angle)+0.86;
//         angle+=stepAngle; 
//     }

//     // Configure WebGL
// 	gl.viewport(0, 0, canvas.width, canvas.height);
// 	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	
// 	// Load shaders and initialize attribute buffers
// 	var program = initShaders(gl, "vertex-shader", "fragment-shader");
// 	gl.useProgram(program);
	
// 	//Load the data into the GPU
// 	var bufferId = gl.createBuffer();
// 	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
// 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	
// 	// Associate external shader variables with data buffer
// 	var vPosition = gl.getAttribLocation(program, "vPosition");
// 	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
// 	gl.enableVertexAttribArray(vPosition);
	

// 	render();
// }



// function render(){
// 	gl.clear(gl.COLOR_BUFFER_BIT);
// 	gl.drawArrays(gl.TRIANGLES, 4, 3);//画三角（脖子）

// 	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);//画矩形(身体)

//     gl.drawArrays(gl.TRIANGLE_FAN, 7, 4);//画矩形（左臂）
//     gl.drawArrays(gl.TRIANGLE_FAN, 11, 4);//画矩形（右臂）

//     gl.drawArrays(gl.TRIANGLE_FAN, 15, 4);//画矩形（左腿）
//     gl.drawArrays(gl.TRIANGLE_FAN, 19, 4);//画矩形（右腿）

//     gl.drawArrays(gl.TRIANGLE_FAN, 23, 3);//画矩形（左脚）
//     gl.drawArrays(gl.TRIANGLE_FAN, 26, 3);
//     gl.drawArrays(gl.TRIANGLE_FAN, 29, 3);

//     gl.drawArrays(gl.TRIANGLE_FAN, 32, 3);//画矩形（右脚）
//     gl.drawArrays(gl.TRIANGLE_FAN, 35, 3);
//     gl.drawArrays(gl.TRIANGLE_FAN, 38, 3);

//     gl.drawArrays(gl.TRIANGLE_FAN,41,64);
// }


/////////////////////////////////////