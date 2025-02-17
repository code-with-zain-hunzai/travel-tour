<script lang="ts">
  const services = [
    {
      title: "Luxury Hotel Bookings",
      description: "Experience the finest accommodations worldwide with our premium hotel booking service.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=500",
      features: ["5-star hotels", "Exclusive resorts", "Boutique properties", "VIP amenities"]
    },
    {
      title: "Flight Reservations",
      description: "Seamless air travel arrangements with top airlines and exclusive deals.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&h=500",
      features: ["Business class upgrades", "Private jets", "Airport transfers", "Loyalty programs"]
    },
    {
      title: "Customized Tour Packages",
      description: "Tailored travel experiences designed to match your preferences and interests.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=500",
      features: ["Private guides", "Local experiences", "Flexible itineraries", "Cultural immersion"]
    },
    {
      title: "Cruise Bookings",
      description: "Luxury cruise experiences to the world's most stunning destinations.",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&h=500",
      features: ["Ocean cruises", "River cruises", "Expedition voyages", "Luxury liners"]
    }
  ];
</script>

<div class="py-16 px-4 md:px-8 lg:px-16">
  <!-- Hero Section -->
  <div class="max-w-7xl mx-auto mb-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-6">Our Services</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Experience luxury travel with our comprehensive range of services designed to make your 
        journey memorable and hassle-free.
      </p>
    </div>
  </div>

  <!-- Services List -->
  <div class="max-w-7xl mx-auto">
    <div class="space-y-16">
      {#each services as service, index}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center {index % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
          <div class="relative h-[400px] rounded-lg overflow-hidden">
            <img src={service.image} 
                 alt={service.title} 
                 class="w-full h-full object-cover" />
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl font-bold">{service.title}</h2>
            <p class="text-gray-600">{service.description}</p>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">Features:</h3>
              <ul class="space-y-2">
                {#each service.features as feature}
                  <li class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                {/each}
                }
              </ul>
            </div>
            <button class="btn-primary">Learn More</button>
          </div>
        </div>
      {/each}
      }
    </div>
  </div>
</div>