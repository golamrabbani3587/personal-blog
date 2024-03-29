import logoImage from './assets/media/logo.1adebf2b8d531a9b526bf5e93c68c2eb.svg'
import mainJS from './assets/js/main'
import nodeJsImage from './assets/media/createnode.5ed2a87d0dcf999f0fc6.png'
import './App.css'
export function NodejsMongodbPageContent() {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
</head>

  <body
    x-data="global()"
    x-init="themeInit()"
    class="dark:bg-primary"
  >
    
    <div id="main">
      <div class="container mx-auto">
  <div class="flex items-center justify-between py-6 lg:py-10">
    <a href="/" class="flex items-center">
      <span href="/" class="mr-2">
        <img src=${logoImage} alt="logo" />
      </span>
      <p
        class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block"
      >
        Golam Rabbani
      </p>
    </a>
    <div class="hidden lg:block">
      <ul class="flex items-center">
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Intro</a
          >
        </li>
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/blog"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Blog</a
          >
        </li>
      
        <li class="group relative mr-6 mb-1">
        <div
          class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
        ></div>
        <a
          href="/resume"
          class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
          >Resume</a
        >
        </li>

        <li class="group relative mr-6 mb-1">
        <div
          class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
        ></div>
        <a
          href="/Bro Bot"
          class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
          >Bro Bot</a
        >
        </li>
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/contact"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Contact</a
          >
        </li>
        
      </ul>
    </div>
  </div>
</div>

<div
  class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
>
  <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
    <i
      class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
    ></i>
    <ul class="mt-8 flex flex-col">
      
      <li class="">
        <a
          href="/"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Intro</a
        >
      </li>
      
      <li class="">
        <a
          href="/blog"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Blog</a
        >
      </li>

      <li class="group relative mr-6 mb-1">
      <div
        class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
      ></div>
      <a
        href="/resume"
        class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
        >Resume</a
      >
      </li>

      <li class="">
        <a
          href="/uses"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Uses</a
        >
      </li>
      
      <li class="">
        <a
          href="/contact"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Contact</a
        >
      </li>
      
    </ul>
  </div>
</div>






<div class="container mx-auto">
    <div class="pt-16 lg:pt-20">
      <div class="border-b border-grey-lighter pb-8 sm:pb-12">
        <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
        <h2 class="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
          How to create NodeJS and mongodb application?
        </h2>
        <div class="flex items-center pt-5 sm:pt-8">
          <p class="pr-2 font-body font-light text-primary dark:text-white">
            July 19, 2023
          </p>
          <span class="vdark:text-white font-body text-grey">//</span>
          <p class="pl-2 font-body font-light text-primary dark:text-white">
            7 min read
          </p>
        </div>
      </div>
      <img src=${nodeJsImage} alt="Image" width="100%">
      <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
        <p>
        Starting a Node.js and MongoDB application involves a few steps. Below, I'll provide a step-by-step guide to help you get started.</p>
  
  <p>Install Node.js:
  Ensure you have Node.js installed on your computer. You can download it from the official website: https://nodejs.org/en/download/
  
  Install MongoDB:
  Install MongoDB on your computer by following the instructions on the official website: https://docs.mongodb.com/manual/administration/install-community/
  
  Create a new project folder:
  Create a new folder for your Node.js application and navigate to it using the command line or terminal.
  
  Initialize Node.js project:
  Run the following command to initialize a new Node.js project. It will create a package.json file to manage dependencies.</p>
  
  <p>Initialize Node.js project:
  Run the following command to initialize a new Node.js project. It will create a package.json file to manage dependencies.</p>
  
  <blockquote>
    <p>npm init</p>
  </blockquote>
  
  <h3 id="lorem-ipsum-dolor-sit-amet">Set up the MongoDB connection.</h3> 
<p>Install the required Node.js packages to work with MongoDB and create a web server. In this case, you'll need Express and MongoDB Node.js driver. Run the following commands.</p>
<blockquote>
<p>npm install express mongodb</p>
</blockquote>
  <h3 id="lorem-ipsum-dolor-sit-amet">Install necessary dependencies.</h3> 
  <p>Create a new JavaScript file (e.g., app.js) where you will set up your Node.js application. In this file, establish a connection to your MongoDB server using the MongoDB Node.js driver.</p>
  <blockquote>
  <p>const { MongoClient } = require('mongodb');<br>

  // Connection URL for MongoDB (Update with your MongoDB server details)<br>
  const url = 'mongodb://localhost:27017';<br>
  
  // Database Name<br>
  const dbName = 'my_database';<br>
  
  // Create a new MongoClient<br>
  const client = new MongoClient(url, { useUnifiedTopology: true });<br>
  
  // Connect to the MongoDB server<br>
  client.connect(function (err) {&gt;/br&gt;
    if (err) {<br>
      console.error('Error connecting to MongoDB:', err);<br>
      return;<br>
    }<br>
  
    console.log('Connected successfully to MongoDB');<br>
  
    // You can start your Node.js application logic here<br>
  });&gt;/br&gt;
  </p><br>
</blockquote>


<h3 id="lorem-ipsum-dolor-sit-amet">Create an Express server.</h3> 
<p>In the same app.js file, set up an Express server to handle HTTP requests. This is a basic example to get you started.</p>
<blockquote>
<p>const express = require('express');<br>
const app = express();<br>
const port = 3000;<br>

app.get('/', (req, res) =&gt; { <br>
  res.send('Hello, world!'); <br>
});<br>

app.listen(port, () =&gt; {<br>
  console.log('Server running at http://localhost:'$'{port}');<br>
});</p>
</blockquote>


<h3 id="lorem-ipsum-dolor-sit-amet">Run your application.</h3> 
<p>Save the changes to app.js and run your Node.js application using the following command.</p>
<blockquote>
<p> node app.js </p>
</blockquote>

<h3 id="lorem-ipsum-dolor-sit-amet">Test your application.</h3> 
<p>Open your web browser and navigate to http://localhost:3000/. You should see "Hello, world!" displayed.</p>
<blockquote>
<p> Now you have a basic Node.js and MongoDB application up and running. From here, you can build more complex functionalities, create routes, handle database operations, and expand your application as needed. Remember to properly handle errors and secure your application when building for production use.</p>
</blockquote>


  <div class="twitter-card">
      <h4 class="twitter-card-title"> "Node.js is a versatile platform for server-side JavaScript development. Its event-driven, non-blocking I/O model allows efficient handling of concurrent connections, making it ideal for real-time applications like chat services and gaming platforms. The extensive NPM ecosystem and active community ensure developers have access to cutting-edge tools, making Node.js a popular choice for modern web applications."</h4>
      <button class="twitter-card-btn">Share this on Twitter</button>
  </div>
  
      </div>
  
      <div class="flex items-center py-10">
        <span class="pr-5 font-body font-medium text-primary dark:text-white">Share</span>
        <a href="/">
          <i class="bx bxl-facebook text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
        <a href="/">
          <i class="bx bxl-twitter pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
        </a>
        <a href="/">
          <i class="bx bxl-linkedin pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
        <a href="/">
          <i class="bx bxl-reddit pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i></a>
      </div>
    </div>
  </div>




</div>



 
</div>
</div>

      <div class="container mx-auto">
  <div
    class="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12"
  >
    <div class="mr-auto flex flex-col items-center sm:flex-row">
      <a href="/" class="mr-auto sm:mr-6">
        <img src=${logoImage} alt="logo" />
      </a>
      <p class="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
        ©2023 Golam Rabbani.
      </p>
    </div>
    <div class="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
      
      <a href="https://github.com/rabbani204 " target="_blank">
        <i
          class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"
        ></i>
      </a>
      
      <a href="https://codepen.io/rabbani204 " target="_blank">
        <i
          class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-codepen"
        ></i>
      </a>
      
      <a href="https://www.linkedin.com/in/rabbani204/" target="_blank">
        <i
          class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"
        ></i>
      </a>
      
    </div>
  </div>
</div>

    </div>

    <script src=${mainJS}></script>

    
  </body>
</html>

    
    `}