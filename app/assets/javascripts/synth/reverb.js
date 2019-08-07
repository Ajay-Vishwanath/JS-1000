class Reverb {
    constructor(options){
        this.context = options.context
        this.reverb = this.context.createConvolver();
        // this.gain = this.context.createGain();

        // this.reverb.connect(this.gain)
    }
}

export default Reverb