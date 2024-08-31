const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");

textarea.addEventListener("input", (e) => {
  tags.innerHTML = "";

  let value = e.target.value;
  let arr = value.split("，").filter((item) => {
    return item.trim() !== "";
  });
  console.log(arr);
  const fragment = document.createDocumentFragment();

  arr.forEach((element) => {
    // 空字符，空格
    if (element !== "") {
      const div = document.createElement("div");
      div.textContent = element;
      div.classList.add("tag");
      fragment.appendChild(div);
    }
  });
  tags.appendChild(fragment);
});

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("enter key");
    textarea.value = "";
    randomSelect();
  }
});

function randomSelect() {
  // 每一个tag上面都会尝试一下，然后取消，这就是一个 间隔定时器，内部选中一个再取消
  // const tags = document.querySelectorAll(".tag");

  let timer = setInterval(() => {
    const randomTag = pickRandomTag();
    if (randomTag !== undefined) {
      // 1，选中了一个，高亮
      highlightTag(randomTag);
      // 2，但是很快就要取消，很短的时间
      // 3,这个取消了意味着选择下一个,所以 间隔时间需要把握一下
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 90);
    }
  }, 100);

  // // 这是最后一次选中的，决定最终选择哪一个
  setTimeout(() => {
    clearInterval(timer);

    const randomTag = pickRandomTag();
    if (randomTag !== undefined) {
      highlightTag(randomTag);
    }
  }, 3000);
}

// 返回的是随机选中的那个元素，是一个元素
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

// 给这个颜色添加highlight类
function highlightTag(tag) {
  tag.classList.add("highlight");
}

// 给这个颜色删除highlight类
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
