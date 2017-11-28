//Chart.js


//popChart

var popChart = document.getElementById("popCanvas").getContext("2d");

var donutChart = new Chart( popChart , {
  type: 'doughnut',
  data: {
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "rgba(250, 250, 250, 0)"
      ],
      data: [12, 5]
    }]
  }
});

//popChart -- End

//travelChart

var travelChart = document.getElementById("travelCanvas").getContext("2d");

var barChart = new Chart( travelChart, {
  type: 'horizontalBar',
  data: {
    datasets: [{
      backgroundColor: [
        "#2ecc71",
      ],
      data: [5, 11] 
    }]
  }
});


//travelChart -- End

//Chart.js -- End


//City Data 

var currentCity;

var city_data;

var city1 = {
    cityName : "Russia, Moscow", 
    population : "15.4m", dotw : "Monday", today_prediction_score : "15M", 
    today_prediction_img : 'images/russian-flag-round.png',
    today1_prediction_score : "0 - 2",
    today1_prediction_type :"Argentina - Brazil",
    today1_prediction_image: 'images/flags-br-and-ar.png',
    today2_prediction_score : "3 - 2",
    today2_prediction_type : "Spain - Portugal",
    today2_prediction_image: 'images/spain-vs-portugal.png',
    today3_prediction_score : "2 - 1",
    today3_prediction_type : "England - France",
    today3_prediction_image: 'images/england-vs-france.png',
    cityImage : "../images/capetown.jpg",
    cityCSSscore: 'css/city2.css'
};

var city2 = {
    cityName : "Cape Town, South Africa", 
    population : "13m", dotw : "Tuesday", today_prediction_score : "11M", 
    today_prediction_img :  'images/world.png',
    today1_prediction_score : "0 - 4",
    today1_prediction_type :"Argentina - Brazil",
    today1_prediction_image: 'images/flags-br-and-ar.png',
    today2_prediction_score : "2 - 1",
    today2_prediction_type : "Spain - Portugal",
    today2_prediction_image: 'images/spain-vs-portugal.png',
    today3_prediction_score: "2 - 2",
    today3_prediction_type : "England - France",
    today3_prediction_image: 'images/england-vs-france.png',
    cityImage : "../images/japan.jpg",
    cityCSSscore: "css/city1.css"
};



function initiate_cityData() {
    
    
    if (currentCity == null) {
        set_cityData(1);
          
          city_data = new Vue({
    
              el: '.vue-dataContainer',

              data: {
                  
                  cssURL: currentCity.cityCSSscore,
                  
                  city_name: currentCity.cityName,
                  cityImage: currentCity.cityImage,
                  city_today_image: currentCity.today_prediction_img,
                  city_pop: currentCity.population,
                  
                  today_prediction: currentCity.today_prediction_score,
                  today_type: currentCity.today_prediction_type,
                  today_img: currentCity.today_prediction_img,
                  
                  foreimg1: currentCity.today1_prediction_image,
                  foreimg2: currentCity.today2_predictionr_image,
                  foreimg3: currentCity.today3_prediction_image,
                  
                  
                  foreTemp1: currentCity.today1_prediction_score,
                  foreType1: currentCity.today1_prediction_type,
                  foreTemp2: currentCity.today2_prediction_score,
                  foreType2: currentCity.today2_prediction_type,
                  foreTemp3: currentCity.today3_prediction_score,
                  foreType3: currentCity.today3_prediction_type
              }
          });
      }
    
    if (city_data != null) {
        
            city_data.cssURL = currentCity.cityCSSscore;
        
            city_data.cityImage = currentCity.cityImage;
            city_data.city_today_image = currentCity.today_prediction_img;
            city_data.city_name = currentCity.cityName;
            city_data.city_pop = currentCity.population;
            city_data.today_img = currentCity.today_prediction_img;
            city_data.today_score = currentCity.today_prediction_score;
            city_data.today_type = currentCity.today_prediction_type;
        
            city_data.foreimg1 = currentCity.today1_prediction_image;
            city_data.foreimg2 = currentCity.today2_prediction_image;
            city_data.foreimg3 = currentCity.today3_prediction_image;
        
            city_data.foreTemp1 = currentCity.today1_prediction_score;
            city_data.foreTemp2 = currentCity.today2_prediction_score;
            city_data.foreTemp3 = currentCity.today3_prediction_score;
        
            city_data.foreType1 = currentCity.today1_prediction_type;
            city_data.foreType2 = currentCity.today2_prediction_type;
            city_data.foreType3 = currentCity.today3_prediction_type;
    }
}


function set_cityData(caseNum) {
    
    switch(caseNum) {
            
        case 1:
            currentCity = city1;
            initiate_cityData();
            break;
        
        case 2:
            currentCity = city2;
            initiate_cityData();
            break;
            
        case 3:
            currentCity = city3;
            initiate_cityData();
            break;
            
        case 4:
            currentCity = city4;
            initiate_cityData();
            break; 
    }
    
}



// City Data -- End }