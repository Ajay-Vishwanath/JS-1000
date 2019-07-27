import '../app/assets/javascripts/synth/synth_master'
import Synth from '../app/assets/javascripts/synth/synth_master';

document.addEventListener("DOMContentLoaded", () => {
    const synthesizer = new Synth()
    synthesizer.setUp(); 
})
