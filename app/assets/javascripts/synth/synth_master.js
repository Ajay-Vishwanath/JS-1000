import NoteTable from './note_table';
import Oscillator from './oscillators';
import Filter from './filters'; 
import Envelope from './envelopes';
import LFO from './lfos';


class Synth {
    
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.notetable = new NoteTable();
        this.envelope = new Envelope({ context: this.ctx })
        this.oscillator = new Oscillator({context: this.ctx, envelope: this.envelope})
        this.filter = new Filter({context: this.ctx})
        this.lfo = new LFO({context: this.ctx})
        this.masterVolume = this.ctx.createGain(); 

        this.octaveControl = document.getElementById('octave-control');
        this.octaveControl.addEventListener('input', this.setOctave.bind(this), false);

        this.activeNotes = {}

        window.addEventListener('keydown', this.keyDown.bind(this), false);
        window.addEventListener('keyup', this.keyUp.bind(this), false);
        window.addEventListener('mousedown', this.mouseDown.bind(this), false);
        window.addEventListener('mouseup', this.mouseUp.bind(this), false);

        this.lfoVolume = document.getElementById('lfo-amp')
        this.lfoVolume.addEventListener('click', this.setLfoVolume.bind(this), false);
        // this.lfoPitch = document.getElementById('lfo-pitch')
        // this.lfoPitch.addEventListener('click', this.setLfoPitch.bind(this), false);
        // this.lfoFilter = document.getElementById('lfo-filter')
        // this.lfoFilter.addEventListener('click', this.setLfoFilter.bind(this), false);

        this.masterVolumeInput = document.getElementById('volume')
        this.masterVolume.value = this.masterVolumeInput.value
        this.masterVolumeInput.addEventListener('change', this.setMasterVolume.bind(this), false)
    }

    setOctave(){
        const activeNotes = this.activeNotes
        const noteTable = this.notetable
        if (this.activeNotes) {
            Object.keys(this.activeNotes).forEach(function(activeNote){
                let osc = activeNotes[activeNote].osc
                osc.frequency.value = noteTable.octave[activeNote]
            })
        }
    }

    setMasterVolume(){
        debugger 
        this.masterVolume.gain.setValueAtTime(parseFloat(event.target.value), this.ctx.currentTime)
    }

    setUp(){
        // this.connect(this.oscillator.osc, this.filter.filter)
        this.connect(this.filter.filter, this.masterVolume)
        this.connect(this.masterVolume, this.ctx.destination)
    }

    connect(a, b) {
        a.connect(b)
    }

    setLfoVolume(){
        const lfo = this.lfo
        const activeNotes = this.activeNotes
        Object.keys(this.activeNotes).forEach(function (activeNote, i) {
            debugger 
            lfo.setParams(activeNotes[activeNote].gain, "amp")
        })
    }

    // keyboard control 
    keyDown(event) {
        const key = (event.detail || event.which).toString();
        if (key === "32") {
            const activeNotes = this.activeNotes;  
            const correspondingDiv = this.notetable.correspondingDiv
            Object.keys(this.activeNotes).forEach(function (activeNote, i) { 
                if (!isNaN(activeNote)) {
                    var div = correspondingDiv[activeNote + 'a']
                    var correspondingKey = document.getElementById(div)
                    correspondingKey.style.backgroundColor = null;
                } else {
                    var correspondingKey = document.getElementById(activeNote)
                    correspondingKey.style.backgroundColor = null;
                }

                let osc = activeNotes[activeNote];
                osc.releaseNote();
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
            this.activeNotes[key].releaseNote();
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
            this.activeNotes[key].releaseNote();
            delete this.activeNotes[key];
        }
    }

//HANDLES CREATION & STORING OF Notes

    playNote(key) {
        const osc = new Oscillator({ context: this.ctx, envelope: this.envelope})
        osc.osc.frequency.setValueAtTime(this.notetable.octave[key], this.ctx.currentTime)
        this.activeNotes[key] = osc
        this.activeNotes[key].playNote();
        this.connect(this.activeNotes[key].osc, osc.gain)
        this.connect(osc.gain, this.filter.filter)
    }
}

export default Synth;