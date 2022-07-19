OD01.printString("Hola mundo", true)
control.waitMicros(1000000)
forever(function () {
    OD01.clear()
    OD01.printString("Temperatura:", false)
    OD01.printNumber(SW01.temperature(Temperature.Celcius), true)
    control.waitMicros(5)
})
