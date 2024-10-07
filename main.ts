input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.pause(2000)
})
basic.showLeds(`
    . # . # .
    . . . . .
    . # . # .
    . # . # .
    . # # # .
    `)
