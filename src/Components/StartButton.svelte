<script>
    import { knuthShuffle } from 'knuth-shuffle';

    import { gameStarted, timerSeconds, paused, randomizedCountries, countriesLoaded, country, score } from '../stores.js';
    import { countries } from '../countries.json';

    function toggleGameState() {
        if ($gameStarted) {
            timerSeconds.set(300);
            paused.set(false);
            gameStarted.set(false);
        } else {
            const shuffled = knuthShuffle(Object.keys(countries));
            randomizedCountries.set(shuffled);
            country.set(countries[$randomizedCountries[0]]);

            score.set(0);
            gameStarted.set(true);
        }
    }
</script>

<button on:click={toggleGameState}>{$gameStarted ? 'Restart' : 'Start'}</button>