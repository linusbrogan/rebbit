# Rebbit: a clone of Reddit

## Assignment
- Build a demo version of the Reddit feed.
It should show a list of posts with a search bar that can filter the posts by title.
Posts should show a title, body, subreddit name, and vote count.
- Use [this](https://dummyjson.com/docs/posts) dummy data api to fetch posts, treating the first "tag" on the post as the subreddit name.
- Use either vanilla React or Next.js, but use Typescript either way.
- Use vanilla CSS, TailwindCSS, or the [Ant](https://ant.design/) framework for styling.
You can either try to match Reddit's design, or do your own take on it.

## Setup process

Initialize a Next.js project with default options:
```bash
npx create-next-app@latest
```

For styling, add Ant.
```bash
npm install --save antd @ant-design/icons
```

Add testing dependencies and configure Jest according to [the docs](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library).
```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom whatwg-fetch
```


## Development
Run a development server on [localhost:3000](http://localhost:3000/).
```bash
npm run dev
```

Run tests.
```bash
npm run test
```


## Deployment
I use Vercel for automatic deployments from GitHub to [rebbit-drab.vercel.app](https://rebbit-drab.vercel.app/).
