import { RouteRecordRaw } from "vue-router"
import { Logger } from "zeed"
import AppBlog from "./components/app-blog.vue"
import AppEmail from "./components/app-email.vue"
import meta from "./metadata.json"

const log = Logger("router")

function generateLanguageRoutes(lang: "de" | "en") {
  return [
    {
      path: "/posts",
      component: AppBlog,
      children: [
        // {
        //   path: "",
        //   name: `${lang}-}blog`,
        //   component: () => import("./pages/index.vue"),
        // },
        ...meta.map((post) => {
          return {
            path: post.slug,
            name: `${lang}-posts-${post.slug}`,
            // props: { post, name: post.name },
            meta: { post, lang },
            component: () => import(`./posts/${post.name}.md`),
          }
        }),
      ],
    },
  ]
}

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/index.vue"),
  },

  ...generateLanguageRoutes("en"),

  // {
  //   path: "/de",
  //   name: "de",
  //   component: () => import("./pages/index.vue"),
  //   children: generateLanguageRoutes("de"),
  //   meta: {
  //     lang: "de",
  //   },
  // },

  // {
  //   path: "/en",
  //   name: "en",
  //   component: () => import("./pages/index.vue"),
  //   children: generateLanguageRoutes("en"),
  //   meta: {
  //     lang: "de",
  //   },
  // },

  {
    path: "/email",
    component: AppEmail,
    meta: {
      pure: true,
    },
    children: [
      ...meta.map((post) => {
        return {
          path: post.slug,
          name: `email-${post.slug}`,
          props: { post, name: post.name },
          meta: { post },
          component: () => import(`./posts/${post.name}.md`),
        }
      }),
    ],
  },

  {
    path: "/404",
    name: "not-found",
    component: () => import("./pages/404.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./pages/404.vue"),
  },
]
