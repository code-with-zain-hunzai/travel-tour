<script lang="ts">
  import { Link } from "svelte-routing";
  let isMenuOpen = false;
</script>

<nav class="bg-white shadow-lg fixed w-full z-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <Link to="/" class="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1533281808624-e9b014cdb2e0?w=50&h=50&fit=crop&crop=faces"
            alt="Travel Agency Logo"
            class="h-8 w-auto rounded-full"
          />
        </Link>
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <Link to="/" class="text-dark hover:text-primary">Home</Link>
        <Link to="/about" class="text-dark hover:text-primary">About</Link>
        <Link to="/services" class="text-dark hover:text-primary">Services</Link
        >
        <Link to="/gallery" class="text-dark hover:text-primary">Gallery</Link>
        <Link to="/contact" class="text-dark hover:text-primary">Contact</Link>
      </div>

      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
        class="md:hidden flex items-center"
        on:click={() => (isMenuOpen = !isMenuOpen)}
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <Link to="/" class="block px-3 py-2 text-dark hover:text-primary"
          >Home</Link
        >
        <Link to="/about" class="block px-3 py-2 text-dark hover:text-primary"
          >About</Link
        >
        <Link
          to="/services"
          class="block px-3 py-2 text-dark hover:text-primary">Services</Link
        >
        <Link to="/gallery" class="block px-3 py-2 text-dark hover:text-primary"
          >Gallery</Link
        >
        <Link to="/contact" class="block px-3 py-2 text-dark hover:text-primary"
          >Contact</Link
        >
      </div>
    </div>
  {/if}
</nav>
