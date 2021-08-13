import axios from "axios";

export default {
  ssr: false,
  target: "static",
  generate: {
    fallback: "404.html"
  },

  head: {
    title: "Aree Hiring",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Evaluate real skills, not resumes"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/firebase",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    },
    services: {
      firestore: true,
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation:
            "ON_AUTH_STATE_CHANGED_MUTATION",
          onAuthStateChangedAction: "onAuthStateChangedAction",
          subscribeManually: false
        },
        ssr: false, // default
        emulatorPort: 9099,
        emulatorHost: 'http://localhost',
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: true,

  axios: {
    baseUrl: process.env.API_URL
  },
  env: {
    authUsername: process.env.AUTH_USERNAME,
    authPassword: process.env.AUTH_PASSWORD
  }
};

/*

          auth: {
            persistence: "local",
            initialize: {
              onAuthStateChangedMutation: "onAuthStateChangedMutation",
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false
            },
            ssr: false,
            emulatorPort: 9099,
            emulatorHost: "http://localhost"
          }
*/
