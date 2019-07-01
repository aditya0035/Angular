import {HomeComponent} from './home/home.component'
import {PostsComponent} from './posts/posts.component'
import {CommentsComponent} from './comments/comments.component'
import {PostComponent} from './post/post.component'
export const router=[];
const homeRouter={"path":"",component:HomeComponent}
const postsRouter={"path":"posts",component:PostsComponent}
const commentsRouter={"path":"comments",component:CommentsComponent}
const postRouter={"path":"posts/:id",component:PostComponent}
router.push(homeRouter)
router.push(postsRouter)
router.push(commentsRouter)
router.push(postRouter)
