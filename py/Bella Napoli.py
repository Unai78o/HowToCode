# Menu
print('Bienvenido a la pizzeria Bella Napoli.\n\t1 - Vegetariano.\n\t2 - No vegetariano')
seleccion = int(input("Seleccione una opcion: "))

if seleccion == 1:
    piz = "vegetariana"
    print("Ingredientes vegetarianos.\n\t1 - Pimiento.\n\t2 - Tofu.")
    ingredienteveg = int(input("Seleccione una opcion: "))
    if ingredienteveg == 1:
        ing ="pimiento"
    else :
        ing = "tofu"
elif seleccion == 2:
    piz = "no vegetariana"
    print("Ingredientes no vegetarianos.\n\t1 - Peperoni.\n\t2 - Jamon.\n\t3 - Salmon.")
    ingredientenoveg = int(input("Seleccione una opcion: "))
    if ingredientenoveg == 1:
        ing ="pepperoni"
    elif ingredientenoveg == 2: 
        ing ="jamon"
    else : 
        ing ="salmon"

print("Usted ha elegido la pizza {pizza} con mozzarela, tomate y {ingrediente1}".format(pizza = piz, ingrediente1=ing))