class Filter {
    constructor(options){
        this.context = options.context 
        this.filter = options.context.createBiquadFilter();

        this.filterTypeControl = document.getElementById('filterType')
        this.filter.type = this.filterTypeControl.value 
        this.filterTypeControl.addEventListener('change', this.setFilterType.bind(this), false)

        this.filterFrequencyControl = document.getElementById('filterFrequency')
        this.filter.frequency.value = this.filterFrequencyControl.value
        this.filterFrequencyControl.addEventListener('change', this.setFrequency.bind(this), false)

        this.filterResonanceControl = document.getElementById('filterResonance')
        this.filter.Q.value = this.filterResonanceControl.value
        this.filterResonanceControl.addEventListener('change', this.setResonance.bind(this), false)
    }

    setFilterType(){
        this.filter.type = event.target.value
    }

    setFrequency(){
        this.filter.frequency.setValueAtTime(event.target.value, this.context.currentTime)
    }

    setResonance(){
        this.filter.Q.setValueAtTime(event.target.value, this.context.currentTime)
    }

    connect(connection){
        this.filter.connect(connection)
    }
}

export default Filter; 