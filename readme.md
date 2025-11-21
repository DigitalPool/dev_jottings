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

```js
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
```

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

Now, we move to structuring our fastify system
There is a standard way that allows you seperate your fastify communication into
***controllers*** , ***schemas*** and ***routes***

How does it look?

A perfect example is if you have a fastify get route thats add friends like this

```js

fastify.post('/addfriends', async (req, reply) => {
  const { friend } = req.body;

  try {
    await new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO friends_list (name, nickname, age) 
        VALUES (?, ?, ?)
        `,
        [friend.name, friend.nickname, friend.age],
        function (err) {
          if (err) reject(err);
          else resolve(this);
        }
      );
    });

    return reply.send({ success: true });

  } catch (error) {
    console.error("Error adding friend:", error.message);
    return reply.code(422).send({ error: "Unable to add friend" });
  }
});


```

For this  design, we can have it registered in a routes folder, that will have all the routes that are working for a certain or similar service, page or functionality

we can say, friendsRoutes.js
we then can design the parent route this way:

```js
export default async function friendsRoutes (fastify, options){

}
```

before we put any routes, if there requests, or routes will be needing the database, we call fastify to give us the instance of the database we have declared and decorated earlier, so it will look like

```js
export default async function friendsRoutes (fastify, options){
  const db = fastify.sqliteDb
  // or const db = fastify.database if you decorated yours as database

}
```

Now, any routes put in this parent, has access to the database, and can right or read from it as they like.
Next thing now, we put in our route


```js
export default async function friendsRoutes (fastify, options){
  const db = fastify.sqliteDb
  // or const db = fastify.database if you decorated yours as database

    fastify.post('/friends', async (req, reply) => {
    const { friend } = req.body;

    try {
      await new Promise((resolve, reject) => {
        db.run(
          `
          INSERT INTO friends_list (name, nickname, age) 
          VALUES (?, ?, ?)
          `,
          [friend.name, friend.nickname, friend.age],
          function (err) {
            if (err) reject(err);
            else resolve(this);
          }
        );
      });

      return reply.send({ success: true });

    } catch (error) {
      console.error("Error adding friend:", error.message);
      return reply.code(422).send({ error: "Unable to add friend" });
    }
  });
}
```

But the work is not done here,

We should define request and response structures that we are expecting into schemas objects of their own, 
and then pass them while designing the fastify route.

so we could have a ***friendsSchemas.js*** file
then we can have ***addFriendsSchema*** object which we will export

Then, we extract the whole route body inside controllers that already desing them,

then we use/register these schemas + controllers in a routes file of that functionality.
so,

```js
export const addFriendsSchema = {
  //every request requires some parameters to execute, 
  // so we should ask for those parameters. So we start with params

  params: {

  }

}
```

in this ***params***, this is where you can perform some validation 
lets unravel it before proceeding

*********************************************************************************

- **Fastify’s `params` schema** is based on **JSON Schema**, so it supports MANY more keywords than just `type`, `properties`, and `required`.

# ✅ **1. The required structure of `params`**

`params` must always be an object schema:

```js
params: {
  type: "object",
  properties: {},
  required: []
}
```

These 3 fields form the base, but you can add much more.

---

# 🔥 **2. Everything you can put inside `params`**

## **(A) type**

```js
type: "object"
```

Only `"object"` is allowed for `params`.

---

## **(B) properties**

Defines each URL parameter.

```js
properties: {
  friendType: { type: "string" },
  count: { type: "integer" }
}
```

---

## **(C) required**

Which parameters are required?

```js
required: ["friendType"]
```

---

# 🧠 **(D) Additional JSON Schema keywords you can use**

Since each param is a schema itself, you can use these:

### **1. string validators**

For string parameters:

```js
properties: {
  name: {
    type: "string",
    minLength: 3,
    maxLength: 20,
    pattern: "^[a-zA-Z]+$",
    enum: ["close", "best", "family"]
  }
}
```

**Useful for things like `/friends/type/best`**

---

### **2. number validators**

If your params include numbers:

```js
properties: {
  count: {
    type: "integer",
    minimum: 1,
    maximum: 100
  }
}
```

---

### **3. boolean parameters**

Fastify supports boolean params if converted manually.

```js
properties: {
  isActive: { type: "boolean" }
}
```

---

### **4. format**

Helpful for IDs:

```js
properties: {
  userId: { type: "string", format: "uuid" }
}
```

---

### **5. description (Swagger)**

```js
properties: {
  id: {
    type: "string",
    description: "User ID"
  }
}
```

---

### **6. default values**

(Only works in query/body — not very common in params)

---

### **7. examples (Swagger)**

```js
properties: {
  id: {
    type: "string",
    example: "12345"
  }
}
```

---

### **8. nullable**

```js
nullable: true
```

---

### **9. additionalProperties**

You can control whether extra params are allowed (usually false):

```js
additionalProperties: false
```

---

### **10. patternProperties**

Rare, but possible:

```js
patternProperties: {
  "^id_[0-9]+$": { type: "string" }
}
```

---

# 🧱 Complete Example for Your Schema

Here is a very complete schema for your `addFriendsSchema`:

```js
export const addFriendsSchema = {
  params: {
    type: "object",
    additionalProperties: false,   // ❗ Best practice
    required: ["friendType", "count"],
    properties: {
      friendType: {
        type: "string",
        enum: ["close", "best", "family"],
        description: "Type of friend to add"
      },
      count: {
        type: "integer",
        minimum: 1,
        maximum: 20,
        description: "Number of friends to add"
      }
    }
  }
};
```

Route:

```js
fastify.post('/friends/:friendType/:count', {
  schema: addFriendsSchema
}, async (req, reply) => {
  return {
    message: `Added ${req.params.count} ${req.params.friendType} friends`
  };
});
```


*************************************************************************************************************************

Now, let's continue

```js
export const addFriendsSchema = {
  //every request requires some parameters to execute, 
  // so we should ask for those parameters. So we start with params
  // now, we know what params defines in it, basically like
  // type, properties, required and maybe additionalProperties

  params: {
      type: 'object',
      properties: {
        friendName: {type: 'string'},
        friendID: {type: 'integer'},
      },
      required: ['friendName','friendId']
  }

}
```

This params is more or less what we are expecting in the request body. we can also prepare a similar response schema
with what we are expecting the the response body after a request has been received, successful or not. so lets add it.

Now, let's continue

```js
export const addFriendsSchema = {
  params: {
      type: 'object',
      properties: {
        friendName: {type: 'string'},
        friendID: {type: 'integer'},
      },
      required: ['friendName','friendId']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Friend added'
        }
      }
    }
    401: (
      type: 'object',
      properties: {
        error: {
          type: 'string',
          example: 'Unauthorized'
        }
      }
    )
  }

}
```

With these schemas designed, we can now add them to our fastify route we are designing

*************************************************************************************************************************

```js

import {addFriendsSchema} from 'addFriendsSchema.js'

export default async function friendsRoutes (fastify, options){
  const db = fastify.sqliteDb
  // or const db = fastify.database if you decorated yours as database

     fastify.post('/addfriends', {schema: addFriendsSchema}, async (req, res) => {

  })
}
```

*************************************************************************************************************************

Now, lets us extract everything under that '/friends' routes into a controller we can import into the route.
This controller doesent neet to be passed the db, because, remember, by the time we are registering it in the routes
function, we will already define the db for all.

so, we export something that has all the route bodies

```js
export const friendsController = {
  async addFriends(request, response, db) {
      const { friend } = req.body;
      try {
        await new Promise((resolve, reject) => {
          db.run(
            `
            INSERT INTO friends_list (name, nickname, age) 
            VALUES (?, ?, ?)
            `,
            [friend.name, friend.nickname, friend.age],
            function (err) {
              if (err) reject(err);
              else resolve(this);
            }
          );
        });

        return reply.send({ success: true });

      } catch (error) {
        console.error("Error adding friend:", error.message);
        return reply.code(422).send({ error: "Unable to add friend" });
      }
    };

  //we then can add other rotes bodies here
  // async deleteFriends(request, response, db)...
  // async blockFriends(request, response, db)...

  //then we access them by doing friendsController.addFriends, or friendsController.deleteFriends etc
}

```

*************************************************************************************************************************


This controller with the route we have now, is the raw SQLite logic. 
But we should simplify (or abstract) this logic using runQuery, getQuery, and allQuery helpers in a utils/helpers.js file
that contains functions that helps us execute queries on our data base

This is the raw, low-level implementation logic.

```js
await new Promise((resolve, reject) => {
  db.run(
    "INSERT INTO friends_list (name, nickname, age) VALUES (?, ?, ?)",
    [friend.name, friend.nickname, friend.age],
    function (err) {
      if (err) reject(err);
      else resolve(this);
    }
  );
});
```

It works fine but is:
* repetitive
* verbose
* not DRY
* harder to read
* harder to reuse*
This is why we create helpers.

So instead of writing this inside every controller:
```js
await new Promise(...)
```

You write:

```js
await runQuery(db, "INSERT ...", params)
```

This is what your controller becomes after simplification:

Before (raw version)
```js
await new Promise((resolve, reject) => {
  db.run(sql, params, cb);
});
```

After (using helper)

```js
await runQuery(db, `
  INSERT INTO friends_list (name, nickname, age)
  VALUES (?, ?, ?)
`, [friend.name, friend.nickname, friend.age]);

