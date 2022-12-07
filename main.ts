input.onButtonPressed(Button.A, function () {
    if (posicionPaleta > 0) {
        paleta1.move(-1)
        paleta2.move(-1)
        posicionPaleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (posicionPaleta < 3) {
        paleta1.move(1)
        paleta2.move(1)
        posicionPaleta += 1
    }
})
function moverPelota () {
    basic.pause(velocidadPelota)
    pelota.move(1)
    pelota.ifOnEdgeBounce()
    if (pelota.isTouching(paleta1) || pelota.isTouching(paleta2)) {
        pelota.set(LedSpriteProperty.Direction, 0)
        azar = Math.randomBoolean()
        if (azar == true) {
            music.playTone(659, music.beat(BeatFraction.Sixteenth))
            pelota.turn(Direction.Left, randint(15, 45))
        } else {
            music.playTone(659, music.beat(BeatFraction.Sixteenth))
            pelota.turn(Direction.Right, randint(15, 45))
        }
        if (puntos >= 10) {
            velocidadPelota += -50
        } else if (puntos >= 20) {
            velocidadPelota += -50
        } else if (puntos >= 30) {
            velocidadPelota += -50
        } else {
        	
        }
        puntos += 1
    } else {
        if (pelota.get(LedSpriteProperty.Y) == 4) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString("PUNTOS: ")
            basic.showNumber(puntos)
        }
    }
}
let azar = false
let velocidadPelota = 0
let puntos = 0
let posicionPaleta = 0
let pelota: game.LedSprite = null
let paleta2: game.LedSprite = null
let paleta1: game.LedSprite = null
basic.clearScreen()
let cuentaRegresiva = 3
// Se establece la posición de la paleta
// primer bloque
paleta1 = game.createSprite(2, 4)
// Se establece la posición de la paleta
// segundo bloque
paleta2 = game.createSprite(3, 4)
// Se establece la posición de la paleta
// segundo bloque
pelota = game.createSprite(2, 0)
posicionPaleta = 2
puntos = 0
velocidadPelota = 300
pelota.turn(Direction.Right, 90)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
for (let index = 0; index < 3; index++) {
    basic.showNumber(cuentaRegresiva)
    basic.pause(500)
    cuentaRegresiva += -1
}
basic.forever(function () {
    moverPelota()
})
