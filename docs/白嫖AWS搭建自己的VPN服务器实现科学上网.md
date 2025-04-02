由于香橙派官方送了本人一块orangepi Aipro开发板，本来想的是用这块板子当博客的服务器，折腾了半天也没弄好，就去搜了搜这东西还能干啥，看了一圈脑子里突然想能不能搭个vpn服务器，最近用的节点又贵又卡，真受不了。搜了一圈我选择白嫖AWS(AWS为每个用户提供了每月750小时的运行实例时间，持续12个月)部署vpn，至于这块板子能不能弄，恕在下学识浅薄，回答不了！

**前期准备：一张visa卡（淘宝咸鱼，问清楚支不支持AWS）**

出了问题看看自己是不是管理员`sudo -i`

## 配置云服务器

控制台主页–>所有服务–>EC2–>启用实例(右上角可以选择地区，我选的东京)，操作系统选Ubuntu，密钥对（登录）–>点击右边创建密钥对，创建好会自动下载到本地，ssh连接需要

![image-20250402203941063](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402203941141.png)

把配置存储改为30GiB，其他默认，然后启动实例

![image-20250402204115986](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402204116034.png)

点击侧边栏安全组，配置如下

![image-20250402204506042](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402204506095.png)

实例–>实例ID–>右上角的连接（可以使用xshell、powershell……）

~~~shell
ssh -i "上边你的密钥对的下载位置" ubuntu@你的公有ipv4DNS
~~~

![image-20250402205211388](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402205211452.png)

**简化连接（非必须）**

打开id_rsa.pub，复制里面的内容（没有的浏览器搜索windows公钥生成）

![image-20250402205925237](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402205925279.png)

把刚刚复制的id_rsa.pub，复制到`./.ssh/authorized_keys`里面

~~~shell
 sudo -i
 vim ./.ssh/authorized_keys 
~~~

打开config，添加以下内容，保存之后就可以通过`ssh aws`进行连接了

~~~shell
Host aws
    HostName 你的公有ipv4DNS
    User ubuntu
    IdentityFile 上边你的密钥对的下载位置
~~~

## 安装X-UI

y设置账户密码，端口号谁便设置一个60000以下的

~~~shell
sudo -i
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/956bf85bbac978d56c0e319c5fac2d6db7df9564/install.sh) 0.3.4.4
~~~

在浏览器输入`你的ip地址:刚刚设置的端口号`，你刚刚设置的账号密码登录，点击切换版本，换一个最新的就可以

![image-20250402211351820](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402211351879.png)

## 客户端

[Windows（v2rayN）](https://github.com/2dust/v2rayN/releases/tag/7.10.5)，[Android（v2rayNG）](https://github.com/2dust/v2rayNG/releases/tag/1.9.45)，[IOS（shadowrocket）](http://apps.apple.com/us/app/shadowrocket/id932747118)

## vmess+ws

点击入站列表–>点击添加入站

备注：vmess+ws，协议vwess，添加用户，网络ws，把用户id第一个-之前的复制到路径下，记得不要删除前面的`/`，然后点击添加

![image-20250402212709912](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402212709961.png)

点击操作->二维码->复制，打开客户端（如果打不开就把客户端退了重新进）

![image-20250402213154572](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402213154627.png)

## vless+vision

搭建vision节点申请证书，安装完之后记住公钥文件路径（/etc/x-ui/server.crt）和密钥文件路径（/etc/x-ui/server.crt），就是最下面两行输出的地址（域名是把你的域名中间的点替换为减号，然后加上`.nip.io`，比如10.10.10.10，替换后就是10-10-10-10.nip.io）

~~~shell
# 切换到 root 用户
sudo -i
# 然后重新运行安装命令
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/956bf85bbac978d56c0e319c5fac2d6db7df9564/install.sh) 0.3.4.4
#安装证书工具：
curl https://get.acme.sh | sh; apt install socat -y || yum install socat -y; ~/.acme.sh/acme.sh --set-default-ca --server letsencrypt

#三种方式任选其中一种，申请失败则更换方式
#申请证书方式1： 
~/.acme.sh/acme.sh  --issue -d 你的域名 --standalone -k ec-256 --force --insecure
#申请证书方式2： 
~/.acme.sh/acme.sh --register-account -m "${RANDOM}@chacuo.net" --server buypass --force --insecure && ~/.acme.sh/acme.sh  --issue -d 你的域名 --standalone -k ec-256 --force --insecure --server buypass
#申请证书方式3： 
~/.acme.sh/acme.sh --register-account -m "${RANDOM}@chacuo.net" --server zerossl --force --insecure && ~/.acme.sh/acme.sh  --issue -d 你的域名 --standalone -k ec-256 --force --insecure --server zerossl

#安装证书：
~/.acme.sh/acme.sh --install-cert -d 你的域名 --ecc --key-file /etc/x-ui/server.key --fullchain-file /etc/x-ui/server.crt
~~~

域名填写上边的域名，填写上边的地址，保存，导入到客户端是一样的，在客户端把10-10-10-10.nip.io改为10.10.10.10会更快一些

![image-20250402214126136](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402214126178.png)

![image-20250402214101071](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402214101120.png)

## vless+vision+reality

备注：vless+vision+reality，协议：vless，端口：443，添加用户，打开reality，flow选择vision，目标网站填入1.1.1.1:443，可选域名填`用户id第一个-之前的+.com`

![image-20250402214525247](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402214525297.png)

![image-20250402214622887](https://xiaokcoding-image.oss-cn-beijing.aliyuncs.com/20250402214622939.png)

## 遇到的问题

**打不开x-ui面板**

执行下面的命令，把根路径[basePath]添加到最后面，所以地址是`你的ip地址:刚刚设置的端口号/根路径后的输出/`

~~~shell
sudo -i
 x-ui
 7. 查看当前面板信息
~~~

**安装证书老失败**

`sudo -i`切换到管理员，一切都解决了



## 参考

1. [DeepSeek](https://chat.deepseek.com/)
2. [搭建自己的VPN服务器实现科学上网](https://sin-coder.github.io/post/skipwall/)
3. [【零基础】2025最新保姆级纯小白节点搭建教程，人人都能学会，目前最简单、最安全、最稳定的专属节点搭建方法，手把手自建节点搭建教学，晚高峰高速稳定，4K秒开的科学上网线路体验](https://youtu.be/SpxTFes1B8U)

