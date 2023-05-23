export default class field{
    constructor(label, type='text', width='col-12', placeholder='', options=[]){
        this.label = label
        this.width = width
        this.placeholder = placeholder
        this.type = type
        this.options = options
    }
}