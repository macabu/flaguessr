<script>
    import { onDestroy } from 'svelte';
    import { score, randomizedCountries } from '../stores.js';
</script>

<div>
    {$score}/{$randomizedCountries.length}
</div>
