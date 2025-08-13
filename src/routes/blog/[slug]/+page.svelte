<script lang="ts">
  export let data;
</script>

<article class="prose lg:prose-xl max-w-none">
  <h1>{data.meta.title}</h1>
  <p class="text-gray-500">{data.meta.date}</p>
  <svelte:component this={data.content} />
</article>
