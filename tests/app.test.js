const assert = require("node:assert/strict");
const { TaskRepository } = require("../src/app");

const repository = new TaskRepository();

const createdTask = repository.create("Configurar CI", "Crear workflow de GitHub Actions");
assert.equal(createdTask.id, 1);
assert.equal(createdTask.completed, false);
assert.equal(repository.list().length, 1);

const updatedTask = repository.update(createdTask.id, { completed: true });
assert.equal(updatedTask.completed, true);

const deletedTask = repository.delete(createdTask.id);
assert.equal(deletedTask.title, "Configurar CI");
assert.equal(repository.list().length, 0);

assert.throws(() => repository.create(""), /obligatorio/);

console.log("Pruebas ejecutadas correctamente.");
