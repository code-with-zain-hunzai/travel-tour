<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./lib/components/Navbar.svelte";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Gallery from "./routes/Gallery.svelte";
  import Contact from "./routes/Contact.svelte";
  import Services from "./routes/Services.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="min-h-screen">
    <Navbar />
    <main class="pt-16">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
    </main>
  </div>
</Router>