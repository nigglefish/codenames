export function createGameArray(){
	let array = [];
	for (let i = 0; i < 5; i++) {
			array[i] = [];
			for (let j = 0; j < 5; j++) {
				array[i][j] = {
					text: 'codenames',
					appearance: 'unknown',
					affiliation: 'bystander',
					variant: 0,
				};
			}
	}
	return array;
}
