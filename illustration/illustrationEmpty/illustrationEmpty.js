import { LightningElement, api } from 'lwc';


export default class IllustrationEmpty extends LightningElement {
    @api title;
    @api message;
    @api size; // TODO: implementar no componente

    get hasTitle() {
        return !!this.title;
    }

    get hasMessage() {
        return !!this.message;
    }
}