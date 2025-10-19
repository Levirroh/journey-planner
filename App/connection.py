import mysql.connector

try:
    conn = mysql.connector.connect(
        host="localhost",  
        user="root",
        password="root",
        database="journey_planner"
    )
    print("Conexão bem-sucedida!")

    # Crie um cursor para executar comandos
    cursor = conn.cursor()

    # Exemplo: Execute um comando SQL (substitua por seu comando)
    cursor.execute("SELECT * FROM users")

    # Exiba os resultados
    for (col) in cursor:
        print(f"{col}")

except mysql.connector.Error as err:
    print(f"Erro ao conectar: {err}")

finally:
    # Feche o cursor e a conexão
    if 'cursor' in locals() and cursor is not None:
        cursor.close()
    if 'conn' in locals() and conn is not None and conn.is_connected():
        conn.close()
        print("Conexão com o MySQL fechada.")