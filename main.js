
leftWristX=0
rightWristX=0
difference=0


function setup() {
    video = createCapture(VIDEO)
    video.size(900,550)
    canvas = createCanvas(550,550)
    canvas.position(1000,)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
   
}

function gotPoses(results) {

    if(results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = Math.floor(leftWristX-rightWristX)
    }

}

function modelLoaded() {
    console.log("Model Loaded")
}

function draw() {
    background("#177f1f")
    textSize(difference)
    fill("gold")
    text("Anish",150,300)
    document.getElementById("font_size").innerHTML = "The size of the text is - "+ difference + "px"
}