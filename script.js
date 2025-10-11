function computeTicketsTotalPKR() {
  // Treat ticket inputs as PKR (user-entered)
  const adultPKR = parseFloat(document.getElementById('adultPriceSAR').value) || 0;
  const childPKR = parseFloat(document.getElementById('childPriceSAR').value) || 0;
  const infantPKR = parseFloat(document.getElementById('infantPriceSAR').value) || 0;

  const adults = parseInt(document.getElementById('noAdults').value) || 0;
  const children = parseInt(document.getElementById('noChildren').value) || 0;
  const infants = parseInt(document.getElementById('noInfants').value) || 0;

  // Now compute totals directly in PKR (no ROE conversion)
  const adultTotalPKR = adultPKR * adults;
  const childTotalPKR = childPKR * children;
  const infantTotalPKR = infantPKR * infants;

  const totalPKR = adultTotalPKR + childTotalPKR + infantTotalPKR;

  return {
    totalPKR,
    breakdown: {
      adultPKR: adultTotalPKR,
      childPKR: childTotalPKR,
      infantPKR: infantTotalPKR
    }
  };
}

  // Step 2: Hotels
  let makkahHotel = parseInt(document.getElementById("makkahHotel").value) || 0;
  let madinahHotel = parseInt(document.getElementById("madinahHotel").value) || 0;

  // Step 3: Visa
  let visaCost = parseInt(document.getElementById("visaCost").value) || 0;

  // Ticket cost
  let ticketTotal = ticketPrice * (adults + children + infants);

  // Hotel cost (assuming 5 nights each city)
  let makkahTotal = makkahHotel * 5;
  let madinahTotal = madinahHotel * 5;

  // Visa cost
  let visaTotal = visaCost * (adults + children); // infants usually free

  // Grand total
  let total = ticketTotal + makkahTotal + madinahTotal + visaTotal;
  let perPerson = (adults + children + infants) > 0 ? (total / (adults + children + infants)) : 0;

  // Show result
  document.getElementById("result").innerHTML = `
    <strong>Total Cost:</strong> PKR ${total.toLocaleString()} <br>
    <strong>Per Person:</strong> PKR ${perPerson.toLocaleString()}
  `;
}
