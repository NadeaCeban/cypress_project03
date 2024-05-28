/// <reference types="cypress"/>

import FlightBookingPage from '../../../pages/FligthBookingPage'

const flightBookingPage = new FlightBookingPage

describe('Project03 - Book your trip', () => {
  beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/project-3');
  })
/* Navigate to https://techglobal-training.com/frontend/project-3
Validate that the “One way” radio button is displayed enabled and selected by default
Validate that the “Round trip” radio button is displayed enabled and not selected by default
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed and disabled
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled */
  
it('Test Case 01 - Validate the default Book your trip form', () =>{
 
flightBookingPage.getOneWayRadioButton().should('not.be.disabled').and('be.checked')
  
flightBookingPage.getRoundTripRadioButton().should('not.be.disabled').and('not.be.checked')

flightBookingPage.getCabinClassLabel().should('be.visible').and('have.text','Cabin Class')
flightBookingPage.getCabinClassDropdown().should('be.visible')

flightBookingPage.getFromLabel().should('be.visible').and('have.text','From')
flightBookingPage.getFromDropdown().should('be.visible')

flightBookingPage.getToLabel().should('be.visible').and('have.text', 'To')
flightBookingPage.getToDropdown().should('be.visible')

flightBookingPage.getDepartLabel().should('be.visible').and('have.text','Depart')
flightBookingPage. getDepartDatePicker().should('be.visible')

flightBookingPage.getReturnLabel().should('be.visible').and('have.text','Return')
flightBookingPage.getReturnDatePicker().should('be.visible').and('be.disabled')

flightBookingPage.getNumberOfPassengersLabel().should('be.visible').and('have.text','Number of passengers')
flightBookingPage.getNumberOfPassengersDropdown().should('be.visible').and('have.value', '1')
  
flightBookingPage.getPassengerCategoryLabel().should('be.visible').and('have.text','Passenger 1')
flightBookingPage.getPassenger1CategoryDropdown().should('be.visible').and('contain', 'Adult (16-64)')
 
flightBookingPage.getBookButton().should('be.visible').and('not.be.disabled')
  })

it('Test Case 02 - Validate the Book your trip form when Round trip is selected',() => {
    /*Navigate to https://techglobal-training.com/frontend/project-3
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled */
  
flightBookingPage.getRoundTripRadioButton().click().should('be.checked')
   
flightBookingPage.getOneWayRadioButton().should('not.be.checked')

flightBookingPage.getCabinClassLabel().should('be.visible').and('have.text','Cabin Class')
flightBookingPage.getCabinClassDropdown().should('be.visible')

flightBookingPage.getFromLabel().should('be.visible').and('have.text','From')
flightBookingPage.getFromDropdown().should('be.visible')

flightBookingPage.getToLabel().should('be.visible').and('have.text', 'To')
flightBookingPage.getToDropdown().should('be.visible')

flightBookingPage.getDepartLabel().should('be.visible').and('have.text','Depart')
flightBookingPage. getDepartDatePicker().should('not.be.disabled')

flightBookingPage.getReturnLabel().should('be.visible').and('have.text','Return')
flightBookingPage.getReturnDatePicker().should('be.visible').and('not.be.disabled')

flightBookingPage.getNumberOfPassengersLabel().should('be.visible').and('have.text','Number of passengers')
flightBookingPage.getNumberOfPassengersDropdown().should('be.visible').and('have.value', '1')
  
flightBookingPage.getPassengerCategoryLabel().should('be.visible').and('have.text','Passenger 1')
flightBookingPage.getPassenger1CategoryDropdown().should('be.visible').and('contain', 'Adult (16-64)')
 
flightBookingPage.getBookButton().should('be.visible').and('not.be.disabled')
  })


