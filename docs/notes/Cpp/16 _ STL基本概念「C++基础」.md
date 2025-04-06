---
title: 16 _ STL基本概念「C++基础」
createTime: 2025/04/06 16:52:26
permalink: /Cpp/w1p5zvng/
---
## `STL`基本概念
`STL`，英文全称 `standard template library`，中文可译为标准模板库或者泛型库，其包含有大量的模板类和模板函数，是 `C++` 提供的一个基础模板的集合，用于完成诸如输入/输出、数学计算等功能。`STL`最初由惠普实验室开发，于`1998`年被定为国际标准，正式成为`C++`程序库的重要组成部分。`STL`的从广义上讲分为三类：`algorithm`（算法）、`container`（容器）和`iteraotr`（迭代器），容器和算法通过迭代器可以进行无缝地连接。几乎所有的代码都采用了模板类和模板函数的方式，这相比于传统的由函数和类组成的库来说提供了更好的代码重用机会。`STL`细说六大件：

+ 容器`（Container）`
+ 算法`（Algorithm）`
+ 迭代器`（iterator）`

+ 仿函数`（Function object）`
+ 适配器`（Adaptor）`
+ 空间配制器`（allocator）`

在`C++`标准中，`STL`被组织为下面的`13`个头文 件：`<algorithm>、<deque>、<functional>、<iter>、<vector>、<list>、<map>、<memory>、<numeric>、<queue>、<set>、<stack> 和<utility>`。

### `STL`优点
+ `STL`是`C++`的一部分，因此不用额外安装什么，它被内建在你的编译器之内。
+ `STL`的一个重要特点是数据结构和算法的分离。尽管这是个简单的概念，但是这种分离确实使得`STL`变得非常通用。
+ 程序员可以不用思考`STL`具体的实现过程，只要能够熟练使用`STL`就OK了。这样他们就可以把精力放在程序开发的别的方面。
+ `STL`具有<u>高可重用性，高性能，高移植性，跨平台</u>的优点。**高可重用性：**`STL`中几乎所有的代码都采用了模板类和模版函数的方式实现，这相比于传统的由函数和类组成的库来说提供了更好的代码重用机会。**高性能：**如`map`可以高效地从十万条记录里面查找出指定的记录，因为`map`是采用红黑树的变体实现的。**高移植性：**如在项目`A`上用`STL`编写的模块，可以直接移植到项目`B`上。**跨平台：**如用`windows`的`Visual Studio`编写的代码可以在`Mac OS`的`XCode`上直接编译。

### 容器
容器，置物之所也。<u>研究数据的特定排列方式，以利于搜索或排序或其他特殊目的，这一门学科我们称为数据结构</u>。几乎可以说，任何特定的数据结构都是为了实现某种特定的算法。`STL`容器就是将运用最广泛的一些数据结构实现出来。<u>常用的数据结构：</u>数组`(array)`,链表`(list)`,树`(tree)`,栈`(stack)`,队列`(queue)`,集合`(set)`,映射表`(map)`,根据数据在容器中的排列特性，这些数据分为**序列式容器**和**关联式容器**两种。

**<u>序列式容器：</u>**即以线性排列（类似普通数组的存储方式）来存储某一指定类型（例如` int、double` 等）的数据，需要特殊说明的是，<u>该类容器并不会自动对存储的元素按照值的大小进行排序</u>。**<u>关联式容器：</u>**非线性排列(二叉树)，在存储元素时会为每个元素在配备一个键，整体以键值对的方式存储到容器中，可以通过键值直接找到对应的元素，而无需遍历整个容器。另外，<u>关联式容器在存储元素，默认会根据各元素</u>**<u>键值的大小</u>**<u>做升序排序。</u>

### 算法
算法，问题之解法也。<u>以有限的步骤，解决逻辑或数学上的问题，这一门学科我们叫做算法</u>`<u>(Algorithms)</u>`。广义而言，我们所编写的每个程序都是一个算法，其中的每个函数也都是一个算法，毕竟它们都是用来解决或大或小的逻辑问题或数学问题。`STL`收录的算法经过了数学上的效能分析与证明，是极具复用价值的，包括常用的排序，查找等等。特定的算法往往搭配特定的数据结构，算法与数据结构相辅相成。算法分为**质变算法**和**非质变算法**。**<u>质变算法：</u>**是指运算过程中会更改区间内的元素的内容。例如拷贝，替换，删除等等。**<u>非质变算法：</u>**是指运算过程中不会更改区间内的元素内容，例如查找、计数、遍历、寻找极值等等。

### 迭代器
迭代器`(iterator)`是一种抽象的设计概念，在容器中指出一个位置、或成对使用以划定一个区域，用来限定操作所涉及到的数据范围。`iterator`模式定义如下：提供一种方法，使之能够依序寻访某个容器所含的各个元素，而又无需暴露该容器的内部表示方式「实际上是封装了指针的类中类」。迭代器的设计思维——`STL`的关键所在，`STL`的中心思想在于将容器`(container)`和算法`(algorithms)`分开，彼此独立设计，最后再一贴胶着剂将他们撮合在一起。从技术角度来看，容器和算法的泛型化并不困难，`c++`的`class template`和`function template`可分别达到目标，如果设计出两这个之间的良好的胶着剂，才是大难题。迭代器的种类:

| 种类 | 功能 | 操作 |
| :---: | :---: | :---: |
| 输入迭代器 | 提供对数据的只读访问 | 只读，支持`++、==、!=` |
| 输出迭代器 | 提供对数据的读写访问 | 读写，支持`++` |
| 前向迭代器 | 提供读写操作，并能向前推进迭代器 | 读写，支持`++、==、!=` |
| 双向迭代器 | 提供读写操作，并能向前和向后操作 | 读写，支持`++、--` |
| 随机访问迭代器 | 提供读写操作，并能以跳跃的方式访问容器的任意数据，是功能最强的迭代器 | 读写，支持`++、--、[n]、-n、<、<=、>、>=` |


## 迭代器
简而言之，迭代器的作用是用来访问容器（用来保存元素的数据结构）中的元素的。没错！这和访问数组这个序列的指针一样，因为数组范围内的指针就是迭代器的一种。

### 数组范围指针
以往我们遍历数组，都是使用下标法，简单，清晰！有如下数组:

```cpp
//容器
int arr[5] = { 1,2,3,4,5 };
```

+ 下标法遍历

```cpp
for (int i = 0; i < 5; i++)
{
    cout << arr[i] << " ";
}
```

+ 基于范围的for循环

```cpp
for(auto& v : arr)
{
    cout << v << " ";
}
```

为啥能使用基于范围的`for`循环遍历数组呢？因为只要知道了数组的开始和结束就能去遍历了，看看下面的遍历方法，你就明白了！

+ 指针法遍历

```cpp
int* iter = arr;
for (iter = arr; iter != arr + 5; iter++)
{
    cout << *iter << " ";
}
```

+ 迭代器方式

```cpp
using  iterator = int*;
iterator begin = arr;
iterator end = arr + 5;
for (iterator it = begin; it != end; it++)
{
    cout << *it << " ";
}
```

### 自定义容器
我们先自己写一个`SArray`容器

```cpp
template<typename T,size_t _Size>
class SArray
{
public:
    SArray() {}
    SArray(const std::initializer_list<T>& list)
    {
        int i = 0;
        for (auto& v : list)
        {
            _data[i++] = v;
        }
    }
    T& operator[](size_t index)
    {
        return _data[index];
    }
    size_t size()const { return _Size; };
private:
    T _data[_Size]{T()};
};
```

在上面的代码中，我们提供了`size()`和`[]`运算符重载，所以可以通过下标去遍历`SArray`。

```cpp
SArray<int, 10> nums = {1,2,3,4,5};
for (int i = 0; i < nums.size(); i++)
{
    cout << nums[i] << " ";
}
```

那么对于`SArray`来说，能使用基于范围的`for`循环吗？

```cpp
for (auto& v : nums)
{
    cout << v << " ";
}
```

![](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250406164957090.png)

咱们来分析一下这个报错，它说没有找到`begin`和`end`函数，但是基于范围的`for`循环又需要`begin`和`end`函数才能工作，就这样错误产生了！那么`begin`和`end`函数是什么呢？其实就是数组开始的指针和结束的指针，我们可以实现一下这两个函数：`begin`返回第一个元素的首地址，`end`返回最后一个元素的下一个元素的地址(注意，这个位置不能访问，仅仅作为结束标记)。

```cpp
class SArray
{
public:
    ...
    T* begin() { return _data; }
    T* end() { return _data + _Size; }
    ...
};
```

通过调试，确实发现基于范围的`for`循环，调用了咱们写的`begin`和`end`函数。

**另一种遍历方式：**在上面，我们通过基于范围的`for`循环，遍历了`SArray`，其实还有一种遍历形式也是经常使用的。要想使用，我们还得在类里面加点料。

```cpp
template<typename T,size_t _Size>
class SArray
{
public:
    using iterator = T*;
public:
    ...
    iterator begin() { return _data; }
    iterator end() { return _data + _Size; }
    ...
}
```

