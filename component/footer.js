

const footer=`
<footer class="w-full bg-slate-100 ">
  <div class=" px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src="/media/image/logo.png" class="mr-5 h-6 sm:h-9" alt="logo" />
        <p class="max-w-xs mt-4 text-sm text-black">
          Since 2013, Moonstone Corporate Pvt Ltd has been a beacon of knowledge and opportunity for students seeking to broaden their horizons and professionals aiming to excel in their careers.
        </p>
        <!-- <div class="flex mt-8 space-x-6 text-black">
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Facebook </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Instagram </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Twitter </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> GitHub </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Dribbble </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
        </div> -->
      </div>
      <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="font-medium">
            Company
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-black">
            <a class="hover:opacity-75" href="/index.html"> Home </a>
            <a class="hover:opacity-75" href="/pages/about.html"> About </a>
            <a class="hover:opacity-75" href="/pages/Placement.html"> Placement </a>
            <a class="hover:opacity-75" href="/pages/contact.html"> Contact Us </a>
          
          </nav>
        </div>
        <div>
          <p class="font-medium">
           Top Courses
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-black">
            <a class="hover:opacity-75" href="/courses/datascience.html"> Data Science</a>
            <a class="hover:opacity-75" href="/courses/powerBi.html"> PowerBi </a>
            <a class="hover:opacity-75" href="/courses/tableau.html"> Tableau </a>
            <a class="hover:opacity-75" href="/courses/python.html"> Python</a>
            <a class="hover:opacity-75" href="/courses/sql.html"> SQL </a>
            <a class="hover:opacity-75" href="/courses/excel.html"> Advance Excel</a>
            
          </nav>
        </div>
        <div>
          <p class="font-medium">
          Other Courses
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-black">
          <a class="hover:opacity-75" href="/courses/digitalMarketing.html"> Digital Marketing </a>
          <a class="hover:opacity-75" href="/pages/corporate.html"> Corporate Training </a>
          <a class="hover:opacity-75" href="/pages/english.html"> Spoken English </a>
          <a class="hover:opacity-75" href="/courses/computer.html"> Basic Computer Course </a>
           
          </nav>
        </div>
        <div>
          <p class="font-medium">
          Policies
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-black">
          <a class="hover:opacity-75 font-bold" href="/pages/privacy_policy.html">Privacy Policy </a>
          <a class="hover:opacity-75 font-bold" href="/pages/refund_policy.html">Refund Policy </a>
          <a class="hover:opacity-75 font-bold" href="/pages/term_con.html">Term & Condition</a>

            <a class="hover:opacity-75"href="tel:01242357111">
              <span class=" inline-flex  items-center  text-black text-sm">
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C19.9995 7.348 18.9457 4.80477 17.0705 2.92952C15.1952 1.05427 12.652 0.000530241 10 0V2C11.5821 2.00036 13.1286 2.46964 14.4441 3.34854C15.7596 4.22744 16.7851 5.47653 17.391 6.938C17.7931 7.90877 18.0001 8.94924 18 10H20ZM0 8V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H6C6.26522 2 6.51957 2.10536 6.70711 2.29289C6.89464 2.48043 7 2.73478 7 3V7C7 7.26522 6.89464 7.51957 6.70711 7.70711C6.51957 7.89464 6.26522 8 6 8H4C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16V14C12 13.7348 12.1054 13.4804 12.2929 13.2929C12.4804 13.1054 12.7348 13 13 13H17C17.2652 13 17.5196 13.1054 17.7071 13.2929C17.8946 13.4804 18 13.7348 18 14V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H12C5.373 20 0 14.627 0 8Z" fill="#9333EA"/>
                  <path d="M15.543 7.704C15.8449 8.43183 16.0002 9.21206 16 10H14.2C14.2001 9.44841 14.0916 8.9022 13.8806 8.39257C13.6695 7.88295 13.3602 7.41989 12.9701 7.02986C12.5801 6.63983 12.1171 6.33046 11.6074 6.11944C11.0978 5.90841 10.5516 5.79987 10 5.8V4C11.1867 4.00006 12.3466 4.352 13.3333 5.0113C14.3199 5.6706 15.0889 6.60767 15.543 7.704Z" fill="#9333EA"/>
                  </svg>
                  
                  
              </span>
              0124-2357111</a>
            <a class="hover:opacity-75" href="https://wa.me/+919910073712">
               <span class=" inline-flex  items-center   text-black text-sm">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 2.91C16.1332 1.98392 15.0412 1.24967 13.8376 0.75005C12.6341 0.250433 11.3431 -0.00454115 10.04 -1.46553e-06C4.57999 -1.46553e-06 0.129988 4.45 0.129988 9.91C0.129988 11.66 0.589988 13.36 1.44999 14.86L0.0499878 20L5.29999 18.62C6.74999 19.41 8.37999 19.83 10.04 19.83C15.5 19.83 19.95 15.38 19.95 9.92C19.95 7.27 18.92 4.78 17.05 2.91ZM10.04 18.15C8.55999 18.15 7.10999 17.75 5.83999 17L5.53999 16.82L2.41999 17.64L3.24999 14.6L3.04999 14.29C2.22773 12.977 1.79113 11.4592 1.78999 9.91C1.78999 5.37 5.48999 1.67 10.03 1.67C12.23 1.67 14.3 2.53 15.85 4.09C16.6175 4.85396 17.2257 5.76266 17.6394 6.76342C18.0531 7.76419 18.264 8.83711 18.26 9.92C18.28 14.46 14.58 18.15 10.04 18.15ZM14.56 11.99C14.31 11.87 13.09 11.27 12.87 11.18C12.64 11.1 12.48 11.06 12.31 11.3C12.14 11.55 11.67 12.11 11.53 12.27C11.39 12.44 11.24 12.46 10.99 12.33C10.74 12.21 9.93999 11.94 8.99999 11.1C8.25999 10.44 7.76999 9.63 7.61999 9.38C7.47999 9.13 7.59999 9 7.72999 8.87C7.83999 8.76 7.97999 8.58 8.09999 8.44C8.21999 8.3 8.26999 8.19 8.34999 8.03C8.42999 7.86 8.38999 7.72 8.32999 7.6C8.26999 7.48 7.76999 6.26 7.56999 5.76C7.36999 5.28 7.15999 5.34 7.00999 5.33H6.52999C6.35999 5.33 6.09999 5.39 5.86999 5.64C5.64999 5.89 5.00999 6.49 5.00999 7.71C5.00999 8.93 5.89999 10.11 6.01999 10.27C6.13999 10.44 7.76999 12.94 10.25 14.01C10.84 14.27 11.3 14.42 11.66 14.53C12.25 14.72 12.79 14.69 13.22 14.63C13.7 14.56 14.69 14.03 14.89 13.45C15.1 12.87 15.1 12.38 15.03 12.27C14.96 12.16 14.81 12.11 14.56 11.99Z" fill="#9333EA"/>
                </svg>
                
                
            </span>
             +91 9910073712 </a>
            <a class="hover:opacity-75" href="mailto:info@moonstonecorporate.com" > 
              
              info@moonstonecoporate.com </a>
            
          </nav>
        </div>
      </div>
    </div>
    <p class="mt-8 text-xs text-black">
      © 2024 Moonstone Corporate Services Pvt. Ltd.
    </p>
  </div>
</footer>
`