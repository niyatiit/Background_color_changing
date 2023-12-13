const btn = document.querySelector('button')
const h1 = document.querySelector('h1')


btn.addEventListener('click', function () {
    let final = ''
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 15)
        final = final + arr[randomNumber];
    }
    console.log(final)
    h1.innerHTML = `#${final}`
    // document.body.style.backgroundColor = `#${final}`;
    document.body.style.backgroundColor = `#${final}`;
    final = ''
});