```
* Readable. Clean. Reusable.
MUCH cleaner.

*************************************************************************************************************************


Here are the helper functions

```js
// Database helper functions
export function runQuery(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err)
      else resolve(this)
    })
  })
}

export function getQuery(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err)
      else resolve(row)
    })
  })
}

export function allQuery(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}
```


what do these querires return
understanding what each helper **returns** is essential so you know exactly what you're working with inside your controllers.

# ✅ 1. **`runQuery` returns the RESULT OBJECT from `db.run()`**


### What does `this` contain?

When SQLite runs an INSERT/UPDATE/DELETE:

`this` contains:

```js
{
  lastID: 5,     // ID of inserted row (INSERT only)
  changes: 1     // Number of rows modified
}
```

### Example:

```js
const result = await runQuery(db, "INSERT INTO users(name) VALUES(?)", ["Azeez"]);

console.log(result);
```

**Output:**

```js
{
  lastID: 12,
  changes: 1
}
```

### Meaning:

* `lastID` → the inserted row’s id (auto-increment)
* `changes` → number of rows affected

  * 1 = success
  * 0 = nothing changed

---

# ✅ 2. **`getQuery` returns ONE row**

### What it returns:

`db.get()` returns **the first row only** (or `undefined` if nothing is found).

### Example:

```js
const user = await getQuery(db, "SELECT * FROM users WHERE id = ?", [5]);

console.log(user);
```

**Output:**

```js
{
  id: 5,
  name: "Azeez",
  age: 27
}
```

If no match:

```js
undefined
```

---

# ✅ 3. **`allQuery` returns an ARRAY of rows**

### What it returns:

`db.all()` returns an **array** (might be empty):

### Example:

```js
const users = await allQuery(db, "SELECT * FROM users");

console.log(users);
```

**Output:**

```js
[
  { id: 1, name: "Azeez" },
  { id: 2, name: "John" },
  { id: 3, name: "Fatima" }
]
```

If no rows exist:

```js
[]
```

---

# 🎯 Summary Table

| Helper       | SQLite method | Returns                   | Example                  |
| ------------ | ------------- | ------------------------- | ------------------------ |
| `runQuery()` | `db.run()`    | `{ lastID, changes }`     | For INSERT/UPDATE/DELETE |
| `getQuery()` | `db.get()`    | one object OR `undefined` | For fetching 1 row       |
| `allQuery()` | `db.all()`    | array of objects          | For fetching many rows   |

---

# 🧠 Quick examples to help you visualize

### INSERT

```js
const res = await runQuery(db, "INSERT INTO friends(name) VALUES(?)", ["Bilal"]);
console.log(res);
// { lastID: 7, changes: 1 }
```

### UPDATE

```js
const res = await runQuery(db, "UPDATE friends SET age = ? WHERE id = ?", [29, 7]);
console.log(res);
// { lastID: undefined, changes: 1 }
```

### DELETE nothing

```js
const res = await runQuery(db, "DELETE FROM friends WHERE id = 999");
console.log(res);
// { lastID: undefined, changes: 0 }
```

### GET one friend

```js
const friend = await getQuery(db, "SELECT * FROM friends WHERE id = ?", [7]);
console.log(friend);
// { id: 7, name: "Bilal", age: 29 }
```

### GET all friends

```js
const list = await allQuery(db, "SELECT * FROM friends");
console.log(list);
// [ {...}, {...}, {...} ]
```


*************************************************************************************************************************

Se lets simplyfy ouR code

```js
import {getQuery, runQuery, allQuery} from './backend/utils/helpers.js' //or anywhere your utils is located


export const friendsController = {
  async addFriends(request, response, db) {
      const { friend } = req.body;
      try {
        const result = await runQuery(db, `
				INSERT INTO friends_list (name, nickname, age) 
            VALUES (?, ?, ?)
			`, [friend.name, friend.nickname, friend.age])
        if (result.changes === 0) {
          return response.status(404).send({ error: 'unable to add friend' })
        } else {
          return response.send({ success: true });
        }
      } catch (error) {
        console.error("Error adding friend:", error.message);
        return response.code(422).send({ error: "Unable to add friend" });
      }
    }

  async deleteFriends(request, response, db)...
  async blockFriends(request, response, db)...

  // we then can add other rotes bodies here
  // async viewFriends(request, response, db)...
  // async sendFriendRequest(request, response, db)...

  //then we access them by doing friendsController.addFriends, or friendsController.deleteFriends etc
}

```


Now we have our databse query helpers inside out controller.
we can then import these controllers into our routes that has accepted the schema object earlier

```js

import friendsController from 'friendsController.js'


export default async function friendseRoutes (fastify, options){
  const db = fastify.sqliteDb
  // or const db = fastify.database if you decorated yours as database

    fastify.post('/addfriends', {schema: addFriendsSchema}, async (req, res) => {
      friendsController.addFriends(req, res, db);
  })
}
```

As clean as it can get. Allahuma baarik.

***And this is how you link all your routes to requests abd replies from the client or frontend***

*************************************************************************************************************************

Now is a perfect time to setup the ***authentication*** and the ***middleware*** logic

For ***authentication***, it happens that the client either tries to access a page/feature and is asked to login first.
A form is displayed to client, and they put in their details. On submit a authentication route is called.

How does this route look like

we have three files like we have explained for all routes earlier

* *** controllers/authController.js *** - the controllers sit here
* *** schemas/authSchema.js *** - define and authenticate the request & response syntax for the authentication
* *** routes/auth.js *** - the auth routes live here


*************************************************************************************************************************

In the authController is where all the logic and database executions happen. 
it is where all the serilization of images and assignment of cookies happen.

for this authentication, we will be needing some module or libraries or imports.
We need ***config*** from ***'dotenv'*** for us to be able to load environmental variables into out application memory, 
We need ***bcrypt*** from ***'bcrypt'*** for password-hashing algorithm used to securely store user passwords.
and we need ***pipeline*** from ***'stream'*** for handling file uploads in Node

Lets is explain what they all do.

*************************************************************************************************************************

using ***Config*** is th ecorrect way to load our .env file

```js
import { config } from 'dotenv';
config();
```

This loads environment variables from `.env` into:

```
process.env
```

So later you can do:

```js
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
```

Without `config()`, `SALT_ROUNDS` would be **undefined**.

---

# 🧠 **What `config()` actually does**

It looks for a `.env` file in your project root:

```
SALT_ROUNDS=10
NODE_ENV=development
DB_URL=mysql://root:password@localhost:3306/app
```

And loads them into `process.env`.

### Before `config()`:

```
process.env.SALT_ROUNDS === undefined
```

### After `config()`:

```
process.env.SALT_ROUNDS === "10"
```

---

# 🟦 **Where should you call `config()`?**

You only need to call it *once* in your entire app.

Three correct options:

### ✔️ Option 1 — In your main server file (best)

```js
// server.js or index.js
import { config } from 'dotenv';
config();
```

### ✔️ Option 2 — In app.js or bootstrap file

### ✔️ Option 3 — At the top of any file that needs env variables

But the BEST practice is:

👉 Call it **once** in your main entry file.

Then every file can use:

```js
process.env.JWT_SECRET
process.env.SALT_ROUNDS
process.env.NODE_ENV
```

without reloading dotenv.

---

# 🟦 **Why you see it inside the auth controller in this project**

Your file has:

```js
import { config } from 'dotenv';
config();
```

This works, but:

### ❗ It's not ideal placement.

Better would be:

* In your main Fastify server entry file (`server.js`, `index.js`, etc.)
* Before any controllers are imported

Because once dotenv is loaded, it's global.

---

# 🟢 **Is `config()` mandatory?**

Yes — *if* you want to use environment variables from `.env`.

Without calling `config()`:

* `process.env.SALT_ROUNDS` is undefined
* `process.env.NODE_ENV` may be undefined
* Your code may crash (bcrypt expects a number)

This line:

```js
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
```

relies on dotenv.


*************************************************************************************************************************

***pipeline***

If **user registration includes uploading a profile photo**, then, 
using `pipeline` is a correct and safe way to handle file uploads in Node.js + Fastify.


---

# ✅ **Why `pipeline` is useful for file uploads**

When a user uploads a photo:

```
Client → Fastify → Your file storage (local, S3, etc.)
```

Fastify gives you a **stream** for the uploaded file.

Example:

```js
const data = await req.file();
const fileStream = data.file;  // this is a readable stream
```

To save it safely, you need to pipe it to a writable stream:

```js
pipeline(fileStream, fs.createWriteStream('/uploads/file.jpg'), (err) => {
  if (err) throw err;
});
```

**Why not just use `.pipe()`?**

Because `.pipe()`:

* ❌ does NOT catch errors properly
* ❌ does NOT clean up streams
* ❌ can cause memory leaks
* ❌ crashes the server if the upload breaks mid-way

`pipeline()`:

* ✔️ catches errors safely
* ✔️ closes both streams on failure
* ✔️ handles backpressure
* ✔️ is the recommended method by Node.js core team

So yes — if you're handling profile picture uploads, `pipeline` is the best practice.

---

# 🟦 **Typical Fastify registration with profile photo**

```js
import { pipeline } from 'stream/promises';
import fs from 'fs';

