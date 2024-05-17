import * as React from "react"
export const LinkedinIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={` w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
)


export const GithubIcon = ({className, ...rest}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      className={` w-full h-auto ${className}`}
      {...rest}
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
)
  


export const LeetcodeIcon = ({className, ...rest}) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={` w-full h-auto ${className}`}
     {...rest}>
      <path
        fill="#B3B1B0"
        d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
      />
      <path
        fill="#E7A41F"
        d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
      />
      <path
        fill="#070706"
        d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
      />

    </svg>
)

  

  export const EmailIcon = ({className, ...rest}) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
      >
        <path
          d="M84.261 79.141H5.628c-3.049 0-5.617-2.487-5.617-5.617V16.716c0-3.049 2.487-5.617 5.617-5.617h78.633c3.049 0 5.617 2.487 5.617 5.617v56.808a5.582 5.582 0 0 1-5.617 5.617z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#e3e3e3",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="m11.24 79.14 33.63-26.96.23-1.52L11.24 25.7z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d0d0d0",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="m80.8 79.15-20.95-.01-48.61-49.32V25.7L45.1 50.66l35.18-25.32z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#bbb",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="m44.87 52.18.23-1.52L11.24 25.7v4.12L38.4 57.37z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#b3b3b3",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M5.628 79.141a5.582 5.582 0 0 1-5.617-5.617V16.636c0-3.129 2.487-3.691 5.617-3.691s5.617.642 5.617 3.691v62.505H5.628z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d54b3d",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M5.628 13.747c4.012 0 4.814 1.204 4.814 2.889v61.703H5.628a4.828 4.828 0 0 1-4.814-4.814V16.636c0-1.765.803-2.889 4.814-2.889zm0-.802c-3.129 0-5.617.642-5.617 3.691v56.889a5.582 5.582 0 0 0 5.617 5.617h5.617V16.636c0-3.129-2.487-3.691-5.617-3.691z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d72b27",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M84.261 79.141h-5.617V16.476c0-3.129 2.487-3.53 5.617-3.53 3.129 0 5.617.401 5.617 3.53v57.129c0 3.049-2.487 5.536-5.617 5.536z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d54b3d",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M84.261 13.747c3.611 0 4.814.722 4.814 2.728v57.129a4.828 4.828 0 0 1-4.814 4.814h-4.814V16.476c0-2.087 1.204-2.729 4.814-2.729zm0-.802c-3.129 0-5.617.401-5.617 3.53v62.746h5.617a5.582 5.582 0 0 0 5.617-5.617V16.476c0-3.13-2.487-3.531-5.617-3.531z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d72b27",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M44.865 52.101 2.419 21.29c-2.487-1.845-3.21-5.376-1.364-7.863s5.456-3.049 8.024-1.204L44.945 38.3l36.107-26.398c2.487-1.845 6.018-1.284 7.863 1.284 1.845 2.487 1.284 6.018-1.284 7.863L44.865 52.101z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d54b3d",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M84.261 11.581c1.525 0 2.969.722 3.932 2.006 1.525 2.166 1.043 5.135-1.043 6.74L44.865 51.138 2.9 20.648c-2.166-1.605-2.728-4.654-1.204-6.74.883-1.204 2.407-2.006 4.012-2.006 1.043 0 2.086.321 2.889.963l35.786 25.997.481.321.481-.321 36.027-26.398c.883-.562 1.846-.883 2.889-.883zm0-.802c-1.123 0-2.327.321-3.29 1.043L44.865 38.22 8.998 12.143c-.962-.722-2.166-1.043-3.37-1.043-1.765 0-3.53.802-4.654 2.327-1.765 2.487-1.043 6.018 1.444 7.863l42.446 30.892L87.55 21.05c2.487-1.845 3.049-5.296 1.284-7.863-1.122-1.606-2.807-2.408-4.573-2.408z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#d72b27",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
      </g>
    </svg>
  )
 