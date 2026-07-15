const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
    children: [
      {
        label: "Custom Software Development",
        path: "/services/custom-software-development",
        children: [
          {
            label: "Custom Software",
            path: "/services/custom-software-development/custom-software",
          },
          {
            label: "API Development",
            path: "/services/custom-software-development/api-development",
          },
          {
            label: "SaaS Development",
            path: "/services/custom-software-development/saas-development",
          },
          {
            label: "Software Testing & QA",
            path: "/services/custom-software-development/software-testing",
          },
          {
            label: "Maintenance & Support",
            path: "/services/custom-software-development/maintenance-support",
          },
           {
            label: "CRM service",
            path: "/services/custom-software-development/crm-service",
          },
        ],
      },
      {
        label: "Digital Marketing",
        path: "/services/digital-marketing",
        children: [
          {
            label: "Search Engine Optimization",
            path: "/services/digital-marketing/seo",
          },
          {
            label: "Pay Per Click Advertising",
            path: "/services/digital-marketing/ppc-advertising",
          },
          {
            label: "Social Media Marketing",
            path: "/services/digital-marketing/social-media-marketing",
          },
          {
            label: "Email Marketing",
            path: "/services/digital-marketing/email-marketing",
          },
          {
            label: "Analytics & Reporting",
            path: "/services/digital-marketing/analytics-reporting",
          },
        ],
      },
     
      {
        label: "Web Dev & Design",
        path: "/services/website-development-design",
        children: [
          {
            label: "Website Design",
            path: "/services/website-development-design/web-design",
          },
          {
            label: "Website Development",
            path: "/services/website-development-design/web-development",
          },
          {
            label: "App Development",
            path: "/services/website-development-design/app-development",
          },
          {
            label: "eCommerce Development",
            path: "/services/website-development-design/ecommerce",
          },
          {
            label: "Landing Page Design",
            path: "/services/website-development-design/landing-page",
          },
        ],
      },
    ],
  },
  {
    label: "Products",
    path: "/products",
  },
  // {
  //   label: "Careers",
  //   path: "/careers",
  // },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default navLinks;