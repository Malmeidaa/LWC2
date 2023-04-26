import { LightningElement, api } from 'lwc';

export default class Applead extends LightningElement {
    @api ide;
    @api nome;
    @api empresa;
    @api statuslead;
}