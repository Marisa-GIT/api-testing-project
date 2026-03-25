
# Reglas:
# email debe tener "@"
# username mínimo 5 caracteres
def validate_user(user):

    results = []

    # Test 1: Email válido
    if "@" in user["email"]:
        results.append(("email_format", "PASS", "Email válido"))
    else:
        results.append(("email_format", "FAIL", "Email inválido"))

    # Test 2: Username length
    if len(user["username"]) >= 5:
        results.append(("username_length", "PASS", "Longitud válida"))
    else:
        results.append(("username_length", "FAIL", "Muy corto"))

    return results
