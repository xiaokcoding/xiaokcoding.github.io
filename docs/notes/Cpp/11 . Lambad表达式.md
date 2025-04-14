---
title: Lambad表达式
createTime: 2025/04/06 16:52:25
permalink: /Cpp/rmi0zobo/
---
`Lambda`表达式是现代`C++`在`C ++ 11`和更高版本中的一个新的语法糖 。` lambda`表达式（也称为`lambda`函数）是在调用或作为函数参数传递的位置处定义匿名函数对象的便捷方法。通常，`lambda`用于封装传递给算法或异步方法的几行代码 。`Lambda`有很多叫法，有`Lambda`表达式、`Lambda`函数、匿名函数，为了方便表述统一用`Lambda`表达式进行叙述。

## Lambda表达式语法
语法如下:

```cpp
[capture list](parameters)mutable noexcept ->return type
{
    statement;
}
```

+  **捕获列表(capture list)**：捕获列表能够捕捉上下文中的变量以供`Lambda`函数使用。 
+  **可变的(mutable)**：可以变的，和`const`是反义词。默认情况下`Lambda`函数总是一个`const`函数，`mutable`可以取消其常量性。<u>在使用该修饰符时，参数列表不可省略（即使参数为空）</u>。 
+  **异常说明(noexcept)** ：用于`Lamdba`表达式内部函数是否可以抛出异常。 
+  **返回类型(return type)**：追踪返回类型(也叫尾拖返回类型)形式声明函数的返回类型。我们可以在不需要返回值的时候也可以连同符号”`->`”一起省略。此外，在返回类型明确的情况下，也可以省略该部分，让编译器对返回类型进行推导。 
+  **函数体(statement)**：内容与普通函数一样，不过除了可以使用参数之外，<u>还可以使用所有捕获的变量</u>。 

#### Lambda捕获列表详解
`Lambda`表达式与普通函数最大的区别是，除了可以使用参数以外，`Lambda`函数还可以通过捕获列表访问一些上下文中的数据。具体地，捕捉列表描述了上下文中哪些数据可以被`Lambda`使用，以及使用方式（以值传递的方式或引用传递的方式）。语法上，在“`[]`”包括起来的是捕获列表，捕获列表由多个捕获项组成，并以逗号分隔。捕获列表有以下几种形式：

+ `[]`中没有任何捕获，表示不捕获任何外部变量 

```cpp
auto function = ([]{
		std::cout << "Hello World!" << std::endl;
	}
);
function();
```

+  `[var]`表示按值捕获指定的的变量`var `

```cpp
int num = 100;
auto function = ([num]{
		std::cout << num << std::endl;
	}
);
function();
```

+  `[=]`表示值传递方式捕获所有父作用域的变量(**包括this指针**) 

```cpp
int index = 1;
int num = 100;
auto function = ([=]{
			std::cout << "index: "<< index << ", " 
                << "num: "<< num << std::endl;
	}
);
function();
```

+  `[&var]`表示按引用捕获指定的变量`var `

```cpp
int num = 100;
auto function = ([&num]{
		num = 1000;
		std::cout << "num: " << num << std::endl;
	}
);
function();
```

+  `[&]`表示按引用捕获所有父作用域的变量(**包括this**) 

```cpp
int index = 1;
int num = 100;
auto function = ([&]{
		num = 1000;
		index = 2;
		std::cout << "index: "<< index << ", " 
            << "num: "<< num << std::endl;
	}
);

function();
```

+  `[this]`表示值传递方式捕获当前的`this`指针 

```cpp
class Lambda
{
public:
    void sayHello() {
        std::cout << "Hello" << std::endl;
    };

    void lambda() {
        auto function = [this]{ 
            this->sayHello(); 
        };

        function();
    }
};
int main()
{
    Lambda demo;
    demo.lambda();
}
```

 

`**=、&**`**混合搭配**

+  `[=,&a,&b]`表示按引用捕获变量`a`和`b`，按值捕获其他所有变量 

```cpp
int index = 1;
int num = 100;
auto function = ([=, &index, &num]{
		num = 1000;
		index = 2;
		std::cout << "index: "<< index << ", " 
            << "num: "<< num << std::endl;
	}
);

function();
```

+  `[=,a]`这里已经以值传递方式捕捉了所有变量，但是重复捕捉`a`了，会报错的； 
+  `[&,&this]`这里`&`已经以引用传递方式捕捉了所有变量，再捕捉`this`也是一种重复。 

#### Lambda参数列表
除了捕获列表之外，Lambda还可以接受输入参数。参数列表是可选的，并且在大多数方面类似于函数的参数列表。

```cpp
auto function = [] (int first, int second){
    return first + second;
};
	
function(100, 200);
```

