import { LightningElement, api } from 'lwc';


export default class IllustrationError extends LightningElement {
    @api title;
    @api message;
    @api size; // TODO: implementar no componente
}