fastify.post('/register', async (req, reply) => {
  const data = await req.file();

  const filePath = `uploads/${Date.now()}-${data.filename}`;

  await pipeline(
    data.file,              
    fs.createWriteStream(filePath)  
  );

  // Continue with saving user
  const { username, password } = data.fields;

  await fastify.mysql.execute(
    `INSERT INTO users (username, password, profile_photo) VALUES (?, ?, ?)`,
    [username, hashedPassword, filePath]
  );

  return { success: true };
});
```

---

# 🟩 **So when is pipeline necessary?**

### ✔️ User uploads a profile photo

### ✔️ Uploading files (PDF, video, images)

### ✔️ Sending a large file

### ✔️ Working with streams (CSV, logs, etc.)

---

# 🟥 **When pipeline is NOT needed**

* login
* registration without image
* JWT authentication
* simple JSON APIs
* email/password validation

*************************************************************************************************************************

***bcyrpt***
# 🟦 **What is bcrypt?**

**bcrypt is a password-hashing algorithm** used to securely store user passwords.

You *never store* user passwords in plain text.
Instead, you store a **hashed** version created by bcrypt.

Example:

User password:
`P@ssword123`

bcrypt hash stored in database:
`$2b$10$9QbztIYq8wgS2PayHQSlf.Cjt2NeLeJlb9M3vBtPUL.y0gHmJEBqO`

The hash is useless to hackers.
Even **bcrypt cannot reverse it**.

---

# 🟩 **Why do we use bcrypt?**

Because storing real passwords is dangerous.

Imagine your database is hacked.

### ❌ If you store plain passwords:

Hackers get all user accounts instantly.

### ✔️ If you store bcrypt hashes:

Hackers still cannot know the real passwords.

They cannot "unhash" them.

---

# 🟦 **How bcrypt works**

bcrypt applies a hashing algorithm many times (thousands of rounds) making it **computationally expensive** to crack.

### It uses 3 main concepts:

---

## 1️⃣ **Salt**

A *salt* is a random string added to each password before hashing.

Example:

Password: `password123`
Random salt: `A!x9#*sD`

Hashed result depends on BOTH.

This prevents:

* rainbow table attacks
* identical passwords generating identical hashes
* hacker guessing the hash by precomputing tables

---

## 2️⃣ **Rounds / Cost Factor**

This is how many times bcrypt re-hashes the input.

Example:

```js
bcrypt.hash("password123", 10)
```

Here “10” means:

* Perform the hash algorithm **2¹⁰ = 1024 times**
* The higher the number, the harder it is to crack
* But also slower for your server

Most apps use:

```
SALT_ROUNDS = 10 or 12
```

---

## 3️⃣ **Hashing Algorithm**

bcrypt uses Blowfish under the hood and is resistant to:

* brute force attacks
* GPU attacks
* parallel cracking

---

# 🟧 **IMPORTANT: bcrypt is NOT encryption**

* Encryption → reversible (can decrypt)
* Hashing → **one-way** and cannot be reversed

bcrypt is a **one-way function**.

You NEVER get the original password back.

---

# 🔥 **Real Use Cases of bcrypt**

## ✔️ 1. User registration

When user signs up:

```js
const hashed = await bcrypt.hash(password, SALT_ROUNDS);
store hashed in database
```

## ✔️ 2. User login

User enters password → compare with hashed version:

```js
const match = await bcrypt.compare(password, hashedPasswordFromDB);
```

If match → login success
If not → invalid password

## ✔️ 3. Protecting user accounts

Even if database leaks, hackers cannot see the real passwords.

## ✔️ 4. Authentication systems (Fastify, Express, NestJS, etc.)

Used anywhere you need to store credentials securely.

## ✔️ 5. API authentication

Storing hashed API keys or access tokens.

## ✔️ 6. Hashing secrets locally

Sometimes developers hash:

* sensitive IDs
* invitation codes
* reset tokens
* private data that should not be reversible

---

# 🟩 **Example in your code**

```js
const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
```

This ensures the password is stored securely.

During login:

```js
const passwordMatch = await bcrypt.compare(password, row.password);
```

bcrypt internally hashes the login password with the same salt and compares.


*************************************************************************************************************************

now let us proceed by importing all the modules and libraries

