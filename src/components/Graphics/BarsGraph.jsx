import ReactApexChart from "react-apexcharts";
import style from "./Graphics.module.css"
import infoIcon from "../../assets/infoIcon.svg"
export default function BarsGraph(){
  const option = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      title: {
        text: 'Barras',
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '16px',
          fontWeight:  '700',
          fontFamily:  'Montserrat',
          color:  '#5D405C'
        }
    },
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          tools: {
            zoom: false,
            zoomin: false,
            zoomout: false,
            reset: false,
            pan: false,
            customIcons: [{
              icon: `<img src=${infoIcon} alt="info icon"/>`,
              index: -1,
              title: 'tooltip of the icon',
              class: 'infoIcon',
            }]
          }
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'
        ],
      }
    },

  }

  return(
    <div id="chart" className={style.container}>
      <ReactApexChart 
        className={style.graphic} 
        options={option.options} 
        series={option.series} 
        type="bar" 
        height={350} 
      />
    </div>
  )
}
