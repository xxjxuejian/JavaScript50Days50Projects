难点就是字母的波浪效果，这里的做法是一个字母用一个 span 包裹，span 设置 translate，设置过渡

另外可以最开始就直接写成

```html
<label>
  <span style="transition-delay: 0ms">E</span>
  <span style="transition-delay: 50ms">m</span>
  <span style="transition-delay: 100ms">a</span>
  <span style="transition-delay: 150ms">i</span>
  <span style="transition-delay: 200ms">l</span>
</label>
```

也可以写成

```html
<label>Email</label>
```

然后使用 js 替换，所以最终的 html 结构是一个个的 span 的结构.通过 js 设置每一个字母的过渡延迟时间就产生了波浪的效果。

这里遇到两个注意点：

1. 行内元素使用时，显示效果中产生的空格问题
2. translate 对行内元素不起效果
