import { LightningElement, api } from 'lwc';


export default class IllustrationPreview extends LightningElement {
    @api title;
    @api message;
    @api size; // TODO: implementar no componente
}