export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    console.log('coucou calcul')
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    console.log(d)
    return d;
  }
  
  const deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }

// Je veux que des résultats de cheveaux sur ma zone de recherche : mon coordonnées + un rayon en km
// Si résultat a une distance > mon rayon de recherche, je n'affiche pas
// Faut donc que je calcule pour chaque annonce, la distance entre l'annonce et le rider.

// Mon périmétre est 