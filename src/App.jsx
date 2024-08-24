import { useState } from 'react'
import './styles.css'


/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 
      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri
     otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir:
     Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
       
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {
  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
    },
  ]


const [currentDayIndex,setCurrentDayIndex] = useState(0)

const currentWeather = weatherData[currentDayIndex]

const handleClick = () =>{
  setCurrentDayIndex((pre) => (pre +1) % weatherData.length )
}

const getBackgroundClass = ()=>{
  switch (currentWeather.condition) {
case 'Güneşli':
  return 'güneşli-background'
  case 'Yağmurlu':
    return 'yağmurlu-background'
    case 'Karlı':
      return 'karlı-background'
      default:
        return ''
  }
}

const getWeatherIcons = () =>{
  switch (currentWeather.condition) {
    case 'Güneşli':
      return '☀️'
      case 'Yağmurlu':
        return '☁️'
        case 'Karlı':
        return '❄️'
        default:
          return ''
  }
}

  return (
    <div className={`app-container ${getBackgroundClass()}`} >
      <div className='weather-container'>
        <div className='icon'>{getWeatherIcons()}</div>
        <div className='condition-text'>{currentWeather.condition}</div>
        <div className='temp-range-container'>
          <div className='low-temp-container'>
            <p className='low-temp-data'>{currentWeather.lowTemp}°</p>
            <p>En düşük</p>
          </div>
          <div className='high-temp-container'>
            <p className='high-temp-data'>{currentWeather.highTemp}°</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className='day'>{currentWeather.day}</div>
      </div>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}
