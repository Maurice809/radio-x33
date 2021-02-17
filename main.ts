radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= 4) {
        rx = receivedNumber
    } else {
        pa = 0
    }
})
input.onButtonPressed(Button.A, function () {
    pa = 1
})
input.onButtonPressed(Button.B, function () {
    pa = 0
    radio.sendNumber(5)
})
let pa = 0
let rx = 0
radio.setGroup(1)
basic.forever(function () {
    if (pa == 1) {
        rx = randint(1, 4)
        radio.sendNumber(rx)
    }
    basic.showNumber(rx)
})
