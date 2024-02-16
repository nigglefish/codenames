<script>
	import {createGameArray} from './gameArray.js'
	
	var gameArray = $state(createGameArray());

	function onclick() {
		gameArray[3][3] = 'hello!';
	}

	gameArray[0][0].appearance = 'redteam';
	gameArray[0][1].appearance = 'blueteam';
	gameArray[1][3].appearance = 'assassin';
	gameArray[4][4].appearance = 'bystander';
</script>

<div class="page">
	<div class="grid">
		{#each gameArray as row, i}
				{#each row as card, j}
					<div class="card {card.appearance}">{i}:{j} => {card.text}</div>
				{/each}
		{/each}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 3fr 3fr 3fr 3fr 3fr;
		grid-template-rows: 2fr 2fr 2fr 2fr 2fr;
		gap: 1vw;
		width: 95vw;
	}
	.card {
		aspect-ratio: 3 / 2;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.card.unknown {
		background-image: url("https://raw.githubusercontent.com/nigglefish/codenames/main/front.png");
	}
	.card.redteam {
		background-image: url("https://raw.githubusercontent.com/nigglefish/codenames/main/red1.png");
	}
	.card.blueteam {
		background-image: url("https://raw.githubusercontent.com/nigglefish/codenames/main/blue1.png");
	}
	.card.assassin {
		background-image: url("https://raw.githubusercontent.com/nigglefish/codenames/main/assassin.png");
	}
	.card.bystander {
		background-image: url("https://raw.githubusercontent.com/nigglefish/codenames/main/bystander1.png");
	}
</style>
