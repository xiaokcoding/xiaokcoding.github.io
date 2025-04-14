---
title: STL算法
createTime: 2025/04/06 16:52:26
permalink: /Cpp/zu6kz8je/
---
## `<algorithm>`
头文件定义了一个专门设计用于元素范围的函数集合。范围是可以通过迭代器或指针访问的任何对象序列，例如数组或某些`STL`容器的实例。但是请注意，算法通过迭代器直接对值进行操作，不会以任何方式影响任何可能的容器的结构(<u>它永远不会影响容器的大小或存储分配</u>)。

### 非质变算法(17个)
**<u>非质变算法：算法不会改变容器的数据。</u>**

- [x] [**all_of**](https://cplusplus.com/reference/algorithm/all_of/)

测试范围内所有元素的状态

```cpp
void test()
{
    vector<int>  vec = { 1,3,5,7,9 };
    if (all_of(vec.begin(), vec.end(), [](int n)->bool {return n % 2; }))
    {
        cout << "所有元素都是奇数" << endl;
    }	
}
```

- [x] [**any_of**](https://cplusplus.com/reference/algorithm/any_of/)

测试范围内的任何元素是否满足条件

```cpp
void test()
{
    vector<int>  vec = { 1,3,-5,7,9 };
    if (any_of(vec.begin(), vec.end(), [](int n)->bool {return n<0; }))
    {
        cout << "范围内有负数" << endl;
    }	
}
```

- [x] [**none_of**](https://cplusplus.com/reference/algorithm/none_of/)

测试是否没有元素满足条件

```cpp
void test()
{
    vector<int>  vec = { 1,3,5,7,9 };
    if (none_of(vec.begin(), vec.end(), [](int n)->bool {return n<0; }))
    {
        cout << "范围内没有小于0的数" << endl;
    }	
}
```

- [x] [**for_each**](https://cplusplus.com/reference/algorithm/for_each/)

将函数应用到范围

```cpp
void test()
{
    vector<int>  vec = { 1,3,5,7,9 };
    for_each(vec.begin(), vec.end(), [](int n) {cout << n << " "; });
    
}
```

- [x] [**find**](https://cplusplus.com/reference/algorithm/find/)

在范围内找到值

```cpp
void test()
{
    vector<int>  vec = { 1,3,5,7,9 };
    auto it = find(vec.begin(), vec.end(), 5);
    if (it != vec.end())
    {
        cout << "found it:" << *it << endl;
    }
    else
    {
        cout << "not found" << endl;
    }
}
```

- [x] [**find_if**](https://cplusplus.com/reference/algorithm/find_if/)

查找范围内的元素

```cpp
void test()
{
    vector<int>  vec = { 1,3,5,7,9 };
    //查找第一个大于2的元素
    auto it = find_if(vec.begin(), vec.end(), [](int n) {return n > 2; });
    if (it != vec.end())
    {
        cout << "found it:" << *it << endl;
    }
    else
    {
        cout << "not found" << endl;
    }
}
```

- [x] [**find_if_not**](https://cplusplus.com/reference/algorithm/find_if_not/)

查找范围内的元素，not表示否定，上面的例子，使用find_if_not就表示查找不大于2的元素(小于或等于2的元素)

```cpp
void test()
{
    vector<int>  vec = { 1,3,5,7,9 };
    auto it = find_if_not(vec.begin(), vec.end(), [](int n) {return n > 2; });
    if (it != vec.end())
    {
        cout << "found it:" << *it << endl;
    }
    else
    {
        cout << "not found" << endl;
    }
}
```

- [x] [**find_end**](https://cplusplus.com/reference/algorithm/find_end/)

```cpp
template <class _FwdIt1, class _FwdIt2
_FwdIt1 find_end(_FwdIt1 const _First1, const _FwdIt1 _Last1, const _FwdIt2 _First2, const _FwdIt2 _Last2)
```

在[first1,last1)范围内搜索由[first2,last2)定义的序列的最后一次出现，并返回指向其第一个元素的迭代器，如果没有出现，则返回指向last1的迭代器。

两个范围中的元素都使用操作符==(或在版本(2)中使用pred)进行顺序比较:只有当[first2,last2)的所有元素都为真时，才认为[first1,last1)的子序列是匹配的

```cpp
void test()
{
    vector<int>  vec = { 1,2,3,4,5,1,2,3,4,5 };
    int sub1[] = { 1,2,3 };

    // 使用默认的比较:
    auto it = std::find_end(vec.begin(), vec.end(), sub1, sub1 + 3);

    if (it != vec.end())
        std::cout << "sub1 最后发现的位置 " << (it - vec.begin()) << '\n';

    int sub2[] = { 1,2 };

    // 使用谓词的比较:查找vec中最比[1,2]大的序列的最后一次出现的位置
    it = std::find_end(vec.begin(), vec.end(), sub2, sub2 + 2,
        [](int a, int b) {return a > b; });

    if (it != vec.end())
        std::cout << "sub2 最后发现的位置 " << (it - vec.begin()) << '\n';
}
```

- [x] [**find_first_of**](https://cplusplus.com/reference/algorithm/find_first_of/)

```cpp
template <class _FwdIt1, class _FwdIt2>
_FwdIt1 find_first_of(const _FwdIt1 _First1, const _FwdIt1 _Last1, const _FwdIt2 _First2,
    const _FwdIt2 _Last2)
```

返回一个迭代器，指向范围[first1,last1)中与[first2,last2)中的任何元素匹配的第一个元素。如果没有找到这样的元素，函数返回last1。

[first1,last1)中的元素使用操作符==(或在版本(2)中使用pred)与[first2,last2)中的每个值进行顺序比较，直到匹配为止。

```cpp
void test()
{
    int arr[] = { 1,3,1,4,5,2,0 };
    int sub[] = { 5,3 };
    auto it = find_first_of(arr, arr + 7,sub,sub+2);
    if (it != arr + 7)
    {
        cout << "在arr中找到与sub中匹配的元素" <<*it<< endl;
    }
    else
    {
        cout << "not found" << endl;
    }
}
```

- [x] [**adjacent_find**](https://cplusplus.com/reference/algorithm/adjacent_find/)

求范围内相等的相邻元素，在[first,last]范围内搜索匹配的两个连续元素的第一次出现，并返回指向这两个元素中的第一个的迭代器，如果没有找到这样的对，则返回指向最后一个的迭代器。

```cpp
void test()
{
    int arr[] = { 1,3,3,4,5,2,0,6,6 };
    vector<int> vec(arr, arr + 9);
    auto it = adjacent_find(vec.begin(), vec.end());
    if (it != vec.end())
        cout << "第一对重复的元素是:" << *it << endl;

    it = adjacent_find(it + 1, vec.end(), [](int a, int b) {return a == b; });
    if (it != vec.end())
        cout << "第二对重复的元素是:" << *it << endl;
}
```

- [x] [**count**](https://cplusplus.com/reference/algorithm/count/)

在范围内计算值的出现次数

```cpp
void test()
{
    int arr[] = { 1,3,3,4,5,2,0,6,6 };
    vector<int> vec(arr, arr + 9);
    long long cnt = count(vec.begin(), vec.end(), 3);
    cout << "3出现次数:" << cnt << endl;
```

- [x] [**count_if**](https://cplusplus.com/reference/algorithm/count_if/)

返回满足范围条件的元素个数

```cpp
void test()
{
    int arr[] = { 1,3,3,4,5,2,0,6,6 };
    vector<int> vec(arr, arr + 9);
    long long 	//统计大于4的元素个数
    cnt = count_if(vec.begin(), vec.end(), [](int n) {return n > 4; });
    cout << "大于4的元素个数:" << cnt << endl;
}
```

- [x] [**mismatch**](https://cplusplus.com/reference/algorithm/mismatch/)

返回满足范围条件的元素个数，比较范围[first1,last1]中的元素与从first2开始的范围中的元素，并返回两个序列中第一个不匹配的元素。

```cpp
void test()
{
    vector<int> vec;
    for (int i = 1; i < 6; i++)
    {
        vec.push_back(i * 10);	//10 20 30 40 50 
    }

    int nums[] = { 10,20,30,70,88 };
    auto mpair = mismatch(vec.begin(), vec.end(), nums);
    if (mpair.first != vec.end())
    {
        cout << "第一个不匹配的元素:" << *mpair.first << " and " << *mpair.second << endl;
    }

    mpair = mismatch(vec.begin(), vec.end(), nums, [](int a, int b) {return a == b; });
    if (mpair.first != vec.end())
    {
        cout << "第一个不匹配的元素:" << *mpair.first << " and " << *mpair.second << endl;
    }
}
```

- [x] [**equal**](https://cplusplus.com/reference/algorithm/equal/)

测试两个范围内的元素是否相等，比较元素个数为两个序列中最短的那个序列的元素个数。

```cpp
void test()
{
    vector<int> vec = { 1,2,3,4,5 };
    vector<int> vec2 = vec;
    if (equal(vec.begin(), vec.end(), vec2.begin()))
    {
        cout << "两个序列的内容相等" << endl;
    }
    else
    {
        cout << "两个序列的内容不相等" << endl;
    }

    vec2.push_back(6);
    vec2.push_back(7);
    //vec：1 2 3 4 5
    //vec2:1 2 3 4 5 6 7
    if (equal(vec.begin(),vec.end(),vec2.begin(),vec2.begin()+vec.size()))
    {
        cout << "两个序列的内容相等" << endl;
    }
    else
    {
        cout << "两个序列的内容不相等" << endl;
    }

    //使用谓词:
    if (equal(vec.begin(), vec.end(), vec2.begin(),
        [](int a, int b)
        {
            return a == b;
        }))
    {
        cout << "两个序列的内容相等" << endl;
    }
    else
    {
        cout << "两个序列的内容不相等" << endl;
    }
}
```

- [x] [**equal_range**](#)

功能类似equal，返回一对iterator，第一个表示lower_bound，第二个表示upper_bound。

```cpp
void test()
{
    vector<int> vec = { 10,20,30,30,20,10,10,20 };

    //必须先排序:因为equal_range使用了二分查找
    sort(vec.begin(), vec.end());
    auto mpair = equal_range(vec.begin(), vec.end(), 20);
    cout << *mpair.first << " " << *mpair.second << endl;
}
```

- [x] [**is_permutation**](https://cplusplus.com/reference/algorithm/is_permutation/)

比较范围[first1,last1)中的元素与从first2开始的范围中的元素，如果两个范围中的所有元素都匹配，则返回true，即使顺序不同。

```cpp
void test()
{
    vector<int> vec = { 1,2,3,4,5 };
    vector<int> vec1 = { 5,4,3,2,1 };
    if (is_permutation(vec.begin(), vec.end(), vec1.begin()))
    {
        cout << "vec vec1两个是排列不同的相同序列" << endl;
    }
}
```

- [x] [**search**](https://cplusplus.com/reference/algorithm/search/)

在[first1,last1)范围内搜索由[first2,last2)定义的序列的第一次出现，并返回指向其第一个元素的迭代器，如果没有找到第一次出现的元素，则返回指向last1的迭代器。

```cpp
void test()
{
    vector<int> vec = { 1,2,88,3,4,5,9,7 };

    int ints[] = {4,5};
    auto it =  search(vec.begin(), vec.end(), ints, ints + 2);
    if (it != vec.end())
    {
        cout << "ints fount at pos:" << it - vec.begin() << endl;
    }
}
```

- [x] [**search_n**](https://cplusplus.com/reference/algorithm/search_n/)

搜索范围[first,last)中元素的值为val的数量是否为count，每个元素的比较值都等于val(或pred返回true)。

该函数返回指向第一个此类元素的迭代器，如果没有找到此类序列则返回指向最后一个元素的迭代器。

```cpp
void test()
{
    vector<int> vec = { 10,20,30,30,20,10,10,20 };
    auto it = search_n(vec.begin(), vec.end(), 2, 30);
    if (it != vec.end())
    {
        cout << "找到了两个30 第一次出现在位置:" << it - vec.begin() << endl;
    }
    else
    {
        cout << "match not found" << endl;
    }
}
```

### 质变算法(30个)
质变算法：算法会改变容器的数据

- [x] [**copy**](https://cplusplus.com/reference/algorithm/copy/)

将范围[first,last)中的元素复制到Dest开始的范围中。

该函数返回一个指向目标范围末端的迭代器(该迭代器指向复制的最后一个元素后面的元素)。

范围不能重叠，result不能指向范围内的元素(第一个，最后一个)。对于这种情况，请参阅copy_backward。

```cpp
void test()
{
    vector<int> vec(5);
    int nums[] = {1,2,3,4,5};
    //要确保vec空间足够，可以使用vec.resize(n)来调整vec的大小
    copy(nums,nums+5,vec.begin());
}
```

- [x] [**copy_n**](https://cplusplus.com/reference/algorithm/copy_n/)

将first开始的范围中的前n个元素复制到result开始的范围中。

该函数返回一个指向目标范围末端的迭代器(指向复制的最后一个元素的下一个位置)。

如果n是负的，函数什么都不做。

如果范围重叠，则result所指向的范围中的某些元素可能具有未定义但有效的值。

```cpp
void test()
{
    vector<int> vec(5);
    int nums[] = {1,2,3,4,5};
    //要确保vec空间足够，可以使用vec.resize(n)来调整vec的大小
    copy(nums,nums+5,vec.begin());

    vec.clear();
    vec.resize(3);	//目标容器的大小必须和拷贝的数量一致
    copy_n(nums, 3, vec.begin());
}
```

- [x] [**copy_if**](https://cplusplus.com/reference/algorithm/copy_if/)

拷贝范围内的某些元素

```cpp
void test()
{
    vector<int> vec(5);
    int nums[] = {1,2,3,4,5};

    copy_if(nums, nums + 5, vec.begin(), [](int n)
        {
            return n > 3;
        });
}
```

- [x] [**copy_backward**](https://cplusplus.com/reference/algorithm/copy_backward/)

向后复制范围内额元素(从右往左)

将范围[first,last]中的元素从end开始复制到以result结束的范围。

该函数返回指向目标范围内第一个元素的迭代器。

结果范围的元素顺序与[first,last)完全相同。要反转它们的顺序，请参阅reverse_copy。

```cpp
void test()
{
    vector<int> vec(5);
    int nums[] = {1,2,3,4,5};

    copy_backward(nums, nums + 5, vec.end());
}
```

- [x] [**move**](https://cplusplus.com/reference/algorithm/move/)

将范围[first，last)中的元素移动到从结果开始的范围中。`即实现了移动语义，如果容器里面存的对象有指针，则会移动，普通数据类型和copy一样`

```cpp
void test()
{
    vector<string> names = { "顽石","hello","world" };
    vector<string> foo(3);

    cout << "names contains " << endl;
    for (auto& str : names)cout <<"[" << str << "] ";
    cout << endl;
    cout << "foo contains " << endl;
    for (auto& str : foo)cout << "[" << str << "] ";
    cout <<"\n\n" << endl;

    cout << "Moving ranges..." << endl;
    move(names.begin(), names.end(), foo.begin());
    cout << "names contains " << endl;
    for (auto& str : names)cout << "[" << str << "] ";
    cout << endl;
    cout << "foo contains " << endl;
    for (auto& str : foo)cout << "[" << str << "] ";
    cout << endl;

    cout << "Moving Container" << endl;
    names = std::move(foo);

}
```

- [x] [**move_backward**](https://cplusplus.com/reference/algorithm/move_backward/)

向后移动范围内的元素

- [x] [**swap**](https://cplusplus.com/reference/algorithm/swap/)

交换两个对象的值

- [x] [**swap_ranges**](https://cplusplus.com/reference/algorithm/swap_ranges/)

交换两个范围的值

```cpp
void test()
{
    vector<string> names = { "顽石","hello","world" };
    vector<string> foo(3);
    swap(names, foo);
    swap_ranges(foo.begin(), foo.end()-1, names.begin());
}
```

- [x] [**iter_swap**](https://cplusplus.com/reference/algorithm/iter_swap/)

交换由两个迭代器指向的对象的值

+ [**transform**](https://cplusplus.com/reference/algorithm/transform/)变换范围
+ [**replace**](https://cplusplus.com/reference/algorithm/replace/)替换范围内的值
+ [**replace_if**](https://cplusplus.com/reference/algorithm/replace_if/)替换范围内的值
+ [**replace_copy**](https://cplusplus.com/reference/algorithm/replace_copy/)Copy range replacing value (function template)
+ [**replace_copy_if**](https://cplusplus.com/reference/algorithm/replace_copy_if/)Copy range replacing value (function template)
+ [**fill**](https://cplusplus.com/reference/algorithm/fill/)Fill range with value (function template)
+ [**fill_n**](https://cplusplus.com/reference/algorithm/fill_n/)Fill sequence with value (function template)
+ [**generate**](https://cplusplus.com/reference/algorithm/generate/)Generate values for range with function (function template)
+ [**generate_n**](https://cplusplus.com/reference/algorithm/generate_n/)Generate values for sequence with function (function template)
+ [**remove**](https://cplusplus.com/reference/algorithm/remove/)Remove value from range (function template)
+ [**remove_if**](https://cplusplus.com/reference/algorithm/remove_if/)Remove elements from range (function template)
+ [**remove_copy**](https://cplusplus.com/reference/algorithm/remove_copy/)Copy range removing value (function template)
+ [**remove_copy_if**](https://cplusplus.com/reference/algorithm/remove_copy_if/)Copy range removing values (function template)
+ [**unique**](https://cplusplus.com/reference/algorithm/unique/)Remove consecutive duplicates in range (function template)
+ [**unique_copy**](https://cplusplus.com/reference/algorithm/unique_copy/)Copy range removing duplicates (function template)
+ [**reverse**](https://cplusplus.com/reference/algorithm/reverse/)Reverse range (function template)
+ [**reverse_copy**](https://cplusplus.com/reference/algorithm/reverse_copy/)Copy range reversed (function template)
+ [**rotate**](https://cplusplus.com/reference/algorithm/rotate/)Rotate left the elements in range (function template)
+ [**rotate_copy**](https://cplusplus.com/reference/algorithm/rotate_copy/)Copy range rotated left (function template)
+ [**random_shuffle**](https://cplusplus.com/reference/algorithm/random_shuffle/)Randomly rearrange elements in range (function template)
+ [**shuffle**](https://cplusplus.com/reference/algorithm/shuffle/)Randomly rearrange elements in range using generator (function template)



STL中算法大致分为四类：     

1、非可变序列算法：指不直接修改其所操作的容器内容的算法。   

2、可变序列算法：指可以修改它们所操作的容器内容的算法。     

3、排序算法：包括对序列进行排序和合并的算法、搜索算法以及有序序列上的集合操作。     

4、数值算法：对容器内容进行数值计算。   以下对所有算法进行细致分类并标明功能： 

## 查找算法(13个)
> 判断容器中是否包含某个值
>

**adjacent_find:** 在iterator对标识元素范围内，查找一对相邻重复元素，找到则返回指向这对元素的第一个元素的ForwardIterator。否则返回last。重载版本使用输入的二元操作符代替相等的判断。

**binary_search:** 在有序序列中查找value，找到返回true。重载的版本实用指定的比较函数对象或函数指针来判断相等。 count:  利用等于操作符，把标志范围内的元素与输入值比较，返回相等元素个数。

**count_if:** 利用输入的操作符，对标志范围内的元素进行操作，返回结果为true的个数。

**equal_range:** 功能类似equal，返回一对iterator，第一个表示lower_bound，第二个表示upper_bound。

**find:**   利用底层元素的等于操作符，对指定范围内的元素与输入值进行比较。当匹配时，结束搜索，返回该元素的一个InputIterator。 

**find_end:** 在指定范围内查找"由输入的另外一对iterator标志的第二个序列"的最后一次出现。找到则返回最后一对的第一个ForwardIterator，否则返回输入的"另外一对"的第一个ForwardIterator。重载版本使用用户输入的操作符代替等于操作。

**find_first_of:** 在指定范围内查找"由输入的另外一对iterator标志的第二个序列"中任意一个元素的第一次出现。重载版本中使用了用户自定义操作符。

**find_if:**  使用输入的函数代替等于操作符执行find。 lower_bound:  返回一个ForwardIterator，指向在有序序列范围内的可以插入指定值而不破坏容器顺序的第一个位置。重载函数使用自定义比较操作。

**upper_bound:**  返回一个ForwardIterator，指向在有序序列范围内插入value而不破坏容器顺序的最后一个位置，该位置标志一个大于value的值。重载函数使用自定义比较操作。

**search:** 给出两个范围，返回一个ForwardIterator，查找成功指向第一个范围内第一次出现子序列(第二个范围)的位置，查找失败指向last1。重载版本使用自定义的比较操作。

**search_n:** 在指定范围内查找val出现n次的子序列。重载版本使用自定义的比较操作。

## 排序和通用算法(14个)
> 提供元素排序策略
>

**inplace_merge:**      合并两个有序序列，结果序列覆盖两端范围。重载版本使用输入的操作进行排序。

**merge:**          合并两个有序序列，存放到另一个序列。重载版本使用自定义的比较。

**nth_element:**       将范围内的序列重新排序，使所有小于第n个元素的元素都出现在它前面，而大于它的都出现在后面。重载版本使用自定义的比较操作。

**partial_sort:**      对序列做部分排序，被排序元素个数正好可以被放到范围内。重载版本使用自定义的比较操作。 

**partial_sort_copy:**    与partial_sort类似，不过将经过排序的序列复制到另一个容器。

**partition:**        对指定范围内元素重新排序，使用输入的函数，把结果为true的元素放在结果为false的元素之前。

 **random_shuffle:**      对指定范围内的元素随机调整次序。重载版本输入一个随机数产生操作。

**reverse:**         将指定范围内元素重新反序排序。

**reverse_copy:**      与reverse类似，不过将结果写入另一个容器。

**rotate:**         将指定范围内元素移到容器末尾，由middle指向的元素成为容器第一个元素。

**rotate_copy:**       与rotate类似，不过将结果写入另一个容器。

**sort:**          以升序重新排列指定范围内的元素。重载版本使用自定义的比较操作。

```cpp
//该函数专门用来对容器或普通数组中指定范围内的元素进行排序，排序规则默认以元素值的大小做升序排序，除此之外我们也可以选择标准库提供的其它排序规则（比如`std::greater<T>`降序排序规则），甚至还可以自定义排序规则。

//需要注意的是，sort() 函数受到底层实现方式的限制，它仅适用于普通数组和部分类型的容器。换句话说，只有普通数组和具备以下条件的容器，才能使用 sort() 函数：

//1. 容器支持的迭代器类型必须为随机访问迭代器。这意味着，sort() 只对 <font style="color:red">array、vector、deque</font> 这 3 个容器提供支持。

//2. 如果对容器中指定区域的元素做默认升序排序，则元素类型必须支持`<`小于运算符；同样，如果选用标准库提供的其它排序规则，元素类型也必须支持该规则底层实现所用的比较运算符；
```

**stable_sort:**       与sort类似，不过保留相等元素之间的顺序关系。

**stable_partition:**     与partition类似，不过不保证保留容器中的相对顺序。

## 删除和替换算法(15个)
**copy:**          复制序列

**copy_backward:**      与copy相同，不过元素是以相反顺序被拷贝。

**iter_swap:**        交换两个ForwardIterator的值。

**remove:**         删除指定范围内所有等于指定元素的元素。注意，该函数不是真正删除函数。内置函数不适合使用remove和remove_if函数。

**remove_copy:**       将所有不匹配元素复制到一个制定容器，返回OutputIterator指向被拷贝的末元素的下一个位置。 

**remove_if:**        删除指定范围内输入操作结果为true的所有元素。

**remove_copy_if:**      将所有不匹配元素拷贝到一个指定容器。

**replace:**         将指定范围内所有等于vold的元素都用vnew代替。

**replace_copy:**      与replace类似，不过将结果写入另一个容器。

**replace_if:**       将指定范围内所有操作结果为true的元素用新值代替。

**replace_copy_if:**     与replace_if，不过将结果写入另一个容器。

**swap:**          交换存储在两个对象中的值。

**swap_range:**       将指定范围内的元素与另一个序列元素值进行交换。

**unique:**         清除序列中重复元素，和remove类似，它也不能真正删除元素。重载版本使用自定义比较操作。 

**unique_copy:**       与unique类似，不过把结果输出到另一个容器。 

## 排列组合算法(2个)
> 提供计算给定集合按一定顺序的所有可能排列组合 
>

**next_permutation:**  取出当前范围内的排列，并重新排序为下一个排列。重载版本使用自定义的比较操作。 

**prev_permutation:**  取出指定范围内的序列并将它重新排序为上一个序列。如果不存在上一个序列则返回false。重载版本使用自定义的比较操作。

## 算术算法(4个)
**accumulate:**       iterator对标识的序列段元素之和，加到一个由val指定的初始值上。重载版本不再做加法，而是传进来的二元操作符被应用到元素上。

**partial_sum:**       创建一个新序列，其中每个元素值代表指定范围内该位置前所有元素之和。重载版本使用自定义操作代替加法。

**inner_product:**      对两个序列做内积(对应元素相乘，再求和)并将内积加到一个输入的初始值上。重载版本使用用户定义的操作。

**adjacent_difference:**   创建一个新序列，新序列中每个新值代表当前元素与上一个元素的差。重载版本用指定二元操作计算相邻元素的差。 

## 生成和异变算法(6个)
**fill:**  将输入值赋给标志范围内的所有元素。

**fill_n:** 将输入值赋给first到first+n范围内的所有元素。

**for_each:** 用指定函数依次对指定范围内所有元素进行迭代访问，返回所指定的函数类型。该函数不得修改序列中的元素。 

**generate:** 连续调用输入的函数来填充指定的范围。

**generate_n:** 与generate函数类似，填充从指定iterator开始的n个元素。

**transform:** 将输入的操作作用与指定范围内的每个元素，并产生一个新的序列。重载版本将操作作用在一对元素上，另外一个元素来自输入的另外一个序列。结果输出到指定容器。

## 关系算法(8个)
**equal:** 如果两个序列在标志范围内元素都相等，返回true。重载版本使用输入的操作符代替默认的等于操作符。

**includes:**  判断第一个指定范围内的所有元素是否都被第二个范围包含，使用底层元素的<操作符，成功返回true。重载版本使用用户输入的函数。

**lexicographical_compare:** 比较两个序列。重载版本使用用户自定义比较操作。

**max:**  返回两个元素中较大一个。重载版本使用自定义比较操作。

**max_element:** 返回一个ForwardIterator，指出序列中最大的元素。重载版本使用自定义比较操作。

**min:**  返回两个元素中较小一个。重载版本使用自定义比较操作。

**min_element:**  返回一个ForwardIterator，指出序列中最小的元素。重载版本使用自定义比较操作。

**mismatch:**  并行比较两个序列，指出第一个不匹配的位置，返回一对iterator，标志第一个不匹配元素位置。如果都匹配，返回每个容器的last。重载版本使用自定义的比较操作。

## 集合算法(4个)
**set_union:**        构造一个有序序列，包含两个序列中所有的不重复元素。重载版本使用自定义的比较操作。 

**set_intersection:**     构造一个有序序列，其中元素在两个序列中都存在。重载版本使用自定义的比较操作。 

**set_difference:**      构造一个有序序列，该序列仅保留第一个序列中存在的而第二个中不存在的元素。重载版本使用自定义的比较操作。

**set_symmetric_difference:** 构造一个有序序列，该序列取两个序列的对称差集(并集-交集)。

## 堆算法(4个)
**make_heap:** 把指定范围内的元素生成一个堆。重载版本使用自定义比较操作。

**pop_heap:**   并不真正把最大元素从堆中弹出，而是重新排序堆。它把first和last-1交换，然后重新生成一个堆。可使用容器的back来访问被"弹出"的元素或者使用pop_back进行真正的删除。重载版本使用自定义的比较操作。 

**push_heap:**   假设first到last-1是一个有效堆，要被加入到堆的元素存放在位置last-1，重新生成堆。在指向该函数前，必须先把元素插入容器后。重载版本使用指定的比较操作。

**sort_heap:**   对指定范围内的序列重新排序，它假设该序列是个有序堆。重载版本使用自定义比较操作

