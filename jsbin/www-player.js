const playPauseBtn = document.querySelector(".play-pause-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const muteBtn = document.querySelector(".mute-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const timelineContainer = document.querySelector(".timeline-container")
const video = document.querySelector("video")
const buffer = document.querySelector(".buffer")
const hovercurrentTimeElem = document.querySelector(".timeline-txttime")
document.addEventListener("keydown", e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === "input") return

    switch (e.key.toLowerCase()) {
        case " ":
            if (tagName === "button") return
        case "k":
            togglePlay()
            break
        case "f":
            toggleFullScreenMode()
            break
        case "i":
            toggleMiniPlayerMode()
            break
        case "m":
            toggleMute()
            break
        case "arrowleft":
        case "j":
            skip(-5)
            break
        case "arrowright":
        case "l":
            skip(5)
            break
        case "c":
            toggleCaptions()
            break
    }
})
timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
timelineContainer.addEventListener("mousedown", toggleScrubbing)
document.addEventListener("mouseup", e => {
    if (isScrubbing) toggleScrubbing(e)
})
document.addEventListener("mousemove", e => {
    if (isScrubbing) handleTimelineUpdate(e)
})
let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    isScrubbing = (e.buttons & 1) === 1
    videoContainer.classList.toggle("scrubbing", isScrubbing)
    if (isScrubbing) {
        wasPaused = video.paused
        video.pause()
    } else {
        video.currentTime = percent * video.duration
        if (!wasPaused) {
            video.play();
        }
    }
    handleTimelineUpdate(e)
}
function handleTimelineUpdate(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    const previewImgNumber = Math.max(1,Math.floor((percent * video.duration) / 10))
    timelineContainer.style.setProperty("--preview-position", percent)
    if (isScrubbing) {
        e.preventDefault()
        timelineContainer.style.setProperty("--progress-position", percent)
    }
}
video.addEventListener("loadeddata", () => {
    totalTimeElem.textContent = formatDuration(video.duration)
    buffer.style.display = "none"
})
video.addEventListener("timeupdate", () => {
    currentTimeElem.textContent = formatDuration(video.currentTime)
    const percent = video.currentTime / video.duration
    timelineContainer.style.setProperty("--progress-position", percent)
})
const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
})
function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
        return `${hours}:${leadingZeroFormatter.format(
                                    minutes
                                    )}:${leadingZeroFormatter.format(seconds)}`
    }
}
function skip(duration) {
    video.currentTime += duration
}
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
    video.volume = e.target.value
    video.muted = e.target.value === 0
})
function toggleMute() {
    video.muted = !video.muted
}
video.addEventListener("volumechange", () => {
    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0
        volumeLevel = "muted"
    } else if (video.volume >= 0.5) {
        volumeLevel = "high"
    } else {
        volumeLevel = "low"
    }
    videoContainer.dataset.volumeLevel = volumeLevel
})
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}
function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains("mini-player")) {
        document.exitPictureInPicture()
    } else {
        video.requestPictureInPicture()
    }
}
document.addEventListener("fullscreenchange", () => {
    videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})
video.addEventListener("enterpictureinpicture", () => {
    videoContainer.classList.add("mini-player")
})
video.addEventListener("leavepictureinpicture", () => {
    videoContainer.classList.remove("mini-player")
})
playPauseBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)
function togglePlay() {
    video.paused ? video.play() : video.pause();
}
video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
    videoContainer.classList.remove("replay")
})
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
    videoContainer.classList.remove("replay")
})
video.addEventListener("ended", () => {
    videoContainer.classList.add("paused")
    videoContainer.classList.add("replay")
});
setInterval(function() {
    totalTimeElem.textContent = formatDuration(video.duration)
    hovercurrentTimeElem.innerHTML = formatDuration(getComputedStyle(timelineContainer).getPropertyValue("--preview-position")*video.duration)
}, 100)
video.onwaiting = function() {
    console.log("Buffering...");
    buffer.style.display = "block";
}
video.onplaying = function() {
    console.log("Finished buffering!");
    buffer.style.display = "none";
}
function preventKeyBoardScroll(e) {
    var keys = [32, 33, 34, 35, 37, 38, 39, 40];
    if (keys.includes(e.keyCode)) {
        e.preventDefault();
        return false;
    }
}
function enableKeyBoardScroll(e) {
    return true;
}
document.addEventListener('keydown', preventKeyBoardScroll);
document.querySelector("#masthead-search-term").addEventListener('keydown', enableKeyBoardScroll);