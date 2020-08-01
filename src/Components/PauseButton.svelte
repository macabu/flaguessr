<script>
    import { gameStarted, paused } from '../stores.js';

    function handleClick() {
        paused.set(!$paused);
    }
</script>

{#if $gameStarted}
    <button on:click={handleClick}>
        {!$paused ? 'Pause' : 'Resume'}
    </button>
{/if}