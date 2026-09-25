## 1. Inception

### 1. HTML Hello World

* Basic HTML page that displays **Hello World** directly in the browser.

### 2. JavaScript Hello World

* JavaScript code that displays/logs **Hello World** using the browser's JavaScript engine.

### 3. React Hello World

#### CDN — Content Delivery Network

* **CDN = network of servers distributed across different geographical locations.**
* Used to **deliver files/resources faster** by serving them from a server closer to the user.
* Example: Instead of keeping React files in our project/server, we can load React from a **CDN**.

**Why CDN?**

* Faster resource delivery
* Reduces load on our server
* No need to install React using npm for a simple HTML/CDN setup

#### Cross-Origin

* **Origin = Protocol + Domain + Port**
* If two resources have different origins, they are **cross-origin**.

**Example:**

* Our app → `https://myapp.com`

* React CDN → `https://cdn.example.com`

* The domains are different, so the React resource is **cross-origin** relative to our application.

#### Two React Files

**1. `react.development.js`**

* This is the **core React library**.
* Provides React APIs and functionality.
* `React.createElement()` comes from this file.

**2. `react-dom.development.js`**

* Used for **DOM operations**.
* Acts as a **bridge between React and the browser DOM**.
* `ReactDOM.createRoot()` comes from this file.

#### `React.createElement()`

* Provided by `react.development.js`.
* Used to **create a React element**.

#### `ReactDOM.createRoot()`

* Provided by `react-dom.development.js`.
* Creates a **React root** and connects React with the **browser DOM**.
