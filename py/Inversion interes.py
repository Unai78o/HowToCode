din = float(input("Cantidad a invertir: "))
interes = float(input("Interes porcentual anual: "))
años = int(input("Numero de años: "))

for i in range(años):
    din *= 1+interes / 100
    print("Capital tras",str(1+i),"años",str(round(din, 2)))