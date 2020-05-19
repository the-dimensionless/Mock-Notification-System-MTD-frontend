export interface IEvent {
    eventType: string;
    eventName: string;
    eventDescription: string;
    eventMailBody: string;
    eventSmsBody: string;
    eventStatus: boolean;
    eventEmails: string[];
    eventPhones: string[];
    eventDateTime: string;
}