<script lang="ts">
  export let extraClass: string = '';
</script>

<blockquote
  class="flex flex-col items-start justify-stretch p-4 pl-6 border-l-4 border-x-antd-gold-7 bg-antd-grey-8 text-gray-300 {extraClass}"
>
  <slot />
</blockquote>
