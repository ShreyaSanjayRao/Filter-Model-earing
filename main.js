rightEarX=0;
rightEarY=0;
function preload()
{
earing=loadImage("https://i.postimg.cc/2y14RDFd/earing.jpg");
}
function setup()
{
 canvas=createCanvas(410,410);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(410,410);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on("pose",gotPoses);
}
function draw()
    {
    image(video,0,0,410,410);
    fill("#ed0e0e");
    stroke("#ed0ebd");
    image(earing,rightEarX,rightEarY,30,30)
    }

function capture ()
{
    save("earing_image.png");
}
function  modelLoaded()
{
    console.log ("poseNet is loaded");
    
}
function gotPoses(results)
{
if(results.length > 0){
    console.log("results");
    rightEarX=results[0].pose.rightEar.x-10;
    rightEarY= results[0].pose.rightEar.y-10;
    console.log("rightEarx = " + rightEarX );
    console.log("rightEar y = " + rightEarY);
}
}
