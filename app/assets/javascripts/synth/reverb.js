import ReverbObject from './reverb_object';

class Reverb {
    constructor(options){
        this.context = options.context
        this.reverb = this.context.createConvolver();
        this.irHall = new ReverbObject({url: 'https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/JS-1000/irHall.ogg', context: this.context});
        setTimeout(this.setBuffer.bind(this), 1000)
    }

    setBuffer(){
        this.reverb.buffer = this.irHall.buffer
    }
}

export default Reverb