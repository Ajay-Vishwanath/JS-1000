import NoteTable from './note_table';

class Oscillator {
    constructor(options){
        this.context = options.context
        this.osc = options.context.createOscillator();
        this.osc.type = "sine";
        this.gain = options.context.createGain();
        this.osc.connect(this.gain);
        this.waveformControl = document.getElementById('waveform');
        this.waveformControl.addEventListener('change', function (event) {
            this.osc.type = event.target.value
        }); 

        this.gainControl = document.getElementById('gain')
        this.gain.gain.value = this.gainControl.value
        this.gainControl.addEventListener('change', this.setGain.bind(this), false);
    }

    setGain(event){
        let value = parseFloat(event.target.value)

        if (isFinite(value)) {
            this.gain.gain.value = value
        }
    }

    connect(connection) {
        debugger 
        this.gain.connect(connection);
    }
}

export default Oscillator; 
