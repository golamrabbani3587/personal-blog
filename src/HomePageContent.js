import logoImage from './assets/media/logo.1adebf2b8d531a9b526bf5e93c68c2eb.svg';
import authorImage from './assets/media/author.e7d59f2db290d93ed7c4.png'
import storyImage from './assets/img/icon-story.png'
import longArrowIcon from './assets/img/long-arrow-right.png'
import IconProject from './assets/img/icon-project.png'

export function HomePageContent() {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="utf-8" />
      
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
      
        <title>Golam Rabbani | Software Engineer</title>
      
        <meta property="og:title" content="Homepage | Atlas Template" />
      
        <meta property="og:locale" content="en_US" />
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
        <div class="border-b border-grey-lighter py-16 lg:py-20">
          <div>
            <img src=${authorImage} class="rounded-full h-28 w-28" alt="author" />
          </div>
          <h1
            class="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
          >
            Hi, I’m Golam Rabbani.
          </h1>
          <p class="pt-3 font-body text-xl font-light text-primary dark:text-white">
            A senior software engineer Living in Dhaka, Bangladesh.
          </p>
          <a
            href="/bro-bot"
            class="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
          >
            Say Hi, With BroBot
          </a>
        </div>
      
        <div class="border-b border-grey-lighter py-16 lg:py-20">
          <div class="flex items-center pb-6">
            <img src= ${storyImage} alt="icon story" />
            <h3
              class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
            >
              My Story
            </h3>
          </div>
          <div>
          <p class="font-body font-light text-primary dark:text-white text-justify">
          As an accomplished Senior Software Engineer with expertise in Node.js, Express, Nest, MongoDB, MySQL, React, and Vue and DevOPS I bring a wealth of knowledge and skill to the field of software development. My passion for problem-solving and creating efficient solutions drives my success in designing and implementing complex applications.
            <br>
            <br>
            In the realm of back-end development, my proficiency in Node.js and Express enables me to build robust and high-performance server-side applications. The seamless integration of Nest allows me to create well-organized and scalable codebases, making maintenance and collaboration with other developers a breeze.
            <br>
            <br>
            My expertise in working with databases like MongoDB and MySQL empowers me to design data models and optimize queries, ensuring that applications can handle vast amounts of data without compromising speed and responsiveness.
            <br>
            <br>
            On the front-end, my mastery of React and Vue shines through as I create captivating and user-friendly interfaces. My deep understanding of these frameworks allows me to build dynamic and interactive experiences that engage users and enhance their overall satisfaction.
            <br>
            <br>
            Beyond my technical expertise, My excel as a Senior Software Engineer due to my leadership and communication skills. My ability to lead and mentor a team fosters a collaborative and supportive work environment, where ideas are encouraged, and innovation thrives.
            <br>
            <br>
            my passion for continuous learning and staying up-to-date with industry trends makes me a valuable asset to any project me undertake. With a proven track record of delivering high-quality software solutions, my consistently exceed expectations and contribute significantly to the success of my team and organization. 
          </p>
        </div>
        </div>
      
        <div class="py-16 lg:py-20">
          <div class="flex items-center pb-6">
            <img src=${storyImage} alt="icon story" />
            <h3
              class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
            >
              My Story
            </h3>
            <a
              href="/blog"
              class="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >
              All posts
              <img
                src=${longArrowIcon}
                class="ml-3"
                alt="arrow right"
              />
            </a>
          </div>
          <div class="pt-8">
            <div class="border-b border-grey-lighter pb-8">
            <div class="pt-8">
            <div class="border-b border-grey-lighter pb-8">
            <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">NodeJS</span>
            <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">React</span>
              <a href="/blog/react-common-topics" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">Exploring Common Topics in React: Building Modern Web Applications
              </a>
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
  
  
          <div class="border-b border-grey-lighter pt-10 pb-8">
          <div class="flex items-center">
            <span class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">Start Up</span>
          </div>
          <a href="/blog/react-common-topics" class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">Unveiling the Essential Strengths of a Successful Startup Owner</a>
          <div class="flex items-center pt-4">
            <p class="pr-2 font-body font-light text-primary dark:text-white">
              August 04, 2023
            </p>
            <span class="font-body text-grey dark:text-white">//</span>
            <p class="pl-2 font-body font-light text-primary dark:text-white">
              12 min read
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
          </div>
            </div>
          </div>
        </div>
      
        <div class="pb-16 lg:pb-20">
          <div class="flex items-center pb-6">
            <img src=${IconProject} alt="icon story" />
            <h3
              class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
            >
              My Projects
            </h3>
          </div>
          <div>
            
            <a
              href=" / "
              class="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
            >
              <span class="w-9/10 pr-8">
                <h4
                  class="font-body text-lg font-semibold text-primary dark:text-white"
                >
                Senaiyah
                </h4>
                <p class="font-body font-light text-primary dark:text-white">
                An app that only for cars, where user can buy car parts and solve car problems reaching car service center by sering cost of service. User can also call car carrier if need.
                </p>
              </span>
            </a>
            
            <a
              href=" / "
              class="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
            >
              <span class="w-9/10 pr-8">
                <h4
                  class="font-body text-lg font-semibold text-primary dark:text-white"
                >
                  Prolific Info tech
                </h4>
                <p class="font-body font-light text-primary dark:text-white">
                User can build and host their site. User can select a basic template and work on it.
                </p>
              </span>
            </a>
            
            <a
              href=" / "
              class="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
            >
              <span class="w-9/10 pr-8">
                <h4
                  class="font-body text-lg font-semibold text-primary dark:text-white"
                >
                Shuttle
                </h4>
                <p class="font-body font-light text-primary dark:text-white">
                  Group ride sharing application.
                </p>
              </span>
            </a>
            </a>
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
            
            <a href="/" target="_blank">
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