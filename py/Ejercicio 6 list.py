asig = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
aprov = []
for i in asig:
    notav = (int(input("Nota en " + i + ":")))
    if notav < 5:
        aprov.append(i)
print("Tienes que repetir",*aprov, sep=", ")