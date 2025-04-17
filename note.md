**PostgreSQL terminal commands** using `psql`:

---

### 🔑 **Login & Access**

```bash
psql                # Login to default DB with current user
psql -d mydb        # Connect to a specific database
psql -U username    # Login as specific user
psql -h localhost   # Specify host (usually for remote connections)
```

---

### 🗃️ **Database Commands (psql)**

```sql
\l                  -- List all databases
\c mydb             -- Connect to a specific database
\dt                 -- List all tables in current database
\d tablename        -- Show table structure
\dn                 -- List all schemas
\df                 -- List all functions
```

---

### 📦 **Create & Drop**

```bash
createdb mydb                     # Create a database
dropdb mydb                       # Drop a database

createuser myuser                # Create a new user
createuser -s -e myuser          # Create superuser with echo
dropuser myuser                  # Drop a user
```

Inside `psql`:
```sql
CREATE DATABASE mydb;
DROP DATABASE mydb;

CREATE TABLE mytable (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

DROP TABLE mytable;
```

---

### 🧑‍🤝‍🧑 **User Access**

```sql
GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
REVOKE ALL PRIVILEGES ON DATABASE mydb FROM myuser;
```

---

### 🚪 **Exit psql**

```sql
\q
```

---

