<template>
  <div class="relative overflow-hidden">
    <div class="relative bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="w-0 flex-1 flex">
            <a href="/" aria-label="Home">
              <img
                src="../assets/logo-horizontal.png"
                alt="Textnibble horizontal logo"
                class="mx-auto object-contain h-8 sm:h-10"
              />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              @click="menuOpen=!menuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <a
              href="#moreinfo"
              class="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
            >A better way</a>
            <a
              href="#sauce"
              class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
            >Our secret sauce</a>
            <a
              href="#closing"
              class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
            >Restaurants need you</a>
            <a
              href="#why"
              class="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
            >Why we care</a>
          </nav>
          <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <span class="inline-flex rounded-md shadow-sm">
              <a
                href="#getstarted"
                class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-accentDarker hover:bg-accentDark focus:outline-none focus:border-accentLighter focus:shadow-outline-banana active:bg-accentLighter transition ease-in-out duration-150"
              >Get started</a>
            </span>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
      -->
      <div
        class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        :class="menuOpen ? 'visible' : 'hidden'"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <a href="/" aria-label="Home">
                    <img
                      src="../assets/logo-horizontal.png"
                      alt="Textnibble horizontal logo"
                      class="mx-auto h-8 sm:h-10"
                    />
                  </a>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="menuOpen=!menuOpen"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid row-gap-8">
                  <a
                    href="#moreinfo"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-banana"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">A better way</div>
                  </a>
                  <a
                    href="#sauce"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-banana"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">Our secret sauce</div>
                  </a>
                  <a
                    href="#closing"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-banana"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div
                      class="text-base leading-6 font-medium text-gray-900"
                    >Restaurants are closing</div>
                  </a>
                  <a
                    href="#why"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-banana"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">Why it matters to us</div>
                  </a>
                  <a
                    href="#recommend"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-banana"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">Recommend your faves</div>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <div
              class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
            >Now in early preview</div>
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
            >
              Send a text.
              <br />Get your food.
              <br />
              <span class="text-banana">Simple.</span>
            </h2>
            <p
              class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
            >No apps to download. No accounts to remember. And your phone number stays private. Just easy, safe, contactless ordering for carry-out, curbside, or delivery from your favorite local restaurants.</p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#getstarted"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-accentDarker hover:bg-banana focus:outline-none focus:border-accentLight focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >Get started</a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#moreinfo"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-banana bg-white hover:text-accentDarker hover:border-accentLight focus:outline-none focus:border-accentLight focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <a name="moreinfo" />
        <div
          class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full bg-local bg-no-repeat bg-cover"
          :style="{'background-image': `url(${bgImg})`}"
        >
          <lottie-animation
            class="opacity-90"
            path="newOrder.json"
            :loop="true"
            :autoPlay="true"
            :renderer="svg"
          />
        </div>
      </main>
      <article>
        <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
          <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <svg
              class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
            </svg>

            <div class="relative">
              <h3
                class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              >A better way to order food</h3>
              <p
                class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"
              >No more fumbling through tedious online apps to place an order. Just text what you want, pay for your order, and get your food. As simple as ordering face to face.</p>
            </div>

            <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="relative">
                <h4
                  class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                >Smart, even without a smartphone</h4>
                <p
                  class="mt-3 text-lg leading-7 text-gray-500"
                >We believe everybody should be able to order safely from their favorite restaurants during and after the pandemic. Anybody with a mobile phone that can send a text message can order food using Textnibble.</p>

                <ul class="mt-10">
                  <li>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                        >
                          <svg viewBox="0 0 20 20" fill="currentColor" class="download w-6 h-6">
                            <path
                              fill-rule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">Nothing to download</h5>
                        <p
                          class="mt-2 text-base leading-6 text-gray-500"
                        >Each restaurant has its own Textnibble phone number you can text orders to. Just save their phone number in your phone's address book and text anytime you want to order.</p>
                      </div>
                    </div>
                  </li>
                  <li class="mt-10">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="shield-check w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5
                          class="text-lg leading-6 font-medium text-gray-900"
                        >Pay from a safe distance</h5>
                        <p
                          class="mt-2 text-base leading-6 text-gray-500"
                        >Safe, no-touch transactions with major credit or debit cards or digital wallets like Apple Pay or Google Pay right from your phone. Can't access the web? Textnibble can call you to get your payment details!</p>
                      </div>
                    </div>
                  </li>
                  <li class="mt-10">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="finger-print w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                              clip-rule="evenodd"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                              clip-rule="evenodd"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">Secure and private</h5>
                        <p
                          class="mt-2 text-base leading-6 text-gray-500"
                        >We don't share your phone number with ANYONE, including the restaurants you're ordering from. Restaurants see your name and manage your order on their special in-restaurant interface.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mt-10 -mx-4 relative lg:mt-0">
                <svg
                  class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                </svg>
                <lottie-animation
                  class="opacity-90"
                  path="paymentMethods.json"
                  :loop="true"
                  :autoPlay="true"
                  :renderer="svg"
                />
              </div>
            </div>

            <svg
              class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>

            <div class="relative mt-12 sm:mt-16 lg:mt-24">
              <a name="sauce" />
              <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="lg:col-start-2">
                  <h4
                    class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                  >Our secret sauce is people.</h4>
                  <p class="mt-3 text-lg leading-7 text-gray-500">
                    Machines don't run restaurants, people do. Food ordering apps take your money first,
                    <span
                      class="italic"
                    >then</span> send your order to restaurant staff to sort out any issues.
                    Textnibble cares about getting your order right first.
                  </p>

                  <ul class="mt-10">
                    <li>
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <div
                            class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                          >
                            <svg viewBox="0 0 20 20" fill="currentColor" class="heart w-6 h-6">
                              <path
                                fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-4">
                          <h5
                            class="text-lg leading-6 font-medium text-gray-900"
                          >Human with a dash of technology.</h5>
                          <p
                            class="mt-2 text-base leading-6 text-gray-500"
                          >With Textnibble, restaurant staff see your order right when you text it. If there's a question about it, they'll ask. Otherwise, they'll send how long your order will take, and a payment link. Once you've paid, we text you when your order gets started and again when it's ready!</p>
                        </div>
                      </div>
                    </li>
                    <li class="mt-10">
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <div
                            class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                          >
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="lightning-bolt w-6 h-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-4">
                          <h5 class="text-lg leading-6 font-medium text-gray-900">Quick and personal</h5>
                          <p class="mt-2 text-base leading-6 text-gray-500">
                            Hold the onions? Extra cheese? Every order is personal. With Textnibble, just text what you want, how you want it and be confident you'll get what you want
                            <span
                              class="italic font-bold"
                            >before</span>
                            you pay.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <svg
                    class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                    width="784"
                    height="404"
                    fill="none"
                    viewBox="0 0 784 404"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          class="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="784"
                      height="404"
                      fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                    />
                  </svg>
                  <img class="relative mx-auto" width="490" src="../assets/custom_order.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12 bg-white">
          <a name="closing" />
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h3
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              >Your favorite neighborhood restaurants are disappearing.</h3>
              <p
                class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
              >Experts predict one out of five independently owned restaurants in the United States will disappear due to the pandemic economy.</p>
            </div>

            <div class="py-12 bg-white">
              <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                <div class="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" class="home w-6 h-6">
                        <path
                          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        />
                      </svg>
                    </div>
                    <div class="mt-5">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">Save Mom and Pop shops</h5>
                      <p
                        class="mt-2 text-base leading-6 text-gray-500"
                      >Social distancing guidelines force independent restaurants to take orders online, which many small restaurants couldn't afford to do before the pandemic economy. Textnibble is insanely affordable for small independent businesses.</p>
                    </div>
                  </div>
                  <div class="mt-10 lg:mt-0">
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" class="currency-dollar w-6 h-6">
                        <path
                          d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="mt-5">
                      <h5
                        class="text-lg leading-6 font-medium text-gray-900"
                      >No transaction commissions</h5>
                      <p
                        class="mt-2 text-base leading-6 text-gray-500"
                      >Restaurants normally keep 15-20% of every dollar you spend. Ordering apps charge high subscription fees and up to 30% of every dollar plus credit card and delivery fees. We say nope to predatory practices like that.</p>
                    </div>
                  </div>
                  <div class="mt-10 lg:mt-0">
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-banana text-white"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" class="gift w-6 h-6">
                        <path
                          fill-rule="evenodd"
                          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                          clip-rule="evenodd"
                        />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                      </svg>
                    </div>
                    <div class="mt-5">
                      <h5
                        class="text-lg leading-6 font-medium text-gray-900"
                      >Be part of the solution</h5>
                      <p
                        class="mt-2 text-base leading-6 text-gray-500"
                      >The 75&#162; cent fee you pay on Textnibble orders helps your favorite local restaurants offer the simplest and safest ordering solution on the planet. Thank you for your support of independent and family-owned shops.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a name="getstarted" />
        <a name="why" />
        <section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
          <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <img
                src="../assets/logo-horizontal.png"
                alt="Textnibble horizontal logo"
                class="mx-auto h-10"
              />
              <blockquote class="mt-8">
                <div
                  class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
                >
                  <p>&ldquo;Why do we care so much about small, family-owned businesses? Simple. We are one!&rdquo;</p>
                </div>
                <footer class="mt-8">
                  <div class="md:flex md:items-center md:justify-center">
                    <div class="md:flex-shrink-0">
                      <img class="mx-auto h-10 w-10 rounded-full" src="../assets/gerry.jpg" alt />
                    </div>
                    <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div class="text-base leading-6 font-medium text-gray-900">Gerry Rodriguez</div>

                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-banana"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>
                      <div class="text-base leading-6 font-medium text-gray-500">Co-Founder</div>
                      <svg
                        class="hidden md:block mx-1 h-5 w-5 text-banana"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>
                      <div
                        class="text-base leading-6 font-medium text-gray-500"
                      >Customer Care @Textnibble</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </article>
      <article>
        <a name="recommend" />
        <div class="bg-white">
          <div class="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div
              class="px-6 py-6 bg-banana rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
            >
              <div class="xl:w-0 xl:flex-1">
                <h2
                  class="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9"
                >Want your favorite restaurant on Textnibble?</h2>
                <p
                  class="mt-3 max-w-3xl text-lg leading-6 text-cool-gray-50"
                  id="newsletter-headline"
                >Recommend your favorite restaurants for early preview and learn when other restaurants become available.</p>
              </div>
              <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form
                  class="sm:flex"
                  aria-labelledby="newsletter-headline"
                  @submit.prevent="processForm"
                >
                  <input
                    aria-label="Email address"
                    type="email"
                    v-model="email"
                    required
                    class="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                    placeholder="Enter your email"
                  />
                  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-accentDarker hover:bg-accentLight focus:outline-none focus:bg-accentLighter focus:text-accentDarker transition duration-150 ease-in-out"
                    >Yes! Tell me how!</button>
                  </div>
                </form>
                <p class="mt-3 text-sm leading-5 text-cool-gray-50">
                  We care about the protection of your data. Read our
                  <router-link
                    :to="{ name: 'Privacy' }"
                    class="text-cool-gray-50 font-medium underline"
                  >Privacy Policy.</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        :class="showSuccess ? 'visible' : 'hidden'"
        class="rounded-md bg-banana p-4 fixed bottom-0 inset-x-0 pb-2 sm:pb-5 h-36"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-accentLight" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p
              class="text-sm leading-5 font-medium text-cool-gray-50"
            >Thank you! Check your email to learn how to recommend a restaurant and get started with Textnibble! If you don't see an email, please check your spam or junkmail folder to allow our emails.</p>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button
                @click="showSuccess=false"
                class="inline-flex rounded-md p-1.5 text-accentLight hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
                aria-label="Dismiss"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <ScrollTopButton />
  </div>
</template>


<script>
import ScrollTopButton from "@/components/ScrollTopButton";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    LottieAnimation,
    ScrollTopButton
  },
  data() {
    return {
      bgImg: require("../assets/happy_order.jpg"),
      term: "",
      email: "",
      showSuccess: false,
      menuOpen: false,
      svg: ""
    };
  },
  methods: {
    processForm: function() {
      console.log({ email: this.email });
      axios
        .post("https://inchworm-wren-9312.twil.io/submit", {
          email: this.email
        })
        .then(response => {
          console.log("SUCCESS");
          this.showSuccess = true;
          this.email = "";
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
