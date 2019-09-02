class LFO {
    constructor(options){
        this.context = options.context,
        this.osc = options.context.createOscillator();
        this.osc.type = "sine";

        this.depth = options.context.createGain();
        this.lfoDepthControl = document.getElementById('lfo-depth')
        this.maxAmount = 0 
        this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount)
        this.lfoDepthControl.addEventListener('change', this.setLFODepth.bind(this), false);
        this.osc.connect(this.depth)


        this.lfoFrequencyControl = document.getElementById('lfo-frequency')
        this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value)
        this.lfoFrequencyControl.addEventListener('change', this.setLFOFrequency.bind(this), false);

        this.source = null 
        this.osc.start()
    }

    setLFODepth(){
        this.depth.gain.value = (this.maxAmount * parseFloat(event.target.value))
    }

    setLFOFrequency() {
        this.osc.frequency.value = parseFloat(event.target.value)
    }

    setParams(param, source){
        if (source === this.source) {
            this.source = null 
            this.depth.disconnect()
            this.maxAmount = 0 
            var button = document.getElementById(source)
            button.style.background = null;
        }
        else if (source === "amp"){
            this.source = "amp"
            this.depth.disconnect();
            this.depth.connect(param)
            this.maxAmount = 1
            this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount)
            this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value)
            var volumeButton = document.getElementById('amp')
            volumeButton.style.background = "#9ad1fd"
        } else if (source === "filter"){
            this.source = "filter"
            this.depth.disconnect();
            this.depth.connect(param)
            this.maxAmount = 8000
            this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount)
            this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value)
            var filterButton = document.getElementById('filter')
            filterButton.style.background = "#9ad1fd"
        } else if (source === "pitch"){
            this.maxAmount = 25;
            this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount)
            this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value)
        }
    }
}

export default LFO 