// Music Player for Canva Design Integration
const bgMusic = document.getElementById('bgMusic');
const splashScreen = document.getElementById('splashScreen');
const enterBtn = document.getElementById('enterBtn');
const mainContent = document.getElementById('mainContent');
const musicControl = document.getElementById('musicControl');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('.music-icon');

// Set default volume
bgMusic.volume = 0.3; // 30% volume

let isPlaying = false;

// Function to start music
function startMusic() {
    bgMusic.load();
    
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Music started successfully');
            isPlaying = true;
            updateMusicIcon();
        }).catch(error => {
            console.log('Music play error:', error);
            // Retry for iOS/Safari
            setTimeout(() => {
                bgMusic.play()
                    .then(() => {
                        isPlaying = true;
                        updateMusicIcon();
                    })
                    .catch(e => console.log('Retry failed:', e));
            }, 100);
        });
    }
}

// Function to toggle music
function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
    } else {
        bgMusic.play()
            .then(() => {
                isPlaying = true;
            })
            .catch(e => console.log('Play error:', e));
    }
    updateMusicIcon();
}

// Update music icon
function updateMusicIcon() {
    if (isPlaying) {
        musicIcon.classList.add('playing');
        musicIcon.textContent = '♪';
    } else {
        musicIcon.classList.remove('playing');
        musicIcon.textContent = '⏸';
    }
}

// Function to hide splash and show content
function hideSplash() {
    splashScreen.style.opacity = '0';
    
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        musicControl.classList.remove('hidden');
        
        // Fade in main content
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
    }, 800);
}

// Enter button click handler
enterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startMusic();
    hideSplash();
});

// Enter button touch handler (for mobile)
enterBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startMusic();
    hideSplash();
}, { passive: false });

// Music toggle button
musicToggle.addEventListener('click', toggleMusic);

// Keyboard support (spacebar to toggle music)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !splashScreen.style.display) {
        e.preventDefault();
        toggleMusic();
    }
});

// Auto-play attempt on user interaction (fallback)
document.addEventListener('click', function autoPlay() {
    if (!isPlaying && splashScreen.style.display === 'none') {
        bgMusic.play()
            .then(() => {
                isPlaying = true;
                updateMusicIcon();
            })
            .catch(() => {});
    }
}, { once: true });
