使用 filter:blur()
在 css 中设置

```css
width: calc(100vw + 60px);
height: calc(100vh + 60px);
position: absolute;
top: -30px;
left: -30px;
z-index: -1;
filter: blur(30px);
```

原因是作者为了让 blur 效果四周的白边消失，把图片上下左右全部加了 30px，这样 blur 的白边就在最外层的这 30px 上，  
然后使用 top:-30px，让白边被视口遮住，这样图片看起来会更好一点，不加这 30px，直接做也可以

脚本中需要改变的就是背景图的 blur 效果以及文本的不透明度，  
在 count 从 0-100 的时候，从 blur(30px) 变为 blur(0px)，所以这里面就是 0-100，对应 30-0，就是一个正则化  
同理文本的不透明度在 count 从 0-100 的时候，从 1 变为 0

```javascript
bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
loadingText.style.opacity = `${(100 - count) / 100}`;
```
