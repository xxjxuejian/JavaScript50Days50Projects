### 1.通过 click 事件自己定义双击

每一次点击需要一个变量，保存着上一次的点击时间，然后和这一次点击的时间比较。  
设置一个初始值，和时间无关的值，比如 0，值为 0，意味着没有任何点击的操作，或者之前的点击操作已经完成了。
每一次产生点击操作检测，如果是初始值，就保存这次的点击时间，如果不是初始值，说明之前有过点击，需要检查是不是双击.

```javascript
if (prevClickTime === 0) {
  prevClickTime = Date.now();
} else {
  // 两次点击间隔小于800ms，认为是双击点击
  if (Date.now() - prevClickTime < 800) {
    // 双击操作：创建爱心
    createHeart(e);

    // 恢复状态
    prevClickTime = 0;
  } else {
    prevClickTime = Date.now();
  }
}
```

### 2.动画效果

首先明确这个动画效果是用在谁(哪个元素)身上的，动画的初始效果是什么样的，结束效果是什么样的，动画执行完会默认回到初始的状态的。

```css
/* 动画 最初的效果：一个红心,但是缩小到0了*/
.loveMe .fa-heart {
  position: absolute;
  transform: translate(-50%, -50%) scale(0);
  animation: grow 0.6s linear;
}

/* 结束的状态，结束以后需要把元素移出 */
@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}
```

### 3.在鼠标点击位置中心创建一个元素

我们在盒子内部点击的时候，在点击位置出现一个爱心，所以需要记录当前点击的位置。  
但是我们需要的是点击位置距离外层容器的**顶部距离**和**左侧距离**，并不能直接获取到。  
但是我们有 e.clientX，可以获取点击位置距离视口原点的 X 轴偏移量，
e.target.offsetLeft，可以获取点击的这个元素，即外层容器，的左侧边界，距离视口原点的 X 轴偏移量，  
通过这个两个变量作差，就可以计算出点击位置距离外层容器原点的 X 轴偏移量。

```javascript
const x = e.clientX;
const y = e.clientY;

const leftOffset = e.target.offsetLeft;
const topOffset = e.target.offsetTop;

// 只在盒子内部创建爱心，所以需要作差计算
const xInside = x - leftOffset;
const yInside = y - topOffset;

heart.style.top = `${yInside}px`;
heart.style.left = `${xInside}px`;
```
