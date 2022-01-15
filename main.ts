radio.onReceivedString(function (receivedString) {
    if (receivedString == "fata") {
        wuKong.mecanumRun(wuKong.RunList.Front, 50)
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "spate") {
        wuKong.mecanumRun(wuKong.RunList.rear, 50)
    } else if (receivedString == "stanga") {
        wuKong.mecanumDrift(wuKong.TurnList.Left)
    } else if (receivedString == "dreapta") {
        wuKong.mecanumDrift(wuKong.TurnList.Right)
    } else if (receivedString == "aluneca stanga") {
        wuKong.mecanumRun(wuKong.RunList.left, 50)
    } else if (receivedString == "aluneca dreapta") {
        wuKong.mecanumRun(wuKong.RunList.right, 50)
    }
    basic.pause(100)
    wuKong.stopAllMotor()
    basic.clearScreen()
})
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
