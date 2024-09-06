重点应该是 canvas，canvas 的使用方法，可以参考 mdn
鼠标按下的时候并不是立刻绘图，而是在鼠标移动的时候绘制，按下的时候记录这个按下的位置的坐标，当鼠标移动的时候开始绘制。需要注意的点是，绘制通过

```javascript
ctx.moveTo(startX, startY);
ctx.lineTo(e.offsetX, e.offsetY);
```

首先移动到开始位置的坐标，然后画线到当前鼠标位置的坐标，下一时刻当前坐标又作为开始坐标

```javascript
ctx.moveTo(startX, startY); //上一个位置
ctx.lineTo(e.offsetX, e.offsetY); //当前位置
// console.log(startX, startY, e.offsetX, e.offsetY);
// ctx.lineWidth = lineWidth;
// ctx.strokeStyle = color;
// ctx.stroke();

//当前位置作为下一次的开始位置
startX = e.offsetX;
startY = e.offsetY;
```
