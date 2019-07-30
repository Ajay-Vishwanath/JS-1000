import NoteTable from './note_table';

class Oscillator {
    constructor(options){
        this.context = options.context
        this.osc = options.context.createOscillator();
        this.gain = options.context.createGain();

        this.waveformControl = document.getElementById('waveform');
        this.osc.type = this.waveformControl.value
        this.waveformControl.addEventListener('change', this.setWaveform.bind(this), false);

        this.gainControl = document.getElementById('gain')
        this.testing = this.gainControl.value
        this.gainControl.addEventListener('change', this.setGain.bind(this), false);

        this.attackTime = parseFloat(options.envelope.attackTime)
        this.releaseTime = parseFloat(options.envelope.releaseTime)
        
    }

    playNote(){
        this.osc.start();
        this.gain.gain.value = 0;
        this.gain.gain.linearRampToValueAtTime(this.testing, this.context.currentTime + this.attackTime)
    }

    releaseNote(){
        this.gain.gain.linearRampToValueAtTime(0, this.context.currentTime + this.attackTime + this.releaseTime)
        // setTimeout(function(){this.osc.stop();}, (this.releaseTime * 1000))
    }

    setGain(event){
        let value = parseFloat(event.target.value)

        if (isFinite(value)) {
            this.testing = value
        }
    }

    setWaveform(event){
        this.osc.type = event.target.value
    }
    

    connect(connection) {
        this.gain.connect(connection);
    }
}

export default Oscillator; 
