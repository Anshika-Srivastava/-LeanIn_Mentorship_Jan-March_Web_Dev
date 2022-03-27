import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Breathless on the roof",
      datetime: "March 21, 2022 09:20:36 AM",
      body: "We ran breathless to the roof. The wind whooshing around us.The floor throbbed with dance music. It was night. We lent over the edge and laughed at the darkness. Gripping hands and giggling proud of the new place we’d found. Our little adventure. Bathroom mirror buddies.I still have your lipstick.Thanks for reading!Anyway let me know what you think in the comments below. If you’re too shy, just give my post a like, and most importantly share it."
    },
    {
      id: 2,
      title: "Bath Oils",
      datetime: "March 22, 2022 10:18:08 AM",
      body: "With so many bath products available on the market, it’s easy to get overwhelmed by the sheer amount of stuff you’re able to buy! So, let’s start off with something simple and look into what bath oils actually are, and what it is that they do.Bath oils are designed as a body product specifically to add to your bathtub, and with frequent use over time have plenty of benefits to hydrate and nourish your skin. Some bath oils are curated more so for body care in mind, with the main goal being to hydrate the dry skin that many of us suffer from in harsh winters. Other body oils have the relaxation side of things as their main goal and use aromatherapy-based essential oils and herbs to help you achieve the ultimate form of relaxation."
    },
    {
      id: 3,
      title: "The Little Princess",
      datetime: "March 23, 2022 11:19:50 AM",
      body: "The blog has categories like parenting under which the blogger talks about all the right things to do as a parent such as mixing up with them, setting the right example for them, talking to them, giving them the right books to read and so on. The next head is of poetry under which the blogger presents us with amazing poetry that can light up our day and does not take a lot of time to go through. Next the blogger talks about love and relationships she talks about how we can discover our relationships and improve them. She also talks about her relationship with her son and also advices the readers to cherish the relationships that we have and maintain the bond of love. Lastly she brings up the humor quotient in the blog by giving a touch of humor."
    },
    {
      id: 4,
      title: "My Friendship",
      datetime: "March 24, 2022 07:18:08 AM",
      body: "Friendship fills our hearts with a song our lives with a bright dream and our day with happy memories. It is a bond shared with someone special who does little things that matter a lot. The blogger is very passionate about poetry and her poems have been published in various anthologies. The theme of the blog is friendship but the blogger also writes about a lot other things that affect the society and the environment she writes about all the topics that should come up and people should read and understand their importance. The blog has a sense of simplicity and meaning in the words written hence is a really good initiative. Apart from writing the blogger also has interest in reviewing books and tries her hand in photography too."
    }
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const history = useHistory();

  useEffect(() => {
    const filteredResults = posts.filter(
      post =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    history.push("/");
  };

  const handleDelete = id => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    history.push("/");
  };

  return (
    <div className="App">
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={searchResults} />
        </Route>
        <Route exact path="/post">
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
