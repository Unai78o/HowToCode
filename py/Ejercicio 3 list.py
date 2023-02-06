a = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
notas = []
for j in a:
    nota = input("Introduzca su nota en "+ j +":")
    notas.append(nota)
for i in range(len(a)):
    print("En " + a[i] + " has sacado " + notas[i])