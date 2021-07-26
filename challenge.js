// menangkap pilihan kompueter

function getPilihanKomputer (){

	const comp = Math.random();

	if (comp < 0.34) return 'batu';
	if (comp >=0.34 && comp < 0.67) return 'gunting';
	return 'kertas';

};


function getHasil (comp, player){
	if (comp == player) return 'seri';
	if (player == 'batu') return (comp == 'gunting') ? 'menang' : 'kalah';
	if (player == 'gunting') return (comp == 'kertas') ? 'menang' : 'kalah';
	if (player == 'kertas') return (comp == 'batu') ? 'menang' : 'kalah';
};


const pBatu = document.querySelector('.batu');
const parentBatu = document.querySelector('.pbatu');
pBatu.addEventListener('click', function(){
	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pBatu.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

	
	const komputer = document.querySelector('.k'+pilihanKomputer);
	komputer.classList.toggle('active');

	// console.log('comp :' + pilihanKomputer);
	// console.log('player :' + pilihanPlayer);
	// console.log('hasil :' + hasil);
	// parentBatu.classList.toggle('active');



});



function tampilPilihanKomputer(){
	const komputer = getPilihanKomputer();
	const pilihanKomputer = document.querySelector('.'+komputer);
	pilihanKomputer.classList.toggle('kotak');

}