在类的开头加上了一个类型`iterator`，它表示迭代器类型，其实就是`T*`类型的别名，只不过看起来更清晰而已。然后把`begin`和`end`的返回类型改为了`iterator`。

```cpp
for (SArray<int, 10>::iterator it = nums.begin(); it != nums.end(); ++it)
{
    cout << *it << " ";
}
```

这种方法看起来有点复杂，其实`SArray<int, 10>::iterator`可以直接使用`auto`来进行推导。接下来，再看一个例子，我们提供一个函数，专门用来输出`SArray`的数据。

```cpp
template<typename T>
void showSArray(const T& arr)
{
    for (auto v : arr)
    {
        cout << v << " ";
    }
    cout << endl;
}
//call
showSArray(nums);
```

![](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250406164957091.png)

错误的意思是，找到了你的`begin`和`end`函数，但是不是我想要的版本，因为`void showSArray(const T& arr)`函数传递的是常引用，不能调用非`const`成员函数。此时，就需要我们再重载一个`const`版本的。

```cpp
iterator begin()const { return _data; }
iterator end()const { return _data + _Size; }
```

![](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250406164957092.png)

对于指针来说，常函数，必须返回一个常量，我们再在类里面加点料。

```cpp
using const_iterator = const T*;

const_iterator begin()const { return _data; }
const_iterator end()const { return _data + _Size; }
```

这样就可以了，完美解决，那么大家再考虑一下，另一种情况，如果我想要倒着遍历`SArray`应该怎么做呢？对，没错，提供反向迭代器即可！

```cpp
using reverse_iterator = T*;
using const_reverse_iterator = const T*;

reverse_iterator rbegin() { return _data + _Size - 1; }
reverse_iterator rend() { return _data - 1; }
const_reverse_iterator rbegin()const { return _data + _Size - 1; }
const_reverse_iterator rend()const { return _data - 1; }
```

定义`reverse_iterator`类型，并提供对应的`rbegin`和`rend`函数。

```cpp
for (auto it = nums.rbegin(); it != nums.rend(); it--)
{
    cout << *it << " ";
}
```

注意：`it`必须使用`--`，因为无法区分，到底是不是使用的反向迭代器，针对这个问题，我们可以使用类来包装迭代器解决。

### 迭代器类
其实，在`C++STL`中，基本上所有迭代器都是通过类来实现的，这样就非常方便的去处理遍历操作了。实现一个链表，先写出节点类型：

```cpp
template<typename T>
struct Node
{
    Node(const T& v) :data(v), next{ nullptr } {}
    T data;
    Node* next;
};
```

然后写出链表：

```cpp
template<typename T>
class SForwardList
{
public:
    SForwardList(){}
    SForwardList(const std::initializer_list<T>& list) 
    {
        for (auto& v : list)
        {
            push_back(v);
        }
    }
    ~SForwardList() 
    {
        Node<T>* curNode = _head;
        Node<T>* delNode = nullptr;
        while (curNode)
        {
            delNode = curNode;
            curNode = curNode->next;
            delete[] delNode;
        }
    }
    void push_back(const T& value)
    {
        Node<T>* node = new Node<T>(value);
        if (!_head)
        {
            _head = node;
            _tail = node;
        }
        else
        {
            _tail->next = node;
            _tail = node;
        }
    }
    friend std::ostream& operator<<(std::ostream& out, const SForwardList& list)
    {
        Node<T>* curNode = list._head;
        out << "SForwardList(";
        while (curNode)
        {
            out << curNode->data;
            if (curNode->next)
                out<< ",";
            curNode = curNode->next;
        }
        out << ")";
        return out;
    }
private:
    Node<T>* _head{ nullptr };
    Node<T>* _tail{ nullptr };
};
```

测试：

```cpp
const SForwardList<int> list = {1,2,3,4,5,6,7,8};
cout << list << endl;
```

Ok! 没问题了，接下来实现迭代器。

```cpp
template<typename T>
class _SForwardList_iterator
{
public:
    _SForwardList_iterator() {};
    _SForwardList_iterator(Node<T>* ptr) :_ptr(ptr) {};
    bool operator!=(const _SForwardList_iterator& it)
    {
        return _ptr != it._ptr;
    }
    _SForwardList_iterator& operator++()
    {
        _ptr = _ptr->next;
        return _ptr;
    }
    T& operator*()
    {
        return _ptr->data;
    }
private:
    Node<T>* _ptr{ nullptr };
};
```

`SForwardList`类中添加如下代码：

```cpp
using iterator = _SForwardList_iterator<T>;
iterator begin() { return iterator(_head); }
iterator end() { return iterator(nullptr); }
```

测试一下:

```cpp
for (auto& v : list)
{
    //v = 5;
    cout << v << " ";
}
```

好了，能运行起来了！

### 容器、迭代器、算法分离案例
```cpp
template<typename Ty>
class Vector
{
public:
    using iterator = Ty*;
public:
    Vector(int size) :_base(nullptr), _capacity(size), _size(0)
    {
        _base = new Ty[_capacity];
    }
    Ty& operator[](int index)
    {
        return _base[index];
    }
    void push_back(Ty val)
    {
        if (_size >= _capacity && !_inc())
        {
            throw std::out_of_range("run out of memory^V^");
        }
        _base[_size++] = val;
    }
    size_t size()
    {
        return _size;
    }
    size_t capacity()
    {
        return _capacity;
    }
public:
    iterator begin()
    {
        return _base;
    }
    iterator end()
    {
        return _base+_size;
    }
private:
    bool _inc(void)
    {
        Ty* ptr = _base;				//保存原数据
        try
        {
            _base = new Ty[_capacity + 8];	//分配新空间
        }
        catch (std::bad_alloc&)
        {
            return false;					//分配失败返回false
        }
        memcpy(_base, ptr, _capacity*sizeof(Ty));	//拷贝数据
        _capacity = _capacity + 8;		//更新容量
        delete[]ptr;					//释放旧内存
        return true;
    }
private:
    Ty* _base;
    int _capacity;
    int _size;
};
int main()
{
    /*
    //容器
    int arr[5] = { 1,2,3,4,5 };
    //方式1
    for (int i = 0; i < 5; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    //方式2
    int* iter = arr;
    for (iter = arr; iter != arr + 5; iter++)
    {
        cout << *iter << " ";
    }
    cout << endl;
    //方式3
    using  iterator = int*;
    iterator begin = arr;
    iterator end = arr + 5;
    for (iterator it = begin; it != end; it++)
    {
        cout << *it << " ";
    }*/
    Vector<int> vec(5);
    for (size_t i = 0; i < vec.capacity(); i++)
    {
        vec.push_back(i);
    }
    //方式1
    for (size_t i = 0; i < vec.size(); i++)
    {
        cout << vec[i] << " ";
    }
    cout << endl;
    //方式2
    int* iter = &vec[0];
    for (iter; iter != &vec[vec.size()]; iter++)
    {
        cout << *iter << " ";
    }
    cout << endl;
    //方式3
    using  iterator = int*;
    iterator begin = &vec[0];
    iterator end = &vec[vec.size()];
    for (iterator it = begin; it != end; it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    //方式4
    Vector<int>::iterator it = vec.begin();
    for (it; it != vec.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}
```

如果是链表，通过`using`定义别名的方式是不行的,链表的指针不能直接`++`，为了让`iterator`支持`++`操作，必须封装一个类，以下是完整版

```cpp
template<typename Ty>
class Vector
{
public:
    //using iterator = Ty*;
public:
    Vector(int size) :_base(nullptr), _capacity(size), _size(0)
    {
        _base = new Ty[_capacity];
    }
    Ty& operator[](int index)
    {
        return _base[index];
    }
    void push_back(Ty val)
    {
        if (_size >= _capacity && !_inc())
        {
            throw std::out_of_range("run out of memory^V^");
        }
        _base[_size++] = val;
    }
    size_t size()
    {
        return _size;
    }
    size_t capacity()
    {
        return _capacity;
    }
public:
    class iterator
    {
    public:
        iterator(Ty* ptr = nullptr):_ptr(ptr){}
        ~iterator() {}
        iterator operator++()
        {
            //curNode = curNode->next;
            _ptr++;
            return *this;
        }
        iterator operator++(int)
        {
            //curNode = curNode->next;
            return iterator(_ptr++);
        }
        bool operator!=(const iterator& right)
        {
            return this->_ptr != right._ptr;
        }
        Ty& operator*()
        {
            return *_ptr;
        }
        Ty* operator->()
        {
            return _ptr;
        }
    private:
        Ty* _ptr;
    };
    iterator begin()
    {
        return iterator(_base);
    }
    iterator end()
    {
        return iterator(_base+_size);
    }
private:
    bool _inc(void)
    {
        Ty* ptr = _base;				//保存原数据
        try
        {
            _base = new Ty[_capacity + 8];	//分配新空间
        }
        catch (std::bad_alloc&)
        {
            return false;					//分配失败返回false
        }
        memcpy(_base, ptr, _capacity*sizeof(Ty));	//拷贝数据
        _capacity = _capacity + 8;		//更新容量
        delete[]ptr;					//释放旧内存
        return true;
    }
private:
    Ty* _base;
    int _capacity;
    int _size;
};
int main()
{
    Vector<int> vec(5);
    for (size_t i = 0; i < vec.capacity(); i++)
    {
        vec.push_back(i);
    }
    //方式1
    for (size_t i = 0; i < vec.size(); i++)
    {
        cout << vec[i] << " ";
    }
    cout << endl;
    //方式2
    int* iter = &vec[0];
    for (iter; iter != &vec[vec.size()]; iter++)
    {
        cout << *iter << " ";
    }
    cout << endl;
    //方式3
    using  iterator = int*;
    iterator begin = &vec[0];
    iterator end = &vec[vec.size()];
    for (iterator it = begin; it != end; it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    //方式4  没有写迭代器类是使用不了的
    for (auto& val : vec)
    {
        cout << val << endl;
    }
    //方式5
    Vector<int>::iterator it = vec.begin();
    for (it; /*it.operator!=(vec.end()) */it != vec.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}
```