#### 可变规格mutable
`mutable`修饰符， 默认情况下Lambda函数总是一个`const`函数，`mutable`可以取消其常量性。在使用该修饰符时，参数列表不可省略（即使参数为空）。

```cpp
#include <iostream>
using namespace std;

int main()
{
   int m = 0;
   int n = 0;
   [&, n] (int a) mutable { m = ++n + a; }(4);
   cout << m << endl << n << endl;
}
```

#### 异常说明
你可以使用 `throw()` 异常规范来指示` Lambda `表达式不会引发任何异常。与普通函数一样，如果` Lambda` 表达式声明 `C4297 `异常规范且 `Lambda `体引发异常，`Visual C++` 编译器将生成警告 `throw()` 。

```cpp
int main() // C4297 expected 
{ 
 	[]() throw() { throw 5; }(); 
}
```

#### 返回类型
Lambda表达式的**返回类型会自动推导**。除非你指定了返回类型，否则不必使用关键字。返回型类似于通常的方法或函数的返回型部分。但是，返回类型必须在参数列表之后，并且必须在返回类型`->`之前包含类型关键字。如果`Lambda`主体仅包含一个`return`语句或该表达式未返回值，则可以省略`Lambda`表达式的`return-type`部分。如果`Lambda`主体包含一个`return`语句，则编译器将从`return`表达式的类型中推断出`return`类型。否则，编译器将返回类型推导为`void`。

## Lambda表达式的优缺点
- [x] <font style="background-color:#FBDE28;">优点</font>
    -  可以直接在需要调用函数的位置定义短小精悍的函数，而不需要预先定义好函数 
    -  使用`Lamdba`表达式变得更加紧凑，结构层次更加明显、代码可读性更好 
- [x] <font style="background-color:#FBDE28;">缺点</font>
    -  `Lamdba`表达式语法比较灵活，增加了阅读代码的难度 
    -  对于函数复用无能为力(在不同的作用域中，无法复用) 

## Lambda表达式工作原理
编译器会把一个`Lambda`表达式生成一个匿名类的**匿名对象**，并在类中**重载函数调用运算符**，实现了一个`operator()`方法。

```cpp
auto print = []{cout << "Hello World!" << endl; };
```

编译器会把上面这一句翻译为下面的代码：

```cpp
class Labmda_1
{
public:
	void operator()(void) const
	{
		cout << "Hello World!" << endl;
	}
};
// 用构造的类创建对象，print此时就是一个函数对象
auto print = print_class();
```

##  操作基本数据类型
_<u>用值的方式捕获，函数的打印结果和第一个调用时打印结果一样。不会因为变量的改变，函数的调用结果改变</u>_

```cpp
cout << "正常调用函数指针" << "\t";
	int(*p)(int, int) = Max;
	cout << p(1, 2) << endl;
	cout << "完整版本调用lambad表达式" << "\t";
	cout << [](int a, int b)->int {return a > b ? a : b; }(1, 2) << endl;
	cout << "缺省版本" << "\t";
	auto f1 = []() {"无返回值，无参数的函数"; };
	f1();
	cout << "捕获方式" << endl;
	int a = 1, b = 2;
	/*auto k = []() {cout << a << b; };
	错误，不能用外部的值a，b*/
	auto k = [=]() {/*a = 123;错误，按值的方式不能修改*/ cout << a <<"\t" << b; };
	k();
	cout << endl;
	auto king = [&]() {a = 123; cout << a << "\t" << b; };
	king();
	//总结：用值的方式捕获，函数的打印结果和第一个调用时打印结果一样。不会因为变量的改变，函数的调用结果改变
	cout << endl << a << endl;  //打印123
	k();  //打印1
```

## 操作自定义类型->this以及find_if仿函数的应用
_<u>给</u>_`_<u>find_if</u>_`_<u>函数中的比较准则提供了一个胆小精悍的方法</u>_

```cpp
class MM 
{
public:
	MM(string name = " ", int age = 0) :name(name), age(age) {}
	string getName()const { return name; }
	int getAge() const { return age; }
	void printData() {
		auto func = [this]() {cout << name << "\t" << age << endl; };
		func();
	}
protected:
	string name;
	int age;
};
int main() 
{
	MM mm;
	mm.printData();
	list<MM> info;
	info.push_back(MM("妲己", 18));
	info.push_back(MM("吕布",19));
	info.push_back(MM("貂蝉", 28));
	string name;
	cin >> name;
	list<MM>::iterator iter = find_if(info.begin(), info.end(), [=](const MM& object) {return object.getName() == name; });
	if (iter != info.end()) {
		iter->printData();
	}
	return 0;
}
```

