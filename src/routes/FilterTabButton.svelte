<script>
  export let active = false;
</script>

<button
  class={`m-2 md:m-4 w-24 h-8 text-xs md:text-base md:w-28 md:h-8 border transition-colors duration-300 ${active ? 'border-antd-gold text-antd-gold hover:border-antd-gold hover:text-antd-gold underline' : 'border-antd-grey-1 text-antd-grey-1 hover:border-white hover:text-white'}`}
  on:click><slot /></button
>
