let searchForm = document.querySelector("#searchForm");

console.log(searchForm);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#searchBar").value
  console.log(input);

  fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${input}&day=today`,
    {
      method: "POST",
      headers: {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "ba596e591cmshc0b775f64090b81p1af45cjsne9b863d75cb2",
      },
    }
  )
    .then((response) => response.json())
    .then((data => {
        document.querySelector('ul').innerHTML = ''
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let li3 = document.createElement('li')
        let li4 = document.createElement('li')
        li1.innerText = `${data.date_range}`
        li2.innerText = `Today: ${data.current_date}`
        li3.innerText =  `Your lucky number: ${data.lucky_number}`
        li4.innerText = `"${data.description}"`
        document.querySelector('ul').append(li1,li2,li3,li4)
        li4.classList.add('more')
      console.log(data);
    }))



    .catch((err) => {
      console.error(err);
    });
});
