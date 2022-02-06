radio.onReceivedNumber(function (receivedNumber) {
    speed = speed + receivedNumber
    basic.showNumber(speed)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "HONK") {
        music.playTone(131, music.beat(BeatFraction.Double))
    }
    if (receivedString == "LEDS") {
        if (lightsState == 0) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            lightsState = 1
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            lightsState = 0
        }
    }
    if (receivedString == "UP") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    }
    if (receivedString == "LEFT") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
    if (receivedString == "DOWN") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    }
    if (receivedString == "RIGHT") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    }
    if (receivedString == "STOP") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let speed = 0
let lightsState = 0
radio.setGroup(5)
lightsState = 0
speed = 40
basic.forever(function () {
	
})
