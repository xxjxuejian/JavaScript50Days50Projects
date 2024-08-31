监听 textarea 的 input 事件，使用最新的内容生成 tag,然后替换之前的 tag

难点就是随机的选择，假设整个随机选择的过程持续 3s，在 3s 内 间断 的选择可以使用 setInterval,每一次的定时器中，我们随机选择一个 tag，然后等下，在取消选中这个 tag,这里的等下取消，有需要用到定时器。

由于之前设置了 setInterval，我们需要停下，一共持续 3s,我们最用一个 setTimeout，在 3s 后停止 setInterval，最后在随机选择一个作为最终结果。
