describe("Una lista de access", function() {

    var todoList;

    beforeEach(function() {
        todoList = new TodoList();
    });

    it("debe estar vacía cuando está recién creada", function() {
        expect(todoList.isEmpty()).toBe(true);
    });

    describe("Cuando se añade un acceso", function() {

        beforeEach(function() {
            todoList.addTask("acceso añadido");
        });

        it("no debe estar vacía", function() {
            expect(todoList.isEmpty()).toBe(false);
        });

        it("debe poder contener más de un accesso", function() {
            todoList.addTask("tests successful");
            expect(todoList.size()).toBe(2);
        });

       
    });
});
