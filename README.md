# 🚀 React Pagination Component

<div align="center">

# ⚡ Premium React Pagination

A modern, responsive, and efficient pagination component built with **React** using only **useState** and simple pagination logic.

Perfect for beginners to understand pagination algorithms without relying on external libraries.


[**🌏 LIVE DEMO**](https://durgaprasadcodes.github.io/pagination/)


![React](https://img.shields.io/badge/React-19-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Premium_UI-1572B6?logo=css3)
![License](https://img.shields.io/badge/License-MIT-success)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

</div>

---

# ✨ Features

- ✅ Pure React (No external pagination library)
- ✅ Dynamic page generation
- ✅ Smart pagination (`1 ... 5 6 7 ... 20`)
- ✅ Previous & Next navigation
- ✅ Active page highlighting
- ✅ Responsive design
- ✅ Clean and reusable code
- ✅ Handles thousands of records efficiently
- ✅ Premium UI (White + Violet Theme)

---

# 📸 Preview
<div align="center">
     
<img width="503" height="421" alt="Image" src="https://github.com/user-attachments/assets/2bd42e0d-be95-4673-9959-f260cf1b46e2" />


[**🌏 LIVE DEMO**](https://durgaprasadcodes.github.io/pagination/)

</div>


---

# 📂 Project Structure

```
src/
│
├── Pagination.jsx
├── Pagination.css
├── data.js
└── main.jsx
```

---

# ⚙️ How Pagination Works

Suppose we have

```
100 Tasks
```

and we want

```
5 Tasks per page
```

Then

```
100 / 5 = 20 Pages
```

Each page displays only five tasks.

---

# 📊 Overall Flow

```
All Tasks
     │
     ▼
Current Page
     │
     ▼
Calculate Start Index
     │
     ▼
Calculate End Index
     │
     ▼
Slice Tasks
     │
     ▼
Render Current Page
```

---

# 🧠 Step 1 — State

```js
const [pageNumber, setPageNumber] = useState(1);
```

This stores the current page.

Initially

```
Page = 1
```

---

# 🧠 Step 2 — Tasks Per Page

```js
const numberOfTasksPerPage = 5;
```

Only five tasks are visible at one time.

---

# 🧠 Step 3 — Total Pages

```js
const tasksLength = Math.ceil(
    tasks.length / numberOfTasksPerPage
);
```

Example

```
97 Tasks

97 / 5 = 19.4

Math.ceil()

=

20 Pages
```

Why `Math.ceil()`?

Because the last page may contain fewer than five items.

---

# 🧠 Step 4 — Last Index

```js
const LastIndex =
numberOfTasksPerPage * pageNumber;
```

Example

```
Current Page = 3

5 × 3

=

15
```

Meaning

Slice ends at index **15**

---

# 🧠 Step 5 — Starting Index

```js
const StartingIndex =
LastIndex - numberOfTasksPerPage;
```

Example

```
15 - 5

=

10
```

Now

```
slice(10,15)
```

returns

```
11 12 13 14 15
```

---


# 🧠 Smart Pagination Algorithm

Instead of showing

```
1 2 3 4 5 6 7 8 9 10 11 12 ...
```

which becomes huge,

the algorithm displays

```
1 ...

5 6 7

... 20
```

Example

Current Page = 6

```
1 ... 5 6 7 ... 20
```

Current Page = 15

```
1 ... 14 15 16 ... 20
```

Current Page = 2

```
1 2 3 ... 20
```

This keeps the UI clean even for thousands of pages. Efficient pagination reduces clutter while maintaining quick navigation. :contentReference[oaicite:0]{index=0}

---

# 🧠 Understanding `getVisiblePages()`

This function decides which page numbers should be displayed.

```js
getVisiblePages(totalPages,currentPage)
```

Returns

```
[ 1, "...", 5, 6, 7, "...", 20 ]
```

---

## First Page

```js
pages.push(1)
```

Always show

```
1
```

---

## Current Window

```js
const start =
Math.max(2,currentPage-1)

const end =
Math.min(totalPages-1,currentPage+1)
```

Current page

```
10
```

Visible

```
9 10 11
```

---

## Left Ellipsis

```js
if(start>2)
```

If pages exist before the current window

Show

```
...
```

---

## Middle Pages

```js
for(let i=start;i<=end;i++)
```

Add

```
9 10 11
```

---

## Right Ellipsis

```js
if(end<totalPages-1)
```

Show

```
...
```

---

## Last Page

```js
pages.push(totalPages)
```

Always display

```
Last Page
```

---

# 📈 Example

Total Pages

```
100
```

Current Page

```
50
```

Result

```
1 ... 49 50 51 ... 100
```

---

# 🔄 Previous Button

```js
setPageNumber(prev=>prev-1)
```

Moves one page backward.

Disabled on

```
Page 1
```

---

# 🔄 Next Button

```js
setPageNumber(prev=>prev+1)
```

Moves forward.

Disabled on

```
Last Page
```

---

# 💡 Time Complexity

| Operation | Complexity |
|------------|------------|
| Slice | O(k) |
| Visible Pages | O(1) |
| Rendering Buttons | O(1) |
| Overall | **O(k)** |

Where

```
k = Tasks Per Page
```

Not

```
Total Tasks
```

That means whether there are **100 tasks** or **100,000 tasks**, only the current page's items are rendered, making the UI scalable. :contentReference[oaicite:1]{index=1}

---


# 🛠 Tech Stack

- React
- JavaScript (ES6)
- CSS
- Vite

---

# 🎯 Learning Outcomes

After completing this project, you'll understand:

- React State
- Array Slice
- Dynamic Rendering
- Conditional Rendering
- Pagination Algorithms
- Responsive UI Design
- Performance Optimization
- Reusable Components

---

# 🤝 Contributing

Contributions are welcome.

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful,

⭐ **Star the repository**

It motivates future open-source projects.

---

<div align="center">

## Made with ❤️ by **Durga Prasad**

### 🌐 Live Demo

[**LIVE DEMO**](https://durgaprasadcodes.github.io/pagination/)

**Happy Coding 🚀**

</div>
