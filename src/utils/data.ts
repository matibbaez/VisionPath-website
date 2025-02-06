import visibilityDilemma from "../assets/images/timelinebanner.webp";
import engagementGap from "../assets/images/visionbannerfinal.webp";

const services = [
  {
    title: "Tailored to You",
    features: [
      "100% custom solutions",
      "Built for your unique goals",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Performance-Driven",
    features: [
      "Fast, scalable, and optimized",
      "SEO-ready for maximum visibility",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "Seamless User Experience",
    features: [
      "Intuitive & engaging design",
      "Conversion-focused interfaces",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },
  {
    title: "Cutting-Edge Technology",
    features: [
      "Latest tools & frameworks",
      "Future-proof digital solutions",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`,
  },
  {
    title: "Reliable & Trustworthy",
    features: [
      "Delivering measurable success",
      "Clients who stay, results that grow",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
  },
  {
    title: "Ongoing Partnership",
    features: [
      "Continuous support & updates",
      "Transparent communication",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
  },
];

const solutions = [
  {
    title: "Who We Are",
    painPoint:
      "Most development agencies offer generic solutions, focusing on quick fixes rather than long-term success. Businesses struggle with websites that lack customization, scalability, and real impact.",
    agitatepainPoint:
      "A poorly built website is more than an inconvenience—it’s a barrier to growth. Without a tailored strategy, your brand risks blending in, losing visibility, and missing valuable opportunities.",
    solution:
      "At VisionPath, we don’t just build websites—we create custom, high-performance digital experiences that drive real business growth. Our expert team ensures that every project is designed from scratch, SEO-optimized, and scalable, helping you stand out and succeed in the digital landscape.",
    img: engagementGap,
  },
  {
    title: "How We Build Your Success",
    painPoint:
      "Most businesses rely on templated websites—slow, unoptimized, and failing to reflect their unique brand.",
    agitatepainPoint:
      "A generic site won’t attract or retain customers. Poor SEO, bad UX, and limited flexibility prevent your business from scaling effectively.",
    solution:
      "At VisionPath, we build fully customized, high-performance websites that engage, convert, and grow with your brand. From tailored design to SEO-driven development, we ensure your website is an asset—not a limitation.",
    img: visibilityDilemma,
  },
];

const faqs = [
  {
    question: "What is VisionPath?",
    answer:
      "VisionPath is an IT development agency that specializes in creating fully customized digital solutions. We design websites, applications, and digital strategies tailored to your business goals, with a strong focus on innovation and growth.",
  },
  {
    question: "How is VisionPath different from other agencies?",
    answer:
      "Unlike traditional agencies, VisionPath takes the time to understand your business deeply. We offer unique, custom-made designs, ensuring your digital presence is aligned with your company's values and objectives.",
  },
  {
    question: "What services does VisionPath offer?",
    answer:
      "We offer a range of services including: custom web design, app development, SEO optimization, digital marketing strategies, and digital transformation consulting. Our focus is on creating solutions that fit your specific needs.",
  },
  {
    question: "How long does it take to build a website with VisionPath?",
    answer:
      "Website development times vary based on complexity, but typically it takes between 4 to 8 weeks. We collaborate closely with you throughout the process to ensure the final product is exactly what you envision.",
  },
  {
    question: "What’s the cost of working with VisionPath?",
    answer:
      "Costs vary depending on the scope and requirements of each project. After a brief consultation, we'll provide a detailed proposal that aligns with your budget and project goals.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Yes, we offer continuous support to ensure your website operates smoothly. Whether you need updates, performance optimizations, or any changes, we’re here to assist as your business evolves.",
  },
  {
    question: "Does VisionPath work with small businesses or only large corporations?",
    answer:
      "We work with businesses of all sizes, from startups to large corporations. Our approach is tailored to each client, no matter how big or small, ensuring that your digital solutions are perfect for your specific needs.",
  },
  {
    question: "How can I start working with VisionPath?",
    answer:
      "Getting started is easy! Simply reach out to us to schedule a consultation. We'll discuss your business needs, goals, and how we can create a customized strategy that accelerates your digital growth.",
  },
  {
    question: "Can I see examples of your previous projects?",
    answer:
      "Absolutely! Check out our portfolio to see how we've helped businesses just like yours achieve success through custom digital solutions. Our case studies highlight the impact we've made for our clients.",
  },
  {
    question: "What makes VisionPath the right choice for my business?",
    answer:
      "At VisionPath, we offer more than just development—we create scalable, effective digital strategies that grow with your business. Our expertise in web design, SEO, and digital transformation ensures that your digital presence drives results.",
  },
];

export { services, solutions, faqs };
