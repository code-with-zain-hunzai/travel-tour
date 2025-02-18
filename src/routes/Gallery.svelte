<script lang="ts">
  const galleries = [
    {
      category: "Destinations",
      images: [
        { url: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=600&h=400", caption: "Santorini Sunset" },
        { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&h=400", caption: "Venice Canals" },
        { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&h=400", caption: "Swiss Alps" },
        { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&h=400", caption: "Dubai Skyline" }
      ]
    },
    {
      category: "Experiences",
      images: [
        { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&h=400", caption: "Safari Adventure" },
        { url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&h=400", caption: "Beach Resort" },
        { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&h=400", caption: "Mountain Hiking" },
        { url: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&h=400", caption: "Cultural Tour" }
      ]
    }
  ];
</script>

<div class="py-16 px-4 md:px-8 lg:px-16">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-12">Travel Gallery</h1>
    
    {#each galleries as gallery}
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-8">{gallery.category}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each gallery.images as image}
            <div class="group relative overflow-hidden rounded-lg">
              <img src={image.url} 
                   alt={image.caption} 
                   class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p class="text-white text-lg font-medium">{image.caption}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>