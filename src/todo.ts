export default class Todo {
  private todo: string[] = [];
  private store: any;
  constructor(store: any) {
    this.store = store
  }
  add(todo: string) {
    this.todo.push(todo)
  }
  print() {
    console.log(this.todo)
  }
  save() {
    this.store.save(this.todo)
  }
}