```js
import bcrypt from 'bcrypt'
import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
import { pipeline } from 'stream'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//if you use the latest import of pipeline from stream/promises, you dont need to promisify it anymore. 
// but lets proceed with this one for now

const pump = promisify(pipeline);

config();
// always convert .env variable to integers if you need them as numbers, cause 
// Everything inside process.env is a string, no matter what you set it to a number

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

//Some helper functions which we will put in a file called helpers.js
export function validateUsername(username) {
  return typeof username === 'string' && /^[A-Za-z0-9]{3,30}$/.test(username.trim())
}

export function validateEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function validatePassword(password) {
  return typeof password === 'string' && password.length >= 6 && password.length <= 200
}

export function generateSessionToken(userId) {
  const randomPart = crypto.randomBytes(32).toString("hex")
  return `${userId}.${randomPart}`
}

export function generateMatchToken() {
  const randomPart = crypto.randomBytes(24).toString("hex")
  return `mt.${randomPart}`
}

export function generateSafeFilename(mimetype) {
  const extension = mimetype.split('/')[1]
  const random = Math.random().toString(36).substring(2, 15)
  return `${Date.now()}_${random}.${extension}`
}


// Sanitize avatar path before proceeding the avatar as safe/
export function sanitizeAvatarPath(avatar) {
  console.log(`DEBUG: sanitizeAvatarPath called with:`, avatar)
  if (!avatar || typeof avatar !== 'string') return '/avatar.png'
  const base = path.basename(avatar)
  const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
  const ext = path.extname(base).toLowerCase()

  console.log(`DEBUG: File extension check - base: ${base}, ext: ${ext}`) 
  // Check extension first
  if (!allowedExts.includes(ext)) {
    console.log(`DEBUG: Extension ${ext} not allowed`)
    return '/avatar.png'
  }

  // Minimal file signature (magic number) validation
  const filePath = path.join(__dirname, '../public/avatars', base)
  console.log(`DEBUG: Checking file at path:`, filePath) // Debug path

  try {
    const fd = fs.openSync(filePath, 'r')
    console.log(`DEBUG: File opened successfully, fd:`, fd)
    const buffer = Buffer.alloc(16) // Increased buffer size
    const bytesRead = fs.readSync(fd, buffer, 0, 16, 0)
    fs.closeSync(fd)

    console.log(`DEBUG: File ${base} - Bytes read: ${bytesRead}`)
    console.log(`DEBUG: File ${base} - First 16 bytes:`, buffer.slice(0, 16).toString('hex'))

    if (bytesRead < 16) {
      console.log(`DEBUG: Not enough bytes read: ${bytesRead}`)
      return '/avatar.png'
    }

    // Debug: Log the actual bytes
    console.log(`DEBUG: File ${base} - First 16 bytes:`, buffer.slice(0, 16).toString('hex'))

    // JPEG: FF D8 FF
    if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
      console.log(`DEBUG: File ${base} - Detected as JPEG`)
      return `/avatars/${base}`
    }
    // PNG: 89 50 4E 47 0D 0A 1A 0A (need 8 bytes)
    if (bytesRead >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47 &&
      buffer[4] === 0x0D && buffer[5] === 0x0A && buffer[6] === 0x1A && buffer[7] === 0x0A) {
      console.log(`DEBUG: File ${base} - Detected as PNG`)
      return `/avatars/${base}`
    }
    // GIF: "GIF87a" or "GIF89a" (need 6 bytes)
    if (bytesRead >= 6 && buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x38 &&
      (buffer[4] === 0x37 || buffer[4] === 0x39) && buffer[5] === 0x61) {
      console.log(`DEBUG: File ${base} - Detected as GIF`)
      return `/avatars/${base}`
    }
    // WebP: "RIFF" + 4 bytes + "WEBP" (need 12 bytes)
    if (bytesRead >= 12 && buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46 &&
      buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50) {
      console.log(`DEBUG: File ${base} - Detected as WebP`)
      return `/avatars/${base}`
    }

    console.log(`DEBUG: File ${base} - No magic number match found`)
    // If none matched, treat as invalid
    return '/avatar.png'
  } catch {
    return '/avatar.png'
  }
}


// The function escapes HTML special characters so that user-provided text cannot break your
// HTML or inject code. It turns dangerous characters into safe harmless text.
export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// To prevent HTML injection and XSS (Cross-Site Scripting) attacks.
// If a user sends:
// <script>alert('hacked')</script>
// and you display it directly in your HTML page, it will run as JavaScript.
// If you pass it through escapeHtml(), it becomes:
// &lt;script&gt;alert('hacked')&lt;/script&gt;
// — which is safe and printed as text, not executed.


const authController = {
  //Register function
  async register(request, reply, db){
      reply.type('application/json')
    //so we are expecting the user to send their details from the frontend.
    // These details will be in the body of the request
      // before we go deep into registering this user, we can run some testx om their input data and verify if
      // they are correct using a try and catch block
    try {
      
      // we didnt use const here because they must be muttable, and we will be setting them during the code
      let username, email, password;

      // assign avatarFile name to a file in the directory, if user sets theirs, we reassign
      let avatarFilename = 'avatar.png';

      // firstly, we expect that this request is coming from a form that we set in the front end. And this form is 
      // supposed to have different entry types. So we check, does this request which is coming contain a 
      // Content-Type: multipart/form-data? If it does, then yes, this is what we are expecting. 
      // If it dosent, then possibly we can reject it if it is a must to have the avatar, or just collect 
      // the details and try to process it. So looks like client didnt upload image.

      if (request.isMultipart && request.isMultipart()) {
        //  ✔️ request.isMultipart Check: “Does Fastify support multipart on this route?”
        //  ✔️ request.isMultipart() Check: “Is THIS request a multipart/form-data upload?”

        //we are expecting four inputs, username, passwor, email and avatar. so we get them from the request

      username = request.body?.username.value ||''
      email = request.body?.email.value || ''
      password = request.body?.password.value || ''

      // now we will validate these inputs

      if (!username || !email || !password){
        return reply.status(400).send({
          error: 'Missing required fields: username, email password'
        })
      }

      //validate username format
      if(username.length < 3 || username.length > 30 || !validateUsername(username)){
        return reply.status(400).send({
          error: 'Wrong username format'
        })
      }
      if(!validateEmail(email)){
        return reply.status(400).send({
          error: 'Wrong email format'
        })
      }
      if(!validatePassword(password)){
        return reply.status(400).send({
          error: 'Wrong password format'
        })
      }
      
      //now let us check if the user uploaded an image so we reassign it to the avatarFile
      const avatarFile = rquest.body?.avatar;

      if (avatarFile && avatarFile.type === 'file' && avatarFile.fieldname === 'avatar'){
          const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

          //mime - Multipurpose Internet Mail Extensions
          if (!allowedTypes.includes(avatarFile.mimetype)) {
            return reply.status(400).send({ error: 'Invalid image file type. Allowed types are: ' + allowedTypes.join(', ') })
          }

          const uploadDir = path.join(__dirname, '../public/avatars')
          if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

          avatarFilename = generateSafeFilename(avatarFile.mimetype)
          const filePath = path.join(uploadDir, avatarFilename)


          // let us now try to safe the file
          try {
            // Fastify multipart can give the file in two ways: 
            // Small files have a _buf property → you can save them directly using fs.writeFileSync()
            // Larger files are a stream → you must pipe the file stream into a write stream using:
              if (avatarFile._buf) {
                fs.writeFileSync(filePath, avatarFile._buf)
              } else {
                await pump(avatarFile.file, fs.createWriteStream(filePath))
              }

            // next we will verify if the file was successfully saved
            const status = fs.statSync(filePath)

            if (status.size === 0){
              // if no bytes were written. remove the filepath, and inform user about bad file
              fs.unlinkSync(filePath)
              return reply.status(400).send({ error: 'File upload failed - empty file.' })
              // in JavaScript, return inside an async function immediately stops the function
            }

            //but if status.size is not 0, that means the file was successfully saved, so we go ahead and sanitize the path
            // sanitize path function as pasted above is ensuring there is no unsafe or invalid uploads. It checks whether 
            // the filename generated for the uploaded avatar is unsafe or invalid, by checking if the sanitizer returned 
            // its fallback safe path.

            if(sanitizeAvatarPath(avatarFilename) === '/avatar.png'){
              // it means our function detected an issue and returned the safe file we have in memory, so we unlink again
              // and inform client of this error.
              fs.unlinkSync(filePath)
              return reply.status(400).send({ error: 'Invalid image file format' })
            }
          } catch (err) {
            // anyways if any error got away in all our checks, we will still catch it here, and still unlink the filepath and send error status
            console.error('Registration avatar upload error:', e)
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath)
            }
            return reply.status(422).send({ error: 'Avatar upload failed - file could not be processed' })
          }
      }  else {
        // just collect the details and try to process it. So looks like client didnt upload image
        ({ username, email, password } = request.body || {});
      }
  
      //we then use bcrypt to hash the password
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const result = await runQuery(db,
        `INSERT INTO players (username, email, password, wins, losses, avatar)
                             VALUES (?, ?, ?, 0, 0, ?)`,
                             [username, email.toLowerCase(), hashedPassword, `/avatars/${avatarFilename}`]
       )
  
       //now we have to generate session token cookies to help this registered user stay loggedin on the website till the 
       //end of the expiry of the cookie
  
       const sessionToken = generateSessionToken(result.lastID)
       // the run query returns the id of the last field inserted or query ran, so that is why we can use it in to get the 
       // last id of the last query ran, and pass it in out generate session token. Remember this fuction is just 
       // generating some 32 bytes tokens and assinign it to the user's Id. we will then save this token in the data base
       // and also set it as a cookie in the client browser, so anytime it is there, we will check for it and keep the user
       // logged in. When user is trying to do other things and it is not there, we log the user out innemdiately. 
  
      // you can see that here we now store the session token
       await runQuery(db, `INSERT INTO sessions (user_id, token) VALUES (?, ?)`, [result.lastID, sessionToken])
  
       // then we set the cookie
       reply.setCookie('sessionId', sessionToken, {
        httpOnly: true, //prevents client-side JavaScript from reading the cookie
        path: '/', //which URLs on your site the cookie is sent to-> is valid for the entire site
        signed: true, //signed with cookie secret
        secure: true, // can be sent via hhtps only
        maxAge: 365 * 24 * 60 * 60,
        sameSite: 'Strict', //the cookie is only sent if the request originates from the same site
       })
  
        // after we have added the user to the database and set a cookie for them, then we send a reply to 
        // the route, which can be received and checked if success to continue other operations
  
        reply.send({
          success: true,
          userId: result.lastID,
          username: escapeHtml(username),
          avatar: escapeHtml(`/avatars/${avatarFilename}`)
        })
      }
    } catch (err){
      // then we catch error
      // There are somethings we do not want to happen during registration. e.g, we may not want someone
      // registering with a username that is already in use. So in this case, our databases sqlite or mysql
      // always have an error that will be sent based on how we designed the fields. So if you have set 
      // username TEXT UNIQUE, the sqlite database will return an error of "UNIQUE constraint failed", to tell
      // which you can then check in this error function and handle appropriterly or inform the user

       if (err.message && err.message.includes('UNIQUE constraint failed')) {
        return reply.status(409).send({ error: 'Username or email already exists' });
      }

      if (err.message && err.message.includes('database')) {
        console.error('Database error during registration:', err);
        return reply.status(503).send({ error: 'Registration temporarily unavailable. Please try again later.' });
      }

      console.error('Registration error:', err);
        reply.status(422).send({ error: 'Registration could not be completed. Please check your data and try again.' });
      }
    },
  
  // now we design the login route
  // Login function
  async login(request, reply, db) {
     reply.type('application/json');
    try {
      const { username, password } = request.body || {};

      // Los datos ya están validados por Fastify schemas
      const row = await getQuery(db,
        `SELECT id, username, password, avatar, preferred_language, social_features_enabled FROM players WHERE username = ?`,
        [username.trim()]
      );

      if (!row) return reply.status(401).send({ error: 'Invalid credentials' });

      const passwordMatch = await bcrypt.compare(password, row.password);
      if (!passwordMatch) return reply.status(401).send({ error: 'Invalid credentials' });

      // Remove old sessions
      await runQuery(db, "DELETE FROM sessions WHERE user_id = ?", [row.id])

      // Crear nueva sesión
      const sessionToken = generateSessionToken(row.id)
      await runQuery(db, `INSERT INTO sessions (user_id, token) VALUES (?, ?)`, [row.id, sessionToken])

      reply.setCookie('sessionId', sessionToken, {
        httpOnly: true, //prevents client-side JavaScript from reading the cookie
        secure: false, // can be sent via hhtps only
        signed: true, //signed with cookie secret
        sameSite: 'Strict', //the cookie is only sent if the request originates from the same site
        path: '/' //which URLs on your site the cookie is sent to-> is valid for the entire site
      });

      // Set GDPR consent cookie with user's preferences from database
      const consentData = {
        necessary: true,
        analytics: true,
        social: !!row.social_features_enabled,
        timestamp: new Date().toISOString()
      };
      
      reply.setCookie('gdpr_consent', JSON.stringify(consentData), {
        path: '/',
        httpOnly: false, // Allow JavaScript access for frontend
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 365 * 24 * 60 * 60 // 1 year
      });

      reply.send({
        success: true,
        userId: row.id,
        username: escapeHtml(row.username),
        avatar: escapeHtml(row.avatar),
        preferred_language: row.preferred_language || 'en'
      });

    } catch (err) {
      if (err.message && err.message.includes('database')) {
        console.error('Database error during login:', err);
        return reply.status(503).send({ error: 'Login temporarily unavailable. Please try again later.' });
      }
      console.error('Login error:', err);
      reply.status(422).send({ error: 'Login could not be completed. Please try again.' });
    }
  },

  // Logout function
  async logout(request, reply, db) {
    const rawCookie = request.cookies.sessionId
    if (rawCookie) {
      const { value: sessionToken } = request.unsignCookie(rawCookie)
      await runQuery(db, "DELETE FROM sessions WHERE token = ?", [sessionToken])
    }
    reply.clearCookie("sessionId", { path: "/" });
    reply.clearCookie("gdpr_consent", { path: "/" }); // Clear GDPR consent cookie on logout
    reply.send({ success: true });
  }
}

export default authController


```


