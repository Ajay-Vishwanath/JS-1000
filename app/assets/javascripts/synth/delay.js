class Delay{
    constructor(options){
        this.context = options.context
        this.delay = this.context.createDelay();
    }
}

export default Delay 