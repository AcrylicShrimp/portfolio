<script lang="ts">
  import '@styles/base.css';
  import dayjs from 'dayjs';
</script>

<main class="max-w-5xl mx-auto px-4 py-8">
  <slot />
</main>
<footer>
  <div class="max-w-5xl mx-auto px-4 py-8 text-center text-gray-300">
    <p class="text-sm">&copy; {dayjs().format('2019-YYYY')} AcrylicShrimp. All rights reserved.</p>
  </div>
</footer>
