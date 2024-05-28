
class FlightBookingPage {
  
  getOneWayRadioButton() {
      return cy.get('.ml-0 > .mr-1')
    }
  
    getRoundTripRadioButton() {
      return cy.get(':nth-child(2) > .mr-1')
    }
  
    getCabinClassLabel() {
      return cy.get(':nth-child(2) > .label')
    }
  
    getCabinClassDropdown() {
      return cy.get(':nth-child(2) > .select > select')
    }
  
    getFromLabel() {
      return cy.get(':nth-child(3) > .label')
    }
  
    getFromDropdown() {
      return cy.get(':nth-child(3) > .select > select')
    }
  
    getToLabel() {
      return cy.get(':nth-child(4) > .label')
    }
  
    getToDropdown() {
      return cy.get(':nth-child(4) > .select > select')
    }
  
    getDepartLabel() {
      return cy.get(':nth-child(5) > .label')
    }
  
    getDepartDatePicker() {
      return cy.get(':nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
    }
  
    getReturnLabel() {
      return cy.get(':nth-child(6) > .label')
    }
  
    getReturnDatePicker() {
      return cy.get(':nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
    }
  
    getNumberOfPassengersLabel() {
      return cy.get(':nth-child(7) > .label')
    }
  
    getNumberOfPassengersDropdown() {
      return cy.get(':nth-child(7) > .select > select')
    }
  
    getPassengerCategoryLabel() {
      return cy.get(':nth-child(8) > .label')
    }
  
    getPassenger1CategoryDropdown() {
      return cy.get(':nth-child(8) > .select > select')
    }
    getPassenger2CategoryDropdown(){
    return cy.get(':nth-child(9) > .select > select')
  }
    getBookButton() {
      return cy.get('.Button_c_button__TmkRS')
    }
  
    getbookinginformation(){
      return cy.get('.ml-3')
    }
  }
  
  export default FlightBookingPage;