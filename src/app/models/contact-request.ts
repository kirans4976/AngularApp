export class ContactRequest {
    personalData: PersonalData
    requestType: any = ''
    text: string = ''
  }
  
  export class PersonalData {
    email: string = 'kirans'
    mobile: string = ''
    country: string = ''
  }