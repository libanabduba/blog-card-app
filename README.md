## Blog Card App

This project is a simple blog card app built using React. It displays blog posts with information like the title, author, date, summary, comments, and likes.

### Managing Likes with `useState` Hook

Likes for each blog post are managed using the `useState` hook from React. The `likes` state variable is initialized to 0, and a button allows users to increment the likes. Here's how it's implemented in the code:

```javascript
const [likes, setLikes] = useState(0);

// ...

<p>Likes: {likes}</p>
<button onClick={() => setLikes(likes + 1)}>Like</button>