*************************************************************************************************************************

# 🟦 **1. Why `"UNIQUE constraint failed"` does NOT contain the word `"database"`**

This error is thrown when:

* The database connection is **working**
* The query was **received** by the database
* The database **successfully executed the query**
* The database **rejected the data** because it violates a rule (UNIQUE constraint)

This is a **normal, expected error** caused by the *client’s data*, not by server failure.

That's why SQLite/MySQL errors for constraint violations only contain something like:

```
UNIQUE constraint failed: players.username
```

This is not a connection problem…
It’s *your data* that violates:

```sql
UNIQUE
```

So the DB returns a **clean error name**, not “database error”.

---

### ✔️ Result:

This is the **client’s fault** → 409 Conflict
(Your code correctly uses this!)

---

# 🟥 **2. Why the *other* error contains `"database"`**

When you get errors like:

```
SQLITE_ERROR: database is locked
Error: database disk image is malformed
SQLITE_BUSY: database is busy
SQLITE_CANTOPEN: unable to open database file
```

Or in MySQL:

```
ER_BAD_DB_ERROR: Unknown database
ER_SERVER_SHUTDOWN: Server has gone away
```

These indicate:

### ❗ The database system failed

Not the data.

Examples of causes:

* database file corrupted
* DB server offline
* permissions wrong
* disk full
* connection pool problems
* query cannot run because DB crashed

These contain the word `"database"` because the error came from **the DB system failing**, not from your insert being invalid.

---

### ✔️ Result:

This is the **server’s fault** → 503 or 500
(Your code correctly uses 503)

---

# 🟩 **3. Your logic is EXACTLY correct — keep it**

```js
if (err.message.includes('UNIQUE constraint failed')) {
  return reply.status(409).send({ error: 'Username or email already exists' });
}

if (err.message.includes('database')) {
  return reply.status(503).send({ error: 'Registration temporarily unavailable. Please try again later.' });
}
```

This is a **perfect separation**:

| Error Type               | Who caused it?                                | Your HTTP code              | Why                     |
| ------------------------ | --------------------------------------------- | --------------------------- | ----------------------- |
| UNIQUE constraint failed | **Client mistake** (duplicate username/email) | **409 Conflict**            | Client must fix data    |
| “database ...”           | **Server/database problem**                   | **503 Service Unavailable** | User should retry later |

You are classifying errors the exact same way real companies do:

* **409** = conflict with existing data
* **503** = server temporarily broken
* **500** = unexpected developer bug

---

# 🟦 **4. Why "database" appears in some errors but not UNIQUE constraint**

* UNIQUE constraint = **logical constraint violation**
  → generated inside the SQL engine
  → not treated as a “database failure”

* “database …” errors = **infrastructure-level failure**
  → database file locked
  → database corrupted
  → server offline
  → permission denied
  → cannot open file

Those errors include `"database"` in the message because the engine signals:

> Something is wrong with the database itself, not with the query.


*************************************************************************************************************************


Great question — *and the answer is very important for how Fastify handles multipart forms.*

---

# ⭐ **Short Answer**

### ❗ **No — `request.isMultipart()` does NOT check whether the request contains both text AND image.**

It **only checks whether the request was sent as multipart/form-data**.

In other words:

```
if (request.isMultipart())
```

means:

> “Is this request using multipart/form-data encoding?”

NOT:

> “Does this request contain both fields + files?”

---

# 🟦 **What `request.isMultipart()` actually does**

It detects the Content-Type header:

```
Content-Type: multipart/form-data
```

That’s all.

If the request uses multipart, the condition returns **true**.
Otherwise (JSON, URL-encoded, etc.), it returns **false**.

---

# 🟧 **What your code is doing inside the multipart branch**

Once inside the multipart block, YOU (the developer) manually check:

### ✔️ Does it contain username?

```js
username = request.body?.username.value || ''
```

### ✔️ Does it contain email?

```js
email = request.body?.email.value || ''
```

### ✔️ Does it contain password?

```js
password = request.body?.password.value || ''
```

### ✔️ Does it contain avatar file?

```js
const avatarFile = request.body?.avatar
```

So **you** are verifying the presence of fields manually.

Fastify does **NOT** automatically validate fields inside multipart.

---

# 🟩 **Summary: What `request.isMultipart()` *does* and *does not* do**

### ✔️ What it DOES check:

* Whether the request is **multipart/form-data**
* Whether it contains file-upload style formatting

### ❌ What it does NOT check:

* Whether the request includes any files
* Whether the request includes any text fields
* Whether the required fields exist
* Whether the avatar exists
* Whether the request includes both file + text fields

All of THAT validation is **your responsibility**, and your code is doing it correctly.

---

# 🟧 **Better Naming (to avoid confusion)**

Instead of:

```js
if (request.isMultipart && request.isMultipart()) {
```

Use:

```js
const isMultipart = request.isMultipart && request.isMultipart();

if (isMultipart) {
    // handle file uploads
}
```

Or more descriptive:

```js
if (request.isMultipart()) {
    // Handle multipart form (fields + files)
}
```

---

# ⭐ **Final Answer**

`request.isMultipart()` only checks if the request uses `multipart/form-data`.
It **does NOT** check whether:

* text inputs exist
* files exist
* avatar is included
* both file + text fields are present

You still need to manually check for specific fields inside the multipart block — and you ARE doing that correctly.

---

If you want, I can help you write a **smart wrapper function** like:

```js
validateMultipartFields(request, ['username', 'email', 'password'], ['avatar']);
```

Which removes all the manual validation and makes your controllers cleaner.

*************************************************************************************************************************


### ⭐ **Short Answer:**

**YES — `request.isMultipart()` *is relevant*** in your register route.
But **NO — it does NOT check whether the user provided both images and text.**
It only checks **whether the request body is of type `multipart/form-data`**.

Let me explain very clearly why you need it and what it does.

---

# 🟦 **Why you need `request.isMultipart()` in the register route**

Your register route supports **two types of registration inputs**:

---

## ✔️ **1. JSON registration**

For example:

```json
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "test123"
}
```

This uses:

```
Content-Type: application/json
```

In this case, Fastify schema validation applies.

Your code handles this with:

```js
({ username, email, password } = request.body || {});
// JSON already validated by Fastify schemas
```

---

## ✔️ **2. Multipart registration (with avatar picture)**

For example:

```
username = "john"
email = "john@gmail.com"
password = "test123"
avatar = file.png
```

Which uses:

```
Content-Type: multipart/form-data
```

Fastify **cannot** validate multipart with the normal schema system.
So you must validate it manually — and that is exactly what your code does.

---

# 🟦 **What `request.isMultipart()` actually checks**

### ❗ It checks only ONE thing:

**"Is this request `multipart/form-data`?"**

This depends on the HTTP header:

```
Content-Type: multipart/form-data; boundary=----...
```

---

# 🟥 **What it does NOT check**

`request.isMultipart()` does **NOT** check:

* whether there is a photo
* whether there are text fields
* whether all required fields exist
* whether the avatar is included
* whether both file + fields are present
* whether the form is valid

You check all THAT manually right after.

---

# 🟩 **Is `request.isMultipart()` relevant in your route?**

### ✔️ YES, it is important

Because your route supports *two modes*:

| Input Type        | How you handle it                   |
| ----------------- | ----------------------------------- |
| JSON request      | Fastify schema validates it         |
| Multipart request | You manually validate fields + file |

If you remove this condition, your backend would not know how to differentiate the two input types.

### 🟦 It's the "switch" between:

**JSON registration**
vs
**File + fields registration**

---

# 🟧 **Why you must keep this condition**

Without:

```js
if (request.isMultipart && request.isMultipart()) {
```

you would not know whether:

* to treat the request as JSON
* or treat it as a file upload
* or validate manually
* or use schema validation

This would break the logic.

---

# 🟪 **Simplified version of what's happening**

```
if request is multipart/form-data:
    handle file uploads
    manually validate fields
else:
    request is JSON
    rely on Fastify schema validation
```

That is EXACTLY what your code does, and it is correct.

---

# ⭐ Final Summary

### `request.isMultipart()` is **relevant** because:

* It distinguishes between **JSON registration** and **multipart registration**
* It tells your controller whether it should expect files
* It allows you to apply the correct validation path
* It prevents applying JSON schemas to multi-part requests

### But it does **NOT** check:

* Whether a file exists
* Whether text inputs exist
* Whether both fields + file are provided

Your manual validations take care of that.

*************************************************************************************************************************

Here is a **clean, simple explanation** of what is happening in this line:

