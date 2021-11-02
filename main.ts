let Hunger = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Hunger += 1
        basic.showNumber(Hunger)
    }
    if (input.buttonIsPressed(Button.B)) {
        Hunger += -1
        basic.showNumber(Hunger)
    }
})
