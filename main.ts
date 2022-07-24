radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        Pixel_Array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
        Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    } else {
        if (receivedString == "B") {
            Pixel_Array.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Orange))
            Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Orange))
            pins.servoWritePin(AnalogPin.P1, 0)
            pins.servoWritePin(AnalogPin.P2, 180)
        } else {
            if (receivedString == "C") {
                Pixel_Array.clear()
                Pixel_Array.show()
                pins.servoWritePin(AnalogPin.P1, 90)
                pins.servoWritePin(AnalogPin.P2, 90)
            }
        }
    }
})
let Pixel_Array: neopixel.Strip = null
radio.setGroup(1)
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
