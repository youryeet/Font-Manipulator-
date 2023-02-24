left_wristX = 0;
right_wristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(400,400);
    canvas.position(600,100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#15d646');
    textSize(difference);
    fill('lightgreen');
    text('Arham', 10, 60);
    
    
}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
        console.log("Left wrist = " + left_wristX, "Right wrist = " + right_wristX, "Difference = " + difference);

    }
}

