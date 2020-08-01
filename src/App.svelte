<script>
	import Input from './Components/Input.svelte';
	import Pause from './Components/PauseButton.svelte';
	import Start from './Components/StartButton.svelte';
	import Score from './Components/Score.svelte';
	import Timer from './Components/Timer.svelte';
	import Flag from './Components/Flag.svelte';
</script>

<div class="centralize">
	<div class="content">
		<header>
			<Score/>
			<Timer/>
		</header>
		<Flag/>
		<Input/>
		<footer>
			<Start/>
			<Pause/>
		</footer>
	</div>
</div>

<style>
	.centralize {
		display: grid;
		place-items: center;
	}

	.content {
		display: grid;
		height: auto;
		width: auto;
		grid-template: auto 1fr auto auto / auto 1fr auto auto;
		font-family: system-ui, sans-serif;
	}

	header {
		padding: 2rem;
		grid-column: 1 / 4;
		display: grid;
		grid-template-columns: auto auto;
		place-items: center;
		grid-gap: 2rem;
	}

	footer {
		padding: 2rem;
		grid-column: 1 / 4;
		display: grid;
		grid-template-columns: auto auto;
		place-items: center;
	}
</style>