### 迭代器操作函数
```cpp
begin/cbegin/rbegin/crbegin
end/cend/rend/crend
size
empty
advance
distance
next
prev
```

## 可调用对象`(Callable object)`
### 简介
在面向对象编程世界里，一切皆为对象，对象是程序的基本单元。那么可以调用的对象称之为可调用对象，在`C++`中除了函数可以调用之外，重载了`operator()`的类，也是可以调用的，也可成为可调用对象。`C++`中的可调用对象有以下几种：

+ 函数`（function）`
+ 函数指针`（function pointer）`
+ 仿函数`（Functor）`

+ `lambda`表达式
+ `bind` 函数封装的函数对象
+ `function`函数包装类对象

### 仿函数
仿函数（`Functor`）又称为函数对象（`Function Object`）是一个能行使函数功能的类，仿函数是定义了一个含有`operator()`成员函数的对象，可以视为一个一般的函数，只不过这个函数功能是在一个类中的运算符`operator()`中实现，是一个函数对象，它将函数作为参数传递的方式来使用。写一个简单类，除了维护类的基本成员函数外，只需要重载`operator()`运算符 。这样既可以免去对一些公共变量的维护，也可以使重复使用的代码独立出来，以便下次复用。

- [x] **<u>为什么要有仿函数？</u>**

<u>案例1：</u>斐波拉契，假如客户有一个需求摆在我们的面前，编写一个函数：函数可以获得斐波拉契数列每项的值；每调用一次便返回一个值；函数可根据需要重复使用。

+ 静态变量

我们之前在` C` 语言中也讲过斐波拉契数列，相信这个很好实现了。那么我们就编写的程序如下

```cpp
int fibonacci()
{
    static int a0 = 0;	//第一项
    static int a1 = 1;	//第二项
    int ret = a1;		//保存
    a1 = a0 + a1;
    a0 = ret;
    return ret;
}
int main()
{
    for (size_t i = 0; i < 5; i++)
    {
        cout << fibonacci() << " ";		//1 1 2 3 5
    }
    cout << endl;
    for (size_t i = 0; i < 5; i++)
    {
        cout << fibonacci() << " ";		//8 13 21 34 55
    }
    return 0;
}
```

过两天，客户又给打回来了。说是存在几个问题：函数一但调用就无法重来，静态局部变量处于函数内部，外界无法改变。函数为全局函数，是唯一的，无法多次独立使用。无法指定某个具体的数列项作为初始值。

+ 全局变量

于是我们想着将静态局部变量改为去全局变量，再次重新调用时，便将全局变量重新初始化

```cpp
int a0 = 0;	//第一项
int a1 = 1;	//第二项
int fibonacci()
{
    int ret = a1;
    a1 = a0 + a1;
    a0 = ret;
    return ret;
}

int main()
{
    for (size_t i = 0; i < 5; i++)
    {
        cout << fibonacci() << " ";		//1 1 2 3 5 8
    }
    cout << endl;
    a0 = 0;
    a1 = 1;
    for (size_t i = 0; i < 5; i++)
    {
        cout << fibonacci() << " ";		//1 1 2 3 5 8
    }
    return 0;
}
```

是满足这个需求了，但是要在使用时需要重新初始化全局变量，客户肯定不干啊。所以这个解决方案不可行。于是乎，仿函数出现了。

+ 仿函数
    - 定义一个类，重载`operator()`；
    - 构造函数指定具体数列项的起始位置；
    - 多个对象相互独立的求解数列项。

    下来我们来看看最终的解决方案：

```cpp
class Fibonacci
{
public:
    Fibonacci() :_a0(0), _a1(1) {}
    Fibonacci(int n) :_a0(0), _a1(1) 
    {
        for (int i = 0; i < n; i++)
        {
            int ret = _a1;
            _a1 = _a0 + _a1;
            _a0 = ret;
        }
    }
    int operator()()
    {
        int ret = _a1;
        _a1 = _a0 + _a1;
        _a0 = ret;
        return ret;
    }
private:
    int _a0;
    int _a1;
};

int main()
{
    Fibonacci fib;
    for (size_t i = 0; i < 5; i++)
    {
        cout << fib() << " ";		//1 1 2 3 5 8
    }
    cout << endl;

    Fibonacci fib1(9);
    for (size_t i = 0; i < 5; i++)
    {
        cout << fib1() << " ";		//55 89 144 233 377
    }
    return 0;
}
```

我们看到已经实现了所有需求，并且随时想从哪个数开始都行。

<u>案例2：</u>统计元素，有一个简单需求：统计一个`vector<int>`中，元素等于`3`的数量。解决方法可能会是：

```cpp
int equal_count(const vector<int>::iterator& first,const vector<int>::iterator& last,const int& val)
{
    int size = 0;
    for (auto it = first; it != last; it++)
    {
        if (*it == val)
        {
            size++;
        }
    }
    return size;
}
int main()
{
    vector<int> v = { 1,2,3,4,5,6,7,8,1,3,1,4,3,2,1 };
    //统计v中元素等于3的元素个数
    size_t size = equal_count(v.begin(), v.end(), 3);
    cout << size << endl;	//output:3
    return 0;
}
```

其实，统计容器中某个元素的数量，`C++`中有一个函数`count`

```cpp
size_t count(const Iter First, const Iter Last, const Ty& Val);
```

对于上面的统计元素个数没有拓展性。比如：统计`v`中元素大于于`3`的元素个数呢？为此我们必须再设计一个`greater_count`函数：

```cpp
int great_count(const vector<int>::iterator& first, const vector<int>::iterator& last, const int& val)
{
    int size = 0;
    for (auto it = first; it != last; it++)
    {
        if (*it > val)
        {
            size++;
        }
    }
    return size;
}
```

这样写就很麻烦，我只需要改变一下规则，就需要多一个函数，咱们可以把里面的比较规则，写成一个函数(可调用的对象),通过传参实现比较。

```cpp
//using FunType = bool (*)(int, int);
template<typename FunType>
int count_if(const vector<int>::iterator& first, const vector<int>::iterator& last,FunType cmp,const vector<int>::value_type& val)
{
    int size = 0;
    for (auto it = first; it != last; it++)
    {
        if (cmp(*it,val))
        {
            size++;
        }
    }
    return size;
}
bool equal(int a, int b)
{
    return a == b;
}
bool great(int a, int b)
{
    return a > b;
}
int main()
{
    vector<int> v = { 1,2,3,4,5,6,7,8,1,3,1,4,3,2,1 };
    //统计v中元素等于3的元素个数
    size_t size;
    size = count_if(v.begin(), v.end(), equal,3);
    cout << size << endl;
    //统计v中元素大于3的元素个数
    size = count_if(v.begin(), v.end(), great,3);
    cout << size << endl;
    
    return 0;
}
```

这样是不是就轻松很多了，但是这里的统计元素`3`，我们要通过`count_if`传到比较函数里面去，非常的丑陋对不对。有一种写法，可以不通过参数传进去。首先，删掉`count_if`中的最后一个参数`val`。然后，把`equal`和`great`稍加修改一下。

```cpp
template<typename FunType>	
int count_if(const vector<int>::iterator& first, const vector<int>::iterator& last, FunType cmp)
{
    int size = 0;
    for (auto it = first; it != last; it++)
    {
        if (cmp(*it))
        {
            size++;
        }
    }
    return size;
}
bool equal(int a)
{
    return a == 3;
}
bool great(int a)
{
    return a > 3;
}
int main()
{
    vector<int> v = { 1,2,3,4,5,6,7,8,1,3,1,4,3,2,1 };
    //统计v中元素等于3的元素个数
    size_t size;
    size = count_if(v.begin(), v.end(), equal);
    cout << size << endl;
    //统计v中元素大于3的元素个数
    size = count_if(v.begin(), v.end(), great);
    cout << size << endl;
    return 0;
}
```

