class Envelope {
    constructor(options){
        this.context = options.context

        this.attackTimeInput = document.getElementById("attack-envelope")
        this.attackTime = this.attackTimeInput.value
        this.attackTimeInput.addEventListener('change', this.setAttack.bind(this), false)

        this.releaseTimeInput = document.getElementById("release-envelope")
        this.releaseTime = this.releaseTimeInput.value
        this.releaseTimeInput.addEventListener('change', this.setRelease.bind(this), false)
    }

    setAttack() {
        this.attackTime = parseFloat(event.target.value)
    }

    setRelease() {
        this.releaseTime = parseFloat(event.target.value)
    }


}

export default Envelope 