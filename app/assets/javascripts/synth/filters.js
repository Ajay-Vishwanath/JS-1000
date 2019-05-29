import Oscillator from './oscillators';

class Filter {
    constructor(options){
        this.filter = options.context.createBiquadFilter
        this.filterControl = document.getElementById('filterType')
        this.filter.type = "lowpass";
        this.filterFrequencyControl = document.getElementById('filterFrequency')
        this.filter.frequency = "400.0";
        this.filterResonanceControl = document.getElementById('filterResonance')
        this.filter.resonance = "1"

        this.filterTypeControl.addEventListener('change', function (event) {
            this.filter.type = event.target.value
        }); 
        this.filterFrequencyControl.addEventListener('change', function (event) {
            this.filter.frequency.setValueAtTime(event.target.value, options.context.currentTime)
        });
        this.filterResonanceControl.addEventListener('change', function (event) {
            this.filter.Q.setValueAtTime(event.target.value, options.context.currentTime)
        });
    }

    connect(connection){
        this.filter.connect(connection)
    }
}

export default Filter; 