或者使用`lambda`表达式

```cpp
vector<int> v = { 1,2,3,4,5,6,7,8,1,3,1,4,3,2,1 };
//统计v中元素等于3的元素个数
size_t size;
//size = equal_count(v.begin(), v.end(), 3);
size = count_if(v.begin(), v.end(), [](auto val) 
    {
            return val == 3; 
    });
cout << size << endl;
//统计v中元素大于3的元素个数
size = count_if(v.begin(), v.end(), [](auto val)
    {
        return val > 3;
    });
cout << size << endl;
```

其实`lamda`表达式出现之后(`C++11`)，仿函数(`C++98`)的作用已经被削弱了，使用`lamda`会让我们使用`STL`方便许多。对于`count_if` 里有和我们写的一模一样的函数，以后直接使用即可。那么使用仿函数，怎么实现上述功能呢？

```cpp
struct Equal
{
    bool operator()(int val)
    {
        return val == 3;
    }
};
struct Great
{
    bool operator()(int val)
    {
        return val > 3;
    }
};
int count_if(const vector<int>::iterator& first, const vector<int>::iterator& last, FunType cmp);
int main()
{
    vector<int> v = { 1,2,3,4,5,6,7,8,1,3,1,4,3,2,1 };
    //统计v中元素等于3的元素个数
    size_t size;
    size = count_if(v.begin(), v.end(), Equal());
    cout << size << endl;
    //统计v中元素大于3的元素个数
    size = count_if(v.begin(), v.end(), Great());
    cout << size << endl;
    
    return 0;
}
```

可以继续升级~

```cpp
struct Equal
{
    Equal(int usrVal) :_usrVal(usrVal) {}
    bool operator()(int val)
    {
        return val == _usrVal;
    }
    int _usrVal;
};
struct Great
{
    Great(int usrVal) :_usrVal(usrVal) {}
    bool operator()(int val)
    {
        return val > _usrVal;
    }
    int _usrVal;
};
int count_if(const vector<int>::iterator& first, const vector<int>::iterator& last, FunType cmp);
int main()
{
    vector<int> v = { 1,2,3,4,5,6,7,8,1,3,1,4,3,2,1 };
    //统计v中元素等于3的元素个数
    size_t size;
    size = count_if(v.begin(), v.end(), Equal(2));
    cout << size << endl;
    //统计v中元素大于3的元素个数
    size = count_if(v.begin(), v.end(), Great(5));
    cout << size << endl;
    return 0;
}
```

- [x] **<u>仿函数优点</u>**

如果可以用仿函数实现，那么你应该用仿函数，而不要用`CallBack`。原因在于：

    - 仿函数可以不带痕迹地传递上下文参数。而`CallBack`技术通常使用一个额外的`void*`参数传递。这也是多数人认为`CallBack`技术丑陋的原因。
    - 仿函数技术可以获得更好的性能，这点直观来讲比较难以理解。
- [x] **<u>仿函数作用</u>**

仿函数通常有下面四个作用：

    - 作为排序规则，在一些特殊情况下排序是不能直接使用运算符`<`或者`>`时，可以使用仿函数。
    - 作为判别式使用，即返回值为`bool`类型。
    - 同时拥有多种内部状态，比如返回一个值的同时并累加。
    - 作为算法`for_each`的返回值使用。
- [x] **<u>标准仿函数</u>**

`STL`中也大量涉及到仿函数，有时仿函数的使用是为了函数拥有类的性质，以达到安全传递函数指针、依据函数生成对象、甚至是让函数之间有继承关系、对函数进行运算和操作的效果。比如`STL`中的容器`set`就使用了仿函数`less`，而`less`继承的`binary_function`，就可以看作是对于一类函数的总体声明，这是函数做不到的。`C++` 针对常用的算术和逻辑运算定义了很多函数对象：

