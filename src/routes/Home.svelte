<script lang="ts">
  import { onMount } from "svelte";

  let currentSlide = 0;
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=400",
      title: "Discover Amazing Places",
      description: "Explore the world with our curated travel experiences",
    },
    {
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&h=1080",
      title: "Adventure Awaits",
      description: "Create unforgettable memories with our guided tours",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&h=1080",
      title: "Luxury Destinations",
      description: "Experience the finest accommodations and services",
    },
  ];

  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=400&h=300",
      title: "Santorini, Greece",
      description:
        "Experience the stunning white architecture and Mediterranean beauty.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=400&h=300",
      title: "Bali, Indonesia",
      description:
        "Explore tropical paradise with rich culture and pristine beaches.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=400&h=300",
      title: "Venice, Italy",
      description: "Discover the romantic canals and historic architecture.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=400&h=300",
      title: "Maldives",
      description: "Relax in overwater bungalows in crystal clear waters.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=300",
      title: "Swiss Alps",
      description: "Adventure through breathtaking mountain landscapes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549893072-4bc678117f45?auto=format&fit=crop&w=400&h=300",
      title: "Dubai, UAE",
      description: "Experience luxury and modernity in the desert metropolis.",
    },
  ];

  const services = [
    {
      icon: "🏨",
      title: "Hotel Booking",
      description: "Luxury accommodations worldwide",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: "✈️",
      title: "Flight Booking",
      description: "Best deals on airfare",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: "🎫",
      title: "Tour Packages",
      description: "All-inclusive vacation packages",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: "🎯",
      title: "Custom Tours",
      description: "Personalized travel experiences",
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&h=300",
    },
  ];

  onMount(() => {
    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<main>
  <!-- Hero Section -->
  <section class="relative h-screen">
    {#each slides as slide, index}
      <div
        class="absolute inset-0 transition-opacity duration-1000"
        style="opacity: {currentSlide === index ? '1' : '0'}"
      >
        <img
          src={slide.image}
          alt={slide.title}
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div class="text-center text-white px-4">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p class="text-xl md:text-2xl mb-8">{slide.description}</p>
            <button class="btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    {/each}
  </section>

  <!-- Popular Destinations -->
  <section class="section-padding bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each destinations as destination}
          <div
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={destination.image}
              alt={destination.title}
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{destination.title}</h3>
              <p class="text-gray-600 mb-4">{destination.description}</p>
              <button class="btn-primary">Learn More</button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="section-padding">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each services as service}
          <div class="text-center p-6">
            <div
              class="relative w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                class="absolute inset-0 w-full h-full object-cover"
              />
              <span class="relative z-10 text-2xl">{service.icon}</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{service.title}</h3>
            <p class="text-gray-600">{service.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section-padding bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=400"
            alt="Travel Experience"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-center">
          <div class="grid gap-6">
            <div class="flex items-start space-x-4">
              <div class="bg-primary rounded-full p-3">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p class="text-gray-600">
                  Professional travel experts with years of experience.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="bg-primary rounded-full p-3">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
                <p class="text-gray-600">
                  Round-the-clock assistance for your travel needs.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="bg-primary rounded-full p-3">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Best Prices</h3>
                <p class="text-gray-600">
                  Competitive rates and exclusive travel deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
