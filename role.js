function randomWifu() {
  const probabilities = {
      zenith: 0.02,
      aisha: 0.02,
      ariel: 0.02,
      elinalise: 0.02,
      eris: 0.02,
      ghislaine: 0.02,
      hilda: 0.02,
      juliette: 0.02,
      kishirika: 0.02,
      linia: 0.02,
      nanahoshi: 0.02,
      norn: 0.02,
      pursena: 0.022,
      rokari: 0.02,
      roxy: 0.02,
      suzanne:0.02,
      sylphiette: 0.02,
      // lilia: 0.05, // not done yet
      // nina: 0.05, // not done yet
      // sara: 0.05, // not done yet
  };


  const randomNumber = Math.random();
  console.log('R:'+randomNumber)
  let cumulativeProbability = 0;

  while (randomNumber >= cumulativeProbability) {
    for (const [randomWifu, probability] of Object.entries(probabilities)) {
        cumulativeProbability += probability;
        if (randomNumber < cumulativeProbability) {
            return randomWifu;
        }
    }
}
}

const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');
  
playButton.addEventListener('click', function () {
    playButton.style.display = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
    
  });

const main = document.getElementById("myElement");
const div = document.querySelector('.F-div');
const div2 = document.querySelector('.S-div');
const div3 = document.querySelector('.T-div');
const div4 =  document.querySelector('.five-div');
const div6 =  document.querySelector('.sex-div');
const name = document.createElement('h4');
const image = document.createElement('img');
const image2 = document.createElement('img');
const image3 = document.createElement('img');
const gifImage = document.createElement('img');
const tryAgainButton = document.createElement('button');
const videoPlayer02 = document.getElementById('videoPlayer02');
  
function resetGame() {
    div3.removeChild(image);
    div.removeChild(gifImage);
    document.body.removeChild(tryAgainButton);
    div2.removeChild(name);
    div4.removeChild(image2);
    div6.removeChild(image3);

    playButton.style.display = 'block';
    document.body.style.backgroundImage = 'url("696c1346c27df162ecd95129ff4ea552.jpg")';
    videoPlayer02.currentTime = 0
    videoPlayer02.pause();
    videoPlayer02.style.visibility = 'hidden'
    videoPlayer.addEventListener('ended', handleVideoEnd);
  };


function handleVideoEnd(){
  
    videoPlayer.style.display = 'none';

    const gg = randomWifu();
    console.log('Random wifu:', gg);
  
    document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.gif")`;
    document.body.style.backgroundRepeat = 'no-repeat';
  
    name.textContent = `${gg}`;
    name.classList.add('wifu-name');
    name.classList.add('animate__animated', 'animate__shakeY','animate__infinite' )
  
    image.src = `../your wifu is runnig from u/imag/${gg}/${gg}.png`;
    image2.src = `../your wifu is runnig from u/imag/${gg}/${gg}2.png`;
    image3.src = `../your wifu is runnig from u/imag/${gg}/${gg}3.png`;
    image.classList.add('animate__animated', 'animate__fadeInBottomRight');
    image.classList.add('image');
    image2.classList.add('animate__animated', 'animate__fadeInBottomRight' , 'image2');
    image3.classList.add('animate__animated', 'animate__fadeInBottomRight', 'image3');

    gifImage.src = `../your wifu is runnig from u/gif/${gg}.gif`;
    gifImage.style.width = '300px';
    gifImage.style.padding = '0';
    gifImage.style.backgroundRepeat = 'no-repeat';
    gifImage.classList.add('animate__animated', 'animate__fadeInBottomRight');

if (gg === 'roxy' || gg == 'zenith') {
      image2.src = '';
      image3.src = '';
    }else if (gg ==='juliette') {
          image3.src = '';
          gifImage.src ='';
       }else if(gg ==='juliette') {
            image.src ='';
            image3.src = '';
            gifImage.src ='';
          }else if (gg === 'suzanne') {
              gifImage.src = `../your wifu is runnig from u/gif/${gg}.png`;
              document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.png")`;
            }else if (gg === 'ariel') {
                gifImage.src = `../your wifu is runnig from u/gif/${gg}.png`;
                document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.png")`;
              }else if(gg === 'aisha'){
                  image2.src = '';
                  image3.src = '';
                  gifImage.src = ``;
                  document.body.style.backgroundImage = ``;
                  videoPlayer02.style.display = 'block';
                  videoPlayer02.style.visibility = 'visible'
                  videoPlayer02.play();
                }else if( gg === 'kishirika'){
                    image2.src ='';
                    image3.src ='';
                  }else if( gg === 'pursena'){
                      image.src ='';
                      image3.src ='';
                      gifImage.src ='';
                      document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.png")`;
                    }else if(gg === 'norn' ||gg === 'eris' || gg === 'elinalise'){
                        gifImage.src = '';
                        image3.src=''
                      }else if( gg === 'rokari'){
                          gifImage.src = '';
                          image3.src ='';
                       }else if( gg === 'nanahoshi'){
                            image.src ='';
                         }else if(gg === 'linia'){
                              image3.src ='';
                              gifImage.src ='';
                           }else if(gg === 'kishirika'  || gg === 'ghislaine'){
                               image2.src = '';
                               image3.src = ''
                           }else if(gg === 'sylphiette'){
                                image3.src = ''
                             }else if(gg === 'hilda'){
                                  image3.src ='';
                                  gifImage.src ='';
                                  document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.png")`;
                                }else if (gg === 'ariel' ) {
                                      gifImage.src = `../your wifu is runnig from u/gif/${gg}.png`;
                                      document.body.style.backgroundImage = `url("../your wifu is runnig from u/back-image/back-${gg}.png")`;
                                      image3.src = '';
                                    }


    div.appendChild(gifImage);
    div2.appendChild(name);
    div3.appendChild(image);
    div4.appendChild(image2);
    div6.appendChild(image3);
    if(image.src === '' && image3.src ===''){
     
    }

    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.classList.add('try-again-button');
    tryAgainButton.addEventListener('click',resetGame);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {resetGame()}});
    document.body.appendChild(tryAgainButton);
}   
videoPlayer.addEventListener('ended', handleVideoEnd);

