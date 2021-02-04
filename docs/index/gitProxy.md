<!--
 * @Author: GengHH
 * @Date: 2021-01-18 16:52:18
 * @LastEditors: GengHH
 * @LastEditTime: 2021-02-04 18:33:50
 * @Description: file content
 * @FilePath: \VuePress2\docs\index\gitProxy.md
-->

# Git 代理配置

### 一、**git proxy**

#### 设置代理（指定域名设置）

```
git config --global https.proxy http://10.1.101.1:1086
git config --global https.proxy https://10.1.101.1:1086
```

#### 取消代理（指定域名设置）

```
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy
```

#### 设置代理（全局）

```
git config --global https.proxy http://10.1.101.1:1086
git config --global https.proxy https://10.1.101.1:1086
```

#### 取消代理（全局）

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```
