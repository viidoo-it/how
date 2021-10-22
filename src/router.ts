import { RouteRecordRaw } from "vue-router"
import { Logger } from "zeed"
import AppBlog from "./components/app-blog.vue"
import AppEmail from "./components/app-email.vue"
import meta from "./metadata.json"

const log = Logger("router")

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/index.vue"),
  },

  {
    path: "/posts",
    component: AppBlog,
    children: [
      {
        path: "",
        name: "blog",
        component: () => import("./pages/index.vue"),
      },
      ...meta.map((post) => {
        return {
          path: post.slug,
          name: `posts-${post.slug}`,
          props: { post, name: post.name },
          meta: { post },
          component: () => import(`./posts/${post.name}.md`),
        }
      }),
    ],
  },

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