```js
const extension = avatarFile.mimetype.split('/')[1]
const randomString = Math.random().toString(36).substring(2, 15)
avatarFilename = `${Date.now()}_${randomString}.${extension}`
```

Let’s go **line-by-line**, in plain English, with examples.

---

# 🟦 **1. Extracting the file extension**

```js
const extension = avatarFile.mimetype.split('/')[1]
```

### ✔ What `avatarFile.mimetype` looks like:

* `"image/png"`
* `"image/jpeg"`
* `"image/webp"`

### ✔ What `.split('/')` does:

Split into an array:

```js
"image/png".split('/')
→ ["image", "png"]
```

### ✔ What `[1]` does:

Take the second element, i.e. the extension:

```
"png"
"jpeg"
"webp"
```

### 📌 Final value:

```
extension = "png"
```

---

# 🟦 **2. Generating a random string**

```js
const randomString = Math.random().toString(36).substring(2, 15)
```

Let’s break it:

### ✔ `Math.random()`

Gives a random number between 0 and 1, e.g.:

```
0.725547823821
```

### ✔ `.toString(36)`

Converts the number to **base-36** (0–9 + a–z)

Example:

```
0.725547823821 → "0.q9xk2whd2pm4u"
```

Base-36 is used because it gives:

* short
* URL-safe
* alphanumeric strings

### ✔ `.substring(2, 15)`

Remove the `"0."` and keep 13 characters:

```
"q9xk2whd2pm4u"
```

### 📌 Final value:

```
randomString = "q9xk2whd2pm4u"
```

---

# 🟦 **3. Building a secure filename**

```js
avatarFilename = `${Date.now()}_${randomString}.${extension}`
```

### ✔ `Date.now()`

Returns current timestamp in milliseconds:

```
1673451238123
```

### ✔ Combine all pieces:

```
timestamp_randomstring.extension
```

### Example output:

```
1673451238123_q9xk2whd2pm4u.png
```

---

# 🟩 **Why do we build filenames like this?**

### ✔ To prevent overwriting existing files

User uploading `avatar.png` won't conflict with another `avatar.png`.

### ✔ To avoid malicious filenames

Hackers can't send filenames like:

```
../../../etc/passwd
```

We ignore user-supplied filenames entirely.

### ✔ To create unique, unpredictable names

Makes it hard to force filename collisions or attacks.

---

# ⭐ **Final Summary**

### 📌 Full code:

```js
const extension = avatarFile.mimetype.split('/')[1]
const randomString = Math.random().toString(36).substring(2, 15)
avatarFilename = `${Date.now()}_${randomString}.${extension}`
```

### 📌 Human Explanation:

1. **Get file extension from MIME type**
   `"image/png" → "png"`

2. **Generate a secure random string**
   `"q9xk2whd2pm4u"`

3. **Build a unique filename**
   `1698987654321_q9xk2whd2pm4u.png`

### 📌 Result:

A safe, unique filename guaranteed not to collide with others.

*************************************************************************************************************************


# ⭐ **Correct Understanding**

### ✔️ If you are sending *form data that includes files* (images, videos, PDFs, etc.) **AND** text fields

👉 **Yes, you must set the request’s `Content-Type` to `multipart/form-data`.**

This is required by **HTTP**, not just Fastify.

---

# 🟦 **Why?**

HTTP must know **how to parse the body**.

### If you send:

* text fields
* AND image files

Then the browser/postman/client must send:

```
Content-Type: multipart/form-data; boundary=----XYZ
```

This tells the server:

> “This request contains multiple parts: some text fields, some files.”

Fastify sees that header and then:

* `request.isMultipart()` → **true**
* `request.body` becomes a structure containing fields and files
* Fastify uses `@fastify/multipart` to parse it

---

# 🟥 **What happens if you forget to set Content-Type: multipart/form-data?**

### ❌ Fastify **will NOT parse files**

### ❌ `request.isMultipart()` will be false

### ❌ `request.body.avatar` will be undefined

### ❌ Your validations will fail

### ❌ The user cannot upload a profile photo

So yes, setting the content type matters.

---

# 🟩 **When to send multipart/form-data?**

| Situation                                  | Content-Type                        |
| ------------------------------------------ | ----------------------------------- |
| JSON data only (username, password, email) | `application/json`                  |
| File + text (e.g., avatar + username)      | `multipart/form-data`               |
| Multiple images                            | `multipart/form-data`               |
| Form posts without files                   | `application/x-www-form-urlencoded` |

---

# 🟦 **Examples**

### ✔️ JSON request (NO images)

Postman:

```
Content-Type: application/json
```

Body:

```json
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "123456"
}
```

Fastify → NOT multipart
Route will use:

```js
({ username, email, password } = request.body || {});
```

---

### ✔️ Multipart request (image + fields)

Postman:

```
Content-Type: multipart/form-data
```

Body (FormData):

```
username: john
email: john@gmail.com
password: 123456
avatar: <image file>
```

Fastify → multipart
Route will use your file upload logic.

---

# 🟧 **Important Reminder**

You **don’t manually set** `Content-Type: multipart/form-data` when uploading through:

* HTML `<form enctype="multipart/form-data">`
* Postman “form-data”
* Axios/FormData
* fetch + FormData

They automatically set the right header with a boundary.

---

# 🟨 **If you manually set Content-Type: multipart/form-data in code, do NOT include boundary**

Because the browser/client must generate it automatically.

Example (WRONG):

```js
headers: { "Content-Type": "multipart/form-data" }
```

Correct:

```js
headers: formData.getHeaders()
```

Or let Postman/browser handle it.

---

# ⭐ Final Answer

✔️ **YES** — when sending a request that includes **both images and text fields**, the request must use:

```
Content-Type: multipart/form-data
```

So that Fastify can correctly parse the files and text.

🟦 And that is why `request.isMultipart()` becomes **true**, which activates your manual file + field validation.

---

If you want, I can show you:

* How the client (React, Postman, browsers) correctly sends multipart
* How to test multipart routes
* How to unify JSON + multipart validation into one clean code path


*************************************************************************************************************************

When you use an HTML `<form>` that includes a file input, the browser **automatically** sets:

```
Content-Type: multipart/form-data; boundary=----XYZ
```

But *only if you specify the correct `enctype` attribute.*
Here is the full, correct explanation:

---

# ✅ **1. When a form includes a file input, and you set `enctype="multipart/form-data"`**

Example:

```html
<form action="/register" method="POST" enctype="multipart/form-data">
  <input type="text" name="username">
  <input type="email" name="email">
  <input type="password" name="password">
  <input type="file" name="avatar">
  <button type="submit">Register</button>
</form>
```

### The browser automatically sends:

```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryXYZ
```

You do **not** set this manually.

---

# ❗ **2. If you forget `enctype="multipart/form-data"`**

Then the browser defaults to:

```
Content-Type: application/x-www-form-urlencoded
```

And files will **NOT** be sent at all.

So this is VERY important:

### ✔️ To send files from a form → you must include:

```html
enctype="multipart/form-data"
```

---

# 🧠 **3. The browser handles the boundary**

You will NEVER need to manually set:

```
Content-Type: multipart/form-data; boundary=xxx
```

Browsers and Postman generate the correct boundary automatically.

If you try to set Content-Type manually yourself, the upload will BREAK.

---

# 🟨 **4. Summary Table**

| Situation                                             | What Happens                      | Content-Type                        |
| ----------------------------------------------------- | --------------------------------- | ----------------------------------- |
| Form contains files + `enctype="multipart/form-data"` | Works                             | `multipart/form-data`               |
| Form contains files but NO enctype                    | Files are NOT submitted           | `application/x-www-form-urlencoded` |
| JSON body                                             | No files                          | `application/json`                  |
| Sending FormData in JS                                | Browser sets Content-Type for you | `multipart/form-data`               |

---

# 🟦 **5. Fastify Side**

Fastify checks:

```js
request.isMultipart()
```

If true, it knows the request is a file upload.

---

# 🌟 Final Answer

### ✔️ YES — If you use `<form enctype="multipart/form-data">`,

the browser will automatically send:

```
Content-Type: multipart/form-data
```

You never manually set this in frontend code.


*************************************************************************************************************************
let's take a look how the typical authSchema will look like.

```js
export const logInSchema = {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLenght: '1',
        maxLenght: '30',
        pattern: '^[a-zA-Z0-9_]+$'
      }
      password: {
        type: 'string',
        minLength: 6,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-={}\\[\\]|;:\'",.<>/?]).+$'
      }
    },
    additionalProperties: false,
    required: ['username', 'password']
  }
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        userId: { type: 'number' },
        username: { type: 'string' },
        avatar: { type: 'string' },
        preferred_language: { type: 'string' }
      }
    }
    400: {
    type: 'object',
    properties: {
      error: { type: 'string' }
      }
    },
    401: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    409: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    422: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    },
    503: {
      type: 'object',
      properties: {
        error: { type: 'string' }
      }
    }
  }
}

export const logoutSchema = {
  tags: ['Auth'],
  summary: 'Logout user and clear session',
  description: 'Removes the session from database and clears the sessionId cookie',
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true }
      },
      required: ['success']
    }
  }
};


export const registerSchema = {
  tags: ['Auth'],
  summary: 'Register a new user (multipart, avatar optional)',
  consumes: ['multipart/form-data'],
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLength: 3,
        maxLength: 30,
        pattern: '^[a-zA-Z0-9_]+$'
      },
      email: {
        type: 'string',
        format: 'email'
      },
      password: {
        type: 'string',
        minLength: 6
      },
      avatar: {
        type: 'string',
        format: 'binary',
        description: 'Avatar image file (optional)'
      }
    },
    required: ['username', 'email', 'password'],
    additionalProperties: false
  },
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        userId: { type: 'integer' },
        username: { type: 'string' },
        avatar: { type: 'string' },
      },
    },
    400: {
      type: 'object',
      properties: { error: { type: 'string' } },
    },
    409: {
      type: 'object',
      properties: { error: { type: 'string' } },
    },
    422: {
      type: 'object',
      properties: { error: { type: 'string' } },
    },
  },
}

```

