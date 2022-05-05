input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.showString("Feliz cumpleaños ")
})
