#js部分总结


##document.querySelector()方法
获取DOM元素
比如
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <div id="contatiner">huang</div>
    <script type="text/javascript">
        var destination = document.querySelector("#contatiner");
        console.log(destination);
    </script>
</body>
</html>
```
注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
>参考： https://blog.csdn.net/huangbaokang/article/details/79659246

