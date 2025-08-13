<script lang="ts">
  export let data;
</script>

<h1 class="text-4xl font-bold mb-8 text-center">Blog</h1>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each data.posts as post}
    <div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure class="h-48 overflow-hidden">
        {#if post.cover}
          <img src={post.cover} alt={post.title} class="w-full h-full object-cover" />
        {:else}
          <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        {/if}
      </figure>
      <div class="card-body">
        <h2 class="card-title text-lg md:text-xl font-bold">
          <a href={`/blog/${post.slug}`} class="hover:text-primary transition-colors duration-200">{post.title}</a>
        </h2>
        {#if post.description}
          <p class="text-gray-600">{post.description}</p>
        {/if}
        <div class="mt-4 flex justify-between items-center text-sm text-gray-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {#if post.tags?.length}
            <div class="flex flex-wrap gap-1">
              {#each post.tags as tag}
                <span class="badge badge-outline badge-sm">{tag}</span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
