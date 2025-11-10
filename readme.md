Ahoj! this is me starting my very indepth concretization learning of my 3+ years in imperative programming. I will be taking all measures to ensure that everything I write or adapt of code is 100% understood by me. 

The whys, whynots, hows and how not will be recorded.

This is my first project which is the transcedence project which we did as the final project at the 42 Prague programming school.

This final project is a full-stack SPA pong tournament gaming system that incorporates blockchain integration, AI opponents, remote and multiple players, real-time data management, dashboards, user authentication, GDPR compliance, and many more functionalities.

So let's dive in.

We decided not to build this website as a [microservice](#microservice), but rather as [monolitihic](#monolithic) architcture.
What is the difference between these two.

# monolithic architecture 
is the traditional way of web development or programming where the whole code base is a single unified unit or codebase, where all frontend, backend, business logic and data access are bundled together and run as a single service or process.

⚙️ Example:

Imagine an e-commerce app where:

The product catalog, order management, user authentication, and payment processing are all built and deployed together as one large application (e.g., one .jar, .war, or single Docker image).


-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🧠 Monolithic vs Microservice Architecture — Full Summary

## ❓ What’s the difference between Monolithic and Microservice Architecture?

### 🧱 **Monolithic Architecture**

**Definition:**
All parts of the application (frontend, backend, database logic, etc.) are combined into one unified codebase and run as a **single service or process**.

**Example:**
An e-commerce app where login, products, orders, and payments are all in one big program.

**✅ Advantages**

* Simple to develop and deploy (good for small teams)
* Easier to test initially
* All code in one place

**❌ Disadvantages**

* **Hard to scale:** must scale the entire app even if only one part needs it
* Tight coupling (a small change can break other parts)
* Difficult to adopt new tech or frameworks
* Longer deployment times
* Becomes slower and complex as it grows

---
# microservice
### 🧩 **Microservice Architecture**

**Definition:**
Breaks the application into multiple small, independent services, each handling a specific business function.
Each service runs on its **own process/server/container** and communicates with others via APIs (HTTP, gRPC, message queues).

**Example:**
An e-commerce system with:

* User Service 👤
* Product Service 🛍️
* Checkout Service 💳
* Notification Service 📩

**✅ Advantages**

* Independent deployment (update one service without redeploying all)
* Scale services individually
* Fault isolation (if one fails, others continue)
* Use different technologies for different services
* Great for large/distributed teams

**❌ Disadvantages**

* More complex setup (DevOps, monitoring, CI/CD)
* Network communication overhead
* Harder to test integration between services
* Data consistency challenges

---

### ⚖️ **Quick Comparison Table**

| Feature              | Monolithic              | Microservices             |
| -------------------- | ----------------------- | ------------------------- |
| **Structure**        | Single unified codebase | Many independent services |
| **Deployment**       | One package             | Per service               |
| **Scaling**          | Scale whole app         | Scale individual service  |
| **Technology stack** | Single tech             | Mixed tech allowed        |
| **Fault tolerance**  | One failure affects all | Isolated failures         |
| **Communication**    | Internal function calls | API or message queues     |
| **Best for**         | Small/simple apps       | Large, scalable systems   |

---

## ❓ What does “hard to scale” mean in Monolithic Architecture?

### ⚙️ Explanation

In a **monolith**, all parts (login, checkout, reports, etc.) run together as one process.
You **can’t scale only one part** that’s under heavy load — you must scale the entire app.

### 💡 Example

* During Black Friday, only **checkout** gets heavy traffic.
* You can’t add more resources to just checkout.
* You must duplicate the whole app (checkout + login + catalog + reports), wasting CPU and memory.

**Result:** Inefficient scaling, higher cost, and wasted resources.

### 🧮 Example Table

| Component | Normal Load | Peak Load | Scaling Need |
| --------- | ----------- | --------- | ------------ |
| Home Page | 1x          | 1x        | No           |
| Checkout  | 1x          | 10x       | Yes          |
| Reports   | 1x          | 1x        | No           |

In a monolith, to handle checkout load, you must **scale everything 10x**.
In microservices, you scale **only Checkout Service**.

## ❓ How does scaling actually work?

### 🧠 Meaning

**Scaling** = increasing system capacity to handle more users or data without slowing down.
Not about checking inputs faster — it’s about **adding computing resources**.

---

### 1️⃣ **Vertical Scaling (Scaling Up)**

You make one server stronger.

* Add CPU, memory, faster disks.
* Like upgrading one computer.

**Example:**
1 server → bigger server with more RAM.

**Limit:** Physical and expensive limits.

---

### 2️⃣ **Horizontal Scaling (Scaling Out)**

You add more servers/instances to share the workload.

* Use a **load balancer** to distribute user requests evenly.

**Example:**

```text
User → Load Balancer → Server 1
User → Load Balancer → Server 2
User → Load Balancer → Server 3
```

**Result:** Same app code, more copies working in parallel.

---

### ⚖️ Comparison

| Type                   | Description      | Example           | Limit                |
| ---------------------- | ---------------- | ----------------- | -------------------- |
| **Vertical Scaling**   | Stronger machine | Add more RAM, CPU | Expensive, limited   |
| **Horizontal Scaling** | More machines    | Add more servers  | Needs load balancing |

---

## ❓ So in microservices, each service has its own server?

✅ **Exactly.**
Each microservice runs on its own **server, container, or process** and can be **scaled independently**.

### Example

| Service              | Function     | Normal Load | Peak Load | Scaling Action |
| -------------------- | ------------ | ----------- | --------- | -------------- |
| User Service         | Login/signup | 1x          | 2x        | +1 instance    |
| Product Service      | Catalog      | 1x          | 3x        | +2 instances   |
| Checkout Service     | Payments     | 1x          | 10x       | +9 instances   |
| Notification Service | Email/SMS    | 1x          | 5x        | +4 instances   |

Only scale what’s under pressure — not the entire app.

### 🧩 How it works

* Each service runs independently.
* Load balancer detects high traffic → adds more instances of that service.
* Others remain unchanged.
* After load drops → auto-scale down.

---

## 🚀 In Summary

| Aspect             | Monolithic        | Microservices           |
| ------------------ | ----------------- | ----------------------- |
| **Deployment**     | Single unit       | Many small units        |
| **Scaling**        | Entire app        | Per service             |
| **Resource usage** | Inefficient       | Efficient               |
| **Failure impact** | Whole app         | Isolated                |
| **Flexibility**    | Harder            | Easier                  |
| **When to use**    | Small/simple apps | Large, evolving systems |

---

### 🧾 Final Takeaway

* **Monolithic** → simple but rigid and hard to scale efficiently.
* **Microservices** → modular, flexible, and independently scalable but more complex to manage.

------------------------------------------------------------------------------------------------------------------------------------------------------------------

Now we understand the difference between microservice and monolithic architecture.

The subject requested that we build the system as a Single Page Application [SPA](#SPA).

# SPA
An SPA is a front-end architecture pattern, not a full system architecture.
It means the entire web app runs mostly in the browser — loading one HTML page and dynamically updating content via JavaScript (using frameworks like React, Angular, or Vue).

So when you navigate between pages, the browser doesn’t reload everything — it just changes parts of the page.
That makes it fast and smooth.

# The frontend:
The frontend app is a TypeScript + Vite single-page application organized around small, focused UI components and a clear separation between UI, game logic, and backend-communication services services. 

It means, once the project is started with a #makefile, it must install the node modules for these languages or codebase to work.

# The backend
The backend is a Fastify-based Node.js HTTP API (ES module) that uses a small, modular service pattern: server.js wires plugins, routes, and Swagger; db.js initializes a local SQLite database and exposes it via Fastify decoration; route modules in routes/ register endpoints (public and protected) which call controller functions in controllers/ to implement business logic (auth, friends, leaderboard, tetris, tournaments, user profiles). Authentication/session handling is cookie-based: sessions are stored in the SQLite sessions table, validated by a reusable authPlugin Fastify plugin that decorates requests with userId. File uploads (avatars) are handled with Fastify multipart + static file serving for avatars. Input contracts are expressed using JSON schemas under schemas/, and the server exposes OpenAPI/Swagger UI. The code centralizes DB helpers and utilities in utils/ and uses server-side GDPR/consent cookies and other cross-cutting concerns as cookies. Overall it’s a single-process, low-dependency backend focused on small modules, SQLite persistence, and HTTP (with room for real-time match flows implemented via DB-driven tokens/queues).

--- Database SQLite
--- Fastify (server files)
--- Swagger.




### ❓2. What does “hard to scale” mean in monolithic architecture?

**Answer:**
In a monolith, all features share one deployment.
If one part (e.g., checkout) needs more power, you must **scale the whole app**, wasting resources.
✅ *In microservices, you scale only the part that needs it.*

---

### ❓3. How does **scaling** work?

**Answer:**
Scaling means increasing capacity to handle more users or data.

* **Vertical scaling:** Add more CPU/RAM to one server.
* **Horizontal scaling:** Add more servers/instances and use a load balancer to share the work.
  ✅ *Scaling adds computing power — it’s not about checking inputs faster.*

---

### ❓4. In microservices, do you have a server for each service?

**Answer:**
Yes. Each microservice runs in its **own server or container**, with its own logic and database.
When one part (e.g., payments) needs more resources, you **scale just that service**.
✅ *Independent scaling = better performance and efficiency.*

---

### ❓5. So is this design (nginx + backend + frontend) a microservice?

**Answer:**
Not fully. It’s a **modular, 3-tier containerized architecture**, not true microservices.

* You have **frontend**, **backend**, and **nginx** as separate containers.
* But there’s still **one backend service**, so it’s not yet microservice-level.
  ✅ *It’s microservice-like but technically a structured monolith.*

---

### ❓6. What’s the difference between **Next.js**, **Node.js**, and **Nginx**?

**Answer:**

| Tool        | Role                                                                            |
| ----------- | ------------------------------------------------------------------------------- |
| **Node.js** | JavaScript runtime that runs backend logic (APIs, servers).                     |
| **Next.js** | Web framework built *on top* of Node.js for full-stack React apps (SSR + APIs). |
| **Nginx**   | Web server / reverse proxy that serves static files and routes traffic.         |

✅ *They complement each other — Node runs code, Next builds apps, Nginx handles traffic.*

---

### ❓7. Does **Nginx** run on **Node.js**, or vice versa?

**Answer:**
Neither.
They run **side by side**, but **Nginx sits in front of Node.js**:

* Nginx listens to users on port 80/443
* It **forwards** (proxies) requests to Node.js (e.g., port 3000)
  ✅ *Nginx = gateway; Node.js = backend app.*

---

### ❓8. Does **Nginx** listen to **Node.js**?

**Answer:**
❌ No.
**Node.js listens** for incoming requests.
**Nginx** listens to users and **forwards** their requests to Node.js.
✅ *Node.js is the listener; Nginx is the forwarder.*

---

### ❓9. So Node listens to requests from clients coming through Nginx, and serves the requested resource through Nginx?

**Answer:**
✅ Exactly.

1. The **client** sends a request to **Nginx**.
2. **Nginx** forwards it to **Node.js**.
3. **Node.js** processes and sends the response back to **Nginx**.
4. **Nginx** returns it to the **client**.
   ✅ *Nginx handles traffic; Node.js handles logic.*

---

### ❓10. If some HTML files need to be pulled or modified and it’s not happening on the frontend, does it happen in Node.js or Nginx?

**Answer:**

* **Static HTML** (unchanging) → handled by **Nginx** directly.
* **Dynamic HTML** (changes with user data or logic) → generated by **Node.js**.
  ✅ *Nginx serves static files; Node.js creates or modifies dynamic ones.*

---

### ❓11. Can **Node.js** serve files without **Nginx**?

**Answer:**
✅ Yes, Node.js can serve files on its own — using `http`, `fs`, or frameworks like Express.
But ⚠️ in production, **Nginx is preferred** because it’s faster, safer, and optimized for static file delivery.
✅ *Use Node.js alone for development; add Nginx for performance in production.*

---

### ❓12. What are the alternatives to **Node.js** and **Nginx**?

**Answer:**
🧩 **Alternatives to Node.js (backend runtimes):**

* Python (Django, Flask, FastAPI)
* Go (Gin, Fiber)
* Java (Spring Boot)
* .NET (C# / ASP.NET Core)
* Rust (Actix, Rocket)
* PHP (Laravel, Symfony)
* Ruby (Rails)
* Elixir (Phoenix)
* Deno / Bun (modern JS runtimes)

🧱 **Alternatives to Nginx (web server / proxy):**

* Apache HTTP Server
* Caddy (auto HTTPS)
* HAProxy (load balancer)
* Traefik (Docker/Kubernetes)
* Envoy Proxy (service mesh)
* Cloudflare / Fastly (CDN edge servers)

✅ *Node.js alternatives = backend runtimes; Nginx alternatives = reverse proxies / web servers.*




> **Node.js** is the **runtime environment** — it runs JavaScript on the server.
> **Fastify** is a **web framework built *on top* of Node.js** that helps you create APIs faster, cleaner, and safer.

✅ So they’re **not alternatives** — they **work together**.
Fastify **uses Node.js under the hood**.

---

## ⚙️ Think of it this way

| Concept                 | Example                               | What it means                                      |
| ----------------------- | ------------------------------------- | -------------------------------------------------- |
| **Runtime / Engine**    | 🧠 **Node.js**                        | Executes JavaScript code on the server             |
| **Framework / Library** | 🧩 **Fastify**, Express, NestJS, etc. | Uses Node.js to simplify HTTP handling and routing |
| **Your App**            | 🧰 Your `server.js`, routes, plugins  | Built using a framework running on Node.js         |

---

### 🔍 Analogy

| Example      | Analogy                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| **Node.js**  | The **car engine** — it makes things run.                                     |
| **Fastify**  | The **car dashboard + controls** — makes driving easier and more comfortable. |
| **Your API** | You driving to your destination. 🚗💨                                         |

So — Node.js provides the *power*; Fastify provides the *structure*.

---

## 🧩 Without Fastify

You could build an HTTP server directly with **Node’s core module**:

```js
import http from 'http';

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World');
});

server.listen(3000);
```

✅ Works fine — but:

* You have to manually handle routes (`/login`, `/users`, etc.)
* No built-in JSON parsing, middleware, or plugins

---

## 🧩 With Fastify

Fastify *uses Node’s `http` module under the hood* — it just adds higher-level features:

```js
import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/hello', async (req, reply) => {
	return { msg: 'Hello from Fastify!' };
});

fastify.listen({ port: 3000 });
```

✅ You now get:

* Routing (`fastify.get`, `fastify.post`)
* Automatic JSON handling
* Plugin system (for auth, logging, etc.)
* Much faster performance and safety

So your app still **runs on Node.js**, but **through Fastify**.

---



Fastify (and Express) are frameworks built on top of Node.js, not exactly “plugins,” but they work like high-level helpers that make configuring Node’s web server easy and structured.

Browser ─► Nginx ─► Node.js (http module)
                    └──► Fastify / Express framework
                              └──► Your API logic (routes, DB calls)



*************************************************************************************************************************

***if i am not using docker at all, and I will just npm run dev, do i need nginx?***

> **No — you do *not* need Nginx** if you’re just running your Fastify app locally (using `npm run dev`) or even deploying it as a standalone Node.js app on a server.

But let’s unpack *why* — and also *when* Nginx *does* become useful — so you really understand the decision. 👇

---

## 🧠 What Nginx actually does

Nginx (pronounced *“engine-x”*) is a **web server and reverse proxy**.
It’s not part of Node or Fastify itself — it sits **in front** of your backend to help with:

| Feature                      | Description                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Reverse proxying**         | Routes traffic from the internet to your Node/Fastify app (often running on an internal port, like 3000) |
| **Load balancing**           | Distributes traffic across multiple Node processes or servers                                            |
| **Static file serving**      | Efficiently serves images, JS, CSS, etc. (faster than Node)                                              |
| **SSL/TLS termination**      | Handles HTTPS certificates (so your app only deals with HTTP internally)                                 |
| **Caching & compression**    | Caches static assets or compresses responses for speed                                                   |
| **Security / Rate limiting** | Blocks bad requests, limits rate, hides internal ports                                                   |

So it’s like a **gatekeeper** in front of your Fastify server.

---

## 🧩 Case 1 — Local development (`npm run dev`)

You definitely **don’t need Nginx** here.

When you run:

```bash
npm run dev
```

and your Fastify app listens on `http://localhost:3000`,
you can access it directly in your browser or from your frontend (`fetch("http://localhost:3000/…")`).

There’s no extra layer needed — Fastify can:
✅ serve static files (via `@fastify/static`)
✅ handle CORS
✅ run HTTPS locally if you configure it

So Nginx adds **no benefit** in development — it would just complicate things.

---

## 🧩 Case 2 — Simple production server (single app)

Even in production, if you have **just one Node.js app** and you’re fine exposing it directly on port 80 or 443,
you can still skip Nginx.

Example:

```bash
node server.js
```

Then:

* use **PM2** or **systemd** to keep it alive and restart on crash
* optionally use **Certbot + Node HTTPS** if you need HTTPS directly in Fastify

Fastify can easily serve everything itself:

```js
fastify.register(import('@fastify/static'), { root: 'public' });
fastify.get('/api', ...);
```

So it’s totally fine to go “Fastify only.”

---

## 🧩 Case 3 — When Nginx *is* recommended

Use Nginx when:

| Situation                                                                | Why Nginx helps                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 🧠 You deploy **multiple apps** (e.g., Fastify API + React build)        | Nginx can route `/api/*` to Fastify and `/` to your frontend files |
| 🔐 You need **HTTPS (SSL)**                                              | Nginx easily handles SSL certs (via Let’s Encrypt)                 |
| ⚡ You want **caching / compression / CDN-like performance**              | Nginx serves static assets much faster than Node                   |
| 🧩 You want to **load balance** multiple Node workers                    | Nginx distributes requests automatically                           |
| 🛡 You need **rate limiting / security headers**                         | Easier to add rules before traffic hits Node                       |
| 🧱 You’re inside a Docker or cloud setup (e.g., EC2, DigitalOcean, etc.) | Nginx acts as the front-facing web server                          |

So basically:

> 👉 If your app will be **publicly accessible on the web**, Nginx is *nice-to-have* (for SSL + routing).
> 👉 If your app is **local, internal, or single service**, you can skip it safely.

---

## 🧭 4. How your setup looks *without* Nginx

For your case (just `npm run dev` and Fastify):

```
Frontend (React, Vite) → http://localhost:5173
Backend (Fastify) → http://localhost:3000
```

Frontend calls backend directly using `fetch()` with CORS enabled:

```js
await fetch("http://localhost:3000/api/items");
```

Your Fastify already handles:

* CORS ✅
* Cookies ✅
* Static files ✅
* File uploads ✅

So everything works fine.

---

## ⚙️ Optional: When you move to production later

If you deploy your app to:

* a VPS (like DigitalOcean, Linode)
* or a small VM
* or you use PM2 to keep Node alive

Then you *might* later add Nginx with a config like:

```nginx
server {
    listen 80;
    server_name myapp.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

That’s when it acts as your front-door — forwarding traffic to Fastify.

---

## ✅ Summary

| Environment                        | Need Nginx? | Why                                        |
| ---------------------------------- | ----------- | ------------------------------------------ |
| Local dev (`npm run dev`)          | ❌ No        | Fastify can serve everything directly      |
| Small personal or internal server  | ❌ No        | Node can handle it                         |
| Public-facing production server    | ⚠️ Optional | Use for SSL, reverse proxy, static caching |
| Multiple services / load balancing | ✅ Yes       | Needed for routing & proxying              |

---

### 💬 In one sentence:

> You only need Nginx when your Fastify app is **serving the public web or running multiple services** — for local dev or single-server apps, Fastify alone is perfectly enough.



*************************************************************************************************************************


Now we start


*************************************************************************************************************************


what should be done now, is to create three folders, frontend, backend and nginx(server) folders.

```
project-root/
├── frontend/
├── backend/
└── nginx/
```


*************************************************************************************************************************

Then lets initiialize the node modules in the root of our project

```bash
npm init
or
npm init -y to yes all the questions
```


*************************************************************************************************************************

## 🧠 Short Answer

| File                    | Purpose                                                                    |
| ----------------------- | -------------------------------------------------------------------------- |
| **`package.json`**      | Describes your project — name, version, dependencies (the “what”)          |
| **`package-lock.json`** | Locks the exact versions of those dependencies (the “which ones, exactly”) |

So in simple terms:

> 🟢 **`package.json`** = “What packages do I need?”
> 🔒 **`package-lock.json`** = “Which exact versions were installed?”

---

## 🧱 1️⃣ `package.json` — The Project Manifest

This is your project’s **blueprint**.

It defines:

* The project name, description, version
* The dependencies your app *requires*
* Optional metadata (scripts, author, license, etc.)

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "Learning Node",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^7.0.0"
  }
}
```

### 💡 Notice the `^` symbol:

* `"^4.18.0"` means “install **4.18.0 or any newer minor/patch version** (e.g. 4.19.1)”
* So `package.json` allows **some flexibility** — it doesn’t lock you to one exact version.

✅ Think of it as your “recipe” or shopping list.

---

## 🔒 2️⃣ `package-lock.json` — The Exact Snapshot

This file is automatically created (or updated) when you run:

```bash
npm install
```

It records:

* The **exact versions** of every dependency and sub-dependency installed.
* The **npm registry URLs** where they came from.
* The **integrity hashes** to ensure they haven’t been tampered with.

Example snippet:

```json
{
  "name": "my-app",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "express": "^4.18.0"
      }
    },
    "node_modules/express": {
      "version": "4.18.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
      "integrity": "sha512-xxyyzz..."
    }
  }
}
```





*****************************************************************************************

## 🧠 1️⃣ What `npm create vite@latest .` actually does

That command **sets up the full frontend structure for you** automatically.

When you run it (in an empty folder), it:

1. Asks which framework you want (e.g. Vanilla, React, Vue, Svelte, etc.)
2. Creates all the starter files for that framework:

   ```
   index.html
   main.js
   vite.config.js
   package.json
   ```
3. Installs basic dependencies needed for Vite to run the dev server.

✅ So you **don’t need to create HTML or CSS files manually first** —
Vite gives you a ready-made starting point.

---

## ⚙️ 2️⃣ What happens if you already have files

If your `frontend` folder already has files (like `index.html` or `style.css`) and you run:

```bash
npm create vite@latest .
```

then:

* Vite might **warn you** that the directory isn’t empty:

  ```
  ✖ Current directory is not empty. Continue? (y/N)
  ```
* If you say **yes**, it will create its project files **alongside your files**.
* It won’t delete anything, but there’s a chance of **naming conflicts** (e.g., overwriting `index.html`).

⚠️ So, it’s *safer* to run it in an **empty folder** (or one you don’t mind being reorganized).

---

## 🧩 3️⃣ Ideal workflow

Here’s the clean, professional sequence:

```bash
# Step 1 — Create your frontend folder
mkdir frontend
cd frontend

# Step 2 — Create the vite project inside it
npm create vite@latest .

# Step 3 — Choose “Vanilla” (if you just want HTML, CSS, JS)
#          or “React”, “Vue”, etc. depending on what you’re building.

# Step 4 — Install dependencies
npm install

# Step 5 — Run it
npm run dev
```

✅ This will automatically generate `index.html`, link it to a `main.js`,
and set up everything ready for Tailwind or any frontend library.

---

## 🧱 4️⃣ If you already created your own HTML/CSS manually

No problem — you can still use Vite later.

In that case:

* Move your files (`index.html`, `style.css`, `script.js`) into the new Vite folder’s structure.
* Then Vite will serve and build them for you.

Example:

```
frontend/
├── index.html        ← your original HTML
├── style.css         ← your original CSS
├── main.js           ← created by Vite
├── vite.config.js
└── package.json
```

Just make sure your `<script>` in `index.html` points to `/main.js`.


*************************************************************************************************************************


After this stage, Vite creates /public folder and /src folder .gitignore index.html ts.config.json in the frontend folder.

*************************************************************************************************************************

⚙️ 2️⃣ What npm install actually does

When you run:

npm install


npm looks at your package.json, and:

Reads the list of dependencies (e.g. vite, typescript)

Downloads their exact versions (and their sub-dependencies) from the npm registry

Stores them in a folder called node_modules/

Generates a file called package-lock.json to record exact versions for reproducibility

✅ After this, your folder will look like:

frontend/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── node_modules/         ← All dependencies installed here
└── src/


Now your project can actually run.

⚙️ 3️⃣ What gets installed (behind the scenes)

If you open package.json, everything under:

"devDependencies": { ... }


and

"dependencies": { ... }


is what npm installs.

For a simple Vite + TypeScript app, that means:

Package	Purpose
vite	The development server & bundler
typescript	TypeScript compiler and type-checking
@vitejs/plugin- (if any)*	Plugin to connect React/Vue/etc. with Vite
Any framework you selected (like react, vue, etc.)	Actual UI library you’ll use

npm will also recursively install everything those depend on — hundreds of small packages under the hood that make Vite work (e.g. esbuild, postcss, rollup).

🧱 4️⃣ Why it’s necessary

Without npm install, your project only has metadata —
it knows what dependencies it needs, but doesn’t have them yet.

So if you try to run:

npm run dev


you’ll get:

Error: Cannot find module 'vite'


Because Vite isn’t installed until npm install actually downloads it.

⚙️ 5️⃣ After installing — what happens next

Once installation completes, you can run:

npm run dev


✅ That starts the Vite development server:

Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/


And now your app will open in your browser — with hot reload, TypeScript support, and everything Vite offers.

*************************************************************************************************************************

In your package.json there are more details to add

under scripts, you need to specify how command like ***npm run start*** will work

You do that by adding a script

```js
  "scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

also you should add the type: module, so you can use ES6 import syntax

```js
  "type": "module",
```

You can also add a script as a watcher to check when there are changed so you should install 
npm insall --sav-dev nodemon

the you add this script to package.json

```js
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

🧠 1. What nodemon actually does

nodemon is a development tool that automatically restarts your Node.js app whenever you change a file (like server.js, a route, or controller).

Without it, you have to manually stop and restart Node every time you edit code.

So:

Tool	Behavior
node server.js	Runs the app once — no restarts on changes
nodemon server.js	Watches files and restarts automatically on save

That’s why it’s usually installed as a dev dependency:

npm install --save-dev nodemon

⚙️ 2. "type": "module" — how it affects you

Since your package.json includes:

"type": "module"


you’re using ES Modules (i.e., import/export syntax), not CommonJS (require()).

✅ Good news: nodemon supports ES Modules perfectly fine.
You just need to make sure your script uses node normally, no extra flags required (Node 14+ handles it).

🧩 3. How to configure scripts correctly

Here’s the best practice setup for your package.json:

```js
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Explanation:

npm run start → used in production. Runs your app once (no restarts).

npm run dev → used during development. Automatically restarts on file changes.

🧠 4. Why you need nodemon (and when you don’t)
Environment	Should you use nodemon?	Why
Local development	✅ Yes	Automatically reloads app when you save files
Production	❌ No	Production apps should be managed by process managers like PM2 or systemd
CI/CD pipelines	❌ No	Scripts run once, don’t need watchers

So in your workflow:

You’ll typically run npm run dev while building or testing APIs locally.

Then when deploying (server, VPS, etc.), you’ll use npm start — no nodemon.

⚙️ 5. Optional: fine-tuning nodemon

You can customize what files it watches or restarts by adding a nodemon.json file:

```js
{
  "watch": ["server.js", "routes/", "controllers/"],
  "ext": "js,json",
  "ignore": ["node_modules"],
  "exec": "node server.js"
}
```

That’s helpful if you have a big project and only want to restart when backend files change.

🧾 6. Without nodemon (manual alternative)

You can still use plain node — you’ll just have to restart manually every time you edit:

node server.js
It’s fine for simple scripts, but gets annoying fast once you start editing routes or DB logic often.


*************************************************************************************************************************

If you want Nodemon to automatically load .env variables on restart (so you don’t rely on dotenv inside your code):

Install dotenv-cli
:

npm install --save-dev dotenv-cli


Then update nodemon.json:

{
  "watch": ["server.js", "routes/", "controllers/"],
  "ext": "js,json",
  "ignore": ["node_modules"],
  "exec": "dotenv node server.js"
}


That way, it always loads .env variables when restarting.

b) Add a startup delay (if DB takes time)

```js
"delay": "500ms"
```

Sometimes helps if you have heavy DB connections and frequent restarts.


*************************************************************************************************************************


In the backend, install the needed dependencies
```js

  "dependencies": {
    "bcrypt": "^6.0.0",
    "dotenv": "^17.2.3",
    "fastify": "^5.6.1",
    "fastify-cookie": "^5.6.1",
    "fastify-cors": "^6.0.3",
    "fastify-multipart": "^5.3.1",
    "fastify-plugin": "^5.1.0",
    "fastify-static": "^4.6.1",
    "sqlite3": "^5.1.7"
  }
```

-----------------------------------------------------------------------------------------------------------------------------

Read more about other fastify modules in the ecosystem documentation here

https://fastify.dev/docs/v1.14.x/Documentation/Ecosystem/


-----------------------------------------------------------------------------------------------------------------------------
Why do we need all these fastify modules? 
Let's unravel them

Let’s start with **`fastify-cookie`** (modern equivalent: `@fastify/cookie`).


## 1. What `fastify-cookie` does

In short:

> It adds **cookie support** to Fastify:
>
> * parses incoming `Cookie` headers → `request.cookies`
> * lets you **set** cookies easily → `reply.setCookie(...)`
> * supports **signed cookies** for integrity

Without it, Fastify does **not** parse cookies by default. You’d just see the raw `Cookie` header and would have to parse it manually.

Official docs describe it as: “A plugin to add cookies support” using an `onRequest` hook to parse cookies before your handlers run.

---

## 2. Why you need it

Most real apps end up needing cookies for:

* Authentication (session IDs, JWTs)
* “Remember me”
* CSRF tokens
* Locale / theme preferences
* Tracking/logged-in state between requests

---

## 3. How it works (with examples)

### Basic setup

```js
import Fastify from "fastify";
import cookie from "@fastify/cookie"; // or "fastify-cookie" in older code

const fastify = Fastify();

await fastify.register(cookie, {
	// optional: for signed cookies
	secret: "a-very-long-secret-key-change-me", 
  // the secret can be generated and stored in the .env
});

// you can then read all the cookies like this
fastify.get("/read", async (request, reply) => {
	// all cookies as an object
	console.log(request.cookies);
	return { cookies: request.cookies };
});

//you can also set a cookie with its maturity this way
fastify.get("/set", async (request, reply) => {
	reply
		.setCookie("theme", "dark", {
			httpOnly: true,
			path: "/",
			maxAge: 60 * 60 * 24 * 30, // 30 days
		})
		.send({ ok: true });
});

fastify.listen({ port: 3000 });
```

### Signed cookies

<!-- When you pass a `secret`, you can do: -->
```js
reply.setCookie("session", "user-123", {
	signed: true,
	httpOnly: true,
});

console.log(request.cookies.session);        // verified value or undefined
console.log(request.unsignCookie(...));      // low-level access
```

This ensures the client can’t tamper with the cookie value without being detected.

---

## 4. Common use cases

Let’s make this very concrete.

### a) Session IDs

You store the **session ID** in a cookie, actual session data in Redis/DB:

```js
fastify.get("/me", async (req, reply) => {
	const sid = req.cookies.sid;
	if (!sid) return reply.status(401).send({ error: "No session" });

	// lookup in DB
	const user = await getUserBySessionId(sid);
	if (!user) return reply.status(401).send({ error: "Invalid session" });

	return { id: user.id, email: user.email };
});
```

### 5.2 For sessions

If your goal is **sessions**, consider:

* `@fastify/secure-session` – encrypted, stateless-style cookie-based sessions.
* `@fastify/session` – classic server-side sessions.

Both rely on `@fastify/cookie` under the hood (or need cookie support), so cookie plugin is usually still in the stack.

If you’re doing pure API + SPA:

* Use `Authorization: Bearer <token>` headers.
* No cookies at all.
* Then you don’t need `fastify-cookie` unless you later add web-login flows.

-----------------------------------------------------------------------------------------------------------------------------

**`fastify-cors`** (or its modern equivalent `@fastify/cors`).

This is one of the *most misunderstood but absolutely essential* Fastify plugins — especially when your **frontend (React/Vue/Next)** is on a different port or domain from your **backend (Fastify)**.

---

## 🧠 1. What `fastify-cors` / `@fastify/cors` does

> It enables your Fastify server to handle **CORS** (Cross-Origin Resource Sharing) —
> a browser security mechanism that controls which origins (websites) can make requests to your backend API.

Without it, browsers **block** your frontend’s fetch requests if they come from a different origin.

---

### 🔍 What is “origin”?

An **origin** = protocol + domain + port
(e.g. `https://myapp.com`, `http://localhost:5173`, etc.)

So if you’re running:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:3000`

Then by default, browser JavaScript **cannot fetch** your Fastify API (because it’s a different origin).

That’s where `fastify-cors` comes in — it tells the browser:

> “It’s safe to allow this external origin to access my server.”

---

## ⚙️ 2. How it works

When you register the plugin:

```js
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify();

// Enable CORS
await fastify.register(cors, {
	origin: "http://localhost:5173", // allow only this frontend
	credentials: true,               // allow cookies/auth headers
});
```

Fastify will now:

* Automatically add `Access-Control-Allow-Origin` headers to responses
* Handle `OPTIONS` preflight requests for complex methods (like `POST`, `PUT`, etc.)
* Optionally handle credentials (`Access-Control-Allow-Credentials`)

✅ So now your frontend app can talk to your Fastify API freely.

---

## 🧩 3. Typical use cases

Let’s see how it applies in real-world scenarios 👇

---

### a) Local dev: frontend + backend on different ports

```js
fastify.register(cors, {
	origin: "http://localhost:5173",
});
```

→ allows your local React/Vue dev server to fetch from Fastify.

---

### b) Production: hosted frontend and backend

```js
fastify.register(cors, {
	origin: "https://myfrontend.com",
});
```

→ Only that specific domain can send requests.

---

### c) Multiple allowed origins

If you want to allow both local and production:

```js
const allowedOrigins = [
	"http://localhost:5173",
	"https://myfrontend.com",
];

fastify.register(cors, {
	origin: (origin, cb) => {
		if (!origin || allowedOrigins.includes(origin)) {
			cb(null, true);
		} else {
			cb(new Error("Not allowed by CORS"), false);
		}
	},
});
```

This lets you dynamically validate origins at runtime.

---

### d) Public API

If you’re building a **public API** (no restrictions):

```js
fastify.register(cors, { origin: "*" });
```

⚠️ But be careful — this means *any* website can make requests.
Avoid this if your API has user data or requires authentication.


-----------------------------------------------------------------------------------------------------------------------------

## 🧠 1. What `fastify-multipart` does

> It lets Fastify handle **`multipart/form-data`** requests —
> the special kind of HTTP request browsers send when you upload files using a `<form>` or API like `FormData`.

Without it, Fastify only understands:

* `application/json` (for JSON bodies)
* `application/x-www-form-urlencoded` (for simple form fields)

If a request comes in with `multipart/form-data`, Fastify (by itself) won’t know how to read it —
you’d just get a raw unreadable stream.

`fastify-multipart` parses that stream into easy-to-use **fields** and **file streams**.

---

## ⚙️ 2. How it works

It’s a **plugin** that adds special request decorators:

* `request.file()` → to get a single uploaded file
* `request.files()` → to handle multiple uploads
* `request.parts()` → an async iterator over all form parts

It handles:

* parsing multipart boundaries
* file stream creation
* size limits
* temp storage or in-memory streaming

---

## 🧩 3. Basic setup

```js
import Fastify from "fastify";
import multipart from "@fastify/multipart";

const fastify = Fastify();

await fastify.register(multipart, {
	limits: {
		fileSize: 10_000_000, // 10 MB max per file
	},
});

fastify.post("/upload", async function (req, reply) {
	const file = await req.file(); // one file expected
	const { filename, mimetype, file: stream } = file;

	await pump(stream, fs.createWriteStream(`./uploads/${filename}`));

	return { status: "uploaded", name: filename, type: mimetype };
});

fastify.listen({ port: 3000 });
```

Here we used `req.file()` to handle one file.

`pump()` is a safe utility from the `pump` package for connecting readable → writable streams.

---

## 🧠 4. Real-world use cases

Let’s see where you’ll commonly need it 👇

---

### a) 🖼 Uploading profile images

Frontend sends:

```js
const form = new FormData();
form.append("avatar", fileInput.files[0]);

await fetch("/upload", {
	method: "POST",
	body: form,
});
```

Backend route:

```js
fastify.post("/upload", async (req, reply) => {
	const data = await req.file();
	const filename = `avatar_${Date.now()}_${data.filename}`;
	await pump(data.file, fs.createWriteStream(`./uploads/${filename}`));
	return { success: true, path: `/uploads/${filename}` };
});
```

---

### b) 📁 Uploading multiple files

Frontend:

```js
const form = new FormData();
for (const file of files) form.append("docs", file);
await fetch("/multi", { method: "POST", body: form });
```

Backend:

```js
fastify.post("/multi", async (req, reply) => {
	const parts = req.parts();
	for await (const part of parts) {
		if (part.file) {
			const dest = fs.createWriteStream(`./uploads/${part.filename}`);
			await pump(part.file, dest);
		}
	}
	return { uploaded: true };
});
```

---

### c) 🧾 Upload + metadata (mixed form fields)

HTML form might include both file(s) and other data (like title, description).

You can access text fields via:

```js
const data = await req.file();
console.log(data.fields); // { title: "My document" }
```

Or iterate manually and handle parts differently based on whether they have `.file`.

---

### d) 🧰 Stream processing (no file saving)

You can also *stream* directly to a cloud service instead of saving locally:

```js
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

fastify.post("/upload", async (req, reply) => {
	const file = await req.file();
	const params = {
		Bucket: "my-bucket",
		Key: file.filename,
		Body: file.file,
		ContentType: file.mimetype,
	};
	await s3.send(new PutObjectCommand(params));
	return { ok: true };
});
```

This avoids ever writing to disk — perfect for serverless deployments.

---

## ⚖️ 5. Why you need it

Without `fastify-multipart`, the uploaded file would be a **raw binary stream** under `req.raw`,
and you’d have to parse multipart boundaries manually — which is tedious and error-prone.

`fastify-multipart` gives you:
✅ automatic parsing
✅ safe file limits
✅ backpressure-aware streaming
✅ simple API for files & fields

---

## 🧱 6. Options and configuration

Common config fields:

```js
fastify.register(multipart, {
	addToBody: true, // parse non-file fields into req.body
	limits: {
		fieldNameSize: 100,   // max field name length
		fieldSize: 1000000,   // max field value size
		files: 2,             // max number of files
		fileSize: 10_000_000, // per-file limit
	},
	onFile: async (part) => {
		// optional global handler
		await pump(part.file, fs.createWriteStream(`./uploads/${part.filename}`));
	},
});
```

-----------------------------------------------------------------------------------------------------------------------------


##  What `fastify-plugin` does

> `fastify-plugin` is used to **turn a normal function into a reusable Fastify plugin**.
> It tells Fastify:
> “This code is a *plugin* — don’t encapsulate it, and make its decorations and hooks available globally (if registered globally).”

In simpler words:

> It’s how you **package reusable logic** (like DB connections, utilities, or routes) so you can use them cleanly across your app or even publish them to npm.

---

## ⚙️ 2. Why you need it

When you just register a function like this:

```js
fastify.register(async (fastify) => {
	fastify.decorate("db", myDb);
});
```

Fastify will encapsulate that registration.
That means — any `fastify.decorate`, hooks, or routes inside are **only available inside that plugin’s scope**, not in the rest of your app.

That’s called **encapsulation**, and it’s part of Fastify’s design for safety and modularity.

However — sometimes you **do want** those decorations (like your DB instance) to be available globally.

That’s where `fastify-plugin` comes in.

---

## 🔧 3. Basic example

### Without `fastify-plugin`

```js
// db.js
export async function dbConnector(fastify) {
	const db = await connectToDatabase();
	fastify.decorate("db", db);
}
```

### Main file

```js
import Fastify from "fastify";
import { dbConnector } from "./db.js";

const fastify = Fastify();
await fastify.register(dbConnector);

fastify.get("/", async (req, reply) => {
	console.log(fastify.db); // ❌ undefined (encapsulated)
});
```

### ✅ With `fastify-plugin`

```js
// db.js
import fp from "fastify-plugin";

async function dbConnector(fastify) {
	const db = await connectToDatabase();
	fastify.decorate("db", db);
}

export default fp(dbConnector);
```

Now:

```js
import Fastify from "fastify";
import dbPlugin from "./db.js";

const fastify = Fastify();
await fastify.register(dbPlugin);

fastify.get("/", async (req, reply) => {
	console.log(fastify.db); // ✅ works everywhere
});
```

So `fastify-plugin` removes the encapsulation boundary for that plugin — its decorations become visible to the rest of the app.

---

## 🧩 4. Why encapsulation exists

Encapsulation in Fastify means each plugin has its **own isolated context** — its own set of routes, hooks, and decorations.

This is great for:

* building independent modules
* avoiding accidental interference
* testing plugins in isolation

But sometimes, you need shared state (like a database connection, utility, or auth decorator) — that’s when you use `fastify-plugin`.


-----------------------------------------------------------------------------------------------------------------------------

🔥 Excellent — now we’re at the last core one: **`fastify-static`** (or in modern Fastify, `@fastify/static`).

This plugin powers one of the most common things a backend does:

> Serving static assets like images, uploaded files, or even your entire frontend build (React, Vue, Svelte, etc.) directly from your Fastify server.

Let’s go deep step-by-step 👇

---

## 🧠 1. What `fastify-static` does

> It lets your Fastify app **serve static files** (HTML, CSS, JS, images, PDFs, etc.) from a local folder via HTTP.

Think of it as Fastify’s version of Express’s `express.static()` middleware.
Without it, Fastify only handles **dynamic routes** — it won’t automatically serve files from disk.

So `fastify-static` adds an efficient static file server built on Node’s `fs` streams and `send` library.

---

## ⚙️ 2. Basic setup

Let’s start simple.

```js
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify();

// Serve files from ./public folder
fastify.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
	prefix: "/public/", // optional URL prefix
});

fastify.listen({ port: 3000 });
```

✅ Now if you have:

```
public/
 ├─ logo.png
 ├─ index.html
 └─ css/style.css
```

You can access them directly:

```
http://localhost:3000/public/logo.png
http://localhost:3000/public/css/style.css
```

---

## 🧩 3. Real-world use cases

Let’s look at several **practical scenarios** 👇

---

### a) 💻 Serving your frontend build (React, Vue, etc.)

When you build your frontend, you usually get something like:

```
frontend/dist/
 ├─ index.html
 ├─ assets/
 ├─ bundle.js
```

You can serve it via:

```js
fastify.register(fastifyStatic, {
	root: path.join(__dirname, "../frontend/dist"),
});
```

Then visiting `http://localhost:3000` loads your SPA.
(You might also add a fallback route to send `index.html` for all unknown paths — see below.)

---

### b) 📸 Serving user-uploaded files

If you’re using `fastify-multipart` to upload files to `./uploads`,
you can expose them with:

```js
fastify.register(fastifyStatic, {
	root: path.join(__dirname, "uploads"),
	prefix: "/uploads/", // accessible under /uploads/
});
```

Now an uploaded image saved as `uploads/123.png` is accessible at:

```
http://localhost:3000/uploads/123.png
```

This is perfect for profile pictures, documents, and attachments.

---

### c) 📁 Serving multiple directories

You can register multiple static directories if needed:

```js
fastify.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
	prefix: "/public/",
});

fastify.register(fastifyStatic, {
	root: path.join(__dirname, "uploads"),
	prefix: "/uploads/",
});
```

So `/public` and `/uploads` serve separate folders.

---

### d) ⚙️ Fallback route for SPAs

Single Page Apps (React Router, Vue Router, etc.) need the **same index.html** for all routes (e.g. `/about`, `/dashboard`).

Add this after your static registration:

```js
fastify.setNotFoundHandler((req, reply) => {
	if (req.raw.url.startsWith("/api")) {
		reply.code(404).send({ error: "Not found" });
	} else {
		reply.sendFile("index.html"); // serve SPA
	}
});
```

Now `/dashboard` or `/settings` will render your app.

---

## ⚡ 4. Options explained

```js
fastify.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
	prefix: "/assets/",           // default: '/'
	decorateReply: true,          // adds reply.sendFile()
	serveDotFiles: false,         // ignore hidden files (like .env)
	cacheControl: true,           // adds cache headers
	maxAge: "1d",                 // caching duration
});
```

* **`root`** → Folder path to serve files from.
* **`prefix`** → URL prefix (optional).
* **`decorateReply`** → Adds `reply.sendFile(filename)` helper.
* **`cacheControl`, `maxAge`** → Control browser caching.
* **`serveDotFiles`** → Protect hidden files like `.env`.

---

## 💡 5. Using `reply.sendFile()`

When `decorateReply` is true (default), Fastify adds a shortcut:

```js
fastify.get("/", (req, reply) => {
	reply.sendFile("index.html"); // automatically looks in root
});
```

That’s super handy for fallback routes or conditional responses.

---

## ⚙️ 6. Example: Full backend + frontend integration

```js
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });

// Serve React build
fastify.register(fastifyStatic, {
	root: path.join(__dirname, "../client/dist"),
	prefix: "/", // serve at root
});

// API routes
fastify.get("/api/hello", async () => ({ msg: "Hello from API" }));

// Fallback to SPA
fastify.setNotFoundHandler((req, reply) => {
	if (!req.raw.url.startsWith("/api")) {
		reply.sendFile("index.html");
	} else {
		reply.code(404).send({ error: "Not found" });
	}
});

fastify.listen({ port: 3000 });
```

Now:

* `/api/hello` → Fastify route
* `/` or `/dashboard` → React app served from dist

Perfect for full-stack apps 🚀

---

## 🧾 7. Why we need it

Without this plugin:

* Fastify doesn’t serve files at all — only responds to defined routes.
* You’d have to manually use `fs.createReadStream()` to send files, which is inefficient.
* You’d lose built-in caching, MIME type detection, and range support (for media).

With `fastify-static`, you get all that automatically.


-----------------------------------------------------------------------------------------------------------------------------

*************************************************************************************************************************


The next step now is to create a server.js file in the backend, and configure it

the fastify documentation gives a nice guide

https://www.npmjs.com/package/fastify?activeTab=readme

// Require the framework and instantiate it
// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})


*************************************************************************************************************************

After this, here are the net steps

| Step  | Task                                        | Why / Goal                                               |
| ----- | ------------------------------------------- | -------------------------------------------------------- |
| **1** | 🟩 Add `.env` and `dotenv` to backend       | For config management (port, DB path, secrets, etc.)     |
| **2** | 🟩 Add SQLite (database connection)         | To start storing real data (users, posts, etc.)          |
| **3** | 🟩 Connect frontend to backend (via fetch)  | To test API calls from your frontend                     |
| **4** | 🟨 Configure Nginx                          | Only *after* both backend & frontend run well separately |
| **5** | 🟧 Dockerize all (frontend, backend, nginx) | Optional final deployment step                           |


*************************************************************************************************************************


### DOTENV

https://www.npmjs.com/package/dotenv

As early as possible in your application, import and configure dotenv:
It is a great plus to mention that your env file should never be pushed into public repo. So you should add a .env to gitignore so it is not pushed, and a standrad practice is to create a .env.example file that lists the key that are needed in the env files without the values.


*************************************************************************************************************************
### DATABASE

mkdir data
touch data/database.sqlite3

we can create a seperate file to setup the database, we will call this file, ***db.js*** in the our backend.

in db.js file, we will design how our created databse will work. How kt will creat tables on initialization.

we will need to import somethings inside this file

```js
import sqlite3 from 'sqlite3'
import fs from 'node.fs'
import path from 'path'
import { fileURLToPath } from "url";
```

why do we need to import these libraries or modules. many people just import sqlite3 and it works. To be candid, in production if not all imports are well added somthign can break. 

🧠 1. fs — the File System module
To work with files and folders on your computer.
When setting up a database (like SQLite), you might need to:
Check if a folder exists before creating or opening the database file.
Create a directory for your database if it doesn’t exist.
Read or write initialization SQL scripts (schema.sql, seed.sql, etc.).

Example:

```js
import fs from "node:fs";

const dbFolder = "./backend/data";

// if folder doesn't exist, create it
if (!fs.existsSync(dbFolder)) {
	fs.mkdirSync(dbFolder, { recursive: true });
}
```
Without fs, you couldn’t safely create or verify that folder before connecting to your SQLite file.
The caveat is that, SQLite automatically creates the .sqlite file for you if the directory exists — but it cannot create the folder itself.


🧭 2. path — for safe file paths
Purpose: To create and manage file paths that work on any operating system (Windows, macOS, Linux).
For example:

```js
import path from "path";
const dbPath = path.join(process.cwd(), "backend", "data", "db.sqlite");
```
This ensures your path separators (/ or \) are correct regardless of OS.

Using path (and optionally fileURLToPath) ensures your database path is always absolute, based on the file’s own location — not on where the process was started. Now no matter where you run your code — node backend/app.js, npm start, pm2, or vercel —
your database path will always resolve correctly.

Once you correctly use both of these:

```js
import path from "path";
import { fileURLToPath } from "url";
```

and then set your path like this:

```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

then ✅ Node.js will always locate your database file correctly, no matter where or how your app is executed.


Lets, dive deep

## 🧩 Line 1:

```js
const __filename = fileURLToPath(import.meta.url);
```

### 🧠 What’s going on here:

In CommonJS (the old Node.js module system), we always had two global variables available:

```js
__filename // gives the current file’s full path
__dirname  // gives the current directory path
```

But when Node.js introduced **ES Modules** (using `import`/`export`),
those two no longer exist automatically. ❌

So we need to **recreate them manually**.

---

### 🔍 Breaking down this line

#### 🧱 `import.meta.url`

* This gives the **URL of the current module**.
* For a local file, it looks like this:

  ```
  file:///Users/abdulazeez/projects/backend/database.js
  ```

#### ⚙️ `fileURLToPath(import.meta.url)`

* This converts that `file:///` URL into a **real file system path**.
* The result will look like:

  ```
  /Users/abdulazeez/projects/backend/database.js
  ```

#### 🪄 Assign it:

```js
const __filename = fileURLToPath(import.meta.url);
```

So now you’ve recreated the **absolute path** to your current file — just like old `__filename`.

---

### ✅ Example result

If your file is:

```
/home/abdulazeez/myapp/src/database.js
```

then:

```js
console.log(__filename);
```

prints:

```
/home/abdulazeez/myapp/src/database.js
```

---

## 🧩 Line 2:

```js
const __dirname = path.dirname(__filename);
```

### 🧠 What’s happening:

* You already have the file path (`__filename`).
* `path.dirname()` takes a full file path and **returns the folder it’s inside**.

So from:

```
/home/abdulazeez/myapp/src/database.js
```

it gives you:

```
/home/abdulazeez/myapp/src
```

Now you have your **directory path** — that’s your recreated `__dirname`.

---

### ✅ Example

```js
console.log(__dirname);
```

➡️ `/home/abdulazeez/myapp/src`

You can now safely use this with `path.join()`:

```js
const dbPath = path.join(__dirname, "data", "db.sqlite");
```

➡️ `/home/abdulazeez/myapp/src/data/db.sqlite`


*************************************************************************************************************************
After we have done these imports, we have to noe create a function that we will use to setup the database using fastify

we say 
```js
function setupDb(fastify){
  //we declare the database directory here, and confirm if it is present.
  const dbDir = path.resolve(__dirname, "data")

  // if this directory exists before we continue, otherwise we create it and use recursive:true to create every other directory needed to lead it it
  if(!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, {recursive: true});
  }
}
```

Let’s explain both parts of ***sync*** and ***recursive: true*** in detail:

### 👉 `Sync` methods

### 👉 `recursive: true`

---

## 🧠 1. What the **`Sync`** means

When you see `fs.existsSync()` or `fs.mkdirSync()`, that **Sync** means **synchronous** — i.e. the operation *blocks* the program until it finishes.

So in your example:

```js
if (!fs.existsSync(dbDir)) {
	fs.mkdirSync(dbDir, { recursive: true });
}
```

this code says:

> “Before going any further, check if this folder exists — and if not, create it.
> Wait until it’s done before continuing.”

That’s it.

---

### 💡 Why use the Sync version here

Creating or checking a folder is a **tiny, one-time** operation that happens **before** your server or database starts running.

You don’t need to make it asynchronous because:

* It only runs once.
* It finishes almost instantly.
* It simplifies the logic (no callback or Promise needed).

So it’s perfectly fine — even ideal — to use the synchronous (`Sync`) version here.

---

### ⚠️ When *not* to use Sync

If you were doing something that happens **many times**, or **could take a while** (like reading lots of files in a web server request),
then you’d prefer the asynchronous version:

```js
fs.exists(dbDir, (exists) => {
	if (!exists) {
		fs.mkdir(dbDir, { recursive: true }, (err) => {
			if (err) console.error(err);
		});
	}
});
```

But for setup scripts, startup configuration, or one-time initialization → synchronous is clean and safe ✅

---

## 🧩 2. What **`recursive: true`** means

This option tells Node.js:

> “If the parent directories don’t exist, create them too.”

Example:

```js
fs.mkdirSync("backend/data/db", { recursive: true });
```

### Without `recursive: true`:

* If `backend/` exists but `backend/data/` doesn’t → ❌ Error (`ENOENT`).
* You’d have to create each folder manually.

### With `recursive: true`:

* Node will **automatically create all missing parent folders** along the path.
* So even if `backend/` or `data/` didn’t exist, it’ll make them for you.
* No errors, just quietly ensures the whole path exists ✅

*************************************************************************************************************************

Let's proceed

```js

import sqlite3 from 'sqlite3'
import fs from 'node.fs'
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

function setupDb(fastify){
  //we declare the database directory here, and confirm if it is present.
  const dbDir = path.resolve(__dirname, "data")

  // if this directory exists before we continue, otherwise we create it and use recursive:true to create every other directory needed to lead it it
  if(!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, {recursive: true});
  }

  // now we are sure our dbDir is present, so we can now do somethign similar with out dbpath

  const dbPath = path.join(dbDir, "db.sqlite")

}
```
you should ask a question, “If we create the folder when missing, why don’t we also create the file when missing?”
Node.js (and the OS) will not automatically create missing folders. So if ./backend/data/ doesn’t exist, you must create it yourself, But SQLite will automatically create the .sqlite database file when you connect to it, if it doesn’t exist.

So lets proceed
From here we Connect to (or create) the SQLite database

```js

import sqlite3 from 'sqlite3'
import fs from 'node.fs'
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export function setupDb(fastify){
  const dbDir = path.resolve(__dirname, "data")
  if(!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, {recursive: true});
  }
  const dbPath = path.join(dbDir, "db.sqlite")

  //connect or create the database

  const db = new sqlite3.Databse(dbPath, (err) => {
    if (err) {
      console.error("Error creating database: " err.message);
      return;
    }

    // if we dont have error, then it means database was created

    console.log("Database connected successfully");

    // now wr do db.run to creaete all the table we need and their respective columns
    db.run(
      `CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        wins INTEGER DEFAULT 0,
        losses INTEGER DEFAULT 0,
        avatar TEXT DEFAULT 'avatar.png',
        preferred_language TEXT DEFAULT 'en',
        social_features_enabled BOOLEAN DEFAULT 1
      )`
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        token TEXT NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES players(id) ON DELETE CASCADE
      )`
    )
  })
  fastify.decorate("saliteDb", db);
}
```

***Question:***

```js
fastify.decorate("sqliteDb", db);
```

---

## 🧠 1. What `fastify.decorate()` does

`decorate()` is a **Fastify API** method used to **add custom properties or functions** to the Fastify instance.

In plain English:

> It lets you “attach” extra tools or data (like a database connection) to the Fastify server object,
> so you can access them anywhere in your routes, hooks, or plugins.

---

### 🧩 Example conceptually

If you write:

```js
fastify.decorate("hello", "world");
```

Then anywhere in your app (like a route):

```js
fastify.get("/", async (request, reply) => {
	return fastify.hello; // "world"
});
```

You can think of it like:

> `fastify.hello = "world"`

But it’s done through Fastify’s internal plugin system — which is safer, scoped, and extendable.

---

## 🧱 2. In your case

```js
fastify.decorate("sqliteDb", db);
```

means:

> “Add a property named `sqliteDb` to the Fastify instance,
> and set its value to my SQLite database connection (`db`).”

---

### So if you have:

```js
const db = new sqlite3.Database(dbPath);
fastify.decorate("sqliteDb", db);
```

Then later, in any route:

```js
fastify.get("/items", (req, reply) => {
	fastify.sqliteDb.all("SELECT * FROM items", (err, rows) => {
		if (err) reply.send(err);
		else reply.send(rows);
	});
});
```

✅ You can use the same database connection (`db`) everywhere without re-importing or recreating it.

---

## 🧩 3. Where the argument `sqliteDb` comes from

That’s just the **name you choose** for your decoration — it doesn’t exist beforehand.

It’s the *key* that you define when decorating Fastify.

In this code:

```js
fastify.decorate("sqliteDb", db);
```

* `"sqliteDb"` → the name/key you want to attach to the Fastify instance.
* `db` → the **actual object or value** you’re attaching (the SQLite connection).

You could call it anything:

```js
fastify.decorate("database", db);
```

and later access it with:

```js
fastify.database.all("SELECT * FROM items");
```

So the name is fully customizable — `sqliteDb` is just a developer choice.

---

## ⚙️ 4. Why we use `decorate()` instead of plain assignment

You *could* technically do:

```js
fastify.db = db;
```

But `fastify.decorate()` is **the official, safe way** because:

* It integrates with Fastify’s plugin system.
* It prevents accidental overwrites.
* It can be scoped to specific plugins.
* It works with encapsulation (so decorators in one plugin don’t leak into others unless intended).

*************************************************************************************************************************

after creating this database js, we want to import it into our server

we also import ***path*** and ***fileURLToPath***
then we also import all the fastify modules which we have installed




*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************
*************************************************************************************************************************

### DOCKER


Then
✅ Containerize all three and run them together using **Docker Compose** (so they can talk to each other like a real app).

---

# 🧩 STEP-BY-STEP WORKFLOW

---

## **1️⃣ Install Docker (and Docker Compose)**

Before anything else:

* Install Docker Desktop (on Windows/Mac) or `docker` + `docker-compose` (on Linux).
* Verify with:

```bash
docker --version
docker compose version
```

✅ Once Docker is installed and running, you can build and run containers from anywhere.

---

## **2️⃣ Create `Dockerfile` in each folder**

Ideally, the file should be names, "Dockerfile" with a capitalized "D", but in the documentation, they allow a fallback for a small case starting "d".

So, go into the frontend folder, and create a file called "Dockerfile"

```Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build
```

(this is like when you download a file, and you move to its folder, then you install all it needs to run)

what do they all mean?

FROM means: start with a base image (a prebuilt environment).
Here, we use Node.js v20 as our build environment.
AS builder names this stage — we’ll refer to it later when we copy the built files in the nginx's dockerfile.

👉 It’s like saying:
“Start a fresh container that already has Node.js installed, and call it builder.”


WORKDIR /app
Sets the working directory inside the container.
All following commands will run inside /app.
If /app directory doesn’t exist, Docker creates it.

COPY package*.json ./
Copies your package.json and package-lock.json (or yarn.lock) files into the container.
This ensures Docker knows what dependencies to install.

RUN npm install
Runs npm install inside the container.
Installs all dependencies listed in package.json.

✅ After this step, all dependencies are inside the container — no need for a local node_modules.

COPY . .
Copies all the rest of your project files (source code, assets, etc.) from your machine into the container’s /app directory.

RUN npm run build
Runs your frontend build script (like vite build or react-scripts build).
Produces optimized static files (e.g., inside /app/dist or /app/build).

These are the files your web server will serve to users.


Now let us also create the Docker file for the backend

```Dockerfile
FROM node:20
WORKDIR /app
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev
RUN groupadd -r appuser && useradd -r -g appuser appuser
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN chown -R appuser:appuser /app
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]
```

## ⚙️ Line-by-line Explanation

---

### 🟦 `FROM node:20`

* This sets your **base image**.
* You’re starting from the **official Node.js v20** Docker image.
* It already comes with Node and npm installed.

✅ This means you don’t need to manually install Node or npm — just use it right away.

---

### 🟨 `WORKDIR /app`

* Sets `/app` as the **working directory** inside the container.
* All subsequent commands (`COPY`, `RUN`, etc.) will happen inside `/app`.
* If `/app` doesn’t exist, Docker creates it automatically.

✅ Equivalent to doing `cd /app` before running the next commands.

---

### 🟩 `RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev`

* Installs **SQLite3** and its development libraries.
* `apt-get update` refreshes the package list.
* `apt-get install -y` installs the packages without asking for confirmation (`-y` = yes).

✅ You’re doing this because your app likely uses a **SQLite database**, and Node needs the native SQLite libraries available inside the container.

---

### 🟧 `RUN groupadd -r appuser && useradd -r -g appuser appuser`

* Creates a **non-root user** (`appuser`) and group.
* `-r` = system user (no home directory, meant for services).
* `-g appuser` assigns the user to the group.

✅ Security best practice:
You don’t want your Node app running as **root** inside the container — this command sets up a safe user account that will later run the app.

---

### 🟦 `COPY package.json package-lock.json ./`

* Copies only your dependency files first (not the entire project).
* This allows Docker to **cache** your dependencies between builds, improving speed.
  (If your source code changes but your dependencies don’t, Docker skips reinstalling npm packages.)

✅ Best practice for Docker layer caching.

---

### 🟨 `RUN npm ci`

* Runs `npm ci` instead of `npm install`.
* `npm ci` = **clean install** based on your `package-lock.json` — it installs exact dependency versions, faster and more reliable for production.

✅ Great choice — guarantees consistent builds.

---

### 🟩 `COPY . .`

* Copies all your remaining source files (Fastify app, routes, configs, etc.) from your local folder to the container’s `/app`.

✅ Now your app’s code exists inside the container.

---

### 🟧 `RUN chown -R appuser:appuser /app`

* Changes ownership of the `/app` directory to your `appuser` user and group.
* Ensures the non-root user you created has permission to read/write inside `/app`.

✅ Prevents permission errors later when the container runs as `appuser`.

---

### 🟦 `USER appuser`

* Switches from the default root user to the safer `appuser` you created earlier.

✅ From this line onward, all commands (including running Node) will execute as this non-root user — improving container security.

---

### 🟨 `EXPOSE 3000`

* Declares that the app inside this container **listens on port 3000**.
* It doesn’t open the port to your host — it’s just documentation and helps Docker Compose link containers.

✅ In your `docker-compose.yml`, you’ll later map it like:

```yaml
ports:
  - "3000:3000"
