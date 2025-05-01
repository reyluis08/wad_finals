// Music Player functionality
class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentTrack = null;
        this.tracks = [
            { name: 'Track 1', url: '/static/music/track1.mp3' },
            { name: 'Track 2', url: '/static/music/track2.mp3' }
        ];

        // Load saved state from localStorage
        this.loadState();
        
        // Save state when page is unloaded
        window.addEventListener('beforeunload', () => this.saveState());
    }

    loadState() {
        const savedState = localStorage.getItem('musicPlayerState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.isPlaying = state.isPlaying;
            this.currentTrack = state.currentTrack;
            
            if (this.currentTrack) {
                this.audio.src = this.currentTrack.url;
                if (this.isPlaying) {
                    this.audio.play();
                }
            }
        }
    }

    saveState() {
        const state = {
            isPlaying: this.isPlaying,
            currentTrack: this.currentTrack
        };
        localStorage.setItem('musicPlayerState', JSON.stringify(state));
    }

    play(track) {
        if (track) {
            this.currentTrack = track;
            this.audio.src = track.url;
        }
        this.audio.play();
        this.isPlaying = true;
        this.saveState();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.saveState();
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.musicPlayer = new MusicPlayer();
}); 