it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {
  /*Navigate to https://techglobal-training.com/frontend/project-3
Select the “One way” radio button
Select “Business” for the “Cabin Class” dropdown
Select “Illinois” for the “From” dropdown
Select “Florida” for the “To” dropdown
Select the next week for the ”Depart”
Select “1” for the “Number of passengers” dropdown
Select “Senior (65+)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
IL to FL
{dynamic date}
Number of passengers: 1
Passenger 1: Senior (65+)
Cabin Class: Business */


flightBookingPage.getOneWayRadioButton().click();
flightBookingPage.getCabinClassDropdown().select('Business').should('be.visible');

flightBookingPage.getFromDropdown().select('Illinois').should('be.visible');
flightBookingPage.getToDropdown().select('Florida').should('be.visible');

const today = new Date();
const futureDate = new Date(today.getTime() + 7 * 24 *60 * 60 * 1000);
const formattedDate =`${('0' + (futureDate.getMonth() + 1)).slice(-2)} / ${('0' + futureDate.getDate()).slice(-2)} / ${futureDate.getFullYear()}`;

flightBookingPage.getDepartDatePicker().clear().type(formattedDate);

flightBookingPage.getNumberOfPassengersDropdown().invoke('val','1');

flightBookingPage.getPassenger1CategoryDropdown().select('Senior (65+)').should('be.visible');

flightBookingPage.getBookButton().click();
flightBookingPage.getbookinginformation().should('be.visible');

})

it('Test Case 04 - Validate the booking for 1 passenger and round trip',() => {

/* Navigate to https://techglobal-training.com/frontend/project-3
Select the “Round trip” radio button
Select “First” for the “Cabin Class” dropdown
Select “California” for the “From” dropdown
Select “Illinois” for the “To” dropdown
Select the next week for the ”Depart”
Select the next month for the “Return”
Select “1” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
CA to IL
{dynamic date}
Number of passengers: 1
Passenger 1: Adult (16-64)
Cabin Class: First


RETURN
IL to CA
{dynamic date}*/
 flightBookingPage.getRoundTripRadioButton().check();

flightBookingPage.getCabinClassDropdown().select('First').should('be.visible');

flightBookingPage.getFromDropdown().select('California').should('be.visible');

flightBookingPage.getToDropdown().select('Illinois').should('be.visible');

const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 *60 * 60 * 1000);
const nextMonth = new Date(today.getTime() + 31 * 24 *60 * 60 * 1000);
const formattedDeparture =`${('0' + (nextWeek.getMonth() + 1)).slice(-2)} / ${('0' + nextWeek.getDate()).slice(-2)} / ${nextWeek.getFullYear()}`;
const formattedReturn = `${('0' + (nextMonth.getMonth() + 1)).slice(-2)} / ${('0' + nextMonth.getDate()).slice(-2)} / ${nextMonth.getFullYear()}`;
flightBookingPage.getDepartDatePicker().clear().type(formattedDeparture,`{enter}`);
flightBookingPage.getReturnDatePicker().clear().type(formattedReturn,`{enter}`)


flightBookingPage.getNumberOfPassengersDropdown().invoke('val','1')

flightBookingPage.getPassenger1CategoryDropdown().invoke('val','Adult (16-64)')

flightBookingPage.getBookButton().click()
flightBookingPage.getbookinginformation().should('be.visible')

 })

 it('Test Case 05 - Validate the booking for 2 passengers and one way',() => {
 /* Navigate to https://techglobal-training.com/frontend/project-3
Select the “One way” radio button
Select “Premium Economy” for the “Cabin Class” dropdown
Select “New York” for the “From” dropdown
Select “Texas” for the “To” dropdown
Select the next day for the ”Depart”
Select “2” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Select “Child (2-11)” for the Passenger 2 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
NY to TX
{dynamic date}
Number of passengers: 2
Passenger 1: Adult (16-64)
Passenger 2: Child (2-11)
Cabin Class: Premium Economy*/


flightBookingPage.getOneWayRadioButton().click();

flightBookingPage.getCabinClassDropdown().select('Premium Economy').should('be.visible');

flightBookingPage.getFromDropdown().select('New York').should('be.visible');
flightBookingPage.getToDropdown().select('Texas').should('be.visible');

const today = new Date();
const futureDate = new Date(today.getTime() + 1 * 24 *60 * 60 * 1000);
const formattedDate =`${('0' + (futureDate.getMonth() + 1)).slice(-2)} / ${('0' + futureDate.getDate()).slice(-2)} / ${futureDate.getFullYear()}`;

flightBookingPage.getDepartDatePicker().clear().type(formattedDate,`{enter}`);



flightBookingPage.getNumberOfPassengersDropdown().select('2', { force: true })
 
 
flightBookingPage.getPassenger1CategoryDropdown().select('Adult (16-64)', { force: true });
flightBookingPage.getPassenger2CategoryDropdown().select('Child (2-11)', { force: true });

 flightBookingPage.getBookButton().click()
 flightBookingPage.getbookinginformation().should('be.visible')

})
})
