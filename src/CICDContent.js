import logoImage from './assets/media/logo.1adebf2b8d531a9b526bf5e93c68c2eb.svg'
import devOpsImage from './assets/media/devops.png'
import mainJS from './assets/js/main'
import './App.css'
export function CICDContent() {
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
            Title: Empowering DevOps Excellence with CI/CD and Essential Tools
            </h2>
            <div class="flex items-center pt-5 sm:pt-8">
              <p class="pr-2 font-body font-light text-primary dark:text-white">
                DecMBER 13, 2023
              </p>
              <span class="vdark:text-white font-body text-grey">//</span>
              <p class="pl-2 font-body font-light text-primary dark:text-white">
                7 min read
              </p>
            </div>
    
          </div>
    
          <img src=${devOpsImage} alt="Image" width="100%">
          <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
          <p>Continuous Integration and Continuous Deployment (CI/CD) is a software development methodology that emphasizes automated and frequent code integration, testing, and deployment. It streamlines the development process, allowing teams to deliver software updates rapidly and reliably. CI/CD practices enhance collaboration, reduce errors, and contribute to the overall agility and efficiency of software development pipelines.!</p>
      
      <h3>Jenkins: The Foundation of Automation</h3>
      
      <p>Jenkins, an open-source automation server, stands as the cornerstone of efficient CI/CD pipelines. With its extensible architecture and a plethora of plugins, Jenkins facilitates seamless integration of code changes, automates testing processes, and expedites continuous delivery. Its flexibility allows for the integration of various tools and technologies, providing a centralized hub for managing the entire software development lifecycle. Jenkins not only automates repetitive tasks but also ensures the reliability and consistency of the deployment process, laying the groundwork for a robust CI/CD pipeline..</p>
      
      <h3>Docker: Containerization for Consistency</h3>
    
      <p>Docker has revolutionized the way applications are packaged and deployed. As a containerization platform, Docker encapsulates applications and their dependencies, ensuring consistency across diverse environments. Containers enable developers to package code, libraries, and dependencies into a single unit, making it portable and eliminating the notorious "it works on my machine" issue. Docker's lightweight nature and rapid startup times enhance scalability and resource utilization. By providing a standardized environment, Docker simplifies the deployment process and contributes to the overall speed and efficiency of CI/CD workflows.</p>
    
        <h3>Kubernetes: Orchestrating Containerized Brilliance</h3>
    
      <p>Kubernetes, often abbreviated as K8s, takes container orchestration to new heights. As an open-source container orchestration platform, Kubernetes automates the deployment, scaling, and management of containerized applications. Its declarative approach to infrastructure allows developers to define the desired state, and Kubernetes ensures the actual state matches the defined state, thus streamlining operations. With features like auto-scaling, load balancing, and self-healing, Kubernetes provides a resilient infrastructure that adapts to varying workloads. It has become the go-to solution for managing complex microservices architectures and maintaining the integrity of applications in production environments.</p>
      <h3>Example: Asynchronous File Reading</h3>
    
        <h3>Terraform: Infrastructure as Code for Agility</h3>
    
      <p>Terraform, an Infrastructure as Code (IaC) tool, empowers teams to manage infrastructure using declarative configuration files. This approach allows for version-controlled, auditable, and reproducible infrastructure changes. Terraform supports multiple cloud providers and on-premises environments, making it a versatile choice for teams working in diverse landscapes. By codifying infrastructure, Terraform enhances collaboration between development and operations teams, accelerates provisioning processes, and ensures consistency across different environments. It aligns seamlessly with CI/CD practices, enabling the automation of infrastructure changes as an integral part of the deployment pipeline.</p>
    
        <h3>5. Grafana: Monitoring and Observability for Insightful Deployments</h3>
    
      <p>Grafana plays a pivotal role in ensuring the health and performance of applications deployed through CI/CD pipelines. As a leading open-source platform for monitoring and observability, Grafana provides customizable dashboards and supports a wide range of data sources. It aggregates and visualizes real-time data, offering insights into system performance, resource utilization, and potential issues. By integrating Grafana into the CI/CD pipeline, teams gain the ability to proactively monitor applications, troubleshoot bottlenecks, and make data-driven decisions. Grafana's role in the DevOps toolchain enhances the overall visibility and reliability of the deployment process, fostering a culture of continuous improvement.</p>
      
    
    
    
      
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
          
          <a href="https://www.linkedin.com/in/rabbani204/ " target="_blank">
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