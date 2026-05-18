# Tarea Seguridad - CI CRUD

Proyecto CRUD basico creado para la practica de Seguridad de Software.

## Objetivo

Implementar un flujo basico de integracion continua con GitHub Actions para validar automaticamente la sintaxis y pruebas del sistema cuando existan cambios en el repositorio.

## Comandos principales

```bash
npm run build
npm test
npm run ci
```

## Flujo Git propuesto

```bash
git checkout -b feature/crud-tareas
git add .
git commit -m "feat: agregar crud basico de tareas"
git push origin feature/crud-tareas
```

Luego se abre un Pull Request hacia `main`, se revisa el resultado del pipeline y se fusiona cuando el estado sea correcto.
