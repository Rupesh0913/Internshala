// var cities=document.getElementsById('city').value;
// var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "bEFoNnZETEdldUNSdDVudFJnQVNMVWFvc2MwdGx3dU9ESXZCbUp6Yg==");
// var requestOptions = {
//  method: 'GET',
//  headers: headers,
//  redirect: 'follow'
// };
// fetch(`https://api.countrystatecity.in/v1/countries/IN/cities`, requestOptions)
// .then(response =>response.json())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

// const API_KEY = "bEFoNnZETEdldUNSdDVudFJnQVNMVWFvc2MwdGx3dU9ESXZCbUp6Yg==";
// getCity = async () => {

//     var cities=document.getElementsById('city').value;

//     const api_call = await fetch(`https://api.countrystatecity.in/v1/countries/IN/${cities}?${API_KEY}`);
//     const data = await api_call.json();
//     if (city) {
//       this.setState({
//         city: data.name,

//         error: ""
//       });
//     } else {
//       this.setState({

//         city: undefined,

//         error: "Please enter the values."
//       });
//     }
//   }
//   getCity();

// const plusBtn = document.querySelector('.plusBtn');
// const cityList = document.getElementById('cityList');

// plusBtn.addEventListener('click', () => {
//   let para = document.createElement('p');
//   cityList.appendChild(para);
//   para = document.createTextNode(city);

//   if (city.value != '') {
//     new para(city.value);
//     city.value = '';
//   }
// }); 

let cities = [];

const cityElement = document.getElementById('city');
const cityList = document.getElementById('cityList');
const usernameElement = document.getElementById('name');
const tableBody = document.getElementById('tableBody');

// add username and City name to the table
function addToTable() {
  // const city = cityElement.value.trim();
  const username = usernameElement.value.trim();
  const rowLength = tableBody.rows.length;

  if (cities.length > 0 && username) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    let citiesString = '';

    cities.forEach((city, index) => {
      if (index === 0) citiesString += `${city}`;
      else citiesString += `, ${city}`;
    });

    th.innerHTML = rowLength + 1;
    td1.innerHTML = username;
    td2.innerHTML = citiesString;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);

    tableBody.appendChild(tr);
  }
}

// add city name to the citilist & render UI based on that
function addCityToList() {
  const city = cityElement.value.trim();
  cities.push(city);

  if (cities.length <= 5) updateCities(city);
  else {
    cityList.removeChild(cityList.firstElementChild);
    updateCities(city);
  }
}

// create and append city name element to the cityList
function updateCities(city) {
  console.log(city);

  const cityName = document.createElement('div');
  cityName.classList.add(
    'bg-primary',
    'text-white',
    'd-flex',
    'py-2',
    'px-3',
    'rounded',
    'm-2'
  );
  cityName.id = 'cityName';

  const name = document.createElement('p');
  name.classList.add('m-0');
  name.innerText = city;

  // const icon = document.createElement('span');
  // icon.classList.add('text-white', 'icon');
  // icon.innerHTML = `<svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width="16"
  //   height="16"
  //   fill="currentColor"
  //   class="bi bi-x-circle-fill"
  //   viewBox="0 0 16 16"
  // >
  const iconButton = document.createElement('button');
  iconButton.classList.add('text-white', 'crossButton');
  iconButton.setAttribute('onclick', `deleteCity(name='${city}')`);
  // iconButton.setAttribute('data-city-name', `${city}`);
  iconButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-x-circle-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
    />
  </svg>`;

  cityName.appendChild(name);
  cityName.appendChild(iconButton);

  cityList.appendChild(cityName);
}
function deleteCity(city) {
  if (cities.length > 0) {
    const index = cities.indexOf(city);
    if (index > -1) {
      cities.splice(index, 1);
    }
    console.log(cities);
    if (cities.length <= 5) {
      cityList.innerHTML = '';
      let count = 0;
      while (count < cities.length) {
        updateCities(cities[count]);
        count++;
      }
      return;
    }
    if (cities.length > 5) {
      cityList.innerHTML = '';
      let count = cities.length - 5;
      while (count < cities.length) {
        updateCities(cities[count]);
        count++;
      }
    }
  }
  console.log('delete city', city);
}
