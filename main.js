



camera = document.getElementById("webcam1");

  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  Webcam.attach( camera );
function click1212(){
    Webcam.snap(function(data){
        document.getElementById("webcam2").innerHTML='<img id="capturedimage"src="'+data+'"/>';
    })
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RvG7tTAaK/model.json',modelloaded);
function modelloaded(){
  console.log("model is finally loaded succesfully")
}
function identifypls(){
  img=document.getElementById("capturedimage");
  classifier.classify(img,gotresult);
}
function gotresult(error,result){
if(error){
  console.log(error);}
 else { console.log(result);
  document.getElementById("name").innerHTML=result[0].label;
  document.getElementById("name1").innerHTML=result[0].confidence.toFixed(3)*100 + "%" ;
  }

 }


