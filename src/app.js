class TaskRepository {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  create(title, description = "") {
    if (!title || !title.trim()) {
      throw new Error("El titulo de la tarea es obligatorio.");
    }

    const task = {
      id: this.nextId,
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.nextId += 1;
    this.tasks.push(task);
    return task;
  }

  list() {
    return [...this.tasks];
  }

  update(id, changes) {
    const task = this.findById(id);

    if (changes.title !== undefined) {
      if (!changes.title || !changes.title.trim()) {
        throw new Error("El titulo actualizado no puede estar vacio.");
      }
      task.title = changes.title.trim();
    }

    if (changes.description !== undefined) {
      task.description = changes.description.trim();
    }

    if (changes.completed !== undefined) {
      task.completed = Boolean(changes.completed);
    }

    return task;
  }

  delete(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));

    if (index === -1) {
      throw new Error("La tarea no existe.");
    }

    const [deletedTask] = this.tasks.splice(index, 1);
    return deletedTask;
  }

  findById(id) {
    const task = this.tasks.find((item) => item.id === Number(id));

    if (!task) {
      throw new Error("La tarea no existe.");
    }

    return task;
  }
}

module.exports = { TaskRepository };
