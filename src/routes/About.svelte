<script lang="ts">
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
      description: "20+ years of experience in luxury travel"
    },
    {
      name: "Michael Chen",
      role: "Travel Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
      description: "Expert in Asian and European destinations"
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Experience Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
      description: "Dedicated to creating unforgettable travel experiences"
    }
  ];
</script>

<div class="py-16 px-4 md:px-8 lg:px-16">
  <!-- Hero Section -->
  <div class="max-w-7xl mx-auto mb-16">
    <div class="relative h-[400px] rounded-lg overflow-hidden">
      <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&h=600" 
           alt="About Us Hero" 
           class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white">About Us</h1>
      </div>
    </div>
  </div>

  <!-- Our Story -->
  <div class="max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-3xl font-bold mb-8">Our Story</h2>
    <p class="text-gray-600 mb-6">
      Founded in 2010, our travel agency has been dedicated to creating extraordinary travel experiences for our clients. 
      We believe that travel is not just about visiting new places, but about creating lasting memories and 
      understanding different cultures.
    </p>
    <p class="text-gray-600">
      With over a decade of experience, we've helped thousands of travelers explore the world's most beautiful 
      destinations while providing personalized service and attention to detail that sets us apart.
    </p>
  </div>

  <!-- Team Section -->
  <div class="max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each teamMembers as member}
        <div class="text-center">
          <img src={member.image} 
               alt={member.name} 
               class="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
          <h3 class="text-xl font-semibold mb-2">{member.name}</h3>
          <p class="text-primary font-medium mb-2">{member.role}</p>
          <p class="text-gray-600">{member.description}</p>
        </div>
      {/each}
      }
    </div>
  </div>
</div>