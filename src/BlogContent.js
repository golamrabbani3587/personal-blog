import logoImage from './assets/media/logo.1adebf2b8d531a9b526bf5e93c68c2eb.svg';
import BlogImage from './assets/img/icon-blog.png'

export function BlogPageContent() {
    return `

    <!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="utf-8" />
  <meta
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
    name="viewport"
  />

  <meta
    name="description"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />

  <link
    crossorigin="crossorigin"
    href="https://fonts.gstatic.com"
    rel="preconnect"
  />

  <link
    as="style"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="preload"
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
  />

  <link
    crossorigin="anonymous"
    href="/assets/styles/main.min.css"
    media="screen"
    rel="stylesheet"
  />

  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js"></script>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-dark.min.css"
  />

  <script>
    hljs.initHighlightingOnLoad();
  </script>

  <!--Alpine Js V3-->
  <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
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


      <div><div class="container mx-auto">
  <div class="py-16 lg:py-20">
    <div>
      <img src=${BlogImage} alt="icon envelope" />
    </div>

    <h1
      class="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
    >
      Blog
    </h1>

    <div class="pt-3 sm:w-3/4">
      <p class="font-body text-xl font-light text-primary dark:text-white">
        Articles, tutorials, snippets, rants, and everything else. Subscribe for
        updates as they happen.
      </p>
    </div>

    <form class="flex flex-col py-12 sm:flex-row">
      <input
        type="email"
        id="subscribe"
        placeholder="Drop that email here…"
        class="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary sm:w-1/2"
      />
      <button
        type="submit"
        class="mt-5 bg-secondary px-10 py-4 font-body text-xl font-semibold text-white hover:bg-green sm:mt-0 md:text-2xl"
      >
        Subscribe
      </button>
    </form>

   




<div class="pt-8 lg:pt-12">
        <div class="border-b border-grey-lighter pb-8">
    <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
    <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">Callback</span>
      <a href="/blog/node-callback" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">Mastering Asynchronous Programming with Node.js Callbacks</a>
      <div class="flex items-center pt-4">
        <p class="pr-2 font-body font-light text-primary dark:text-white">
          July 27, 2023
        </p>
        <span class="font-body text-grey dark:text-white">//</span>
        <p class="pl-2 font-body font-light text-primary dark:text-white">
          7 min read
        </p>
      </div>
    </div>
    <div class="border-b border-grey-lighter pt-10 pb-8">
      <div class="flex items-center">
        <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
        <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">Child Process</span>
      </div>
      <a href="/blog/node-child-process" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">Exploring Node.js Child Processes for Enhanced Application Performance and Scalability</a>
      <div class="flex items-center pt-4">
        <p class="pr-2 font-body font-light text-primary dark:text-white">
          July 27, 2023
        </p>
        <span class="font-body text-grey dark:text-white">//</span>
        <p class="pl-2 font-body font-light text-primary dark:text-white">
          7 min read
        </p>
      </div>
    </div>
    <div class="border-b border-grey-lighter pt-10 pb-8">
      <span class="mb-4 inline-block rounded-full bg-blue-light px-2 py-1 font-body text-sm text-blue">NodeJS</span>
      <a href="/blog/how-to-create-node-app" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"> How to create NodeJS and mongodb application?</a>
      <div class="flex items-center pt-4">
        <p class="pr-2 font-body font-light text-primary dark:text-white">
          july 19, 2023
        </p>
        <span class="font-body text-grey dark:text-white">//</span>
        <p class="pl-2 font-body font-light text-primary dark:text-white">
          5 min read
        </p>
      </div>
    </div>

    <div class="border-b border-grey-lighter pt-10 pb-8">
    <div class="flex items-center">
      <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
      <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">React</span>
    </div>
    <a href="/blog/react-common-topics" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">Exploring Common Topics in React: Building Modern Web Applications</a>
    <div class="flex items-center pt-4">
      <p class="pr-2 font-body font-light text-primary dark:text-white">
        August 04, 2023
      </p>
      <span class="font-body text-grey dark:text-white">//</span>
      <p class="pl-2 font-body font-light text-primary dark:text-white">
        10 min read
      </p>
    </div>
  </div>


  <div class="border-b border-grey-lighter pt-10 pb-8">
  <div class="flex items-center">
    <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
    <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">React</span>
  </div>
  <a href="/blog/devops" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">Empowering DevOps Excellence with CI/CD and Essential Tools</a>
  <div class="flex items-center pt-4">
    <p class="pr-2 font-body font-light text-primary dark:text-white">
      December 13, 2023
    </p>
    <span class="font-body text-grey dark:text-white">//</span>
    <p class="pl-2 font-body font-light text-primary dark:text-white">
      10 min read
    </p>
  </div>
</div>

    
        <div class="flex pt-8 lg:pt-16">
          <span class="cursor-pointer border-2 border-secondary px-3 py-1 font-body font-medium text-secondary">1</span>
          <span class="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary">2</span>
          <span class="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary">3</span>
          <span class="group ml-3 flex cursor-pointer items-center border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary">Next
            <i class="bx bx-right-arrow-alt ml-1 text-primary transition-colors group-hover:text-secondary dark:text-white"></i></span>
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
      
      <a href="https://github.com/rabbani204" target="_blank">
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

    <script src="/assets/js/main.js"></script>

    
  </body>
</html>

    

      `
}