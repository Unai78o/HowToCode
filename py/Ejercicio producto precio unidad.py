producto = input("Introduzca el nombre del producto: ")
precio = int(input("Introduzca el precio del producto: "))
nunid = int(input("Introduzca el numero de unidades del producto: "))
print("{objeto}: unidades x{unidad:3d}, precio individual {dinero:6.2f}€ = {coste_total:8.2f}€".format(objeto = producto, unidad = nunid, dinero = precio, coste_total = precio * nunid))