document.addEventListener("DOMContentLoaded", getVideoSources);


const {desktopCapturer} = require('electron');



let mediaRecorder;

const textSelectSource = document.getElementById('navbardrop')

const videoElement = document.querySelector('video');

const startBtn = document.getElementById('startBtn');

// todo
// startBtn.onclick = () => {
//     mediaRecorder.start();
//     startBtn.classList.remove('btn-success')
//     startBtn.classList.add('btn-warning');
//     startBtn.innerText = 'Streaming';
// };

const stopBtn = document.getElementById('stopBtn');

// todo
// stopBtn.onclick = () => {
//     mediaRecorder.stop();
//     startBtn.classList.remove('btn-warning')
//     startBtn.classList.add('btn-success');
//     startBtn.innerText = 'Start';
// };


const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;

async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window', 'screen']
    });

    inputSources.forEach(source => createChildSelect(source))

}

function createChildSelect(source) {
    let menu = document.getElementById('dropdown-menu')
    let item = document.createElement('a')
    item.classList.add('dropdown-item')
    item.href = '#'
    item.dataset.id = JSON.stringify(source)
    item.textContent = source.name
    item.onclick = () => selectSource(item)
    menu.appendChild(item)
}

async function selectSource(source) {
    source = JSON.parse(source.dataset.id)
    textSelectSource.textContent = source.name;

    const constraints = {
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id
            }
        }
    };

    const stream = await navigator.mediaDevices
        .getUserMedia(constraints);

    videoElement.srcObject = stream;
    videoElement.play();

    const options = {
        mimeType: 'video/webm; codecs=vp9'
    };
    mediaRecorder = new MediaRecorder(stream, options);
    todo
    //mediaRecorder.ondataavailable = handleDataAvailable;
    //mediaRecorder.onstop = handleStop;

}
// todo pause and play
document.getElementById('logo').onclick = () => {
    console.log("test")
    mediaRecorder.pause()
}