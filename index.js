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

    const plusBtn=document.querySelector('.plusBtn');
    const city=document.getElementById("city").value;
    const cityList=document.getElementById('cityList');
    const name=document.getElementById('name')
   
    console.log(city);
    
    plusBtn.addEventListener('click',()=>{
      let para=document.createElement('p');
     
      para=document.createTextNode(city.value);
      cityList.appendChild(para);
     
 
    })
    
