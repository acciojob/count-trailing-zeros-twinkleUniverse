function trailingZeros(n) {
  //your JS code here. If required.
	let fac=1
	for(let i=1;i<=n;i++){
		fac*=i;
	}
	let num=fac;
	let ans=0;
	while(num!=0){
		let digit=num%10;
		if(digit>0)  break;
		ans++;
		num/=10;
	}
	return ans;

	
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
