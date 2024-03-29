import logoImage from './assets/media/logo.1adebf2b8d531a9b526bf5e93c68c2eb.svg'
import reactImage from './assets/media/react-common.490be82dd08a46e15cfd.png'
import mainJS from './assets/js/main'
import './App.css'
export function ReactCommonTopicsContent() {
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
          <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">React</span>
        <h2 class="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
        Exploring Common Topics in React: Building Modern Web Applications
        </h2>
        <div class="flex items-center pt-5 sm:pt-8">
          <p class="pr-2 font-body font-light text-primary dark:text-white">
            August 03, 2023
          </p>
          <span class="vdark:text-white font-body text-grey">//</span>
          <p class="pl-2 font-body font-light text-primary dark:text-white">
            10 min read
          </p>
        </div>

      </div>

      <img src=${reactImage} alt="Image" width="100%">
      <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
      <p>In recent years, Node.js has gained immense popularity as a powerful server-side technology for building high-performance web applications. One of the key features that sets Node.js apart is its ability to handle asynchronous programming using an event-driven, non-blocking I/O model. In this blog, we will explore how Node.js leverages asynchronous programming and why it is essential for building scalable and responsive applications. Let's dive in!</p>
  
  <h3>Exploring Common Topics in React: Building Modern Web Applications</h3>
  
  <p>React, developed and maintained by Facebook, has rapidly become one of the most popular JavaScript libraries for building modern, interactive, and user-friendly web applications. With its component-based architecture and virtual DOM, React empowers developers to create efficient, scalable, and maintainable front-end solutions. In this blog, we'll explore some common topics in React that every developer should be familiar with to harness the full potential of this powerful library.</p>
  
  <h3>Components: The Building Blocks of React</h3>

  <p>React's core concept revolves around components. Components are self-contained, reusable pieces of code responsible for rendering specific parts of a user interface. We'll dive into the different types of components, best practices for component structure, and how to manage component state effectively.</p>
  <h3>Example: Asynchronous File Reading</h3>
  
  <blockquote>
  import React, { useState } from 'react';<br>

  const Counter = () =&gt; {<br>
    const [count, setCount] = useState(0);<br>
  
    const handleIncrement = () =&gt; {<br>
      setCount(count + 1);<br>
    };<br>
  
    return (<br>
      <div><br>
        Counter: {count}<br>
        <button onclick="{handleIncrement}">Increment</button><br>
      </div><br>
    );<br>
  };<br>
  </blockquote>

  <h3>State Management in React</h3>
  <p>State management is essential to keep track of changing data in a React application. We'll explore React's local state, its limitations, and when to use it. Additionally, we'll cover more advanced state management solutions like React Redux, MobX, and how they can simplify complex application states.</p>
  <blockquote>
  import React, { useState } from 'react';<br>

  const TodoForm = () =&gt; {<br>
    const [inputValue, setInputValue] = useState('');<br>
  
    const handleInputChange = (event) =&gt; {<br>
      setInputValue(event.target.value);<br>
    };<br>
  
    const handleSubmit = (event) =&gt; {<br>
      event.preventDefault();<br>
      // Process the form data<br>
    };<br>
  
    return (<br>
      <form onsubmit="{handleSubmit}"><br>
        <input< br="">
          type="text"<br>
          value={inputValue}<br>
          onChange={handleInputChange}<br>
          placeholder="Enter todo item"<br>
        /&gt;<br>
        <button type="submit">Add Todo</button><br>
      <br>
    );
  };
  </input<></form></blockquote>

  <h3>React Hooks: A Game-Changer</h3>
  <p>Introduced in React 16.8, hooks revolutionized the way developers write functional components. We'll delve into popular hooks like useState, useEffect, useContext, and more. Understanding hooks is crucial for writing cleaner, more concise code and achieving better separation of concerns.</p>
  <blockquote>
  import React, { useState, useEffect } from 'react';<br>

  const Timer = () =&gt; {<br>
    const [seconds, setSeconds] = useState(0);<br>
  
    useEffect(() =&gt; {<br>
      const interval = setInterval(() =&gt; {<br>
        setSeconds((prevSeconds) =&gt; prevSeconds + 1);<br>
      }, 1000);<br>
  
      return () =&gt; {<br>
        clearInterval(interval);<br>
      };<br>
    }, []);<br>
  
    return (<br>
      <div><br>
        Timer: {seconds} seconds<br>
      </div><br>
    );<br>
  };<br>
  
  </blockquote>


  <h3>React Router: Navigating with Ease</h3>
  <p>In single-page applications, proper navigation is a must. We'll explore React Router, the de-facto library for handling routing in React applications. Learn how to set up routes, pass parameters, and handle navigation seamlessly.</p>
  <blockquote>
  <p>
  import React from 'react';<br>
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';<br>

  const Home = () =&gt; Home Page;<br>
  const About = () =&gt; About Us;<br>

const App = () =&gt; (<br>
  <router><br>
    <br>
      <br>
        <br>
          Home<br>
        <br>
        <br>
          About<br>
        <br>
      <br>
    <br>
    <br>
    <br>
  </router><br>
);<br>
</p>
</blockquote>


<h3>Lifecycle Methods and Their Alternatives</h3>
<p>React's class components used lifecycle methods for handling component behavior. However, with the rise of functional components, we'll discuss how lifecycle methods are being replaced by hooks like useEffect and how to migrate from class components to functional components effectively.</p>
<blockquote>
import React, { useEffect } from 'react';<br>

const MyComponent = () =&gt; {<br>
  useEffect(() =&gt; {<br>
    console.log('Component is mounted or updated');<br>
    return () =&gt; {<br>
      console.log('Component is unmounted');<br>
    };<br>
  }, []);<br>

  return <div>My Component</div>;<br>
};<br>
</blockquote>


<h3> Styling in React: CSS-in-JS and More</h3>
<p>Styling in React offers various approaches, from traditional CSS and CSS modules to CSS-in-JS solutions like styled-components and Emotion. We'll compare these methods and explore their pros and cons to help you make an informed decision based on your project's requirements.</p>
<blockquote>
<p>
import styled from 'styled-components';<br>
const StyledButton = styled.button<br>
  background-color: #007bff;<br>
  color: #fff;<br>
  padding: 10px 20px;<br>
  border: none;<br>
  border-radius: 4px;<br>
  cursor: pointer;<br>
;<br>

const App = () =&gt; {<br>
  return (<br>
    </p><div><br>
      Welcome to My App<br>
      <styledbutton>Click Me</styledbutton><br>
    </div><br>
  );<br>
};<br>
<p></p><br>
</blockquote>


<h3>Optimizing Performance with React</h3>
<p>React's virtual DOM and reconciliation process offer great performance by default. However, as applications grow, performance optimization becomes essential. We'll discuss techniques like memoization, lazy loading, and code splitting to ensure your React application stays snappy and responsive.</p>
<blockquote>
<p>
import React, { memo } from 'react';<br>

const MemoizedComponent = memo(({ data }) =&gt; {<br>
  return </p><div>{data}</div>;<br>
});<br>
<p></p>
</blockquote>

<h3>Forms and Form Validation</h3>
<p>Handling forms is a common requirement in web applications. We'll explore different approaches to form handling in React, along with best practices for form validation and user feedback.</p>
<blockquote>
import React, { useState } from 'react';<br>

const LoginForm = () =&gt; {<br>
  const [username, setUsername] = useState('');<br>
  const [password, setPassword] = useState('');<br>

  const handleSubmit = (event) =&gt; {<br>
    event.preventDefault();<br>
    // Perform form validation and submit data<br>
  };<br>

  return (<br>
    <form onsubmit="{handleSubmit}"><br>
      <input< br="">
        type="text"<br>
        value={username}<br>
        onChange={(e) =&gt; setUsername(e.target.value)}<br>
        placeholder="Username"<br>
      /&gt;<br>
      <input< br="">
        type="password"<br>
        value={password}<br>
        onChange={(e) =&gt; setPassword(e.target.value)}<br>
        placeholder="Password"<br>
      /&gt;<br>
      <button type="submit">Login</button><br>
    <br>
  );<br>
};<br>
</input<></input<></form></blockquote>


<h3>Testing React Applications</h3>
<p>Ensuring the quality and stability of your React application requires proper testing. We'll cover unit testing with</p>
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