| 算术运算 |  |
| --- | --- |
| [plus](https://zh.cppreference.com/w/cpp/utility/functional/plus) | 实现 `x + y` 的函数对象 (类模板) |
| [minus](https://zh.cppreference.com/w/cpp/utility/functional/minus) | 实现` x - y `的函数对象 (类模板) |
| [multiplies](https://zh.cppreference.com/w/cpp/utility/functional/multiplies) | 实现 `x * y` 的函数对象 (类模板) |
| **比较** | **** |
| [equal_to](https://zh.cppreference.com/w/cpp/utility/functional/equal_to) | 实现` x == y `的函数对象 (类模板) |
| [not_equal_to](https://zh.cppreference.com/w/cpp/utility/functional/not_equal_to) | 实现` x != y `的函数对象 (类模板) |
| [greater](https://zh.cppreference.com/w/cpp/utility/functional/greater) | 实现` x > y` 的函数对象 (类模板) |
| [less](https://zh.cppreference.com/w/cpp/utility/functional/less) | 实现 `x < y `的函数对象 (类模板) |
| [greater_equal](https://zh.cppreference.com/w/cpp/utility/functional/greater_equal) | 实现 `x >= y `的函数对象 (类模板) |
| [less_equal](https://zh.cppreference.com/w/cpp/utility/functional/less_equal) | 实现` x <= y` 的函数对象 (类模板) |


### 函数适配器
头文件`<functional>`，<u>函数适配器的功能是：将一种函数对象转化为另外一种符合要求的函数对象</u>。

- [x] `<u>bind</u>`

`bind`函数用来绑定函数调用的某些参数，可以将`bind`函数看作一个通用的函数包装器，它接受一个可调用对象，并返回函数对象。返回的函数对象参数从前往后，可以依次编号，从`1`开始；然后可以把传入的参数对原来的参数进行绑定。

1. 绑定全局函数

全局函数是指定义在类外的函数，可以被其他文件中函数调用。

    - 绑定无参函数

对于没有参数的函数，绑定起来最简单，只需要传递一个函数名。

```cpp
std::string myName() { return std::string("老师"); }
//exp
auto getNmae = std::bind(myName);
std::cout << getNmae();
```

    - 顺序绑定参数

```cpp
void show(int number, const std::string& str)
{
    cout << number << " " << str << endl;
}
auto bind_show = std::bind(show, placeholders::_1, placeholders::_2);
bind_show(2,"world");
```

    - 交换参数位置

使用`placeholders`来进行占位，`placeholders::_N` `_N`表示绑定之后的函数对象的参数位置。

```cpp
auto bind_show1 = std::bind(show, placeholders::_2, placeholders::_1);
bind_show1("world",1314520);
```

    - 绑定固定参数

```cpp
auto bind_show3 = std::bind(show, 888,placeholders::_1);
bind_show3("老师");
```

2. 绑定成员函数

```cpp
struct Plus
{
    int plus(int a, int b)
    {
        return a * b;
    }
};	
{
    Plus plus;
    auto func1 = std::bind(&Plus::plus, &plus, placeholders::_1, placeholders::_2);	//绑定对象指针
    auto func2 = std::bind(&Plus::plus, plus, placeholders::_1, placeholders::_2);	//绑定对象或引用
    cout << func1(2, 4) << endl;
}
```

3. 绑定仿函数

```cpp
struct Sub
{
    int operator()(int a, int b)
    {
        return a * b;
    }
};
{
    auto func2 = std::bind(Sub(), placeholders::_1, placeholders::_2);
    cout << func2(3, 4) << endl;
}
```

4. 绑定lambda表达式

```cpp
{	
    auto func3 = std::bind([](int a, int b) {return a / b; }, placeholders::_1, placeholders::_2);
    cout << func3(6 ,2) << endl;
}
```

- [x] `<u>ref、cref</u>`

构造一个适当的`reference_wrapper`类型的对象来保存对`elem`的引用。

    - `ref`普通引用
    - `cref`常引用

```cpp
class Foo
{
public:
    int _value = 4;
    void show()
    {
        ++_value;
        std::cout << _value << std::endl;
    }
};
int main()
{
    Foo foo;
    auto func = std::bind(&Foo::show, std::ref(foo));
    func();
    func();
    foo.show();
    foo.show();
    return 0;
}
```

- [x] `mem_fn`

把成员函数转为函数对象，使用对象指针或对象(引用)进行绑定

```cpp
class Foo
{
public:
    int a{ 100 };
    void print()
    {
        cout << a << endl;
    }
    void print2(int val)
    {
        cout << a << " val:" << val << endl;
    }
};

int main()
{
    Foo f;
    //把成员函数转为函数对象，使用对象指针或对象(引用)进行绑定
    auto func = mem_fn(&Foo::print);
    func(f);		//把对象传进去(引用)
    func(&f);		//对象指针也行
    func(Foo());	//临时对象也行
    auto func2 = mem_fn(&Foo::print2);
    func2(f,520);
    return 0;
}
```

```cpp
struct Foo
{
    int v;
    Foo(int val = -1)
        :v(val) {}
    void print()
    {
        cout <<v << endl;
    }
};
int main()
{
    //让每个对象都调用指定的成员函数
    std::vector<Foo> vec(5);	//存对象
    for_each(vec.begin(), vec.end(), mem_fn(&Foo::print));
    cout << endl;
    //让每个对象都调用指定的成员函数
    std::vector<Foo*> vec_ptr;	//存指针
    for (int i = 0; i < 5; i++)
    {
        vec_ptr.push_back(new Foo(i*3));
    }	
    for_each(vec_ptr.begin(), vec_ptr.end(), mem_fn(&Foo::print));
    return 0;
}
```

- [x] `not1`

返回一元函数对象的否定，只能对仿函数进行否定，普通函数不行。一元函数又叫一元谓词，谓词( `_predicate_` )是指普通函数或重载的`operator()`返回值是`bool`类型的函数对象(仿函数)。如果`operator()`接受一个参数，那么叫做一元谓词,如果接受两个参数，那么叫做二元谓词，谓词可作为一个判断式。

```cpp
struct Greater5 
    :public unary_function<int, bool>		//必须继承自一元函数类
{
    bool operator()(int val) const			//必须加上const
    {
        return val > 5;
    }
};
int main()
{
    cout << boolalpha << Greater5()(10) << endl;
    auto _less5 = not1(Greater5());
    cout << boolalpha << _less5(10) << endl;
    return 0;
}
```

- [x] `not2`

返回二元函数对象的否定，只能对仿函数进行否定，普通函数不行。

```cpp
struct Greater
    :public binary_function<int,int,bool>	//必须继承自二元函数类
{
    bool operator()(int a, int b) const		//必须加上const
    {
        return a > b;
    }
};

int main()
{
    cout << boolalpha << Greater()(3, 1) << endl;;
    auto _less = not2(Greater());
    cout << boolalpha << _less(3,1) << endl;;
    return 0;
}
```

- [x] `not_fn(C++17)`

`not_fn` 的目的是取代 `C++03 `时代的取反器 `std::not1`及 `std::not2`，`std::not1`和`std::not2`在`C++17`中弃用，在`C++20`中被移除了！<u>构造一个转发调用包装器，返回其所保有的可调用对象的逻辑非。</u>

### `function`类
该函数包装器模板能包装任何类型的可调用实体，如普通函数、函数对象(仿函数)、`lambda`表达式以及`bind`创建的对象。`std::function`对象是对`C++`中现有的可调用实体的一种类型安全的包裹（我们知道像函数指针这类可调用实体，是类型不安全的）。通过`function`类型可以将多个不同类型的可调用对象，整合到一个类型中。

- [x] 包装普通函数

```cpp
int add(int a, int b)
{
    return a + b;
}
{
    std::function<int(int, int)> fun_add(add);
    cout<<fun_add(2, 3);
}
```

- [x] 包装成员函数(通过`bind`绑定)

```cpp
class Maye
{
public:
    int add(int a, int b)
    {
        return a + b;
    }
};
{
    Maye maye;
    std::function<int(int, int)> fun_maye_add(std::bind(&Maye::add, &maye,placeholders::_1,placeholders::_2));
    cout << fun_maye_add(3, 5);
}
```

- [x] 包装`lambda`表达式

```cpp
{
    std::function<int(int, int)> fun_lambda_add([](int a, int b)->int 
                                                    {
                                                        return a + b; 
                                                    });
    cout << fun_lambda_add(7, 8) << endl;
}
```

- [x] 包装函数对象

```cpp
class Maye
{
public:
    int operator()(int a, int b)
    {
        return a * b;
    }
};
{		
    Maye obj;
    std::function<int(int, int)> fun_functor(obj);
    cout << fun_functor(2,4);
}
```

### `std::invoke`
`std::invoke`能以给定参数调用任何可调用 _(_`_Callable_`_)_ 对象。

- [x] 调用全局函数

```cpp
std::string myName(){return std::string("老师");}
std::cout<< std::invoke(myName);
```

- [x] 调用成员函数

```cpp
class Foo
{
public:
    void show(){std::cout << __FUNCTION__ << std::endl;}
};
Foo foo;
std::invoke(&Foo::show,&foo);
```

- [x] 调用函数并传递参数

```cpp
void show(int number, const std::string& str)
{
    cout << number << " " << str << endl;
}
std::invoke(show,123,"world");
```

## 序列式容器
### `array`
- [x] `<u>array</u>`<u>概念</u>

`array`是一个容器，封装了固定大小的数组。该容器是聚合类型，其语义与`C`风格数组的结构相同，`T[N]`作为其唯一的非静态数据成员。与`C`风格数组不同的是，它不会自动衰减为`T*`。(<u>数组名不会自动转为数组首地址</u>)该容器将`C`风格数组的<u>`性能`</u>和<u>`可访问性`</u>与标准容器的优点相结合，比如知道自己的大小、支持赋值、随机访问迭代器等。

- [x] `array`初始化

`array`没有构造函数，也没有私有或保护成员，这就意味着它不会自动初始化。如果不对其初始化而直接获取其中的值，读出来的是野值。可以使用聚合表达式（花括号）对其初始化。

```cpp
array<int,5> arr = {1,2,3,4,5};
```

如果花括号内元素个数小于数组容量，则会为剩余元素自动赋默认值。也可以用`fill`函数对其填充。

```cpp
array<int,10> arr;
arr.fill(3);
```

对于元素类型和数组大小相同的`array`，可以直接进行赋值

```cpp
array<int,5> a1;
array<int,5> a2 = a1;
```

- [x] `array`元素访问

```cpp
Ty& operator[](size_t i);
Ty& at(size_t i);
Ty& front();
Ty& back();
Ty* data();						//返回指向数组中第一个元素的指针
```

- [x] `array`容量相关

```cpp
size_t size();					//返回数组大小
size_t max_size();				//返回数组大小
size_t empty();					//返回数组是否为空
```

- [x] `array`修改

```cpp
void fill(const Ty& val);		//把所有元素都设置为val
void swap(array<Ty,?>& other);	//交换两个array的数据，类型和大小必须一致
```

### `vector`
- [x] `Vector`概念

`vector`容器是`STL`中最常用的容器之一，它和` array `容器非常类似，都可以看做是对`C++`普通数组的“升级版”。不同之处在于，`<u>array</u>`<u> 实现的是静态数组（容量固定的数组），而 </u>`<u>vector</u>`<u> 实现的是一个动态数组，即可以进行元素的插入和删除</u>，在此过程中，`vector`会动态调整所占用的内存空间，整个过程无需人工干预。`<u>vector</u>`<u>尾部添加或移除元素非常快速。但是在中部或头部插入元素或移除元素比较费时</u>

- [x] `vector`的构造函数

```cpp
vector();
vector(initializer_list<_Ty> list);			//可以用聚合{}的方式初始化
vector(size_t size);						//指定vector初始大小
vector(size_t size, const Ty& val);			//指定大小，并把每个数据都设置为val
vector(Iter first, Iter last);				//以相同顺序复制[first,last)范围内的元素
vector(const vector& _Right);				//拷贝构造
vector(vector&& _Right);					//移动构造
```

- [x] `vector`元素访问

```cpp
Ty& operator[](size_t i);
Ty& at(size_t i);
Ty& front();
Ty& back();
Ty* data();						//返回指向数组中第一个元素的指针
```

- [x] `vector`容量相关

```cpp
size_t size();								//获取vector有效元素个数
size_t max_size();							//可以存储的最大元素数量
size_t capacity();							//获取当前容量，自动扩容
void   reserve(size_t n);					//请求更改容量，如果n大于当前字符串的容量，则使容器将其容量增加到n个字符（或更大）,小于可能不予理会(与实现有关)	
void   resize(size_t n);					//调整vector大小为n,n小于当前size，多余的数据会被丢掉
void   resize(size_t n,const Ty& val);		//如果n>size,剩下的用val填充
void   clear();								//清空数据，长度变为0
bool   empty();								//判断是否为空串，即size == 0
void   shrink_to_fit();						//请求vector减小其容量到合适大小
```

- [x] `vector`修改

```cpp
void push_back(const Ty& val);			//在尾部插入元素
void push_back(Ty&& val);				//同上
void emplace(Iter where,_Valty&& val);	//效率比较高
void emplace_back(_Valty&& val)
void pop_back();						//删除尾部元素

void assign(const size_t size, const Ty& val);//设置新的大小，并用val设置所有值
void assign(Iter First, Iter Last);		  //以相同顺序复制[first,last)范围内的元素
void assign(initializer_list<_Ty> Ilist);	 //同时赋值多个元素
 
iter insert(iter _Where, const Ty& Val);	  //指定位置插入元素		
iter insert(iter _Where, const size_t Count, const Ty& val);//指定位置插入，并且可以指定插入数量
iter insert(iter _Where, Iter First, Iter Last);//指定位置插入[first,last)之间的元素
iter insert(iter _Where, initializer_list<_Ty> Ilist);

iterator erase(iter pos);						//删除pos指向的元素		
iterator erase(iter first,iterator last);		//删除[first,last)范围内的字符

void swap(vector& str);					//交换两个vector的内容
```

### `deque`
- [x] `**<u>deque</u>**`**<u>概念</u>**

`deque`是`“double-ended queue”`的缩写，和`vector`一样都是`STL`的容器，`deque`是双端队列，而`vector`是单端的。`deque`在接口上和`vector`非常相似，在许多操作的地方可以直接替换。

+ `<u>deque</u>`<u>容器也擅长在序列尾部添加或删除元素（时间复杂度为</u>`<u>O(1)</u>`<u>），而不擅长在序列中间添加或删除元素。</u>
+ `deque`容器也可以根据需要修改自身的容量和大小。

和`vector`不同的是，`<u>deque</u>`<u>还擅长在序列头部添加或删除元素</u>，所耗费的时间复杂度也为常数阶`O(1)`。并且更重要的一点是，`<u>deque</u>`<u>容器中存储元素并不能保证所有元素都存储到连续的内存空间中。</u>

- [x] `deque`构造函数

```cpp
deque();									//默认构造
deque(size_t count);						//指定size
deque(size_t count, Ty& val);				//批量构造
deque(const deque& right);					//拷贝构造
deque(deque&& right);						//移动构造
deque(Iter first,Iter last);				//区间构造
```

- [x] `deque`元素访问

```cpp
Ty& operator[](size_t i);
Ty& at(size_t i);
Ty& front();
Ty& back();
```

- [x] `deque`容量相关

```cpp
size_t size();								//获取有效元素个数
size_t max_size();							//可以存储的最大元素数量
void   resize(size_t n);					//调整大小为n,n小于当前size，多余的数据会被丢掉
void   resize(size_t n,const Ty& val);		//如果n>size,剩下的用val填充
void   clear();								//清空数据，长度变为0
bool   empty();								//判断是否为空串，即size == 0
void   shrink_to_fit();						//请求减小其容量到合适大小
```

- [x] `deque`的修改

```cpp
void push_back(const Ty& val);			//在尾部插入元素
void push_back(Ty&& val);				//同上
void push_front(const Ty& val);			//在头部插入元素
void push_front(Ty&& val);				//同上

void emplace(Iter where,_Valty&& val);	//效率比较高
void emplace_back(_Valty&& val);
void emplace_front(_Valty&& val)
void pop_back();						//删除尾部元素

void assign(const size_t size, const Ty& val);//设置新的大小，并用val设置所有值
void assign(Iter First, Iter Last);		  //以相同顺序复制[first,last)范围内的元素
void assign(initializer_list<_Ty> Ilist);	  //同时赋值多个元素
     
iter insert(iter _Where, const Ty& Val);	  //指定位置插入元素		
iter insert(iter _Where, const size_t Count, const Ty& val);//指定位置插入，并且可以指定插入数量
iter insert(iter _Where, Iter First, Iter Last);//指定位置插入[first,last)之间的元素
iter insert(iter _Where, initializer_list<_Ty> Ilist);

iterator erase(iter pos);						//删除pos指向的元素		
iterator erase(iter first,iterator last);		//删除[first,last)范围内的字符

void swap(vector& str);					//交换两个vector的内容
```

### `list`
- [x] `list`简介

`list`容器，又称双向链表容器，即该容器的底层是以双向链表的形式实现的。这意味着，`list`容器中的元素可以分散存储在内存空间里，而不是必须存储在一整块连续的内存空间中。

- [x] `list`对象的默认构造

```cpp
list();
list(size_t count);
list(size_t count,const Ty& val);
list(const list& right);
list(list&& right);
list(Iter first,Iter last);
```

- [x] `list`元素访问

```cpp
Ty& front();
Ty& back();
```

- [x] `list`容量相关

```cpp
bool empty();
size_t size();
size_t max_size();
void   resize(size_t n);					//调整大小为n,n小于当前size，多余的数据会被丢掉
void   resize(size_t n,const Ty& val);		//如果n>size,剩下的用val填充
```

- [x] `list`添加元素

```cpp
void push_back(Ty& val);
void push_front(Ty& val);
void emplace_back(Args&&... args);
void emplace_front(Args&&... args);
Iter emplace(Iter pos,Args&&...args);

void assign(const size_t size, const Ty& val);//设置新的大小，并用val设置所有值
void assign(Iter First, Iter Last);		  //以相同顺序复制[first,last)范围内的元素
void assign(initializer_list<_Ty> Ilist);	  //同时赋值多个元素

iter insert(iter _Where, const Ty& Val);	  //指定位置插入元素
iter insert(iter _Where, Ty&& Val);	  		  //指定位置插入元素	
iter insert(iter _Where, const size_t Count, const Ty& val);//指定位置插入，并且可以指定插入数量
iter insert(iter _Where, Iter First, Iter Last);//指定位置插入[first,last)之间的元素
iter insert(iter _Where, initializer_list<_Ty> Ilist);
```

- [x] `list`删除元素

```cpp
iterator erase(iter pos);						//删除pos指向的元素		
iterator erase(iter first,iterator last);		//删除[first,last)范围内的字符

void pop_front();
void pop_back();

void clear();
```

<u>当使用一个容器的</u>`<u>insert</u>`<u>或者</u>`<u>erase</u>`<u>函数通过迭代器插入或删除元素"可能"会导致迭代器失效，因此我们为了避免危险，应该获取</u>`<u>insert</u>`<u>或者</u>`<u>erase</u>`<u>返回的迭代器，以便用重新获取的新的有效的迭代器进行正确的操作</u>

```cpp
lis<int> ls;
for (int i = 0; i < 10; i++)
{
    ls.push_back(i);
}
list<int>::iter it;
for (it = ls.begin(); it != ls.end(); )
{
    if (*it == 5)
    {
        it=ls.erase(it);
    }
    else
    {
        it++;
    }
    cout << *it << " ";
}
```

- [x] `list`的其他操作

```cpp
//list拼接，x中的元素会被直接转移到当前list中，不会涉及元素的构造
void splice (Iter where, list& x);		//把x插入到where位置,x会被清空
void splice (Iter where, list& x, Iter first);//把x的first位置的元素，插入到list的where位置
void splice (Iter where, list& x,Iter first, Iter last);//把x的[first,last)位置的元素，插入到list的where位置

void remove(const Ty& val);	//删除所有等于val的元素。这将调用这些对象的析构函数，并通过删除元素的数量来减少容器的大小。erase按元素的位置(使用迭代器)删除元素
template<typename Predicate>
void remove_if(Predicate pred);	//从容器中删除所有谓词pred返回true的元素。
void unique();	//从容器中每个相等元素的连续组中除去除第一个元素外的所有元素。
template <class Predicate>
void unique(Predicate _Pred);//以确定元素“唯一性”的特定比较函数作为参数。实际上，可以实现任何行为（并且不仅可以进行相等比较），从第二个开始）并删除如果谓词返回true，则从列表中返回i。
list<Stu> ls;
for (size_t i = 0; i < 10; i++)
{
    ls.push_back(Stu(rand()%5));
}
ls.unique([](const Stu& left, const Stu& right) 
          {//如果left大于right 那么把right删掉
              return left > right; 
          });

void merge(list& right);	//合并两个链表，如果两个链表都有序，合并之后同样也是有序的，否则合并失败，程序中断
void sort();				//对list元素进行排序，默认是升序
void sort(Predicate _Pred);	//可以自己修改排序规则
void reverse();				//反转list
```

通过`remove`删除元素时，自定义类型需要重载`==`运算符，而且需要加上`const`修饰

```cpp
//需要用const修饰this指针，否则如下代码所示，会有报错
bool operator==(const Stu& right) const
{
    return (this->_id == right._id);
}
// error C2678: 二进制“==”: 没有找到接受“const Stu”类型的左操作数的运算符(或没有可接受的转换)
//这是由于，test函数的两个参数都是const对象，如果不把this修饰为const，那么operator==函数，将不能把this转为const this
bool test(const Stu& val, const Stu& val2) 
{
    return val2 == val; 
}
```

### `forward_list`
`forward_list`提供了单向链表的实现。`forward_list`与`list`容器不同，它只允许向前遍历元素，不支持双向遍历。这使得`forward_list`在某些情况下比`list`更轻量级，因为它不需要维护双向链接。

以下是`forward_list`的一些主要特性：

+ **单向遍历**：`forward_list`中的元素只能从前向后遍历，不支持反向遍历。
+ **插入和删除操作**：由于`forward_list`是单链表，所以它在插入和删除元素时不需要移动大量元素，这使得这些操作的效率较高。
+ **空间效率**：`forward_list`比`list`更节省空间，因为它不需要为每个元素存储两个指针（前驱和后继）。
+ **元素访问**：由于只能单向遍历，`forward_list`不支持随机访问，即不能直接通过索引访问元素。
+ **构造和初始化**：`forward_list`可以通过多种方式构造，包括默认构造、复制构造、移动构造以及初始化列表构造。
+ **成员函数**：`forward_list`提供了一系列的成员函数，包括但不限于`push_front`、`pop_front`、`insert_after`、`erase_after`等。
+ **迭代器**：`forward_list`提供了两种类型的迭代器：`iterator`和`const_iterator`，用于遍历元素。
+ **空间优化**：`forward_list`的迭代器和节点结构设计使得它在存储空间上更为优化。
+ **用途**：由于`forward_list`的单向特性和高效的插入删除操作，它适用于那些需要频繁插入和删除元素的场景，尤其是在元素数量不是非常大的情况下。
- [x] `forward_list`构造函数

```cpp
forward_list();
forward_list(size_t count);
forward_list(size_t count,const Ty& val);
forward_list(const list& right);
forward_list(list&& right);
forward_list(Iter first,Iter last);
```

- [x] `forward_list`迭代器

```cpp
Iter before_begin();		//返回第一个元素的前一个位置，禁止解引用
```

- [x] `forward_list`元素访问

```cpp
Ty& front();
```

- [x] `forward_list`容量相关

```cpp
bool empty();
size_t max_size();
```

- [x] `forward_list`添加元素

```cpp
void push_front(Ty& val);
void emplace_front(Args&&... args);
Iter emplace_after(Iter where,Args&&...args);	//在where的下一个位置处插入新元素

void assign(const size_t size, const Ty& val);//设置新的大小，并用val设置所有值
void assign(Iter First, Iter Last);		  //以相同顺序复制[first,last)范围内的元素
void assign(initializer_list<_Ty> Ilist);	  //同时赋值多个元素

iter insert_after(iter _Where, const Ty& Val);	  //where下一个位置插入元素
iter insert_after(iter _Where, const size_t Count, const Ty& val);//where下一个位置插入，并且可以指定插入数量
iter insert_after(iter _Where, Iter First, Iter Last);//where下一个位置插入[first,last)之间的元素
iter insert_after(iter _Where, initializer_list<_Ty> Ilist);
```

- [x] `forward_list`删除元素

```cpp
iterator erase_after(iter where);		//删除where下一个位置的元素
iterator erase_after(iter first,iterator last);		//删除(first,last)范围内的字符

void pop_front();				//删除头部元素

void clear();					//清空链表
```

- [x] `forward_list`的其他操作

```cpp
//list拼接，x中的元素会被直接转移到当前list中，不会涉及元素的构造
void splice (Iter where, list& x);		//把x插入到where下一个位置
void splice (Iter where, list& x, Iter first);//把x的first的下一个位置的元素，插入到list的where下一个位置
void splice (Iter where, list& x,Iter first, Iter last);//把x的(first,last)位置的元素，插入到list的where位置

void remove(const Ty& val);	//删除所有等于val的元素。
template<typename Predicate>
void remove_if(Predicate pred);	//从容器中删除所有谓词pred返回true的元素。
void unique();	//从容器中每个相等元素的连续组中除去除第一个元素外的所有元素。
template <class Predicate>
void unique(Predicate _Pred);//以确定元素“唯一性”的特定比较函数作为参数。实际上，可以实现任何行为（并且不仅可以进行相等比较），从第二个开始）并删除如果谓词返回true，则从列表中返回i。


void merge(list& right);	//合并两个链表，如果两个链表都有序，合并之后同样也是有序的，否则合并失败，程序中断
void sort();				//对list元素进行排序，默认是升序
void sort(Predicate _Pred);	//可以自己修改排序规则
void reverse();				//反转list
```

## 容器适配器
容器适配器都不支持迭代器

### `stack`
- [x] `Stack`概念

`stack`是一种容器适配器，专门设计用于在`LIFO`上下文（后进先出）中操作，在`LIFO`上下文中，仅从容器的一端插入和提取元素。`stack`作为容器适配器实现，它们是使用特定容器类的封装对象作为其基础容器的类，提供了一组特定的成员函数来访问其元素。元素从特定容器的尾部被推入`/`弹出，这被称为堆栈的顶部。

容器应支持以下操作：

    - `empty`
    - `size`
    
    - `back`
    - `push_back`
    - `pop_back`

标准容器类`vector,deque`和`list`满足这些要求。默认情况下，使用标准容器`deque`来作为底层容器。

- [x] `stack`对象的默认构造

```cpp
stack() = default;
explicit stack (const container_type& _Cont);
explicit stack (container_type&& ctnr = container_type());

stack<int> s = { 1,2,3,4,5 };	//error 不能直接初始化
//如下，可以使用stack底层容器进行初始化
deque<int> dq = { 1,2,3,4,5 };
stack<int> s(dq);
```

- [x] `stack`其他

```cpp
Ty& top();						//获取顶部元素
void pop();						//删除顶部元素
void push(const Ty& val);		//入栈
void swap(stack& sk);			//交换两个stack
size_t size();					//获取元素个数
bool empty();					//判空

template <class... _Valty>
void emplace(_Valty&&... _Val);	//就地构造，提升效率
```

### `queue`
- [x] `queue`概念

`FIFO`队列，`queue`是一种容器适配器，专门设计用于在`FIFO`上下文中（先进先出）进行操作，在`FIFO`上下文中，将元素插入到容器的一端，并从另一端提取元素。`queue`被实现为容器适配器，它们是使用特定容器类的封装对象作为其基础容器的类，提供了一组特定的成员函数来访问其元素。元素被推入特定容器的“后部”_，_并从其“前部”弹出。基础容器可以是标准容器类模板之一，也可以是其他一些专门设计的容器类。此基础容器应至少支持以下操作：

+ `empty`
+ `size`
+ `front`

+ `back`
+ `push_back`
+ `pop_front`

标准容器类`deque`和`list`满足这些要求。默认情况下，如果未为特定容器指定容器类队列，类实例化，默认用标准容器 `deque`。

- [x] `queue`对象的默认构造

```cpp
queue() = default;
explicit queue(const _Container& _Cont);
explicit queue(_Container&& _Cont);
```

- [x] `queue`其他

```cpp
Ty& back();						//获取头部元素
Ty& front();					//获取尾部元素
void pop();						//删除头部元素
void push(const Ty& val);		//入队(从尾部)
void swap(stack& sk);			//交换两个queue
size_t size();					//获取元素个数
bool empty();					//判空

template <class... _Valty>
void emplace(_Valty&&... _Val);	//就地构造，提升效率
```

### `priority_queue`
- [x] `priority_que`概念

`priority_que`(优先级队列)是一种容器适配器，经过专门设计，以使其按照某些严格的弱排序`（strict weak ordering）`标准，<u>其第一个元素始终是其中包含的最大元素</u>。

:::color3
严格是说在判断的时候会用`"<"`，而不是`"<=`"，弱排序是因为，一旦`"<"`成立便认为存在`"<"`关系，返回`ture`，而忽略了`"="`关系和`">"`区别，把它们归结为`false`。

:::

此上下文类似于堆，可以在任何时候插入元素，并且只能检索_最大堆_元素（优先级队列顶部的元素）。优先级队列被实现为容器适配器，它们是使用特定容器类的封装对象作为其基础容器的类，提供了一组特定的成员函数来访问其元素。元素被弹出从特定容器的“后退”_，_称为优先级队列的顶部。基础容器可以是任何标准容器类模板或某些其他专门设计的容器类。该容器应可通过随机访问迭代器访问并支持以下操作：

+ `empty()`
+ `size()`
+ `front()`

+ `push_back()`
+ `pop_back()`

标准容器类 `vector`和 `deque`满足这些要求。默认情况下，如果未为特定容器指定容器类，`priority_queue` 类实例化，默认使用`vector`作为底层容器。

需要支持随机访问迭代器，以始终在内部保持堆结构。容器适配器通过自动调用算法函数`(make_heap， push_heap，pop_heap )`维持堆结构。

- [x] `priority_que`构造函数

```cpp
priority_queue() = default;
explicit priority_queue(const _Pr& _Pred);

priority_queue (const _Pr& Pred, const Container& Cont);

priority_queue(_InIt _First, _InIt _Last, const _Pr& _Pred, const _Container& _Cont);
    
priority_queue(_InIt _First, _InIt _Last);
    
priority_queue(_InIt _First, _InIt _Last, const _Pr& _Pred);
```

- [x] `priority_que`其他

```cpp
Ty& top();
void pop();
void push(Ty& val);
void swap();
size_t size();
bool empty();

template <class... _Valty>
    void emplace(_Valty&&... _Val)
```

## 关联式容器
### `set/multiset`容器
- [x] **<u>简介</u>**

`set`是一个集合容器，其中所包含的元素是<u>唯一</u>的，集合中的元素按一定的顺序排列。元素插入过程是按排序<u>规则插入</u>，所以不能指定插入位置。`set`采用红黑树变体的数据结构实现，红黑树属于平衡二叉树。在插入操作和删除操作上比`vector`快。

`multiset`与`set`的区别：`set`支持唯一键值，每个元素值只能出现一次；而`multiset`中同一值可以出现多次。不可以直接修改`set`或`multiset`容器中的元素值，因为该类容器是自动排序的。<u>如果希望修改一个元素值，必须先删除原有的元素，再插入新的元素。</u>

- [x] **<u>对象的默认构造</u>**

```cpp
set();
set(const set& _Right);
explicit set(const key_compare& _Pred);
set(_Iter _First, _Iter _Last);
set(_Iter _First, _Iter _Last, const key_compare& _Pred);
```

- [x] **<u>存取</u>**

```cpp
pair<iterator, bool> insert(const value_type& _Val);
iterator insert(const value_type& _Val);
void insert(_Iter _First, _Iter _Last);
void insert(initializer_list<value_type> _Ilist);

iterator  erase (const_iterator where);		//返回下一个元素的位置
size_type erase (const value_type& val);	//返回删除元素的个数，对于set来说，永远是1(set的值不能重复)
iterator  erase (const_iterator first, const_iterator last);	//区间删除

void swap(const &right);	//交换set
void clear();				//清空所有元素
template <class... _Valtys>
    pair<iterator, bool> emplace(_Valtys&&... _Vals);

//提示从whrere开始找，不是插入到where的位置，如果vals满足排在where指向的值的后面，那么将提高速度，否则无影响
template <class... _Valtys>
    iterator emplace_hint(const_iterator _Where, _Valtys&&... _Vals)
```

- [x] **<u>容量相关</u>**

```cpp
bool empty();
size_t size();
size_t max_size();
```

- [x] **<u>获取比较规则</u>**

```cpp
//两个返回的都是一样的
key_compare key_comp（）const;
value_compare value_comp（）const;
```

- [x] **<u>操作</u>**

```cpp
iterator find(const key_type& _Keyval);//在容器中搜索与val等效的元素，如果找到则返回一个迭代器，否则返回end迭代器。
size_t count(const key_type& _Keyval);	//在容器中搜索与val等效的元素，并返回匹配数。

//与排序规则有关
iterator lower_bound(const key_type& _Keyval);//找到第一个大于或者等于keyval的值
iterator upper_bound(const key_type& _Keyval);//找到第一个大于keyval的值
//上面两个函数的综合
pair<iterator, iterator> equal_range(const key_type& _Keyval)
```

### `map\multimap`容器
- [x] **<u>简介</u>**

`map`(映射)是关联容器，用于存储按特定顺序由键值和映射值的组合形成的元素，即`(key,value)`对。它提供基于`key`的快速检索能力。`map`中`key`值是唯一的。集合中的元素按一定的顺序排列。元素插入过程是按排序规则插入，所以不能指定插入位置。`map`的具体实现采用红黑树变体的平衡二叉树的数据结构。在插入操作和删除操作上比`vector`快。`map`可以直接存取`key`所对应的`value`，支持`[]`操作符，如`map[key]=value`。

`multimap`与`map`的区别：`map` 支持唯一键值，每个`key`只能出现一次；而`multiset`中同一`key`可以出现多次。`map`支持`[]`操作符，但是`multmap`不支持

- [x] **<u>构造函数</u>**

```cpp
map();
map(const map& _Right);
map(const key_compare& _Pred);
map(_Iter _First, _Iter _Last);
map(_Iter _First, _Iter _Last, const key_compare& _Pred);
```

- [x] **<u>容量</u>**

```cpp
bool empty();
size_t size();
size_t max_size();
```

- [x] **<u>元素访问</u>**

```cpp
mapped_type& operator[](key_type&& keyval);	//根据key获取value
mapped_type& at(const key_type& _Keyval);	
```

- [x] **<u>修改</u>**
+ `insert`

`insert`插入的是由键值对组成的`pair<key_type,mapped_type>`，可称为对组；`key_type`，键类型；`mapped_type`，值类型；`value_type`，`map`装的元素内存，即`pair<key_type,mapped_type>`

```cpp
pair<iterator,bool> insert (const value_type& val);
pair<iterator,bool> insert (value_type&& val);
```

假设  `map<int, string> stu;`

        * 通过`pair`的方式插入对象

```cpp
stu.insert(pair<int, string>(1, "maye"));
```

        * 通过`make_pair`的方式插入对象

```cpp
stu.insert(make_pair(2, "zoey"));
```

        * 通过`value_type`的方式插入对象

```cpp
stu.insert(map<int, string>::value_type(3, "lisa"));
```

        * 通过数组的方式插入值

```cpp
stu[3]= "取个名字好难";
stu[4] = "有人@我";
```

前三种方法，采用的是`insert()`方法，该方法**返回值为**`**pair<iter,bool>** `**，**`iterator` 指向插入的`pair`，`bool`标识是否插入成功

第四种方法非常直观，但存在一个性能的问题。按`key(3)`插入元素时，若`map`中没有`key(3)`,则键值对插入`map`，若`key(3)`已经存在，则修改`key(3)`对于的值。

```cpp
string strName = stu[2];  //获取key对于的值
```

只有当`stu`存在`2`这个键时才是正确的取操作，否则会自动插入一个实例，键为`2`，值为初始化值。

+ `earse`

```cpp
//删除key为keyval的元素，返回删除成功的数量
size_t erase(const key_type& _Keyval);		
//删除[first,last)区间元素，返回last
iterator erase(const_iterator _First, const_iterator _Last);
//删除where指向的元素，返回下一个元素迭代器
iterator erase(const_iterator _Where);
```

+ `clear`

```cpp
void clear();	//清空map
```

+ `emplace`

```cpp
//就地构造，传
template <class... Args>
  pair<iterator,bool> emplace (Args&&... args);
template <class... Args>
  iterator emplace_hint (const_iterator position, Args&&... args);
//stu.emplace(12, "duck");	//key,mapped
```

- [x] **<u>操作</u>**

```cpp
//查找键key是否存在，若存在，返回该键的元素的迭代器；若不存在，返回map.end();
iterator find(const key_type& _Keyval);

//返回容器中key为keyval的pair个数，对于map要么是0，要么是1。对multimap来说，值可能大于1。
size_type count(const key_type& _Keyval);

iterator lower_bound(const key_type& _Keyval);
iterator upper_bound(const key_type& _Keyval);
//返回
pair<iterator, iterator> equal_range(const key_type& _Keyval);

```

## 无序关联式容器
### `unordered_set`
`unordered_set`无序集合容器，是以无特定顺序存储唯一元素的容器，并且允许根据它们的值快速检索单个元素。在`unordered_set`中，元素的值同时是它的`key`，它唯一地标识它。键是不可变的，因此，`unordered_set`中的元素不能在容器中修改， 但是可以插入和删除它们。在内部，`unordered_set`中的元素不是按任何特定顺序排序的，而是根据它们的哈希值组织成桶，以允许直接通过它们的值快速访问单个元素（平均具有恒定的平均时间复杂度）。`<u>Unordered_set</u>`<u>容器通过键访问单个元素的速度比</u>`<u>set</u>`<u>容器快。</u>

### `unordered_multiset`
### `unorder_map`
### `unordered_multimap`
## `STL`容器共性机制
`STL`容器所提供的都是值`（value）`寓意，而非引用`（reference）`寓意，也就是说当我们给容器中插入元素的时候，容器内部实施了拷贝动作，将我们要插入的元素再另行拷贝一份放入到容器中，而不是将原数据元素直接放进容器中，<u>也就是说我们提供的元素必须能够被拷贝</u>。

+ 除了`queue`和`stack`之外，每个容器都提供可返回迭代器的函数，运用返回的迭代器就可以访问元素。
+ 通过`STL`不会抛出异常，需要使用者传入正确参数。
+ 每个容器都提供一个默认的构造函数和默认的拷贝构造函数。
+ 大小相关的构造方法：

|  | vector | deque | list | set | multiset | map | multimap |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 内存结构 | 单端数组 | 双端数组 | 双向链表 | 二叉树 | 二叉树 | 二叉树 | 二叉树 |
| 可随机存取 | 是 | 是 | 否 | 否 | 否 | 对`key`而言：是 | 否 |
| 元素查找速度 | 慢 | 慢 | 非常慢 | 快 | 快 | 对`key`而言：快 | 对`key`而言：快 |
| 元素添加移除 | 尾端 | 头尾两端 | 任何位置 | - | - | - | - |


        * （1）`size()`返回容器中元素的个数；
        * （2）`empty()`判断容器是否为空。

:::color3
- [x] **<u>各容器使用场景</u>**

**在实际使用过程中，到底选择这几种容器中的哪一个，应该根据遵循以下原则：**

1. 如果需要高效的随机存取，不在乎插入和删除的效率，使用`vector`；
2. 如果需要大量的插入和删除元素，不关心随机存取的效率，使用`list`；
3. 如果需要随机存取，并且关心两端数据的插入和删除效率，使用`deque`；
4. 如果打算存储数据字典，并且要求方便地根据`key`找到`value`，一对一的情况使用`map`，一对多的情况使用`multimap`；
5. 如果打算查找一个元素是否存在于某集合中，唯一存在的情况使用`set`，不唯一存在的情况使用`multiset`。
6. 如果要求很快的查找速度，根据情况选择使用`unordered_map`或`unordered_set`。

:::



