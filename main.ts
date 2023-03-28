basic.forever(function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
    led.plotBarGraph(
    input.magneticForce(Dimension.Strength),
    2000
    )
    basic.pause(100)
})
