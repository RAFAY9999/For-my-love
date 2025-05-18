// 🎵 Music switching
document.getElementById("trackSelector").addEventListener("change", function () {
  const player = document.getElementById("audioPlayer");
  const source = player.querySelector("source");
  source.src = this.value;
  player.load();
  player.play();
});

// 💬 Chat functionality
function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value.trim();

  if (message) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-message";
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}

// 🎥 Video popup
const videoPopup = document.createElement('div');
videoPopup.classList.add('video-popup');
videoPopup.innerHTML = `
  <span class="close-btn">&times;</span>
  <video controls autoplay></video>
`;
document.body.appendChild(videoPopup);

const popupVideo = videoPopup.querySelector("video");
const closeVideoBtn = videoPopup.querySelector(".close-btn");

document.querySelectorAll(".videos video").forEach(video => {
  video.addEventListener("click", () => {
    popupVideo.src = video.src;
    videoPopup.style.display = "flex";
  });
});

closeVideoBtn.addEventListener("click", () => {
  videoPopup.style.display = "none";
  popupVideo.pause();
  popupVideo.src = "";
});
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = img.src;
    popup.style.display = 'flex';
  });
});

function closeImagePopup() {
  const popup = document.getElementById('imagePopup');
  popup.style.display = 'none';
}
