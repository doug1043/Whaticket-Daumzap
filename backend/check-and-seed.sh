#!/bin/bash
    

# Construir a URI de conex�o
DB_URI="postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

# Fun��o para verificar e aplicar seeds se necess�rio
_checkAndSeed() {
    # Verificar se a tabela SeedControl existe
    TABLE_EXISTS=$(psql ${DB_URI} -Atc "SELECT to_regclass('public.SeedControl');")

    if [ "$TABLE_EXISTS" = "seedcontrol" ]; then
        echo "Database already seeded."
    else
        echo "Seeding database..."
        npx sequelize db:migrate
        npx sequelize db:seed:all
        psql ${DB_URI} -c "CREATE TABLE SeedControl (id SERIAL PRIMARY KEY, seed_name VARCHAR(255) NOT NULL, applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
        psql ${DB_URI} -c "INSERT INTO SeedControl (seed_name) VALUES ('initial_seed');"
        echo "Database seeded successfully."
    fi
}

# Executar fun��es
_checkAndSeed