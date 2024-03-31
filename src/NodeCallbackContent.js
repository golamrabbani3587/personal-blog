import logoImage from './assets/media/logo.1adebf2b8d531a9b526bf5e93c68c2eb.svg'
import CallbackImage from './assets/media/callbacks.9d1949c9f84b215f141a.png'
import mainJS from './assets/js/main'
import './App.css'
export function NodeCallbackPageContent() {
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
          href="/bro-bot"
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


      <div><div class="container mx-auto">
 



<div class="pt-16 lg:pt-20">
      <div class="border-b border-grey-lighter pb-8 sm:pb-12">
        <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
          <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">Callback</span>
        <h2 class="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
        Mastering Asynchronous Programming with Node.js Callbacks
        </h2>
        <div class="flex items-center pt-5 sm:pt-8">
          <p class="pr-2 font-body font-light text-primary dark:text-white">
            July 27, 2023
          </p>
          <span class="vdark:text-white font-body text-grey">//</span>
          <p class="pl-2 font-body font-light text-primary dark:text-white">
            7 min read
          </p>
        </div>

      </div>

      <img src=${CallbackImage} alt="Image" width="100%">


      <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
      <p>Node.js is a powerful platform for building scalable and efficient web applications. One of the core features that make Node.js stand out is its asynchronous, non-blocking I/O model, which allows it to handle a large number of concurrent connections without sacrificing performance. In Node.js, callbacks play a crucial role in managing asynchronous operations and ensuring smooth execution. In this blog, we will explore Node.js callbacks and how they enable developers to handle asynchronous tasks effectively.</p>
  
  <h3>Understanding Asynchronous Programming</h3>
  
  <p>raditional synchronous programming executes tasks in a sequential manner. When a function is called, the program waits until the function completes before moving on to the next operation. However, in a server environment where multiple requests are coming in simultaneously, this approach can lead to bottlenecks and slow response times.</p>
  <p>Asynchronous programming, on the other hand, allows tasks to run concurrently without blocking the main execution flow. Instead of waiting for a task to finish, the program can move on to other operations while the task continues in the background. Once the asynchronous task is completed, a callback function is invoked to handle the result or error.</p>
  <h3>What are Callbacks?</h3>
  <p>In Node.js, a callback is a function that is passed as an argument to another function and is executed once the asynchronous operation is completed. Callbacks act as a mechanism to notify the calling function when the asynchronous task is finished and to handle the results or errors.</p>
<h3>The typical structure of a callback function looks like this</h3>
  <blockquote>
    <p>

    function doSomethingAsync(param, callback) {<br>
        callback(result, error);<br>
    }      <br>
    </p>
  </blockquote>

  <h3>Node.js Callback Conventions</h3>
  <p>Node.js follows a common callback convention known as the "error-first callback" or "Node.js-style callback." According to this convention, the first argument of the callback function is reserved for an error object (if an error occurs), and the subsequent arguments contain the results of the asynchronous operation. If no error occurs, the error argument will be null or undefined.</p>

<h3>Example of Error-First Callback</h3>
<blockquote>
<p>
function readFileAndProcess(filePath, callback) {<br>
    fs.readFile(filePath, 'utf8', (err, data) =&gt; {<br>
      if (err) {<br>
        callback(err);<br>
      } else {<br>
        callback(null, processedData);<br>
      }<br>
    });<br>
  }<br>
</p>
</blockquote>

<h3>Handling Callback Hell</h3>
<p>When dealing with multiple asynchronous operations, callbacks can be nested, leading to a situation known as "Callback Hell" or "Pyramid of Doom." This can make code difficult to read, maintain, and debug. To address this issue, several techniques can be used.</p>
<p>1.Modularization: Break down the functionality into smaller, manageable functions to reduce nesting.</p>
<p>2.Use Named Functions: Define named functions for callbacks to improve code readability.</p>
<p>3.Use Promises or Async/Await: Modern JavaScript introduced Promises and async/await, which provide a cleaner and more structured way to handle asynchronous operations.</p>
  
<h3>Using Promises with Node.js Callbacks</h3>
<p>Starting from Node.js version 8, the util.promisify method was introduced to convert callback-based functions into Promise-based functions. This allows developers to use Promises or async/await syntax with existing Node.js callback functions, thus avoiding the callback hell.</p>

<h3>Example of Using Promises:</h3>
<blockquote>
  <p>
  const util = require('util');<br>
  const fs = require('fs');<br>
  const readFileAsync = util.promisify(fs.readFile);<br>
  async function processFile(filePath) {<br>
  try {<br>
    const data = await readFileAsync(filePath, 'utf8');<br>
    return processedData;<br>
  } catch (error) {<br>
    throw new Error('Error reading file: ' + error.message);<br>
  }<br>
}
  </p>
</blockquote>

<h3>Conclusion</h3>
<p>Node.js callbacks are the backbone of asynchronous programming, enabling developers to build high-performance, non-blocking applications. By understanding the concept of callbacks and following error-first callback conventions, developers can effectively handle asynchronous tasks in Node.js. While callbacks have been the traditional way of managing asynchronous operations, newer JavaScript features like Promises and async/await provide more elegant alternatives to avoid callback hell and write cleaner, more maintainable code. By mastering callbacks and staying informed about the latest JavaScript features, Node.js developers can harness the full power of asynchronous programming and build efficient, scalable applications.</p>

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