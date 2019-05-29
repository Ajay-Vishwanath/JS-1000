import NoteTable from './note_table';

class Oscillator {
    constructor(options){
        this.notetable = options.notetable
        this.node = options.context.createOscillator();
        this.waveformControl = document.getElementById('waveform');
        this.waveform = "sine";
        this.gain = options.context.createGain(); 
        this.gainControl = document.getElementById('gain')
        this.node.connect(this.gain)
        this.activeNotes = {}; 


        window.addEventListener('keydown', keyDown, false);
        window.addEventListener('keyup', keyUp, false);
        window.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);
        this.waveformControl.addEventListener('change', function (event) {
            this.waveform = event.target.value
        }); 
        this.gainControl.addEventListener('change', function (event) {
            gain.gain.setValueAtTime(event.target.value, options.context.currentTime)
        });
    }
    
    keyDown(event) {
        const key = (event.detail || event.which).toString();
        if (key === "32") {
            Object.keys(this.activeNotes).forEach(function (key, i) {
                let osc = this.activeNotes[key];
                osc.stop();
                delete this.activeNotes[key];
            });
        }
        if (this.notetable.octave[key] && !this.activeNotes[key]) {
            this.playNote(key);
        }
    }

    keyUp(event) {
        const key = (event.detail || event.which).toString();
        if (this.notetable.octave[key] && this.activeNotes[key]) {
            this.activeNotes[key].stop();
            delete this.activeNotes[key];
        }
    };

    mouseDown(event) {
        const key = (event.target.id || event.which).toString();
        if (this.notetable.octave[key] && !this.activeNotes[key]) {
            this.playNote(key);
        }
    }

    mouseUp(event) {
        const key = (event.target.id || event.which).toString();
        if (this.notetable.octave[key] && this.activeNotes[key]) {
            this.activeNotes[key].stop();
            delete this.activeNotes[key];
        }
    }

    playNote(key) {
        this.node.frequency.setValueAtTime(this.notetable.octave[key], options.context.currentTime)
        this.node.type = this.waveform
        this.activeNotes[key] = this.node
        this.activeNotes[key].connect(gain)
        this.activeNotes[key].start();
    }

    connect(connection) {
        this.gain.connect(connection);
    }
}

export default Oscillator; 
