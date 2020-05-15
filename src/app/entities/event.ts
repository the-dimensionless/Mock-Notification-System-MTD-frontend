import { Template } from './template';

export interface Event {
    eventId: number;
    eventTitle: string;
    eventTemplate: Template;
    eventDate: Date;
    eventRecipients: [];
    description: string;
    imageUrl: string,
    eventMode: string[]
}