barras = int(input("Introduzca en numero de barras que no son del dia: "))
precio = 3.49
descuento = 0.6
coste = barras * precio * (1 - descuento)
print("Precio habitual de una barra es",str(precio) + "€")
print("Descuento hecho por no ser fresca",str(descuento * 100) + "%" )
print("Coste final de las barras", str(round(coste, 2)) + "€")
