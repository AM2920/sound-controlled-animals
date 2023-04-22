function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YB8nGgxta/model.json')
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementsById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").innerHTML.style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('img_0');
        img1 = document.getElementById('img_1');
        img2 = document.getElementById('img_2');
        img3 = document.getElementById('img_3');

        if (results[0].label == "Meowing") {
            img.src = 'cat-jumping.gif';
            img1.src = 'download (1).jfif';
            img2.src = 'download (2).jfif';
            img3.src = 'download (3).jfif';
        } else if(results[0].label == "Roaring") {
            img.src = 'download.jfif';
            img1.src = 'lion-roar.gif';
            img2.src = 'download (2).jfif';
            img3.src = 'download (3).jfif';
        } else if (results[0].label == "Mooing") {
            img.src = 'download.jfif';
            img1.src = 'download (1).jfif';
            img2.src = 'cow-mooing.gif';
            img3.src = 'download (3).jfif';
        }else{
            img.src = 'download.jfif';
            img1.src = 'download (2).jfif';
            img2.src = 'download (3).jfif';
            img3.src = 'dog-barking.gif';
        }
        }
    }