class Filter {
    constructor(options){
        this.filter = options.context.createBiquadFilter();
        this.filter.type = "lowpass";
        this.filterTypeControl = document.getElementById('filterType')
        this.filterFrequencyControl = document.getElementById('filterFrequency')
        this.filterResonanceControl = document.getElementById('filterResonance')

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