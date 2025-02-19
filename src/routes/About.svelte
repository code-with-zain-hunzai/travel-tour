<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isVisible = false;
  let activeTab = 'story';

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
      description: "20+ years of experience in luxury travel",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Travel Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
      description: "Expert in Asian and European destinations",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Experience Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
      description: "Dedicated to creating unforgettable travel experiences",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started with a vision to revolutionize luxury travel" },
    { year: "2015", title: "Global Expansion", description: "Opened offices in major cities worldwide" },
    { year: "2018", title: "Award Winner", description: "Named Best Luxury Travel Agency" },
    { year: "2023", title: "Digital Innovation", description: "Launched cutting-edge travel planning platform" }
  ];

  onMount(() => {
    isVisible = true;
  });
</script>

<div class="py-16 px-4 md:px-8 lg:px-16">
  <!-- Hero Section with Parallax -->
  <div class="max-w-7xl mx-auto mb-16">
    <div class="relative h-[500px] rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-fixed bg-center bg-cover"
           style="background-image: url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&h=600')">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {#if isVisible}
            <div class="text-center" in:fade="{{ duration: 1000 }}">
              <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">About Us</h1>
              <p class="text-xl text-white/80 max-w-2xl mx-auto">Creating unforgettable journeys since 2010</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation Tabs -->
  <div class="max-w-4xl mx-auto mb-12">
    <div class="flex justify-center space-x-8 border-b border-gray-200">
      <button 
        class="py-4 px-6 focus:outline-none {activeTab === 'story' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}"
        on:click={() => activeTab = 'story'}>
        Our Story
      </button>
      <button 
        class="py-4 px-6 focus:outline-none {activeTab === 'milestones' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}"
        on:click={() => activeTab = 'milestones'}>
        Milestones
      </button>
      <button 
        class="py-4 px-6 focus:outline-none {activeTab === 'team' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}"
        on:click={() => activeTab = 'team'}>
        Our Team
      </button>
    </div>
  </div>

  <!-- Content Sections -->
  {#if activeTab === 'story'}
    <div class="max-w-4xl mx-auto" in:fade>
      <div class="prose prose-lg mx-auto">
        <p class="text-gray-600 mb-6 leading-relaxed">
          Founded in 2010, our travel agency has been dedicated to creating extraordinary travel experiences for our clients. 
          We believe that travel is not just about visiting new places, but about creating lasting memories and 
          understanding different cultures.
        </p>
        <p class="text-gray-600 leading-relaxed">
          With over a decade of experience, we've helped thousands of travelers explore the world's most beautiful 
          destinations while providing personalized service and attention to detail that sets us apart.
        </p>
      </div>
    </div>
  {/if}

  {#if activeTab === 'milestones'}
    <div class="max-w-4xl mx-auto" in:fade>
      <div class="relative">
        {#each milestones as milestone, i}
          <div class="flex items-start mb-8">
            <div class="flex-shrink-0 w-24 pt-1">
              <span class="text-primary font-bold text-xl">{milestone.year}</span>
            </div>
            <div class="flex-grow pl-8 border-l-2 border-primary">
              <h3 class="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p class="text-gray-600">{milestone.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if activeTab === 'team'}
    <div class="max-w-7xl mx-auto" in:fade>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        {#each teamMembers as member, i}
          <div 
            class="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            in:fly="{{ y: 50, duration: 500, delay: i * 200 }}">
            <div class="relative">
              <img 
                src={member.image} 
                alt={member.name} 
                class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{member.name}</h3>
              <p class="text-primary font-medium mb-2">{member.role}</p>
              <p class="text-gray-600 mb-4">{member.description}</p>
              <div class="flex space-x-4">
                <a href={member.socialLinks.linkedin} class="text-gray-400 hover:text-primary transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={member.socialLinks.twitter} class="text-gray-400 hover:text-primary transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href={member.socialLinks.instagram} class="text-gray-400 hover:text-primary transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>