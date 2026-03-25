from api.external_api_testing.get_users import fetch_users
from validation.validator import validate_user
from database.db_connection import connect_db


users = fetch_users()

conn = connect_db()
cursor = conn.cursor()

for user in users:

    test_results = validate_user(user)

    for test_name, result, message in test_results:

        query = """
        INSERT INTO test_results (user_id, test_name, result, message)
        VALUES (%s, %s, %s, %s)
        """

        values = (
            user["id"],
            test_name,
            result,
            message
        )
        cursor.execute(query, values)

conn.commit()
print("✅ Datos guardados")