***********************************************************************************************************


Fastify’s schema system has **specific keys** you can use, depending on what part of the request/response you want to validate or document.

Here is the **complete list** of useful schema keys you can use in Fastify:

---

# ✅ **1. body**

Validates the **POST**, **PUT**, **PATCH** request body.

```js
body: { type: 'object', properties: {} }
```

---

# ✅ **2. params**

Validates **URL params** like `/users/:id`.

```js
params: { type: 'object', properties: { id: { type: 'integer' } } }
```

---

# ✅ **3. querystring** (also called `query`)

Validates URL query parameters like:

`/users?limit=10&sort=name`

```js
querystring: { type: 'object', properties: {} }
```

---

# ✅ **4. headers**

Validates **request headers**.

Useful for auth tokens, API keys, etc.

```js
headers: {
  type: 'object',
  properties: {
    authorization: { type: 'string' }
  },
  required: ['authorization']
}
```

---

# ✅ **5. response**

Validates **what your API returns**.

This is very powerful for ensuring consistent API responses.

```js
response: {
  200: {
    type: 'object',
    properties: {
      token: { type: 'string' }
    }
  }
}
```

---

# 🟦 **6. tags** (Swagger only)

Used for grouping endpoints in Swagger UI.

```js
tags: ['Auth']
```

---

# 🟦 **7. summary** (Swagger only)

Short description in the Swagger UI docs.

```js
summary: "Login a user"
```

---

# 🟦 **8. description** (Swagger only)

Longer explanation than summary.

```js
description: "This endpoint logs in a user with username and password."
```

---

# 🟦 **9. consumes** (Swagger only)

Specifies content types the API accepts.

Useful for file upload:

```js
consumes: ['multipart/form-data']
```

---

# 🟧 **10. produces** (Swagger only)

Tells Swagger what the endpoint returns.

```js
produces: ['application/json']
```

---

# 🟩 **11. security**

Swagger security definitions (JWT, API key, etc.)

```js
security: [{
  bearerAuth: []
}]
```

---

# 🟦 **12. deprecated**

Marks an endpoint as deprecated (Swagger only).

```js
deprecated: true
```

---

# 🔥 **13. multipart (Fastify plugin option)**

Used when handling file uploads.

When using fastify-multipart:

```js
multipart: true
```

---

# 🟩 **14. cookies**

If using the fastify-cookie plugin, you can validate cookies.

```js
cookie: {
  type: 'object',
  properties: {
    sessionId: { type: 'string' }
  }
}
```

---

# ⭐ **Complete Fastify Schema Keys Table**

| Schema Key    | Purpose                              |
| ------------- | ------------------------------------ |
| `body`        | Validate POST/PUT/PATCH body         |
| `params`      | Validate URL params (`/:id`)         |
| `querystring` | Validate query string (`?sort=name`) |
| `headers`     | Validate headers                     |
| `response`    | Validate what you send back          |
| `tags`        | Swagger grouping                     |
| `summary`     | Swagger short description            |
| `description` | Swagger long description             |
| `consumes`    | Swagger incoming media types         |
| `produces`    | Swagger outgoing media types         |
| `security`    | Swagger security (JWT, etc.)         |
| `deprecated`  | Swagger mark deprecated endpoint     |
| `cookie`      | Validate cookies                     |
| `multipart`   | Indicate route accepts file uploads  |


*************************************************************************************************************************

Now that we have our authSchemas and AuthContollers designed, we now import them into our Auth Routes in a file Auth.js

```js
import authController from '../controllers/authController.js'
import { loginSchemaFull, logoutSchema, registerSchemaRequest } from '../schemas/authSchemas.js'

export default async function authRoutes(fastify) {
  const db = fastify.sqliteDb;

  // ------------------ REGISTER ------------------
  // Sin schema - la validación se hace en el controlador
  fastify.post('/register', { schema: registerSchemaRequest, attachValidation: true }, async (request, reply) => {
    await authController.register(request, reply, db)
  });

  // ------------------ LOGIN ------------------
  fastify.post('/login', { schema: loginSchemaFull }, async (request, reply) => {
    await authController.login(request, reply, db)
  });

  // ------------------ LOGOUT ------------------
  fastify.post('/logout', { schema: logoutSchema }, async (request, reply) => {
    await authController.logout(request, reply, db)
  })
}
```


***********************************************************************************************************

* Why does /register route use attachValidation: true

`attachValidation: true` is used in **Fastify** when you want to:

### ✅ **Run Fastify validation BUT handle the validation errors yourself in the controller**

---

# 🔍 **What Fastify does normally (without attachValidation)**

If you write:

```js
fastify.post('/register', { schema: registerSchemaRequest }, handler)
```

Then Fastify will:

* validate the body, params, query automatically
* **reject the request BEFORE calling your controller**
* return a built-in 400 validation error like:

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "body.username is required"
}
```

Your route handler (`authController.register`) will **not run**.

---

# 🔍 **What happens when you add `attachValidation: true`**

```js
fastify.post('/register', { 
  schema: registerSchemaRequest, 
  attachValidation: true 
}, async (request, reply) => {
  await authController.register(request, reply, db)
})
```

This changes the behavior:

### ✔ Fastify STILL validates using the schema

### ✔ BUT it does **NOT** automatically reject invalid input

### ✔ Instead, it attaches validation errors to:

```js
request.validationError
```

⚠ Your handler **will be called even if validation failed**, giving you full control.

---

# 🧠 Why is this important in your case?

Because **your register route handles multipart manually**, and Fastify cannot apply JSON schema validation to multipart/form-data.

So your logic is:

* Allow Fastify to validate **if it's JSON**
* For multipart uploads (files), do your own validation
* Always run the controller so you can check:

  ```js
  if (request.validationError) { ... }
  ```

This prevents Fastify from blocking multipart requests.

---

# ✅ When should you use `attachValidation: true`?

Use it when:

### 1️⃣ **You want custom error messages**

Instead of Fastify’s default 400 error, you return your own:

```js
return reply.status(400).send({ error: "Invalid email format" });
```

### 2️⃣ **You want validation AND also want controller logic to run**

Example: file uploads, mixed JSON + file validation.

### 3️⃣ **You want more control over the order of validation + logic**

---

# ❌ When should you NOT use it?

When the schema is simple and you want Fastify to reject invalid input automatically.

Example:

```js
fastify.post('/login', { schema: loginSchemaFull }, handler)
```

This is why your **login** and **logout** routes **do not** use `attachValidation`:
they only receive JSON, so Fastify’s automatic validation is enough.

---

# 👍 Summary

| Route       | Why attachValidation?                                        |
| ----------- | ------------------------------------------------------------ |
| `/register` | Needs manual validation for multipart, custom error handling |
| `/login`    | Pure JSON, schema works automatically                        |
| `/logout`   | Very simple schema                                           |

***********************************************************************************************************

after the authentication, we design a middleware that sits between the frontend and the backend, 
and ensure loggedIn user is actually authenticated to see the pages which they are trying to access.
The loggedIn user's Id is gotten from the database, which is the id registered there for him upon registration
confirmed from ther upon signup.

So we create a file called *** middleware/authPlugin.js *** and in it a file called 

so what should be in this folder?

In this folder is a fastify function, that varifies that the logged in user has a cookie in their computer that corresponds
with that that is already in the database, that has been saved and authorizes them to visit the page they are trying to visit.
If there is no rawcokkie, or it dosent correspond with an unsigned cookie, they will not be allowed, or even logged out as the
case maybe, depending on the severity of the abscence of the cookie and what they want to access.

```js
import { getQuery } from '../utils/helpers.js'

async function authPlugin(fastify, options) {
  fastify.decorateRequest('userId', null);
  const db = fastify.sqliteDb;

  fastify.addHook('preHandler', async (req, reply) => {
    const rawCookie = req.cookies.sessionId;
    if (!rawCookie) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }

    const { value: sessionId, valid } = req.unsignCookie(rawCookie);
    if (!valid) {
      return reply.status(401).send({ error: 'Invalid cookie' });
    }

	console.log("DEBUG: sessionId from authPlugin:", sessionId);
    // Buscar en la DB
    const row = await getQuery(db, "SELECT user_id FROM sessions WHERE token = ?", [sessionId])
    if (!row) {
      return reply.status(401).send({ error: "Session expired or invalid" })
    }

    req.userId = row.user_id;
  });
}

