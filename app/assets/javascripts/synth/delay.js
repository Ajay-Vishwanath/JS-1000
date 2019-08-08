class Delay{
    constructor(options){
        this.context = options.context
        this.delay = this.context.createDelay();
        this.feedback = this.context.createGain();

        this.delayTimeControl = document.getElementById('delay-time')
        this.delay.delayTime.value = this.delayTimeControl.value
        this.delayTimeControl.addEventListener('change', this.setDelayTime.bind(this), false)

        this.feedbackControl = document.getElementById('feedback')
        this.feedback.gain.value = this.feedbackControl.value
        this.feedbackControl.addEventListener('change', this.setFeedbackValue.bind(this), false)

        this.delay.connect(this.feedback)
        this.feedback.connect(this.delay)
    }

    setDelayTime(){
        this.delay.delayTime.value = event.target.value
    }

    setFeedbackValue(){
        this.feedback.gain.value = event.target.value
    }
}

export default Delay 