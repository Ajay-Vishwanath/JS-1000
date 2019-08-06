class LFO {
    constructor(options){
        this.context = options.context,
        this.osc = this.context.createOscillator();
        this.osc.type = "sine";

        this.depth = options.context.createGain();
        this.osc.connect(this.depth)
        this.lfoDepthControl = document.getElementById('lfo-depth')
        this.depth.value = this.lfoDepthControl.value
        this.lfoDepthControl.addEventListener('change', this.setLFODepth.bind(this), false);

        this.lfoFrequencyControl = document.getElementById('lfo-frequency')
        this.osc.frequency.value = this.lfoDepthControl.value
        this.lfoFrequencyControl.addEventListener('change', this.setLFOFrequency.bind(this), false);

        this.source = null 
    }

    setLFODepth(){
        this.depth.value = parseFloat(event.target.value)
    }

    setLFOFrequency() {
        this.osc.frequency.value = parseFloat(event.target.value)
    }

    setParams(param, source){
        if (source === this.source) {
            this.source = null 
            param.disconnect()
        }
        else if (source === "amp"){
            this.source = "amp"
            this.depth.connect(param)

        } else if (source === "filter"){
            this.source = "filter"
            this.depth.connect(param)

        } else if (source === "frequency"){
            this.source = "frequency"
            this.depth.connect(param)
        }
    }
}

export default LFO 