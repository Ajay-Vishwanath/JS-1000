import NoteTable from './note_table';
import Oscillator from './oscillators';


class Synth {
    
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.notetable = new NoteTable();
        this.oscillator = new Oscillator({notetable: this.notetable, context: this.ctx})
    }
}