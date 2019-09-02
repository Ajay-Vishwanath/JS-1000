import NoteTable from './note_table';
import Oscillator from './oscillators';
import Filter from './filters'; 
import Envelope from './envelopes';
import LFO from './lfos';
import Reverb from './reverb';
import Delay from './delay';


class Synth {
    
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.notetable = new NoteTable();
        this.envelope = new Envelope({ context: this.ctx })
        this.oscillator = new Oscillator({context: this.ctx, envelope: this.envelope})
        this.filter = new Filter({context: this.ctx})
        this.lfo = new LFO({context: this.ctx})
        this.reverb = new Reverb({context: this.ctx})
        this.reverbStatus = "off"
        this.delay = new Delay({context: this.ctx})
        this.delayStatus = "off"
        this.masterVolume = this.ctx.createGain(); 

        this.octaveControl = document.getElementById('octave-control');
        this.octaveControl.addEventListener('input', this.setOctave.bind(this), false);

        this.activeNotes = {}

        window.addEventListener('keydown', this.keyDown.bind(this), false);
        window.addEventListener('keyup', this.keyUp.bind(this), false);
        window.addEventListener('mousedown', this.mouseDown.bind(this), false);
        window.addEventListener('mouseup', this.mouseUp.bind(this), false);

        this.lfoMode = "";
        this.lfoVolume = document.getElementById('amp')
        this.lfoVolume.addEventListener('click', this.setLfoVolume.bind(this), false);
        this.lfoPitch = document.getElementById('pitch')
        this.lfoPitch.addEventListener('click', this.setLfoPitch.bind(this), false);
        this.lfoFilter = document.getElementById('filter')
        this.lfoFilter.addEventListener('click', this.setLfoFilter.bind(this), false);

        this.reverbSwitch = document.getElementById('reverb-button')
        this.reverbSwitch.addEventListener('click', this.setReverb.bind(this), false);

        this.delaySwitch = document.getElementById('delay-button')
        this.delaySwitch.addEventListener('click', this.setDelay.bind(this), false);

        this.masterVolumeInput = document.getElementById('volume')
        this.masterVolume.gain.value = this.masterVolumeInput.value
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
        this.lfo.setParams(this.masterVolume.gain, "amp")

        if (this.lfoMode !== "amp") {
            if (this.lfoMode !== ""){
                var previousButton = document.getElementById(this.lfoMode)
                previousButton.style.background = null
            }
            this.lfoMode = "amp"
        } else {
            this.lfoMode = ""
        }
    }

    setLfoPitch(){
        if (this.lfoMode !== "pitch"){
            if (this.lfoMode !== "") {
                var previousButton = document.getElementById(this.lfoMode)
                previousButton.style.background = null
            }
            this.lfoMode = "pitch"
            var frequencyButton = document.getElementById("pitch")
            frequencyButton.style.background = "#9ad1fd"
        } else {
            this.lfoMode = ""
            var pitchButton = document.getElementById("pitch")
            pitchButton.style.background = null;
        }
    }

    setLfoFilter(){
        this.lfo.setParams(this.filter.filter.frequency, "filter")

        if (this.lfoMode !== "filter"){
            if (this.lfoMode !== "") {
                var previousButton = document.getElementById(this.lfoMode)
                previousButton.style.background = null
            }
            this.lfoMode = "filter"
        } else {
            this.lfoMode = ""
        }
    }

    setReverb(){
        if (this.reverbStatus === "off"){
            this.filter.filter.disconnect()
            this.filter.filter.connect(this.reverb.reverb)
            var reverbButton = document.getElementById('reverb-button')
            reverbButton.style.background = "#9ad1fd"
            if (this.delayStatus === "on"){
                this.reverb.reverb.connect(this.delay.delay)
                this.reverb.reverb.connect(this.masterVolume)
            } else {
                this.reverb.reverb.connect(this.masterVolume)
            } 
            this.reverbStatus = "on"
        } else {
            this.filter.filter.disconnect()
            this.reverb.reverb.disconnect()
            var reverbButton = document.getElementById('reverb-button')
            reverbButton.style.background = null
            if (this.delayStatus === "on") {
                this.filter.filter.connect(this.delay.delay)
                this.filter.filter.connect(this.masterVolume)
            } else {
                this.filter.filter.connect(this.masterVolume)
            }
            this.reverbStatus = "off"
        }
    }

    setDelay(){
        if (this.delayStatus === "off"){
            if (this.reverbStatus === "on") {
                this.reverb.reverb.disconnect()
                this.reverb.reverb.connect(this.delay.delay)
                this.reverb.reverb.connect(this.masterVolume)
            } else {
                this.filter.filter.disconnect()
                this.filter.filter.connect(this.delay.delay)
                this.filter.filter.connect(this.masterVolume)
            }
            this.delay.delay.connect(this.masterVolume)
            this.delayStatus = "on"
            var delayButton = document.getElementById('delay-button')
            delayButton.style.background = "#9ad1fd"
        } else {
            this.delay.delay.disconnect(this.masterVolume)
            if (this.reverbStatus === "on"){
                this.reverb.reverb.disconnect()
                this.reverb.reverb.connect(this.masterVolume)
            } else {
                this.filter.filter.disconnect()
                this.filter.filter.connect(this.masterVolume)
            }
            this.delayStatus = "off"
            var delayButton = document.getElementById('delay-button')
            delayButton.style.background = null
        }
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
            correspondingKey.style.backgroundColor = '#9ad1fd'
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
            correspondingKey.style.backgroundColor = '#9ad1fd'
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
        if (this.lfoMode === "pitch") {
            const pitchLfo = new LFO({ context: this.ctx })
            this.lfo.source = "pitch"
            this.lfo.depth.disconnect();
            pitchLfo.setParams(null, "pitch")
            pitchLfo.depth.connect(osc.osc.frequency)
        } 
        this.activeNotes[key] = osc
        this.activeNotes[key].playNote();
        this.connect(this.activeNotes[key].osc, osc.gain)
        this.connect(osc.gain, this.filter.filter)
    }
}

export default Synth;