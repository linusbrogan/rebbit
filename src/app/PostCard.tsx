import { Post } from './api'

const MAX_POST_LENGTH = 300

export default function PostCard(props: Post) : JSX.Element {
  let body : string = props.body
  if (body.length > MAX_POST_LENGTH) {
    body = body.substring(0, MAX_POST_LENGTH - 3) + '...'
  }

  return (
    <article key={props.id}>
      <h3>{ props.title }</h3>
      <span> Votes: {props.reactions} </span>
      <p>{ body }</p>
    </article>
  )
}