```

or Nginx will proxy to `http://backend:3000`.

---

### 🟩 `CMD ["node", "server.js"]`

* Defines the **default command** that runs when the container starts.
* It runs your Fastify (or Express) server.

✅ Equivalent to typing `node server.js` in your terminal, but Docker runs it automatically when the container starts.

---


Now, Let us create our server Docker file

```Dockerfile
FROM nginx:stable

#before we copy anything we should install openssl hat provides a cryptographic library implementing the SSL/TLS protocols. It is widely used to secure internet communications by encrypting data between a server and a browser, and it includes tools for generating private keys, creating certificates, and other cryptographic functions

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
RUN mkdir /etc/nginx/ssl
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/generate-cert.sh /docker-entrypoint.d/generate-cert.sh
RUN chmod +x /docker-entrypoint.d/generate-cert.sh
COPY --from=builder /app/dist /usr/share/nginx/html

---

What is happening here?

Now you switch to a clean **Nginx** environment to serve the static frontend files.

```dockerfile
FROM nginx:stable
```

* Starts from the official Nginx image.
* This image is smaller and faster than Node — perfect for serving built static files.
* It’s also more secure, because it doesn’t include npm or dev tools.

---

```dockerfile
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
```

* Installs **OpenSSL** so that the container can generate SSL/TLS certificates (for HTTPS).
* Then removes the package cache to keep the image small.

---

```dockerfile
RUN mkdir -p /etc/nginx/ssl
```

* Creates a directory where SSL certificates will be stored.

---

```dockerfile
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
```

* Copies your custom **nginx.conf** from your project into the container.
* This file defines how Nginx routes traffic — for example, serving `/index.html` or proxying `/api` to your backend.

---

```dockerfile
COPY nginx/generate-cert.sh /docker-entrypoint.d/generate-cert.sh
RUN chmod +x /docker-entrypoint.d/generate-cert.sh
```

* Copies a **shell script** that automatically generates self-signed SSL certificates each time the container starts.
* Puts it in `/docker-entrypoint.d/`, a special folder Nginx runs automatically when starting up.
* `chmod +x` makes it executable.

✅ This means HTTPS certificates are created dynamically — no manual setup needed.

---

```dockerfile
COPY --from=builder /app/dist /usr/share/nginx/html
```

* **This is the key line connecting the two stages.**
* It copies the built frontend files from the **builder stage** (`/app/dist`) into Nginx’s default web root (`/usr/share/nginx/html`).
* Nginx then serves these files directly when users access the site.
