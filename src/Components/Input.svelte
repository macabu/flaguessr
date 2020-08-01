<script>
    import { gameStarted, paused, country, randomizedCountries, score, timerSeconds, countriesLoaded } from '../stores.js';
    import { countries } from '../countries.json';

    let guessCountry = '';

    function clearInput() {
        guessCountry = '';
    }

    function incrementScore() {
        score.update(n => n + 1);
    }
    
    function nextCountry() {
        if ($score <= $randomizedCountries.length) {
            country.set(countries[$randomizedCountries[$score]]);
        }
    }

    function checkGuess() {
        if ($country.aliases && $country.aliases.find(alias => alias.toLowerCase() === guessCountry.toLowerCase())) {
            clearInput();
            incrementScore();
            nextCountry();
        }
    }

    $: disabled = !$gameStarted || $paused || $score >= $randomizedCountries.length;
    $: won = $randomizedCountries.length > 0 && $score >= $randomizedCountries.length;

    $: if (won) {
        timerSeconds.set(0);
    }
</script>

<div class="input">
    {#if !won}
        <input bind:value={guessCountry} on:input={checkGuess} disabled={disabled}>
    {:else}
        <p>You won!</p>
    {/if}
</div>

<style>
    .input {
		padding: 2rem;
		grid-column: 1 / 4;
        display: grid;
        place-items: center;
    }
</style>