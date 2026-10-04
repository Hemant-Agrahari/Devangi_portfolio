"use client";

// Web Audio API Micro-sound Synth Synthesizer for UX feedback
class UXSoundEngine {
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.audioCtx && typeof window !== "undefined") {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Soft subtle click sound for buttons
  public playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch {
      // Audio context fallback
    }
  }

  // Pop sound for tabs or toggles
  public playPop() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(300, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, this.audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch {
      // Ignore
    }
  }

  // Confetti / Celebration chime
  public playChime() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + index * 0.06);

        gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime + index * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + index * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(this.audioCtx.currentTime + index * 0.06);
        osc.stop(this.audioCtx.currentTime + index * 0.06 + 0.25);
      });
    } catch {
      // Ignore
    }
  }
}

export const uxAudio = new UXSoundEngine();
