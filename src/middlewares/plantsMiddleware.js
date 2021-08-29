/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const regionId = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']; // dynamiser regionId si on a le temps
const apiPlants = []; // plants from api loop to iterate regions

const plantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      // loop by region
      for (let calendarId = 0; calendarId < regionId.length; calendarId += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?regions=${regionId[calendarId]}`)
          .then((response) => {
            const apiData = response.data;
            // eslint-disable-next-line array-callback-return
            apiData.map((plant) => {
              plant.calendarId = regionId[calendarId];
              plant.id = JSON.stringify(plant.id);
              plant.title = plant.slug;
              plant.category = 'time';
              plant.isVisible = false;
              apiPlants.push(plant);
            });

            // get data by semi period
            const semiPlants = JSON.parse(JSON.stringify(apiPlants));

            for (let semiIndex = 0; semiIndex < semiPlants.length; semiIndex += 1) {
              if (semiPlants[semiIndex].calendarId === '6') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_auvergne[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_auvergne[0];
              }
              else if (semiPlants[semiIndex].calendarId === '7') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_bourgogne[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_bourgogne[0];
              }
              else if (semiPlants[semiIndex].calendarId === '8') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_bretagne[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_bretagne[0];
              }
              else if (semiPlants[semiIndex].calendarId === '9') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_centre[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_centre[0];
              }
              else if (semiPlants[semiIndex].calendarId === '10') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_corse[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_corse[0];
              }
              if (semiPlants[semiIndex].calendarId === '11') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_est[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_est[0];
              }
              else if (semiPlants[semiIndex].calendarId === '12') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_hauts[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_hauts[0];
              }
              else if (semiPlants[semiIndex].calendarId === '13') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_ile[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_ile[0];
              }
              else if (semiPlants[semiIndex].calendarId === '14') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_normandie[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_normandie[0];
              }
              else if (semiPlants[semiIndex].calendarId === '15') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_aquitaine[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_aquitaine[0];
              }
              else if (semiPlants[semiIndex].calendarId === '16') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_occitanie[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_occitanie[0];
              }
              else if (semiPlants[semiIndex].calendarId === '17') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_loire[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_loire[0];
              }
              else if (semiPlants[semiIndex].calendarId === '18') {
                semiPlants[semiIndex].start = semiPlants[semiIndex].periode_regions.debut_semi_azur[0];
                semiPlants[semiIndex].end = semiPlants[semiIndex].periode_regions.fin_semi_azur[0];
              }
              semiPlants[semiIndex].color = '#474647';
              semiPlants[semiIndex].bgColor = '#f3c465';
              semiPlants[semiIndex].borderColor = '#fad689';
            }

            // get data by plantation period
            const plantationPlants = JSON.parse(JSON.stringify(apiPlants));

            for (let plantationIndex = 0; plantationIndex < plantationPlants.length; plantationIndex += 1) {
              if (plantationPlants[plantationIndex].calendarId === '6') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_auvergne[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_auvergne[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '7') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_bourgogne[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_bourgogne[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '8') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_bretagne[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_bretagne[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '9') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_centre[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_centre[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '10') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_corse[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_corse[0];
              }
              if (plantationPlants[plantationIndex].calendarId === '11') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_est[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_est[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '12') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_hauts[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_hauts[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '13') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_ile[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_ile[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '14') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_normandie[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_normandie[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '15') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_aquitaine[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_aquitaine[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '16') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_occitanie[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_occitanie[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '17') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_loire[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_loire[0];
              }
              else if (plantationPlants[plantationIndex].calendarId === '18') {
                plantationPlants[plantationIndex].start = plantationPlants[plantationIndex].periode_regions.debut_plant_azur[0];
                plantationPlants[plantationIndex].end = plantationPlants[plantationIndex].periode_regions.fin_plant_azur[0];
              }
              plantationPlants[plantationIndex].color = '#474647';
              plantationPlants[plantationIndex].bgColor = '#f46d5f';
              plantationPlants[plantationIndex].borderColor = '#e4bd9f';
            }

            // get data by recolte period
            const recoltePlants = JSON.parse(JSON.stringify(apiPlants));

            for (let recolteIndex = 0; recolteIndex < recoltePlants.length; recolteIndex += 1) {
              if (recoltePlants[recolteIndex].calendarId === '6') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_auvergne[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_auvergne[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '7') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_bourgogne[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_bourgogne[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '8') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_bretagne[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_bretagne[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '9') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_centre[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_centre[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '10') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_corse[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_corse[0];
              }
              if (recoltePlants[recolteIndex].calendarId === '11') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_est[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_est[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '12') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_hauts[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_hauts[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '13') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_ile[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_ile[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '14') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_normandie[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_normandie[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '15') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_aquitaine[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_aquitaine[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '16') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_occitanie[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_occitanie[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '17') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_loire[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_loire[0];
              }
              else if (recoltePlants[recolteIndex].calendarId === '18') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_azur[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_azur[0];
              }
              recoltePlants[recolteIndex].color = '#474647';
              recoltePlants[recolteIndex].bgColor = '#9ed2bf';
              recoltePlants[recolteIndex].borderColor = '#daece5';
            }

            const apiPlantsSchedules = [
              ...semiPlants,
              ...plantationPlants,
              ...recoltePlants,
            ];

            // TODO balancer les données au state une que tout est chargé
            // To put api data in plantsSchedules
            const newAction = savePlants(apiPlantsSchedules);
            store.dispatch(newAction);
            // console.log(newAction);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    }
    default:
  }
  // action to next middleware or reducer
  next(action);
};

export default plantsMiddleware;
