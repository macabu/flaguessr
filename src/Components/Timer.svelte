<script>
    import { gameStarted, paused, timerSeconds } from '../stores.js';

    setInterval(() => {
        if ($gameStarted && !$paused && $timerSeconds > 0) {
            timerSeconds.update(n => n - 1);
        }
    }, 1000);

    $: minutes = Math.floor($timerSeconds / 60);
    $: seconds = Math.floor($timerSeconds - minutes * 60);
    $: paddedMinutes = minutes.toString().padStart(2, '0');
    $: paddedSeconds = seconds.toString().padStart(2, '0');

    $: if ($timerSeconds <= 0) {
        timerSeconds.set(10);
        paused.set(false);
        gameStarted.set(false);
    }
</script>

<div>{paddedMinutes}:{paddedSeconds}</div>