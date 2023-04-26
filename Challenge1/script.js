const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

// Selection of the two sections already created

const section1 = document.querySelector(`section[data-athlete="NM372"]`);
const section2 = document.querySelector(`section[data-athlete="SV782"]`);

// Create h2 element for section 1
const h2Section1 = document.createElement('h2');
h2Section1.textContent = `Athlete Information , ID ${data.response.data.NM372.id}`;
section1.appendChild(h2Section1);
h2Section1.style.color="purple"

// Create dl element for section 1
const dlSection1 = document.createElement('dl');
section1.appendChild(dlSection1);

// Create dt and dd elements for section 1
const dtNameSection1 = document.createElement('dt');
const ddNameSection1 = document.createElement('dd');
ddNameSection1.textContent = `Athlete Full name: ${data.response.data.NM372.firstName} ${data.response.data.NM372.surname}`;
const dtRacesSection1 = document.createElement('dt');
dtRacesSection1.textContent = `Number of Races: ${(data.response.data.NM372.races).length}`;
const ddRacesSection1 = document.createElement('dd');


/**
 * reduce() is a built-in array method that allows you to apply a function to
   each element in an array and accumulate a single output value. It takes the
 * values of the array and reduces them into a single value, which can be a
 * number, string, or even an object.
 */
const firstTime1 = data.response.data.NM372.races[0].time.reduce((total, current) => total + current);
const lastTime1 = (data.response.data.NM372.races[1].time.reduce((total, current) => total + current)) ;


/**
 * Changing time to hh : mm for Nwabisa
 */

const minutes1 =(data.response.data.NM372.races[1].time.reduce((total, current) => total + current)) 
const hours =Math.floor (minutes1 / 60);
const remainingMinutes= minutes1 % 60 //to calculate the remaining minutes after dividing by 60

const formattedTime =`${hours.toString().padStart(2,'0')} : ${remainingMinutes.toString().padStart(2,0)}`

const day=(new Date(data.response.data.NM372.races[1].date).getDate())
const month=(MONTHS[new Date(data.response.data.NM372.races[1].date).getMonth()])
const year=(new Date(data.response.data.NM372.races[1].date).getFullYear())


ddRacesSection1.textContent = `Event Date(Latest) :  ${day} / ${month} / ${year} , Total Time (${formattedTime})`;
dlSection1.appendChild(dtNameSection1);
dlSection1.appendChild(ddNameSection1);
dlSection1.appendChild(dtRacesSection1);
dlSection1.appendChild(ddRacesSection1);

// Create h2 element for section 2
const h2Section2 = document.createElement('h2');
h2Section2.textContent = `Athlete Information , ID ${data.response.data.SV782.id}`;
section2.appendChild(h2Section2);
h2Section2.style.color="purple"

// Create dl element for section 2
const dlSection2 = document.createElement('dl');
section2.appendChild(dlSection2);

// Create dt and dd elements for section 2
const dtNameSection2 = document.createElement('dt');
const ddNameSection2 = document.createElement('dd');
ddNameSection2.textContent = ` Athlete Full name: ${data.response.data.SV782.firstName} ${data.response.data.SV782.surname}`;
const dtRacesSection2 = document.createElement('dt');
dtRacesSection2.textContent = `Number of Races: ${(data.response.data.SV782.races).length}`;
const ddRacesSection2 = document.createElement('dd');

// Selection of the first & last time for section 2 
const firstTime2 = data.response.data.SV782.races[0].time.reduce((total, current) => total + current);
const lastTime2 = (data.response.data.SV782.races[3].time.reduce((total, current) => total + current)) ;

/**
 * Changing time to hh : mm for Schalk
 */

const minutes2 =(data.response.data.SV782.races[3].time.reduce((total, current) => total + current)) 
const hours2 =Math.floor (minutes2 / 60);
const remainingMinutes2= minutes2 % 60 // Remainder

const formattedTime2 =`${hours2.toString().padStart(2,'0')} : ${remainingMinutes2.toString().padStart(2,0)}`

const day2=(new Date(data.response.data.SV782.races[3].date).getDate())
const month2=(MONTHS[new Date(data.response.data.SV782.races[3].date).getMonth()])
const year2=(new Date(data.response.data.SV782.races[3].date).getFullYear())



ddRacesSection2.textContent = `Event Date(Latest) :  ${day2} / ${month2} / ${year2} , Total Time (${formattedTime2})`;
dlSection2.appendChild(dtNameSection2);
dlSection2.appendChild(ddNameSection2);
dlSection2.appendChild(dtRacesSection2);
dlSection2.appendChild(ddRacesSection2);







