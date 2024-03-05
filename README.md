# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos 
```
docker compose up -d
```

2. Crear una copia del .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ``` npm install ```
5. Ejecutar el comando ``` npm run dev ```
6. Ejecutar comando ``` npx prisma migrate dev ``` de prisma
7. Ejecutar el comando ``` npx prisma generate ``` de prisma
8. Ejecutar el SEED para [crear la basee de datos local](localhost:3000/api/seed)

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```