/*
* 继承
* */

(function () {
    // 创建 一个人员了类

    function Person(name) {
        this.name = name;
    }

    // 创建教师类

    function Teacher(name, books) {
        //   call 方法 可以将 一个函数的对象上下文从初始化变成有 this 来决定
        // 调用person 的构造函数
        this.books = books;
        Person.call(this, name); // this 是Teacher  的 this  name 也是  Teacher的
    }

    // 教师类 继承  人员类
    Teacher.prototype = new Person();
    Teacher.prototype.constructor = Teacher;
    Teacher.prototype.getBook = function () {
        //   console.log(this.name + " 有一本 " + this.books);
        return this.name + " 有一本 " + this.books;
    }

    // 测试
    var jim = new Teacher('JIM', 'EXTJS4');
    jim.getBook();


    /*c创建 extend 函数 为了程序中左右继承操作*/

    function extend(subClass, superClass) {
        // 子原型类属性 等于 父类的原型属性
        // 初始化 一个中间空对象 为了转换主父类关系
        var F = function () {
        }
        F.prototype = superClass.prototype;
        // 让子类继承F
        subClass.prototype = new F()
        subClass.prototype.constructor = subClass;
        subClass.superClass = superClass.prototype;
        // 增加一个保险,就算你的原型类是超类（Object）
            if (superClass.prototype.constructor == Object.constructor) {
            superClass.prototype.constructor = superClass;
        }
    }

    function Author(name, books) {
        Author.superClass.constructor.call(this,name)
        this.books = books;
        this.getBook = function () {
            return this.name + " 有一本 " + this.books;
        }
    }
    extend(Author,Person);
    var peter = new Author('XIAOYU','JS')
    console.log(peter.getBook())
})();