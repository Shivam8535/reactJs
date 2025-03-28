import '../style/car.css'
import { useEffect } from 'react';

export const Rs = () => {
    useEffect(() => {
        const playbackConst = 500; // lower numbers = faster playback
        const setHeight = document.getElementById("set-height"); // get page height from video duration
        const vid = document.getElementById('v0'); // select video element

        // dynamically set the page height according to video length
        vid.addEventListener('loadedmetadata', function () {
            setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        });

        // Use requestAnimationFrame for smooth playback
        const scrollPlay = () => {
            const frameNumber = window.pageYOffset / playbackConst;
            vid.currentTime = frameNumber;
            window.requestAnimationFrame(scrollPlay);
        }

        window.requestAnimationFrame(scrollPlay);
    }, []);

    return (
        <>
            <p id="time"></p>
            <video id="v0" tabIndex="0" autobuffer="autobuffer" preload="preload">
                <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
                    src="https://bugatti.imgix.net/6763385aed6f98152f573b1b/tourbillon-modelpage-02-scrollvideo-desktop.mp4">
                </source>
            </video>
            <div id="set-height"></div>
        </>
    )
}
