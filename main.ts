radio.onReceivedString(function (receivedString) {
    if (receivedString == "fata") {
        wuKong.mecanumRun(wuKong.RunList.Front, viteza)
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "spate") {
        wuKong.mecanumRun(wuKong.RunList.rear, viteza)
        basic.showArrow(ArrowNames.South)
    } else if (receivedString == "stanga") {
        wuKong.mecanumDrift(wuKong.TurnList.Right)
        basic.showArrow(ArrowNames.NorthEast)
    } else if (receivedString == "dreapta") {
        wuKong.mecanumDrift(wuKong.TurnList.Left)
        basic.showArrow(ArrowNames.NorthWest)
    } else if (receivedString == "aluneca stanga") {
        wuKong.mecanumRun(wuKong.RunList.left, viteza)
        basic.showArrow(ArrowNames.East)
    } else if (receivedString == "aluneca dreapta") {
        wuKong.mecanumRun(wuKong.RunList.right, viteza)
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "stop") {
        wuKong.mecanumStop()
    }
    basic.pause(200)
    wuKong.mecanumStop()
})
let viteza = 0
viteza = 100
wuKong.mecanumWheel(
wuKong.ServoList.S0,
wuKong.ServoList.S2,
wuKong.ServoList.S1,
wuKong.ServoList.S3
)
radio.setGroup(5)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
