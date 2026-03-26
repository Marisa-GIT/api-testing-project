# API Data Validator & Testing Framework

Proyecto desarrollado como práctica de **QA Engineering + Backend**, que integra:

* Consumo de APIs externas
* Validación de datos
* Persistencia en base de datos
* Desarrollo de API propia
* Testing con Postman y Python

Para cada usuario:
* Obtiene email y username
* Verifica que el email tenga "@"
* Verifica que el username tenga al menos 5 caracteres
* Marca el registro como válido o inválido
* Guarda el resultado en la base de datos

---

## 📌 Tecnologías utilizadas

* Python 🐍
* Flask (API REST)
* MySQL (Base de datos)
* Postman (Testing de API)
* Requests (consumo de API)
* Logging (manejo de errores)

---

## 🎯 Objetivo del proyecto

Simular un flujo real de testing donde:

1. Se consumen datos desde una API externa
2. Se validan reglas de negocio
3. Se almacenan resultados en base de datos
4. Se expone una API propia para gestión de usuarios
5. Se prueban endpoints con Postman

---

## 🧩 Estructura del proyecto

```
API-Data-Validator/

├───api
│   │   __init__.py
│   │
│   ├───external_api_testing
│   │       get_users.py
│   │
│   ├───internal_api
│   └──     app.py
│   
│
├───database
│   │───db_connection.py
│   │───insert_users.py
│   │───schema.sql
│   └──  __init__.py
│
├── logs/
│   └── api_errors.log
│
├───postman
│     │
│     │─── postman/API Flask.postman_collection.json
│     └── postman/API-jsonplaceholder.postman_collection.json
│        
│───screenshots/
│    │─── console.png
│    │─── databaseTest.png
│    │─── databaseUsers.png
│    │─── postmanGet.png
│    │─── postmanPost.png
│    └──  postmanTest.png
│
│
└───validation
│   │───  validator.py  
│   └── __init__.py
│
│── .python-version
├── main.py
├── README.md
└── requirements.txt
```

## 🔧 Instalación

1. Clonar el repositorio:

```
https://github.com/Marisa-GIT/API-Data-Validator.git
cd API-Data-Validator
```

2. Crear entorno virtual:

```
python -m venv .venv
source .venv/Scripts/activate   # Windows
```

3. Instalar dependencias:

```
pip install -r requirements.txt
```

---

## 🗄️ Configuración de base de datos

Información alojada en:

```
database/schema.sql
```

## ▶️ Ejecución del proyecto

### 1. Insertar datos iniciales

```
python database/insert_users.py
```

---

### 2. Ejecutar validaciones

```
python main.py
```

Esto:

* valida datos de usuarios
* guarda resultados en MySQL
* muestra reporte en consola

---

### 3. Ejecutar API Flask

```
python -m api.internal_api.app
```

API disponible en:

```
http://127.0.0.1:5000
```

---

## 🔗 Endpoints disponibles

### 📥 GET /users

Obtiene todos los usuarios

### ➕ POST /users

Crea un nuevo usuario

Ejemplo:

```json
{
  "name": "Isabel",
  "email": "isabel@test.com",
  "username": "isabelqa"
}
```

---

### ✏️ PUT /users/{id}

Actualiza un usuario

### ❌ DELETE /users/{id}

Elimina un usuario

---

## 🧪 Testing con Postman

Se validan:

* ✅ Status code (200, 201, 400, 404, 409, 500)
* ⚡ Tiempo de respuesta (< 500ms)
* 📦 Estructura JSON
* 🔍 Validación de campos

---

## 📊 Ejemplo de reporte

```
📊 REPORTE DE PRUEBAS
----------------------
PASS: 18
FAIL: 2
```

---

## 📝 Logs

Los errores se almacenan en:

```
logs/api_errors.log
```

Ejemplo:

```
ERROR Error creando usuario: Duplicate entry
```

---

## 📸 Screenshots

### 🔹 Postman Testing
![Postman](screenshots/postmanGet.png)
![Postman](screenshots/postmanTest.png)

### 🔹 Reporte en Consola
![Console](screenshots/console.png)

### 🔹 Base de Datos MySQL
![Database](screenshots/databaseUsers.png)
![Database](screenshots/databaseTest.png)

----

## 💡 Aprendizajes clave

* Consumo de APIs REST
* Validación de datos (QA)
* Manejo de errores y logs
* Integración backend + base de datos
* Testing manual y automatización

---

## 🚀 Mejoras futuras

* Autenticación (login)
* Pruebas automatizadas con pytest
* Dockerización
* Documentación con Swagger

---

## 👩‍💻 Autor

Proyecto desarrollado por Isabel Vides como parte de su formación en QA Engineer 🚀





