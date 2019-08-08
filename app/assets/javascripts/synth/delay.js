class Delay{
    constructor(options){
        this.context = options.context
        this.delay = this.context.createDelay();
        this.delay.delayTime.value = 0.5
    }
}

export default Delay 