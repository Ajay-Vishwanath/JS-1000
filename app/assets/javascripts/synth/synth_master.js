import NoteTable from './note_table';
import Oscillator from './oscillators';
import Filter from './filters'; 


class Synth {
    
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.notetable = new NoteTable();
        this.oscillator = new Oscillator({context: this.ctx})
        this.filter = new Filter({context: this.ctx})

        this.activeNotes = {}

        window.addEventListener('keydown', this.keyDown.bind(this), false);
        window.addEventListener('keyup', this.keyUp.bind(this), false);
        window.addEventListener('mousedown', this.mouseDown.bind(this), false);
        window.addEventListener('mouseup', this.mouseUp.bind(this), false);

    }

    setUp(){
        // this.connect(this.oscillator.osc, this.filter.filter)
        this.connect(this.filter.filter, this.ctx.destination)
    }

    connect(a, b) {
        a.connect(b)
    }

    // keyboard control 
    keyDown(event) {
        const key = (event.detail || event.which).toString();
        if (key === "32") {
            const activeNotes = this.activeNotes;  
            const correspondingDiv = this.notetable.correspondingDiv
            Object.keys(this.activeNotes).forEach(function (activeNote, i) {
                debugger 
                if (!isNaN(activeNote)) {
                    var div = correspondingDiv[activeNote + 'a']
                    var correspondingKey = document.getElementById(div)
                    correspondingKey.style.backgroundColor = null;
                } else {
                    var correspondingKey = document.getElementById(activeNote)
                    correspondingKey.style.backgroundColor = null;
                }

                let osc = activeNotes[activeNote];
                osc.stop();
                delete activeNotes[activeNote];
                
            });
        }
        if (this.notetable.octave[key] && !this.activeNotes[key]) {
            this.playNote(key);
            var div = this.notetable.correspondingDiv[key + 'a']
            var correspondingKey = document.getElementById(div)
            correspondingKey.style.backgroundColor = '#ccf'
        }
    }

    keyUp(event) { 
        const key = (event.detail || event.which).toString();
        if (this.notetable.octave[key] && this.activeNotes[key]) {
            var div = this.notetable.correspondingDiv[key + 'a']
            var correspondingKey = document.getElementById(div)
            correspondingKey.style.backgroundColor = null;
            this.activeNotes[key].stop();
            delete this.activeNotes[key];
        }
    }

//piano control

    mouseDown(event) {
        const key = (event.target.id || event.which).toString();
        if (this.notetable.octave[key] && !this.activeNotes[key]) {
            this.playNote(key);
            var correspondingKey = document.getElementById(key)
            correspondingKey.style.backgroundColor = '#ccf'
        }
    }

    mouseUp(event) {
        const key = (event.target.id || event.which).toString();
        if (this.notetable.octave[key] && this.activeNotes[key]) {
            var correspondingKey = document.getElementById(key)
            correspondingKey.style.backgroundColor = null;
            this.activeNotes[key].stop();
            delete this.activeNotes[key];
        }
    }

//HANDLES CREATION & STORING OF Notes

    playNote(key) {
        const osc = new Oscillator({ context: this.ctx })
        osc.osc.frequency.setValueAtTime(this.notetable.octave[key], this.ctx.currentTime)
        this.activeNotes[key] = osc.osc
        this.activeNotes[key].start();
        this.connect(this.activeNotes[key], osc.gain)
        this.connect(osc.gain, this.filter.filter)
    }
}

export default Synth;