<script>
    import { country } from '../stores.js';

    $: src = $country && $country.flag;
</script>

<div class="flag">
    {#if src}
        <img {src} alt="Flag" class="image">
    {/if}
</div>

<style>
    .image {
		text-indent: -9999px;
		height: 70%;
		width: 100%;
		object-fit: contain;
	}

	.flag {
		grid-column: 2 / 3;
		display: grid;
		place-items: center;
		padding: 1rem;
	}
</style>