export default authPlugin;

```

*************************************************************************************************************************


# ✅ **1. Does the middleware folder usually contain just one file?**

**Not necessarily.**
You can organize it however you want.

But commonly:

### ✔ Middleware folder (`/middleware` or `/plugins`)

Often contains:

* `auth.js` → authentication middleware
* `rateLimit.js` → rate limiting middleware
* `errorHandler.js` → global error handler
* `cors.js` → CORS config
* `logger.js` → logging setup
* `upload.js` → file upload plugin
* etc.

So **it’s not limited to one file**.
You can have as many as needed.

---

# ✅ **2. Why is it called a "plugin" in Fastify?**

Because **Fastify's architecture is plugin-based**.

A “plugin” is any function like this:

```js
async function myPlugin(fastify, options) {
   // …
}
export default myPlugin;
```

Fastify calls plugins using:

```js
fastify.register(myPlugin)
```

So **your auth middleware**:

```js
async function authPlugin(fastify, options) {
```

fits the exact structure of a Fastify plugin.

### Why?

Because Fastify plugins:

* receive `fastify` as an instance
* can decorate the instance
* can add hooks
* can add routes
* can add reply/request decorations
* can access options passed by the register() call

---

# ✅ **3. Are plugins mostly decorated with Fastify?**

Yes — MOST plugins use:

### ✔ `fastify.decorate()`

Add custom methods or values to the Fastify instance.

### ✔ `fastify.decorateRequest()`

Add custom values to `request`.

### ✔ `fastify.decorateReply()`

Add custom helpers on replies.

Your plugin uses:

```js
fastify.decorateRequest('userId', null);
```

This means:

* Every request has a property `req.userId`
* Initially set to `null`
* But your hook updates it to the logged-in user's ID

This is very normal and best practice.

---

# 🧠 **4. Breakdown of your plugin (line by line)**

### ✔ Add a new property to `request`

```js
fastify.decorateRequest('userId', null);
```

### ✔ Access the SQLite database

```js
const db = fastify.sqliteDb;
```

### ✔ Add a preHandler hook

Runs **before every protected route**:

```js
fastify.addHook('preHandler', async (req, reply) => { … })
```

### ✔ Check if cookie exists

```js
const rawCookie = req.cookies.sessionId;
```

### ✔ Unsigned cookie validation

```js
const { value: sessionId, valid } = req.unsignCookie(rawCookie);
```

### ✔ Find session in database

```js
const row = await getQuery(db, "SELECT user_id FROM sessions WHERE token = ?", [sessionId]);
```

### ✔ Attach userId to request

```js
req.userId = row.user_id;
```

---

# 🧩 **5. Why is this a plugin, not simple middleware?**

**Because Fastify does not use Express-style middleware.**
Fastify uses *hooks* and *plugins*.

Your file does this:

👉 decorates request
👉 adds a hook
👉 uses DB
👉 exposes data to future routes

That’s exactly what a plugin does.

Middleware = logic that runs before routes
Fastify Plugin = middleware + decorations + config + DB access + more

---

# 🟢 **6. How do you use this plugin?**

In your main server:

```js
fastify.register(authPlugin);
```

Then, to protect routes:

```js
fastify.register(protectedRoutes, { prefix: '/api/private' });
```

Inside `protectedRoutes` you can safely access:

```js
req.userId
```

because the plugin already attached it.

---

# 🧠 **7. Final Answers (short & clear)**

### ✔ Does middleware folder always have one file?

**No. You can have many.**

### ✔ Is each file usually a Fastify plugin?

**Yes, this is the recommended structure.**

### ✔ Are plugins often decorated with Fastify?

**Yes — decorating request or reply is common and encouraged.**

### ✔ Why is your auth file a plugin?

**Because it decorates the request and adds hooks to Fastify — the definition of a plugin.**


*************************************************************************************************************************
In the server.js after desinging the middleware, 
the `authPlugin` runs **BEFORE all protected routes** because you registered it inside the `privateScope` plugin:

```js
fastify.register(async function(privateScope) {
  privateScope.register(fp(authPlugin));   // ← THIS activates the auth middleware
  privateScope.register(friendsRoutes);
  ...
})
```

This means:

* `authPlugin` runs first
* It attaches `req.userId`
* It protects all routes inside the same scope
* Any request without valid cookie = automatically rejected
* Public routes remain untouched

This is exactly how Fastify "scoped plugins" work.

---

# 🧠 **Detailed Explanation**

## ✔ 1. Fastify Plugin Scoping

When you write:

```js
fastify.register(async function(privateScope) {
```

You create a **nested instance** of Fastify.

Everything inside this block is isolated:

* middleware only affects inside this block
* routes only affect inside this block
* decorators only exist inside this block

So this:

```js
privateScope.register(fp(authPlugin));
```

means:

👉 **All requests inside the privateScope must pass through your auth middleware**
👉 Public routes (above) are not affected

---

# ✔ 2. Why `fp(authPlugin)`?

You wrapped the plugin using:

```js
import fp from "fastify-plugin"
```

`fastify-plugin` ensures:

* The plugin is not encapsulated (unless you want it to be)
* The plugin loads before routes
* The plugin can decorate Fastify

Without `fp()`, the plugin would also work, but scoping may behave differently.
Using `fp()` is the clean, recommended approach.

---

# ✔ 3. Your protected routes are correctly set

Each protected route:

```js
privateScope.register(friendsRoutes, { prefix: '/api' });
privateScope.register(leaderboardRoutes, { prefix: '/api' });
...
```

Now require:

* Valid cookie
* Valid session
* `req.userId` is injected

Example:

```js
fastify.get("/friends", async (req, reply) => {
   console.log(req.userId)   // ALWAYS available because authPlugin ran first
})
```

---

# ✔ 4. Public Routes

Before the protected scope, you did:

```js
fastify.register(authRoutes, { prefix: '/api' });
```

These routes:

* `/register`
* `/login`

are **public**
They do NOT go through `authPlugin`, so users can register/login.

*************************************************************************************************************************


# ✅ **1. Do you have to name it `privateScope`?**

**No.**
You can name the parameter **anything you want** — it’s just a variable name.

This:

```js
fastify.register(async function(privateScope) {
```

Can be:

```js
fastify.register(async function(app) {
```

Or:

```js
fastify.register(async function(securedArea) {
```

Or:

```js
fastify.register(async function(banana) {
```

As long as you call:

```js
banana.register(fp(authPlugin))
```

it will work the same.

### ✔ Why?

Because when you do:

```js
fastify.register(async function(instance) {
```

Fastify automatically creates a **child Fastify instance**, and you are simply giving it any variable name.

---

# ✅ **2. Can you call `fp` any name?**

Yes.
This is valid:

```js
import fp from 'fastify-plugin'
```

This is also valid:

```js
import fastifyPlugin from 'fastify-plugin'
```

Then you would call:

```js
privateScope.register(fastifyPlugin(authPlugin));
```

or:

```js
privateScope.register(fp(authPlugin));
```

The name is up to you — **the behavior is identical**.

---

# 🔥 **3. What exactly is *encapsulation* in Fastify?**

Encapsulation is the MOST IMPORTANT concept in Fastify architecture.

Let me explain it in the simplest way:

---

## 🧠 **Encapsulation = Each `fastify.register()` call creates an isolated world.**

### Meaning:

Inside this:

```js
fastify.register(async function(scope) {
```

You get a **separate Fastify instance**, called **scope**.

Inside it:

* hooks only apply **inside this scope**
* plugins only apply **inside this scope**
* decorators are only available **inside this scope**
* routes inside this scope are protected
* routes outside are unaffected

---

# 🎯 **Example of encapsulation in your app**

### PUBLIC SCOPE (no middleware)

```js
fastify.register(authRoutes, { prefix: '/api' });
```

✔ Users can register
✔ Users can log in
✔ No need for authentication
✔ `req.userId` does NOT exist here

---

### PROTECTED SCOPE (with middleware)

```js
fastify.register(async function(privateScope){
  privateScope.register(fp(authPlugin));
  privateScope.register(friendsRoutes, { prefix: '/api' });
  privateScope.register(playersRoutes, { prefix: '/api' });
  ...
})
```

Inside this scope:

* `authPlugin` runs FIRST
* `req.userId` is available
* cookies must be valid
* all routes here require login
* public routes are unaffected

This is encapsulation.

---

# 🧱 **Fastify Encapsulation = Layered Architecture**

Think of it like this:

```
fastify root instance
 ├── public scope (no auth)
 └── private scope (auth required)
        ├── friends routes
        ├── leaderboard routes
        ├── tetris routes
        └── profile routes
```

Each "scope" is its own environment.

---

# 🧠 **Why is encapsulation important?**

### ✔ It lets you protect only certain routes

No need to manually add authorization to every route.

### ✔ It prevents decorators from leaking to public routes

`req.userId` exists only in private routes.

### ✔ You can load plugins only where needed

Your auth plugin does **not affect public routes**.

### ✔ Makes large applications clean and maintainable

This structure is exactly what large-scale production apps use.



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
